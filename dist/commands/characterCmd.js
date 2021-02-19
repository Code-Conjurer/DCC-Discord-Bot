"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterCommand = void 0;
const getFromTable_1 = __importDefault(require("../utilities/getFromTable"));
const BoxDrawing_1 = __importDefault(require("../utilities/BoxDrawing"));
const characterSheet_1 = __importDefault(require("../interfaces/characterSheet"));
const Check_1 = __importDefault(require("../utilities/Check"));
const luckyRollTable = "lucky_roll";
const occpuationsTable = "occupations";
const equipmentTable = "equipment";
let lastRoll;
function characterCommand(message, args) {
    const rollLog = generateRollLog();
    const firstArg = args.shift();
    if (firstArg === "log") {
        message.channel.send(BoxDrawing_1.default.Boxify(BoxDrawing_1.default.FormatObject(rollLog)));
    }
    else if (firstArg === "plog") {
        if (lastRoll === undefined)
            throw new Error("no previous log found");
        message.channel.send(BoxDrawing_1.default.Boxify(BoxDrawing_1.default.FormatObject(lastRoll)));
        return;
    }
    lastRoll = rollLog;
    const characterString = BoxDrawing_1.default.FormatObject(generateCharacter(rollLog, true));
    message.channel.send(BoxDrawing_1.default.Boxify(characterString));
}
exports.characterCommand = characterCommand;
function roll(diceSize) {
    return Math.floor(Math.random() * diceSize) + 1;
}
function generateRollLog() {
    const occuparionRange = getFromTable_1.default.tableRange(occpuationsTable);
    const equipmentRange = getFromTable_1.default.tableRange(equipmentTable);
    const luckyRollRange = getFromTable_1.default.tableRange(luckyRollTable);
    return {
        "hit points": [roll(4), roll(4)],
        "attributes": {
            "strg": [roll(6), roll(6), roll(6),],
            "agil": [roll(6), roll(6), roll(6),],
            "stam": [roll(6), roll(6), roll(6),],
            "pers": [roll(6), roll(6), roll(6),],
            "intl": [roll(6), roll(6), roll(6),],
            "luck": [roll(6), roll(6), roll(6),]
        },
        "occupation": roll(occuparionRange),
        "equipment": roll(equipmentRange),
        "lucky roll": roll(luckyRollRange)
    };
}
function generateCharacter(rollLog, isHpRolledTwice) {
    const character = {
        "hit points": "",
        "occupation": "",
        "attributes": {
            "strg": "",
            "agil": "",
            "stam": "",
            "pers": "",
            "intl": "",
            "luck": ""
        },
        "rolls": {
            "reflex": "",
            "fortitude": "",
            "willpower": "",
            "aromor class": "",
        },
        "equipment": [],
        "features": []
    };
    const attributes = {
        "strg": new characterSheet_1.default(rollLog.attributes.strg.reduce((a, b) => a + b, 0)),
        "agil": new characterSheet_1.default(rollLog.attributes.agil.reduce((a, b) => a + b, 0)),
        "stam": new characterSheet_1.default(rollLog.attributes.stam.reduce((a, b) => a + b, 0)),
        "pers": new characterSheet_1.default(rollLog.attributes.pers.reduce((a, b) => a + b, 0)),
        "intl": new characterSheet_1.default(rollLog.attributes.intl.reduce((a, b) => a + b, 0)),
        "luck": new characterSheet_1.default(rollLog.attributes.luck.reduce((a, b) => a + b, 0))
    };
    const luckyRoll = getFromTable_1.default.tableData(luckyRollTable, rollLog["lucky roll"]);
    const equipment = getFromTable_1.default.tableData(equipmentTable, rollLog.equipment);
    const occupation = getFromTable_1.default.tableData(occpuationsTable, rollLog.occupation);
    if (!(Check_1.default.instanceOfSimpleObject(luckyRoll)))
        throw new Error(`lucky roll is not of the correct interface type`);
    if (!(Check_1.default.instanceOfSimpleObject(equipment)))
        throw new Error(`equipment is not of the correct interface type`);
    if (!(Check_1.default.instanceOfOccupation(occupation)))
        throw new Error(`occupation is not of the correct interface type`);
    character.occupation = occupation["name"];
    character.attributes.strg = attributes.strg.toString();
    character.attributes.agil = attributes.agil.toString();
    character.attributes.stam = attributes.stam.toString();
    character.attributes.pers = attributes.pers.toString();
    character.attributes.intl = attributes.intl.toString();
    character.attributes.luck = attributes.luck.toString();
    character.equipment = occupation["trade_goods"];
    let trainedWeapon = {
        "name": occupation["trained_weapon"]["name"],
        "quantity": ""
    };
    if (occupation["trained_weapon"]["type"] !== "") {
        trainedWeapon.name += ` (as ${occupation["trained_weapon"]["type"]})`;
    }
    character.equipment.push(trainedWeapon);
    character.equipment.push(equipment);
    character.features.push(luckyRoll);
    character.rolls.reflex = attributes.agil.mod + "";
    character.rolls.fortitude = attributes.stam.mod + "";
    character.rolls.willpower = attributes.pers.mod + "";
    character.rolls["aromor class"] = (10 + attributes.agil.mod) + "";
    let hp = Math.max(...rollLog["hit points"]) + attributes.stam.mod;
    if (hp < 1)
        hp = 1;
    character["hit points"] = hp + "";
    const luckMod = luckyRoll["modifier"];
    if (luckMod.includes("saving throws")) {
        if (luckMod.includes("reflex")) {
            character.rolls.reflex += ` ${attributes.luck.modToString()}`;
        }
        else if (luckMod.includes("fortitude")) {
            character.rolls.fortitude += ` ${attributes.luck.modToString()}`;
        }
        else if (luckMod.includes("willpower")) {
            character.rolls.willpower += ` ${attributes.luck.modToString()}`;
        }
        else {
            character.rolls.reflex += ` ${attributes.luck.modToString()}*`;
            character.rolls.fortitude += ` ${attributes.luck.modToString()}*`;
            character.rolls.willpower += ` ${attributes.luck.modToString()}*`;
        }
    }
    else if (luckMod.includes("armor class")) {
        character.rolls["aromor class"] += ` ${attributes.luck.modToString()}`;
    }
    else if (luckMod.includes("hit points")) {
        character["hit points"] += ` ${attributes.luck.modToString()}`;
    }
    return character;
}
function generateCharacterExample() {
    return {
        "hit points": "5",
        "occupation": "farmer",
        "attributes": {
            "strg": new characterSheet_1.default(10).toString(),
            "agil": new characterSheet_1.default(17).toString(),
            "stam": new characterSheet_1.default(5).toString(),
            "pers": new characterSheet_1.default(14).toString(),
            "intl": new characterSheet_1.default(10).toString(),
            "luck": new characterSheet_1.default(10).toString()
        },
        "rolls": {
            "reflex": "5",
            "fortitude": "4",
            "willpower": "3",
            "aromor class": "10",
        },
        "equipment": [
            {
                "name": "string",
                "quantity": "5",
                "value": "500"
            },
            {
                "name": "rope",
                "quantity": "50'",
                "value": ""
            }
        ],
        "features": []
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyQ21kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29tbWFuZHMvY2hhcmFjdGVyQ21kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDZFQUFxRDtBQUVyRCx5RUFBaUQ7QUFDakQsa0ZBQTBHO0FBQzFHLCtEQUF1QztBQUV2QyxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUM7QUFDcEMsTUFBTSxnQkFBZ0IsR0FBRyxhQUFhLENBQUM7QUFDdkMsTUFBTSxjQUFjLEdBQUcsV0FBVyxDQUFDO0FBRW5DLElBQUksUUFBa0IsQ0FBQTtBQUV0QixTQUFnQixnQkFBZ0IsQ0FBRSxPQUF3QixFQUFFLElBQWM7SUFFdEUsTUFBTSxPQUFPLEdBQUcsZUFBZSxFQUFFLENBQUM7SUFFbEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTlCLElBQUcsUUFBUSxLQUFLLEtBQUssRUFBQztRQUNsQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxvQkFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDN0U7U0FBSyxJQUFHLFFBQVEsS0FBSyxNQUFNLEVBQUM7UUFDekIsSUFBRyxRQUFRLEtBQUssU0FBUztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNwRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxvQkFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsT0FBTztLQUNWO0lBRUQsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUVuQixNQUFNLGVBQWUsR0FBRyxvQkFBVSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRixPQUFPLENBQUMs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
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
function characterCommand(message, args) {
    const rollLog = generateRollLog();
    if (args.shift() === "log") {
        message.channel.send(BoxDrawing_1.default.Boxify(BoxDrawing_1.default.FormatObject(rollLog)));
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyQ21kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29tbWFuZHMvY2hhcmFjdGVyQ21kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDZFQUFxRDtBQUVyRCx5RUFBaUQ7QUFDakQsa0ZBQTBHO0FBQzFHLCtEQUF1QztBQUV2QyxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUM7QUFDcEMsTUFBTSxnQkFBZ0IsR0FBRyxhQUFhLENBQUM7QUFDdkMsTUFBTSxjQUFjLEdBQUcsV0FBVyxDQUFDO0FBRW5DLFNBQWdCLGdCQUFnQixDQUFFLE9BQXdCLEVBQUUsSUFBYztJQUV0RSxNQUFNLE9BQU8sR0FBRyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxLQUFLLEVBQUM7UUFDdEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQVUsQ0FBQyxNQUFNLENBQUMsb0JBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdFO0lBRUQsTUFBTSxlQUFlLEdBQUcsb0JBQVUsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEYsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQVUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBVEQsNENBU0M7QUFrQkQsU0FBUyxJQUFJLENBQUMsUUFBZ0I7SUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUVELFNBQVMsZUFBZTtJQUNwQixNQUFNLGVBQWUsR0FBRyxzQkFBWSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xFLE1BQU0sY0FBYyxHQUFH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
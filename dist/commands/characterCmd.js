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
    const characterString = BoxDrawing_1.default.FormatObject(generateCharacter(args.shift() === "true"));
    message.channel.send(BoxDrawing_1.default.Boxify(characterString));
}
exports.characterCommand = characterCommand;
function roll(diceSize) {
    return Math.floor(Math.random() * diceSize) + 1;
}
function generateCharacter(isHpRolledTwice = false) {
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
        "strg": new characterSheet_1.default(roll(6) + roll(6) + roll(6)),
        "agil": new characterSheet_1.default(roll(6) + roll(6) + roll(6)),
        "stam": new characterSheet_1.default(roll(6) + roll(6) + roll(6)),
        "pers": new characterSheet_1.default(roll(6) + roll(6) + roll(6)),
        "intl": new characterSheet_1.default(roll(6) + roll(6) + roll(6)),
        "luck": new characterSheet_1.default(roll(6) + roll(6) + roll(6))
    };
    const luckyRoll = getFromTable_1.default.tableData(luckyRollTable);
    const equipment = getFromTable_1.default.tableData(equipmentTable);
    const occupation = getFromTable_1.default.tableData(occpuationsTable);
    if (!(Check_1.default.instanceOfSimpleObject(luckyRoll)))
        throw new Error(`lucky roll is not of the correct interface type`);
    if (!(Check_1.default.instanceOfSimpleObject(equipment)))
        throw new Error(`equipment is not of the correct interface type`);
    if (!(Check_1.default.instanceOfSimpleObject(occupation)))
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
        trainedWeapon.name += ` as ${occupation["trained_weapon"]["type"]}`;
    }
    character.equipment.push(trainedWeapon);
    character.equipment.push(equipment);
    character.features.push(luckyRoll);
    character.rolls.reflex = attributes.agil.mod + "";
    character.rolls.fortitude = attributes.stam.mod + "";
    character.rolls.willpower = attributes.pers.mod + "";
    character.rolls["aromor class"] = (10 + attributes.agil.mod) + "";
    if (isHpRolledTwice) {
        const hp1 = roll(4);
        const hp2 = roll(4);
        character["hit points"] = hp1 > hp2 ? (hp1 + attributes.stam.mod) + "" : (hp2 + attributes.stam.mod) + "";
    }
    else {
        character["hit points"] = (roll(6) + attributes.stam.mod) + "";
    }
    const luckMod = luckyRoll["modifier"];
    if (luckMod.includes("saving throws")) {
        if (luckMod.includes("reflex")) {
            character.rolls.reflex += ` ${attributes.luck.mod}`;
        }
        else if (luckMod.includes("fortitude")) {
            character.rolls.fortitude += ` ${attributes.luck.mod}`;
        }
        else if (luckMod.includes("willpower")) {
            character.rolls.willpower += ` ${attributes.luck.mod}`;
        }
        else {
            character.rolls.reflex += ` ${attributes.luck.mod}*`;
            character.rolls.fortitude += ` ${attributes.luck.mod}*`;
            character.rolls.willpower += ` ${attributes.luck.mod}*`;
        }
    }
    else if (luckMod.includes("armor class")) {
        character.rolls["aromor class"] += ` ${attributes.luck.mod}`;
    }
    else if (luckMod.includes("hit points")) {
        character["hit points"] += ` ${attributes.luck.mod}`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyQ21kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29tbWFuZHMvY2hhcmFjdGVyQ21kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDZFQUFxRDtBQUVyRCx5RUFBaUQ7QUFDakQsa0ZBQTBHO0FBQzFHLCtEQUF1QztBQUV2QyxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUM7QUFDcEMsTUFBTSxnQkFBZ0IsR0FBRyxhQUFhLENBQUM7QUFDdkMsTUFBTSxjQUFjLEdBQUcsV0FBVyxDQUFDO0FBRW5DLFNBQWdCLGdCQUFnQixDQUFFLE9BQXdCLEVBQUUsSUFBYztJQUV0RSxNQUFNLGVBQWUsR0FBRyxvQkFBVSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM1RixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBQzdELENBQUM7QUFKRCw0Q0FJQztBQUVELFNBQVMsSUFBSSxDQUFDLFFBQWdCO0lBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLGVBQWUsR0FBRyxLQUFLO0lBRTlDLE1BQU0sU0FBUyxHQUFlO1FBQzFCLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFlBQVksRUFBRztZQUNYLE1BQU0sRUFBRSxFQUFFO1lBQ1YsTUFBTSxFQUFFLEVBQUU7WUFDVixNQUFNLEVBQUUsRUFBRTtZQUNWLE1BQU0sRUFBRSxFQUFFO1lBQ1YsTUFBTSxFQUFFLEVBQUU7WUFDVixNQUFNLEVBQUUsRUFBRTtTQUNiO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsUUFBUSxFQUFF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
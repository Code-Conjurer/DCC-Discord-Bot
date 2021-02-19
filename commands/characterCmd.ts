import getFromTable from "../utilities/getFromTable";
import Discord = require('discord.js');
import BoxDrawing from "../utilities/BoxDrawing";
import Attribute, { ICharacter, IEquipment, ILuckyRoll, IOccupation } from "../interfaces/characterSheet";
import Check from "../utilities/Check";

const luckyRollTable = "lucky_roll";
const occpuationsTable = "occupations";
const equipmentTable = "equipment";

let lastRoll: IRollLog

export function characterCommand (message: Discord.Message, args: string[]){

    const rollLog = generateRollLog();

    const firstArg = args.shift();

    if(firstArg === "log"){
        message.channel.send(BoxDrawing.Boxify(BoxDrawing.FormatObject(rollLog)));
    }else if(firstArg === "plog"){
        if(lastRoll === undefined) throw new Error("no previous log found");
        message.channel.send(BoxDrawing.Boxify(BoxDrawing.FormatObject(lastRoll)));
        return;
    }

    lastRoll = rollLog;

    const characterString = BoxDrawing.FormatObject(generateCharacter(rollLog, true));
    message.channel.send(BoxDrawing.Boxify(characterString));
}

interface IRollLog {
    "hit points": number[],
    "attributes" : {
        "strg": number[],
        "agil": number[],
        "stam": number[],
        "pers": number[],
        "intl": number[],
        "luck": number[]
    },
    "occupation": number,
    "equipment": number,
    "lucky roll": number
}


function roll(diceSize: number){
    return Math.floor(Math.random() * diceSize) + 1;
}

function generateRollLog(): IRollLog{
    const occuparionRange = getFromTable.tableRange(occpuationsTable);
    const equipmentRange = getFromTable.tableRange(equipmentTable);
    const luckyRollRange = getFromTable.tableRange(luckyRollTable);

    return {
        "hit points": [roll(4), roll(4)],
        "attributes" : {
            "strg": [roll(6),roll(6),roll(6),],
            "agil": [roll(6),roll(6),roll(6),],
            "stam": [roll(6),roll(6),roll(6),],
            "pers": [roll(6),roll(6),roll(6),],
            "intl": [roll(6),roll(6),roll(6),],
            "luck": [roll(6),roll(6),roll(6),]
        },
        "occupation": roll(occuparionRange),
        "equipment": roll(equipmentRange),
        "lucky roll": roll(luckyRollRange)
    }
}

function generateCharacter(rollLog: IRollLog, isHpRolledTwice: boolean): ICharacter{
    
    const character: ICharacter = {
        "hit points": "",
        "occupation": "",
        "attributes" : {
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
        "equipment" : [],
        "features" : []
    };

    const attributes = {
        "strg": new Attribute(rollLog.attributes.strg.reduce((a, b) => a + b, 0)),
        "agil": new Attribute(rollLog.attributes.agil.reduce((a, b) => a + b, 0)),
        "stam": new Attribute(rollLog.attributes.stam.reduce((a, b) => a + b, 0)),
        "pers": new Attribute(rollLog.attributes.pers.reduce((a, b) => a + b, 0)),
        "intl": new Attribute(rollLog.attributes.intl.reduce((a, b) => a + b, 0)),
        "luck": new Attribute(rollLog.attributes.luck.reduce((a, b) => a + b, 0))
    };

    const luckyRoll = getFromTable.tableData(luckyRollTable, rollLog["lucky roll"]);
    const equipment = getFromTable.tableData(equipmentTable, rollLog.equipment);
    const occupation = getFromTable.tableData(occpuationsTable, rollLog.occupation);

    // now we need to do calculations
    if(!(Check.instanceOfSimpleObject<ILuckyRoll>(luckyRoll))) throw new Error(`lucky roll is not of the correct interface type`);
    if(!(Check.instanceOfSimpleObject<IEquipment>(equipment))) throw new Error(`equipment is not of the correct interface type`);
    if(!(Check.instanceOfOccupation(occupation))) throw new Error(`occupation is not of the correct interface type`);
    
    character.occupation = occupation["name"];

    // setup stats
    character.attributes.strg = attributes.strg.toString();
    character.attributes.agil = attributes.agil.toString();
    character.attributes.stam = attributes.stam.toString();
    character.attributes.pers = attributes.pers.toString();
    character.attributes.intl = attributes.intl.toString();
    character.attributes.luck = attributes.luck.toString();

    // setup equipment
    character.equipment = occupation["trade_goods"];
    let trainedWeapon: IEquipment = {
        "name": occupation["trained_weapon"]["name"],
        "quantity": ""
    }
    if(occupation["trained_weapon"]["type"] !== ""){
        trainedWeapon.name += ` (as ${occupation["trained_weapon"]["type"]})`;
    }
    character.equipment.push(trainedWeapon);
    character.equipment.push(equipment);

    character.features.push({"lucky roll": luckyRoll});

    // we now do all the calculations
    character.rolls.reflex = attributes.agil.mod + "";
    character.rolls.fortitude = attributes.stam.mod + "";
    character.rolls.willpower = attributes.pers.mod + "";
    character.rolls["aromor class"] = (10 + attributes.agil.mod) + "";

    let hp = Math.max(...rollLog["hit points"]) + attributes.stam.mod;
    if(hp < 1) hp = 1;
    character["hit points"] = hp + "";


    // lucky roll nodifier
    const luckMod = luckyRoll["modifier"];
    
    //lucky roll modifies a saving throw
    if(luckMod.includes("saving throws")){
        if(luckMod.includes("reflex")){
            character.rolls.reflex += ` ${attributes.luck.modToString()}`;

        }else if(luckMod.includes("fortitude")){
            character.rolls.fortitude += ` ${attributes.luck.modToString()}`;

        }else if(luckMod.includes("willpower")){
            character.rolls.willpower += ` ${attributes.luck.modToString()}`;

        }else{
            character.rolls.reflex += ` ${attributes.luck.modToString()}*`;
            character.rolls.fortitude += ` ${attributes.luck.modToString()}*`;
            character.rolls.willpower += ` ${attributes.luck.modToString()}*`;
        }

    } else if (luckMod.includes("armor class")){
        character.rolls["aromor class"] += ` ${attributes.luck.modToString()}`;

    } else if (luckMod.includes("hit points")){
        character["hit points"] += ` ${attributes.luck.modToString()}`;
    }

    return character;
}

function generateCharacterExample(): ICharacter{
    return {
        "hit points": "5",
        "occupation": "farmer",
        "attributes" : {
            "strg": new Attribute(10).toString(),
            "agil": new Attribute(17).toString(),
            "stam": new Attribute(5).toString(),
            "pers": new Attribute(14).toString(),
            "intl": new Attribute(10).toString(),
            "luck": new Attribute(10).toString()
        },
        "rolls": {
            "reflex": "5",
            "fortitude": "4",
            "willpower": "3",
            "aromor class": "10",
        },
        "equipment" : [
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
        "features" : []
    };
}

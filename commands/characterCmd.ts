import getFromTable from "../utilities/getFromTable";
import Discord = require('discord.js');
import BoxDrawing from "../utilities/BoxDrawing";
import Attribute, { ICharacter, IEquipment, ILuckyRoll, IOccupation } from "../interfaces/characterSheet";
import Check from "../utilities/Check";

const luckyRollTable = "lucky_roll";
const occpuationsTable = "occupations";
const equipmentTable = "equipment";

export function characterCommand (message: Discord.Message, args: string[]){

    const characterString = BoxDrawing.FormatObject(generateCharacter(args.shift() === "false"));
    message.channel.send(BoxDrawing.Boxify(characterString));
}

function roll(diceSize: number){
    return Math.floor(Math.random() * diceSize) + 1;
}

function generateCharacter(isHpRolledTwice = true): ICharacter{
    
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
        "strg": new Attribute(roll(6) + roll(6) + roll(6)),
        "agil": new Attribute(roll(6) + roll(6) + roll(6)),
        "stam": new Attribute(roll(6) + roll(6) + roll(6)),
        "pers": new Attribute(roll(6) + roll(6) + roll(6)),
        "intl": new Attribute(roll(6) + roll(6) + roll(6)),
        "luck": new Attribute(roll(6) + roll(6) + roll(6))
    };

    const luckyRoll = getFromTable.tableData(luckyRollTable);
    const equipment = getFromTable.tableData(equipmentTable);
    const occupation = getFromTable.tableData(occpuationsTable);

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
        trainedWeapon.name += ` as ${occupation["trained_weapon"]["type"]}`;
    }
    character.equipment.push(trainedWeapon);
    character.equipment.push(equipment);

    character.features.push(luckyRoll);

    // we now do all the calculations
    character.rolls.reflex = attributes.agil.mod + "";
    character.rolls.fortitude = attributes.stam.mod + "";
    character.rolls.willpower = attributes.pers.mod + "";
    character.rolls["aromor class"] = (10 + attributes.agil.mod) + "";

    let hp: number = -50;
    if(isHpRolledTwice) {
        const hp1 = roll(4);
        const hp2 = roll(4);
        const hp = hp1 > hp2? (hp1 + attributes.stam.mod): (hp2 + attributes.stam.mod);
    }else{
        hp = (roll(6) + attributes.stam.mod);
    }
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

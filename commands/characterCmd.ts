import getFromTable from "../utilities/getFromTable";
import Discord = require('discord.js');
import BoxDrawing from "../utilities/BoxDrawing";
import Attribute, { ICharacter, IEquipment } from "../interfaces/characterSheet";

export function characterCommand (message: Discord.Message, args: string[]){

    const characterString = BoxDrawing.FormatObject(generateCharacterExample());
    message.channel.send(BoxDrawing.Boxify(characterString));
}

function generateCharacterExample(): ICharacter{
    return {
        "hit points": 5,
        "attributes" : {
            "strg": new Attribute(10).toString(),
            "agil": new Attribute(17).toString(),
            "stam": new Attribute(5).toString(),
            "pers": new Attribute(14).toString(),
            "intl": new Attribute(10).toString(),
            "luck": new Attribute(10).toString()
        },
        "rolls": {
            "reflex": 5,
            "fortitude": 4,
            "willpower": 3,
            "aromor class": 10,
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

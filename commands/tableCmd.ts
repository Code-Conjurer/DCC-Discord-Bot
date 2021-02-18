import getFromTable from "../utilities/getFromTable";
import Discord = require('discord.js');
import BoxDrawing from "../utilities/BoxDrawing";

export function rollOnTable (message: Discord.Message, args: string[]){
    const tableName = args.join('_');

    const range = getFromTable.tableRange(tableName);
    const roll = Math.floor(Math.random() * range) + 1;

    let resultData = `roll: ${roll}\n`
    const tableResult: {[key: string]: any} = getFromTable.tableData(tableName, roll);

    resultData += BoxDrawing.FormatObject(tableResult);

    message.channel.send(BoxDrawing.Boxify(resultData));
}

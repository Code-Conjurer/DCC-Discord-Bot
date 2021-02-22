import getFromTable from "../utilities/getFromTable";
import Discord = require('discord.js');
import BoxDrawing from "../utilities/BoxDrawing";
import rollFromArgs from "./rollCmd";

export function rollOnTable(message: Discord.Message, args: string[]) {
    const tableName = args[0];
    let roll: number;

    if (args.length > 1) {
        if (args[1] === "r" || args[1].includes('d')) {
            roll = rollFromArgs(args.slice(1)).sum;
        } else {
            const newArgs = ['d0+', args[1], ...args.slice(2)]; // obtuse but powerful
        
            roll = rollFromArgs(newArgs).sum;
        }

    } else {
        const range = getFromTable.tableRange(tableName);
        roll = Math.floor(Math.random() * range) + 1;
    }

    let resultData = `roll: ${roll}\n`
    const tableResult: { [key: string]: any } = getFromTable.tableData(tableName, roll);

    resultData += BoxDrawing.FormatObject(tableResult);

    message.channel.send(BoxDrawing.Boxify(resultData));
}

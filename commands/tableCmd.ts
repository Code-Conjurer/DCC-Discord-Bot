import getFromTable from "../utilities/getFromTable";
import Discord = require('discord.js');
import Boxify from "../utilities/BoxDrawing";

export function rollOnTable (message: Discord.Message, args: string[]){
    const tableName = args.join('_');

    const range = getFromTable.tableRange(tableName);
    const roll = Math.floor(Math.random() * range) + 1;

    let resultData = `roll: ${roll}\n`
    const tableResult: {[key: string]: any} = getFromTable.tableData(tableName, roll);

    resultData += formatResultData(tableResult);

    message.channel.send(Boxify(resultData));
}

function formatResultData(obj: {[key: string]: any}, result: string = '', level = 0): string{

    Object.keys(obj).forEach(key => {

        let temp = '';

        if(typeof obj[key] === 'object' && Object.keys(obj[key]).length !== 0){
            temp += '\n' + formatResultData(obj[key], '', level + 1) + '\n';

        }else if(obj[key] !== '' && obj[key] !== undefined && obj[key] !== null){
            temp += obj[key] + '\n';
        }else{
            return;
        }

        result += level > 0? '   '.repeat(level-1) + '┣━━' + ' ': '';
        result += key + ': ';
        result += temp;
    });

    return result.trim();
}

export default rollOnTable
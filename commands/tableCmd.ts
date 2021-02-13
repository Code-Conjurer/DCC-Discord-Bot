import rollOnTable from "../utilities/rollOnTable"
import Discord = require('discord.js');
import Boxify from "../utilities/BoxDrawing";

export function roll (message: Discord.Message, args: string[]){
    const argsStr = args.join('_');

    const rollResult: {[key: string]: any} = rollOnTable(argsStr);

    let resultData: string = formatResultData(rollResult);

    message.channel.send(Boxify(resultData));
}

function formatResultData(obj: {[key: string]: any}, result: string = '', level = 0): string{

    Object.keys(obj).forEach(key => {

        let temp = level > 0? '━'.repeat(level): '';
        temp +=  + key + ': ';

        if(typeof obj[key] === 'object'){
            temp += '\n' + formatResultData(obj, temp, level + 1);
        }else{
            temp += obj[key] + '\n';
        }

        result += temp;
    });

    return result;
}

export default roll
import getFromTable from "../utilities/getFromTable";
import Discord = require('discord.js');
import Boxify from "../utilities/BoxDrawing";

const levelSpace = '┃  ';
const levelMarker = '┣━━';
const levelDivider = '┣┅┅┅┅┅┅';

export function rollOnTable (message: Discord.Message, args: string[]){
    const tableName = args.join('_');

    const range = getFromTable.tableRange(tableName);
    const roll = Math.floor(Math.random() * range) + 1;

    let resultData = `roll: ${roll}\n`
    const tableResult: {[key: string]: any} = getFromTable.tableData(tableName, roll);

    resultData += formatResultData(tableResult);

    message.channel.send(Boxify(resultData));
}

function formatResultData(obj: {[key: string]: any}, level = 0): string{

    let result: string = '';

    Object.keys(obj).forEach(key => {

        let temp = '';
        const value = obj[key];

        if(Array.isArray(value)){

            value.forEach((ele, index, arr) => {
                if(typeof ele === 'object'){
                    temp += '\n' + formatResultData(ele, level + 1);
                } else {
                    temp += level > 0? '\n' + levelSpace.repeat(level) + levelMarker + ' ': '\n';
                    temp += ele;
                }
                if(index !== arr.length-1){
                    temp += level > 0? '\n' + levelSpace.repeat(level): '\n';
                    temp += levelDivider;
                }
            });

        }else if(typeof value === 'object' && Object.keys(value).length !== 0){
            temp += '\n' + formatResultData(value, level + 1) + '\n';

        }else if(value !== '' && value !== undefined && value !== null){
            temp += value + '\n';
        }else{
            return;
        }

        result += level > 0? levelSpace.repeat(level-1) + levelMarker + ' ': '';
        result += key + ': ';
        result += temp;
    });

    return result.replace(/\n$/, '');//remove last newline char
}
import Discord = require('discord.js');
import BoxDrawing from "../utilities/BoxDrawing";

const rollRegex = new RegExp(
    "([1-9][0-9]*)?" +          // number
    "d" +                       // 'd'
    "([1-9][0-9]*|0)" +         // number 1+ or zero (d0 will just do addition/multiplication)
    "\\s*" +                    // any string  
    "(([\\+|\\-|\\*|/])\\s*([0-9]+))?", 'g');  //(('+' or '-' number) multiple times 

// args can be the form
// args = d2+3
// args = d20
// args = 1d20 + 3
export function roll (message: Discord.Message, args: string[]){

    let result = rollFromArgs(args);

    result.breakdown.unshift(`${message.author.username} rolls: ${result.sum}`);
    
    message.channel.send(BoxDrawing.Boxify(result.breakdown));
}

//TODO: Move function
function rollFromArgs(args: string[]): {sum: number, breakdown: string[]}{
    const argsStr = args.join(' ');

    let result: {sum: number, breakdown: string[]} = {
        sum: 0, 
        breakdown: []
    };

    var matches;
    while((matches = rollRegex.exec(argsStr)) != null){
        const numDice = matches[1] == undefined ? 1: parseInt(matches[1]);
        const diceSize = parseInt(matches[2]);
        const oporator = matches[4] == undefined ? '+' : matches[4];
        const modifier = matches[5] == undefined ? 0 : parseInt(matches[5]);

        let localSum = 0;
        let breakdown = 'd' + diceSize + ': [ ';
        for(let i = 0; i < numDice; i++){
            const value = diceSize > 0? Math.floor(Math.random() * diceSize) + 1: 0;

            breakdown += i == numDice-1 ? value + ' ]' : value + ', ';
            localSum += value; 
        }

        switch(oporator){
            case '+':
                localSum += modifier;
                break;
            case '-':
                localSum -= modifier;
                break;
            case '*':
                localSum *= modifier;
                break;
            case '/':
                localSum = Math.floor(localSum / modifier);
                break;
        }

        result.sum += localSum;
        breakdown += modifier == 0? '' : ` ${oporator}  ${modifier}`;
        result.breakdown.push(breakdown);
    }

    return result;
}

export default rollFromArgs;
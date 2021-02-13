import Discord = require('discord.js');
import Boxify from "../utilities/BoxDrawing";

const rollRegex = new RegExp(
    "([1-9][0-9]*)?" +          // number
    "d" +                       // 'd'
    "([1-9][0-9]*)" +           // number
    "\\s*" +                    // any string  
    "(([\\+|\\-|\\*|/])\\s*([0-9]+))?", 'g');  //(('+' or '-' number) multiple times 

/*class roll implements ICommand{
    public aliases = ['r'];
    args? = true;
	description = 'Information about the arguments provided.';
	execute = (message: Discord.Message, args: string[]): void => {
        
        rollDie(message, args);
	}
    
}*/

// args can be the form
// args = d2+3
// args = d20
// args = 1d20 + 3
export function roll (message: Discord.Message, args: string[]){

    const argsStr = args.join(' ');

    let diceBreakdown = [];
    let sum = 0;

    var matches;
    while((matches = rollRegex.exec(argsStr)) != null){
        const numDice = matches[1] == undefined ? 1: parseInt(matches[1]);
        const diceSize = parseInt(matches[2]);
        const oporator = matches[4] == undefined ? '+' : matches[4];
        const modifier = matches[5] == undefined ? 0 : parseInt(matches[5]);

        let localSum = 0;
        let breakdown = 'd' + diceSize + ': [ ';
        for(let i = 0; i < numDice; i++){
            const value = Math.floor(Math.random() * diceSize) + 1;

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

        sum += localSum;
        breakdown += modifier == 0? '' : ` ${oporator}  ${modifier}`;
        diceBreakdown.push(breakdown);
    }

    diceBreakdown.unshift(`${message.author.username} rolls: ${sum}`);
    
    message.channel.send(Boxify(diceBreakdown));
}

//module.exports.roll = roll;
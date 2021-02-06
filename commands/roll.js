import Boxify from "./utilities/BoxDrawing.js"


const rollRegex = new RegExp(
    "([1-9][0-9]*)?" +          // number
    "d" +                       // 'd'
    "([1-9][0-9]*)" +           // number
    "\\s*" +                    // any string  
    "(([\\+|\\-|\\*|/])\\s*([0-9]+))?", 'g');  //(('+' or '-' number) multiple times 

// args can be the form
// args = d2+3
// args = d20
// args = 1d20 + 3
function roll(message, args, die){

    const argsStr = args.join(' ');

    let diceBreakdown = [];
    let sum = 0;

    var matches;
    while((matches = rollRegex.exec(argsStr)) != null){
        const numDice = matches[1] == undefined ? 1: parseInt(matches[1]);
        const diceSize = die == undefined ? parseInt(matches[2]): die;
        const oporator = matches[4] == undefined ? '+' : matches[4];
        const modifier = matches[5] == undefined ? '0' : parseInt(matches[4]);

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
                Math.floor(localSum /= modifier);
                break;
        }

        sum += localSum;
        breakdown += modifier == 0? '' : ` ${oporator}  ${modifier}`;
        diceBreakdown.push(breakdown);
    }

    diceBreakdown.unshift(`${message.author.name} rolls: ${sum}`);
    
    message.channel.send(Boxify(diceBreakdown));
}

module.exports = {
	name: 'roll',
    aliases: ['r'],
	description: 'Information about the arguments provided.',
	execute(message, args) {
        roll(message, args, undefined);
	},
};
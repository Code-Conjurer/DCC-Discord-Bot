const rollRegex = new RegExp(
    "([1-9][0-9]*)?" +          // number
    "d" +                       // 'd'
    "([1-9][0-9]*)" +           // number
    "\\s*" +                    // any string  
    "([\\+|\\-])\\s*([0-9]+)?", 'g');  //(('+' or '-' number) multiple times 

// args can be the form
// args = d2+3
// args = d20
// args = 1d20 + 3
function roll(args){

    const argsStr = args.join(' ');
    var matches
    while((matches = rollRegex.exec(argsStr)) != null){
        const foo = matches;
    }
    /*
    const rollRegexArr = args.join().match(rollRegex);
    const groups = rollRegexArr.groups;

    if(groups != null){
        rollRegexArr.groups
    }*/
}

module.exports = {
	name: 'roll',
    aliases: ['r'],
	description: 'Information about the arguments provided.',
	execute(message, args) {
        roll(args);
	},
};
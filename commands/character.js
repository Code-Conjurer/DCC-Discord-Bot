const characterCmd = require("./characterCmd");

module.exports = {
	name: 'character',
    aliases: ['c'],
	description: 'Information about the arguments provided.',
	
    /**
     * @param {any} message
     * @param {any} args
     */
	execute(message, args) {
        characterCmd.characterCommand(message, args);
	}
};
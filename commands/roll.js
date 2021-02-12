const rollHelper = require("./rollHelper");

module.exports = {
	name: 'roll',
    aliases: ['r'],
	description: 'Information about the arguments provided.',
	
    /**
     * @param {any} message
     * @param {any} args
     */
	execute(message, args) {
        rollHelper.roll(message, args);
	}
};
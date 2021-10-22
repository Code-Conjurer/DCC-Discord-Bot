const recordHelper = require("./recordCmd");

module.exports = {
	name: 'record',
    aliases: ['rec'],
	description: 'Information about the arguments provided.',
	
    /**
     * @param {any} message
     * @param {any} args
     */
	execute(message, args) {
        recordHelper.record(message, args);
	}
};
const recordHelper = require("./recordCmd");

module.exports = {
	name: 'passDay',
    aliases: ['pass'],
	description: 'Information about the arguments provided.',
	
    /**
     * @param {any} message
     * @param {any} args
     */
	execute(message, args) {
        recordHelper.progressDay(message, args);
	}
};
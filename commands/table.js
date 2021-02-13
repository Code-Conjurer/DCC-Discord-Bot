const tableCmd = require("./tableCmd");

module.exports = {
	name: 'table',
    aliases: ['t'],
	description: 'Information about the arguments provided.',
	
    /**
     * @param {any} message
     * @param {any} args
     */
	execute(message, args) {
        tableCmd.rollOnTable(message, args);
	}
};
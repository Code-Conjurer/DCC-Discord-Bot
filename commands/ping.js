module.exports = {
	name: 'ping',
	description: 'Ping!',
	/**
	 * @param {{ channel: { send: (arg0: string) => void; }; }} message
	 * @param {any} args
	 */
	execute(message, args) {
		message.channel.send('Pong.');
	},
};
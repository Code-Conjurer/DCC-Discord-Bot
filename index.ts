import fs = require('fs');
import Discord = require('discord.js');
// import config from './config.json';
//import ICommand from './interfaces/ICommand';

const config = {
	"prefix": "~",
	"token": "Nzc3Mjk0ODE2MDA5NzgxMjc4.X7BWNQ.SmntsJj_Qi7adAELyOmpj4_szp4"
};
const client = new Discord.Client();
const clientCommands: Discord.Collection<string, any> = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	clientCommands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);

    const commandName: string = (args.shift() || "").toLowerCase();

    const command = clientCommands.get(commandName) || clientCommands.find(cmd => cmd.aliases !== undefined && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.args && !args.length) {
        return message.channel.send(`I require arguments, ${message.author}!`);
    }
    
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('your command has failed');
    }
});

client.login(config.token);
import { readdirSync } from 'fs';
import { Client, Collection } from 'discord.js';
import { prefix, token } from './config.json';
const client = new Client();
client.commands = new Collection();
const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

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

client.login(token);
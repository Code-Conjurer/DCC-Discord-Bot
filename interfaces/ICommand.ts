
import Discord = require('discord.js');

interface ICommand{
    aliases? : string[],
	description: string,
    args? : boolean | string[],
	execute: (message: Discord.Message, args: string[]) => void
}

export default ICommand;
import Discord = require('discord.js');
import * as fs from 'fs';

const recordPath = './res/record.json';

export function record (message: Discord.Message, args: string[]){

    const prop = args.shift();
    const value = args.shift();

    if (prop) {
        setRecord(prop, value);
        printRecord(message);
    } else {
        message.channel.send('it broke :- [');
    }
}

export function progressDay (message: Discord.Message, args: string[]){

    const foo = args.shift();

    const day = Number(getRecord('day')) + 1;
    const month = getRecord('month');
    let rations = Number(getRecord('rations'));

    
    if (!foo) {
        let totalRations = 0;
        rations = Number(getRecord('Melf')) - 1;
        totalRations += rations;
        setRecord('Melf', rations);

        rations = Number(getRecord('Hoog')) - 1;
        totalRations += rations;
        setRecord('Hoog', rations);

        rations = Number(getRecord('Pilsby')) - 1;
        totalRations += rations;
        setRecord('Pilsby', rations);
        
        rations = Number(getRecord('Fred')) - 1;
        totalRations += rations;
        setRecord('Fred', rations);
        
        rations = Number(getRecord('Bruce')) - 1;
        totalRations += rations;
        setRecord('Bruce', rations);
        
        rations = Number(getRecord('Clarence')) - 1;
        totalRations += rations;
        setRecord('Clerence', rations);
        
        rations = Number(getRecord('Gorbin')) - 1;
        totalRations += rations;
        setRecord('Gorbin', rations);
        
        rations = Number(getRecord('Lachlan')) - 1;
        totalRations += rations;
        setRecord('Lachlan', rations);

        setRecord('rations', totalRations);

    }
    setRecord('day', day);
    
    let postfix = 'th';

    if(day === 1) {
        postfix = 'st';
    }else if (day === 2){
        postfix = 'nd';
    }else if (day === 3){
        postfix = 'rd';
    }

    message.channel.send(`₁₁ ₀ ₁₁ ₀ ₁₀ ₁ ₁₁₁ | ₁₁ ₁₁₁ ₀₁₀ ₀₀\nThe morning comes...\n\nIt is the **${day}${postfix}** of **${month}**\nRations: **${rations}**`);
}

const setRecord = (prop: string, value: any) => {
    const buff = fs.readFileSync(recordPath, 'utf8');
    let record = JSON.parse(buff);
    record[prop] = value;
    console.log(record);
    fs.writeFileSync(recordPath, JSON.stringify(record, null, 2), {encoding:'utf8',flag:'w'})
}

const getRecord = (path: string) => {
    const buff = fs.readFileSync(recordPath, 'utf8');
    const record = JSON.parse(buff);
    return record[path];
}

const printRecord = (message: Discord.Message, addition?: string) => {
    const buff = fs.readFileSync(recordPath, 'utf8');
    let record = JSON.stringify(JSON.parse(buff), null, 2);
    record = record.replace(/"/g, '');
    record = record.replace(/{/g, '');
    record = record.replace(/}/g, '');
    record = record.replace(/,/g, '');

    if (addition) {
        message.channel.send('₁₁ ₀ ₁₁ ₀ ₁₀ ₁ ₁₁₁ | ₁₁ ₁₁₁ ₀₁₀ ₀₀\n' + addition + '\n' + record);
    }else {
        message.channel.send('₁₁ ₀ ₁₁ ₀ ₁₀ ₁ ₁₁₁ | ₁₁ ₁₁₁ ₀₁₀ ₀₀' + record);
    }
}
import fs = require('fs');

const tableFiles: string[] = fs.readdirSync('./../../tables').filter(file => file.endsWith('.json')); // we need to step out of dist and access the main tables
let tables: {[name:string]: {roll: number, table: {[key: string]: object}}} = {};

tableFiles.forEach(tableFile => {
    if(tableFile.includes(' ')) throw new Error("table name contains space");
    
    const table = require(`./${tableFile}`);
    const name = tableFile.replace('.json','');
    tables[name] = table;
});


function rollOnTable(tableName: string): {[key: string]: any}{
    if(tables[tableName] == undefined) return {};

    const table = tables[tableName];

    const roll = Math.floor(Math.random() * table.roll) + 1;

    return table.table[roll];
}

export default rollOnTable;
import fs = require('fs');

const tableFiles: string[] = fs.readdirSync('./tables').filter(file => file.endsWith('.json')); // we need to step out of dist and access the main tables
let tables: { [name: string]: { roll: number, table: { [key: string]: object } } } = {};

tableFiles.forEach(tableFile => {
    if (tableFile.includes(' ')) throw new Error("table name contains space");

    const table = require(`../../tables/${tableFile}`);
    const name = tableFile.replace('.json', '');
    tables[name] = table;
});

function tableData(tableName: string, roll: number): { [key: string]: any } {
    if (tables[tableName] == undefined) return {};



    const table = tables[tableName];

    while (roll > 0 && table.table[String(roll)] == undefined) {
        if (roll > 0)
            roll--;
        else
            roll++;
    }
    if (roll == 0) throw new Error(`table: ${tableName} has no lower bound`);

    return table.table[String(roll)];
}

function tableRange(tableName: string): number {
    if (tables[tableName] == undefined) return -1;

    return tables[tableName].roll;
}

export default { tableData, tableRange };
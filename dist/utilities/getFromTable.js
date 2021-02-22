"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const tableFiles = fs.readdirSync('./tables').filter(file => file.endsWith('.json'));
let tables = {};
tableFiles.forEach(tableFile => {
    if (tableFile.includes(' '))
        throw new Error("table name contains space");
    const table = require(`../../tables/${tableFile}`);
    const name = tableFile.replace('.json', '');
    tables[name] = table;
});
function tableData(tableName, roll) {
    if (tables[tableName] == undefined)
        return {};
    const table = tables[tableName];
    while (table.table[String(roll)] == undefined) {
        if (roll > 0)
            roll--;
        else
            roll++;
    }
    if (roll == 0)
        throw new Error(`table: ${tableName} has no lower bound`);
    return table.table[String(roll)];
}
function tableRange(tableName) {
    if (tables[tableName] == undefined)
        return -1;
    return tables[tableName].roll;
}
exports.default = { tableData, tableRange };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RnJvbVRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXRpbGl0aWVzL2dldEZyb21UYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlCQUEwQjtBQUUxQixNQUFNLFVBQVUsR0FBYSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUMvRixJQUFJLE1BQU0sR0FBMkUsRUFBRSxDQUFDO0FBRXhGLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7SUFDM0IsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUUxRSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsZ0JBQWdCLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDbkQsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUN6QixDQUFDLENBQUMsQ0FBQztBQUVILFNBQVMsU0FBUyxDQUFDLFNBQWlCLEVBQUUsSUFBWTtJQUM5QyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFJOUMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRWhDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxTQUFTLEVBQUU7UUFDM0MsSUFBSSxJQUFJLEdBQUcsQ0FBQztZQUNSLElBQUksRUFBRSxDQUFDOztZQUVQLElBQUksRUFBRSxDQUFDO0tBQ2Q7SUFDRCxJQUFJLElBQUksSUFBSSxDQUFDO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLFNBQVMscUJBQXFCLENBQUMsQ0FBQztJQUV6RSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVELFNBQVMsVUFBVSxDQUFDLFNBQWlCO0lBQ2pDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVM7UUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRTlDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNsQyxDQUFDO0FBRUQsa0JBQWUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMifQ==
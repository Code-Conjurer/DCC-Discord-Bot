"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const tableFiles = fs.readdirSync('./tables').filter(file => file.endsWith('.json'));
let tables = {};
tableFiles.forEach(tableFile => {
    if (tableFile.includes(' '))
        throw new Error("table name contains space");
    const table = require(`./${tableFile}`);
    const name = tableFile.replace('.json', '');
    tables[name] = table;
});
function rollOnTable(tableName) {
    if (tables[tableName] == undefined)
        return {};
    const table = tables[tableName];
    const roll = Math.floor(Math.random() * table.roll) + 1;
    return table.table[roll];
}
exports.default = rollOnTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sbE9uVGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90YWJsZXMvcm9sbE9uVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBMEI7QUFFMUIsTUFBTSxVQUFVLEdBQWEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDL0YsSUFBSSxNQUFNLEdBQW9FLEVBQUUsQ0FBQztBQUVqRixVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO0lBQzNCLElBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFFekUsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN4QyxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsQ0FBQztJQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLENBQUMsQ0FBQyxDQUFDO0FBR0gsU0FBUyxXQUFXLENBQUMsU0FBaUI7SUFDbEMsSUFBRyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUztRQUFFLE9BQU8sRUFBRSxDQUFDO0lBRTdDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVoQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXhELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRUQsa0JBQWUsV0FBVyxDQUFDIn0=
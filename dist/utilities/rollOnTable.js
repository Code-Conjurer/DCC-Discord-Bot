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
function rollOnTable(tableName) {
    if (tables[tableName] == undefined)
        return {};
    const table = tables[tableName];
    const roll = Math.floor(Math.random() * table.roll) + 1;
    return table.table[roll];
}
exports.default = rollOnTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sbE9uVGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91dGlsaXRpZXMvcm9sbE9uVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBMEI7QUFFMUIsTUFBTSxVQUFVLEdBQWEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDL0YsSUFBSSxNQUFNLEdBQW9FLEVBQUUsQ0FBQztBQUVqRixVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO0lBQzNCLElBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFFekUsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDekIsQ0FBQyxDQUFDLENBQUM7QUFHSCxTQUFTLFdBQVcsQ0FBQyxTQUFpQjtJQUNsQyxJQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFFN0MsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRWhDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFeEQsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFFRCxrQkFBZSxXQUFXLENBQUMifQ==
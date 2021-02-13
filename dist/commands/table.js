"use strict";
const tableCmd = require("./tableCmd");
module.exports = {
    name: 'table',
    aliases: ['t'],
    description: 'Information about the arguments provided.',
    execute(message, args) {
        tableCmd.rollOnTable(message, args);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb21tYW5kcy90YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXZDLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDaEIsSUFBSSxFQUFFLE9BQU87SUFDVixPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDakIsV0FBVyxFQUFFLDJDQUEyQztJQU14RCxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUk7UUFDZCxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0QsQ0FBQyJ9
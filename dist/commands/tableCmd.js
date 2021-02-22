"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollOnTable = void 0;
const getFromTable_1 = __importDefault(require("../utilities/getFromTable"));
const BoxDrawing_1 = __importDefault(require("../utilities/BoxDrawing"));
function rollOnTable(message, args) {
    const tableName = args[0];
    let roll;
    if (args.length > 1) {
        roll = parseInt(args[1]);
    }
    else {
        const range = getFromTable_1.default.tableRange(tableName);
        roll = Math.floor(Math.random() * range) + 1;
    }
    let resultData = `roll: ${roll}\n`;
    const tableResult = getFromTable_1.default.tableData(tableName, roll);
    resultData += BoxDrawing_1.default.FormatObject(tableResult);
    message.channel.send(BoxDrawing_1.default.Boxify(resultData));
}
exports.rollOnTable = rollOnTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVDbWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb21tYW5kcy90YWJsZUNtZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw2RUFBcUQ7QUFFckQseUVBQWlEO0FBRWpELFNBQWdCLFdBQVcsQ0FBRSxPQUF3QixFQUFFLElBQWM7SUFDakUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksSUFBWSxDQUFDO0lBQ2pCLElBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7UUFDZixJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVCO1NBQUk7UUFDRCxNQUFNLEtBQUssR0FBRyxzQkFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2hEO0lBRUQsSUFBSSxVQUFVLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQTtJQUNsQyxNQUFNLFdBQVcsR0FBeUIsc0JBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWxGLFVBQVUsSUFBSSxvQkFBVSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUVuRCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFoQkQsa0NBZ0JDIn0=
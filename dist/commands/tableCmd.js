"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollOnTable = void 0;
const getFromTable_1 = __importDefault(require("../utilities/getFromTable"));
const BoxDrawing_1 = __importDefault(require("../utilities/BoxDrawing"));
function rollOnTable(message, args) {
    const tableName = args.join('_');
    const range = getFromTable_1.default.tableRange(tableName);
    const roll = Math.floor(Math.random() * range) + 1;
    let resultData = `roll: ${roll}\n`;
    const tableResult = getFromTable_1.default.tableData(tableName, roll);
    resultData += formatResultData(tableResult);
    message.channel.send(BoxDrawing_1.default(resultData));
}
exports.rollOnTable = rollOnTable;
function formatResultData(obj, result = '', level = 0) {
    Object.keys(obj).forEach(key => {
        let temp = '';
        if (typeof obj[key] === 'object' && Object.keys(obj[key]).length !== 0) {
            temp += '\n' + formatResultData(obj[key], '', level + 1) + '\n';
        }
        else if (obj[key] !== '' && obj[key] !== undefined && obj[key] !== null) {
            temp += obj[key] + '\n';
        }
        else {
            return;
        }
        result += level > 0 ? '   '.repeat(level - 1) + '┣━━' + ' ' : '';
        result += key + ': ';
        result += temp;
    });
    return result.trim();
}
exports.default = rollOnTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVDbWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb21tYW5kcy90YWJsZUNtZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw2RUFBcUQ7QUFFckQseUVBQTZDO0FBRTdDLFNBQWdCLFdBQVcsQ0FBRSxPQUF3QixFQUFFLElBQWM7SUFDakUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVqQyxNQUFNLEtBQUssR0FBRyxzQkFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbkQsSUFBSSxVQUFVLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQTtJQUNsQyxNQUFNLFdBQVcsR0FBeUIsc0JBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWxGLFVBQVUsSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUU1QyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQVpELGtDQVlDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxHQUF5QixFQUFFLFNBQWlCLEVBQUUsRUFBRSxLQUFLLEdBQUcsQ0FBQztJQUUvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUUzQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFFZCxJQUFHLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUM7WUFDbEUsSUFBSSxJQUFJLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FFbkU7YUFBSyxJQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFDO1lBQ3BFLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzNCO2FBQUk7WUFDRCxPQUFPO1NBQ1Y7UUFFRCxNQUFNLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzdELE1BQU0sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE1BQU0sSUFBSSxJQUFJLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6QixDQUFDO0FBRUQsa0JBQWUsV0FBVyxDQUFBIn0=
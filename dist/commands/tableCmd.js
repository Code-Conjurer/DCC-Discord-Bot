"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollOnTable = void 0;
const getFromTable_1 = __importDefault(require("../utilities/getFromTable"));
const BoxDrawing_1 = __importDefault(require("../utilities/BoxDrawing"));
const levelSpace = '┃  ';
const levelMarker = '┣━━';
const levelDivider = '┣┅┅┅┅┅┅';
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
function formatResultData(obj, level = 0) {
    let result = '';
    Object.keys(obj).forEach(key => {
        let temp = '';
        const value = obj[key];
        if (Array.isArray(value)) {
            value.forEach(ele => {
                if (typeof value === 'object') {
                    temp += '\n' + formatResultData(ele, level + 1);
                }
                else {
                    temp += '\n' + ele;
                }
                temp += level > 0 ? '\n' + levelSpace.repeat(level - 1) : '\n';
                temp += levelDivider;
            });
        }
        else if (typeof value === 'object' && Object.keys(value).length !== 0) {
            temp += '\n' + formatResultData(value, level + 1) + '\n';
        }
        else if (value !== '' && value !== undefined && value !== null) {
            temp += value + '\n';
        }
        else {
            return;
        }
        result += level > 0 ? levelSpace.repeat(level - 1) + levelMarker + ' ' : '';
        result += key + ': ';
        result += temp;
    });
    return result.replace(/\n$/, '');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVDbWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb21tYW5kcy90YWJsZUNtZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw2RUFBcUQ7QUFFckQseUVBQTZDO0FBRTdDLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQztBQUN6QixNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDMUIsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDO0FBRS9CLFNBQWdCLFdBQVcsQ0FBRSxPQUF3QixFQUFFLElBQWM7SUFDakUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVqQyxNQUFNLEtBQUssR0FBRyxzQkFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbkQsSUFBSSxVQUFVLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQTtJQUNsQyxNQUFNLFdBQVcsR0FBeUIsc0JBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWxGLFVBQVUsSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUU1QyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQVpELGtDQVlDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxHQUF5QixFQUFFLEtBQUssR0FBRyxDQUFDO0lBRTFELElBQUksTUFBTSxHQUFXLEVBQUUsQ0FBQztJQUV4QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUUzQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdkIsSUFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFDO1lBQ3BCLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hCLElBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFDO29CQUN6QixJQUFJLElBQUksSUFBSSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ25EO3FCQUFNO29CQUNILElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO2lCQUN0QjtnQkFDRCxJQUFJLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzNELElBQUksSUFBSSxZQUFZLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7U0FFTjthQUFLLElBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBQztZQUNsRSxJQUFJLElBQUksSUFBSSxHQUFHLGdCQUFnQixDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBRTVEO2FBQUssSUFBRyxLQUFLLEtBQUssRUFBRSxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBQztZQUMzRCxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztTQUN4QjthQUFJO1lBQ0QsT0FBTztTQUNWO1FBRUQsTUFBTSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN4RSxNQUFNLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQztRQUNyQixNQUFNLElBQUksSUFBSSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNyQyxDQUFDIn0=
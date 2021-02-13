"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roll = void 0;
const rollOnTable_1 = __importDefault(require("../utilities/rollOnTable"));
const BoxDrawing_1 = __importDefault(require("../utilities/BoxDrawing"));
function roll(message, args) {
    const argsStr = args.join('_');
    const rollResult = rollOnTable_1.default(argsStr);
    let resultData = formatResultData(rollResult);
    message.channel.send(BoxDrawing_1.default(resultData));
}
exports.roll = roll;
function formatResultData(obj, result = '', level = 0) {
    Object.keys(obj).forEach(key => {
        let temp = level > 0 ? '━'.repeat(level) : '';
        temp += +key + ': ';
        if (typeof obj[key] === 'object') {
            temp += '\n' + formatResultData(obj, temp, level + 1);
        }
        else {
            temp += obj[key] + '\n';
        }
        result += temp;
    });
    return result;
}
exports.default = roll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVDbWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb21tYW5kcy90YWJsZUNtZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwyRUFBa0Q7QUFFbEQseUVBQTZDO0FBRTdDLFNBQWdCLElBQUksQ0FBRSxPQUF3QixFQUFFLElBQWM7SUFDMUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUUvQixNQUFNLFVBQVUsR0FBeUIscUJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUU5RCxJQUFJLFVBQVUsR0FBVyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUV0RCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQVJELG9CQVFDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxHQUF5QixFQUFFLFNBQWlCLEVBQUUsRUFBRSxLQUFLLEdBQUcsQ0FBQztJQUUvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUUzQixJQUFJLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUMsSUFBSSxJQUFLLENBQUUsR0FBRyxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFHLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsRUFBQztZQUM1QixJQUFJLElBQUksSUFBSSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO2FBQUk7WUFDRCxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUVELE1BQU0sSUFBSSxJQUFJLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsa0JBQWUsSUFBSSxDQUFBIn0=
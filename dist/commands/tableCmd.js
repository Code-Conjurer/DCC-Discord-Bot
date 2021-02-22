"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollOnTable = void 0;
const getFromTable_1 = __importDefault(require("../utilities/getFromTable"));
const BoxDrawing_1 = __importDefault(require("../utilities/BoxDrawing"));
const rollCmd_1 = __importDefault(require("./rollCmd"));
function rollOnTable(message, args) {
    const tableName = args[0];
    let roll;
    if (args.length > 1) {
        if (args[1] === "r" || args[1].includes('d')) {
            roll = rollCmd_1.default(args.slice(1)).sum;
        }
        else {
            const newArgs = ['d0+', args[1], ...args.slice(2)];
            roll = rollCmd_1.default(newArgs).sum;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVDbWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb21tYW5kcy90YWJsZUNtZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw2RUFBcUQ7QUFFckQseUVBQWlEO0FBQ2pELHdEQUFxQztBQUVyQyxTQUFnQixXQUFXLENBQUMsT0FBd0IsRUFBRSxJQUFjO0lBQ2hFLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLElBQVksQ0FBQztJQUVqQixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ2pCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzFDLElBQUksR0FBRyxpQkFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7U0FDMUM7YUFBTTtZQUNILE1BQU0sT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuRCxJQUFJLEdBQUcsaUJBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7U0FDcEM7S0FFSjtTQUFNO1FBQ0gsTUFBTSxLQUFLLEdBQUcsc0JBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNoRDtJQUVELElBQUksVUFBVSxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUE7SUFDbEMsTUFBTSxXQUFXLEdBQTJCLHNCQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVwRixVQUFVLElBQUksb0JBQVUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFbkQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBeEJELGtDQXdCQyJ9
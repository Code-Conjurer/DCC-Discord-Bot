"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roll = void 0;
const BoxDrawing_1 = __importDefault(require("../utilities/BoxDrawing"));
const rollRegex = new RegExp("([1-9][0-9]*)?" +
    "d" +
    "([1-9][0-9]*)" +
    "\\s*" +
    "(([\\+|\\-|\\*|/])\\s*([0-9]+))?", 'g');
function roll(message, args) {
    const argsStr = args.join(' ');
    let diceBreakdown = [];
    let sum = 0;
    var matches;
    while ((matches = rollRegex.exec(argsStr)) != null) {
        const numDice = matches[1] == undefined ? 1 : parseInt(matches[1]);
        const diceSize = parseInt(matches[2]);
        const oporator = matches[4] == undefined ? '+' : matches[4];
        const modifier = matches[5] == undefined ? 0 : parseInt(matches[5]);
        let localSum = 0;
        let breakdown = 'd' + diceSize + ': [ ';
        for (let i = 0; i < numDice; i++) {
            const value = Math.floor(Math.random() * diceSize) + 1;
            breakdown += i == numDice - 1 ? value + ' ]' : value + ', ';
            localSum += value;
        }
        switch (oporator) {
            case '+':
                localSum += modifier;
                break;
            case '-':
                localSum -= modifier;
                break;
            case '*':
                localSum *= modifier;
                break;
            case '/':
                localSum = Math.floor(localSum / modifier);
                break;
        }
        sum += localSum;
        breakdown += modifier == 0 ? '' : ` ${oporator}  ${modifier}`;
        diceBreakdown.push(breakdown);
    }
    diceBreakdown.unshift(`${message.author.username} rolls: ${sum}`);
    message.channel.send(BoxDrawing_1.default(diceBreakdown));
}
exports.roll = roll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sbENtZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1hbmRzL3JvbGxDbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseUVBQTZDO0FBRTdDLE1BQU0sU0FBUyxHQUFHLElBQUksTUFBTSxDQUN4QixnQkFBZ0I7SUFDaEIsR0FBRztJQUNILGVBQWU7SUFDZixNQUFNO0lBQ04sa0NBQWtDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFpQjdDLFNBQWdCLElBQUksQ0FBRSxPQUF3QixFQUFFLElBQWM7SUFFMUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUUvQixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBRVosSUFBSSxPQUFPLENBQUM7SUFDWixPQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUM7UUFDOUMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBFLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN4QyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQzVCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV2RCxTQUFTLElBQUksQ0FBQyxJQUFJLE9BQU8sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDMUQsUUFBUSxJQUFJLEtBQUssQ0FBQztTQUNyQjtRQUVELFFBQU8sUUFBUSxFQUFDO1lBQ1osS0FBSyxHQUFHO2dCQUNKLFFBQVEsSUFBSSxRQUFRLENBQUM7Z0JBQ3JCLE1BQU07WUFDVixLQUFLLEdBQUc7Z0JBQ0osUUFBUSxJQUFJLFFBQVEsQ0FBQztnQkFDckIsTUFBTTtZQUNWLEtBQUssR0FBRztnQkFDSixRQUFRLElBQUksUUFBUSxDQUFDO2dCQUNyQixNQUFNO1lBQ1YsS0FBSyxHQUFHO2dCQUNKLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQztnQkFDM0MsTUFBTTtTQUNiO1FBRUQsR0FBRyxJQUFJLFFBQVEsQ0FBQztRQUNoQixTQUFTLElBQUksUUFBUSxJQUFJLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUM3RCxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ2pDO0lBRUQsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFFbEUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUE5Q0Qsb0JBOENDIn0=
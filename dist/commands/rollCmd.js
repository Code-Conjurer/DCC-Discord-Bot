"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roll = void 0;
const BoxDrawing_1 = __importDefault(require("../utilities/BoxDrawing"));
const rollRegex = new RegExp("([1-9][0-9]*)?" +
    "d" +
    "([1-9][0-9]*|0)" +
    "\\s*" +
    "(([\\+|\\-|\\*|/])\\s*([0-9]+))?", 'g');
function roll(message, args) {
    let result = rollFromArgs(args);
    result.breakdown.unshift(`${message.author.username} rolls: ${result.sum}`);
    message.channel.send(BoxDrawing_1.default.Boxify(result.breakdown));
}
exports.roll = roll;
function rollFromArgs(args) {
    const argsStr = args.join(' ');
    let result = {
        sum: 0,
        breakdown: []
    };
    var matches;
    while ((matches = rollRegex.exec(argsStr)) != null) {
        const numDice = matches[1] == undefined ? 1 : parseInt(matches[1]);
        const diceSize = parseInt(matches[2]);
        const oporator = matches[4] == undefined ? '+' : matches[4];
        const modifier = matches[5] == undefined ? 0 : parseInt(matches[5]);
        let localSum = 0;
        let breakdown = 'd' + diceSize + ': [ ';
        for (let i = 0; i < numDice; i++) {
            const value = diceSize > 0 ? Math.floor(Math.random() * diceSize) + 1 : 0;
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
        result.sum += localSum;
        breakdown += modifier == 0 ? '' : ` ${oporator}  ${modifier}`;
        result.breakdown.push(breakdown);
    }
    return result;
}
exports.default = rollFromArgs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sbENtZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1hbmRzL3JvbGxDbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseUVBQWlEO0FBRWpELE1BQU0sU0FBUyxHQUFHLElBQUksTUFBTSxDQUN4QixnQkFBZ0I7SUFDaEIsR0FBRztJQUNILGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sa0NBQWtDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFNN0MsU0FBZ0IsSUFBSSxDQUFFLE9BQXdCLEVBQUUsSUFBYztJQUUxRCxJQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFaEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsV0FBVyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUU1RSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBUEQsb0JBT0M7QUFHRCxTQUFTLFlBQVksQ0FBQyxJQUFjO0lBQ2hDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFL0IsSUFBSSxNQUFNLEdBQXVDO1FBQzdDLEdBQUcsRUFBRSxDQUFDO1FBQ04sU0FBUyxFQUFFLEVBQUU7S0FDaEIsQ0FBQztJQUVGLElBQUksT0FBTyxDQUFDO0lBQ1osT0FBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFDO1FBQzlDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwRSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDeEMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUM1QixNQUFNLEtBQUssR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV4RSxTQUFTLElBQUksQ0FBQyxJQUFJLE9BQU8sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDMUQsUUFBUSxJQUFJLEtBQUssQ0FBQztTQUNyQjtRQUVELFFBQU8sUUFBUSxFQUFDO1lBQ1osS0FBSyxHQUFHO2dCQUNKLFFBQVEsSUFBSSxRQUFRLENBQUM7Z0JBQ3JCLE1BQU07WUFDVixLQUFLLEdBQUc7Z0JBQ0osUUFBUSxJQUFJLFFBQVEsQ0FBQztnQkFDckIsTUFBTTtZQUNWLEtBQUssR0FBRztnQkFDSixRQUFRLElBQUksUUFBUSxDQUFDO2dCQUNyQixNQUFNO1lBQ1YsS0FBSyxHQUFHO2dCQUNKLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQztnQkFDM0MsTUFBTTtTQUNiO1FBRUQsTUFBTSxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQUM7UUFDdkIsU0FBUyxJQUFJLFFBQVEsSUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDN0QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDcEM7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsa0JBQWUsWUFBWSxDQUFDIn0=
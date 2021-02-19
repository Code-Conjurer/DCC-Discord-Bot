"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Attribute {
    constructor(score) {
        this.toString = () => {
            let scoreStr;
            let modStr;
            scoreStr = this.score < 10 ? ` ${this.score}` : `${this.score}`;
            modStr = this.mod >= 0 ? `+${this.mod}` : `${this.mod}`;
            return `${scoreStr} | ${modStr}`;
        };
        if (score < 0)
            throw new Error(`score cannot be negative: ${score}`);
        this.score = score;
        switch (this.score) {
            case 0:
            case 1:
            case 2:
            case 3:
                this.mod = -3;
                break;
            case 4:
            case 5:
                this.mod = -2;
                break;
            case 6:
            case 7:
            case 8:
                this.mod = -1;
                break;
            case 9:
            case 10:
            case 11:
            case 12:
                this.mod = 0;
                break;
            case 13:
            case 14:
            case 15:
                this.mod = 1;
                break;
            case 16:
            case 17:
                this.mod = 2;
                break;
            case 18:
                this.mod = 3;
                break;
            default:
                this.mod = 3;
                break;
        }
    }
}
exports.default = Attribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyU2hlZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9pbnRlcmZhY2VzL2NoYXJhY3RlclNoZWV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBeUNBLE1BQU0sU0FBUztJQUlYLFlBQVksS0FBYTtRQTZDbEIsYUFBUSxHQUFHLEdBQVcsRUFBRTtZQUMzQixJQUFJLFFBQVEsQ0FBQztZQUNiLElBQUksTUFBTSxDQUFDO1lBQ1gsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDL0QsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFeEQsT0FBTyxHQUFHLFFBQVEsTUFBTSxNQUFNLEVBQUUsQ0FBQztRQUNyQyxDQUFDLENBQUE7UUFuREcsSUFBSSxLQUFLLEdBQUcsQ0FBQztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsUUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLEtBQUssQ0FBQyxDQUFDO1lBQ1AsS0FBSyxDQUFDLENBQUM7WUFDUCxLQUFLLENBQUMsQ0FBQztZQUNQLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE1BQU07WUFDVixLQUFLLENBQUMsQ0FBQztZQUNQLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE1BQU07WUFDVixLQUFLLENBQUMsQ0FBQztZQUNQLEtBQUssQ0FBQyxDQUFDO1lBQ1AsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsTUFBTTtZQUNWLEtBQUssQ0FBQyxDQUFDO1lBQ1AsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRTtnQkFDSCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDYixNQUFNO1lBRVYsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRTtnQkFDSCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDYixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsTUFBTTtZQUNWLEtBQUssRUFBRTtnQkFDSCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDYixNQUFNO1lBQ1Y7Z0JBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsTUFBTTtTQUNiO0lBQ0wsQ0FBQztDQVdKO0FBRUQsa0JBQWUsU0FBUyxDQUFDIn0=
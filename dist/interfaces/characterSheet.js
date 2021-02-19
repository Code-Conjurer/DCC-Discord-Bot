"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Attribute {
    constructor(score) {
        this.modToString = () => {
            return this.mod >= 0 ? `+${this.mod}` : `${this.mod}`;
        };
        this.toString = () => {
            let scoreStr;
            let modStr;
            scoreStr = this.score < 10 ? ` ${this.score}` : `${this.score}`;
            modStr = this.mod >= 0 ? `+${this.mod}` : `${this.mod}`;
            return `${scoreStr} | ${this.modToString()}`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyU2hlZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9pbnRlcmZhY2VzL2NoYXJhY3RlclNoZWV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBeUNBLE1BQU0sU0FBUztJQUlYLFlBQVksS0FBYTtRQTZDekIsZ0JBQVcsR0FBRyxHQUFXLEVBQUU7WUFDdkIsT0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzFELENBQUMsQ0FBQTtRQUVNLGFBQVEsR0FBRyxHQUFXLEVBQUU7WUFDM0IsSUFBSSxRQUFRLENBQUM7WUFDYixJQUFJLE1BQU0sQ0FBQztZQUNYLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQy9ELE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRXhELE9BQU8sR0FBRyxRQUFRLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7UUFDakQsQ0FBQyxDQUFBO1FBdkRHLElBQUksS0FBSyxHQUFHLENBQUM7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRXJFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixLQUFLLENBQUMsQ0FBQztZQUNQLEtBQUssQ0FBQyxDQUFDO1lBQ1AsS0FBSyxDQUFDLENBQUM7WUFDUCxLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDZCxNQUFNO1lBQ1YsS0FBSyxDQUFDLENBQUM7WUFDUCxLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDZCxNQUFNO1lBQ1YsS0FBSyxDQUFDLENBQUM7WUFDUCxLQUFLLENBQUMsQ0FBQztZQUNQLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE1BQU07WUFDVixLQUFLLENBQUMsQ0FBQztZQUNQLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsTUFBTTtZQUVWLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFO2dCQUNILElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLE1BQU07WUFDVixLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsTUFBTTtZQUNWO2dCQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLE1BQU07U0FDYjtJQUNMLENBQUM7Q0FlSjtBQUVELGtCQUFlLFNBQVMsQ0FBQyJ9
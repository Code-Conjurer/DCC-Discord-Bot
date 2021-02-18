"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class attribute {
    constructor(score) {
        this.toString = () => {
            return this.mod >= 0 ? `${this.score} | +${this.mod}` : `${this.score} | ${this.mod}`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyU2hlZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9pbnRlcmZhY2VzL2NoYXJhY3RlclNoZWV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBMEJBLE1BQU0sU0FBUztJQUlYLFlBQVksS0FBYTtRQTZDbEIsYUFBUSxHQUFHLEdBQVksRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFBLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hGLENBQUMsQ0FBQTtRQTlDRyxJQUFHLEtBQUssR0FBRyxDQUFDO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixRQUFPLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDZCxLQUFLLENBQUMsQ0FBQztZQUNQLEtBQUssQ0FBQyxDQUFDO1lBQ1AsS0FBSyxDQUFDLENBQUM7WUFDUCxLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDZCxNQUFNO1lBQ1YsS0FBSyxDQUFDLENBQUM7WUFDUCxLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDZCxNQUFNO1lBQ1YsS0FBSyxDQUFDLENBQUM7WUFDUCxLQUFLLENBQUMsQ0FBQztZQUNQLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE1BQU07WUFDVixLQUFLLENBQUMsQ0FBQztZQUNQLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsTUFBTTtZQUVWLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFO2dCQUNILElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLE1BQU07WUFDVixLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsTUFBTTtZQUNWO2dCQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLE1BQU07U0FDYjtJQUNILENBQUM7Q0FLTiJ9
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterCommand = void 0;
const BoxDrawing_1 = __importDefault(require("../utilities/BoxDrawing"));
const characterSheet_1 = __importDefault(require("../interfaces/characterSheet"));
function characterCommand(message, args) {
    const characterString = BoxDrawing_1.default.FormatObject(generateCharacterExample());
    message.channel.send(BoxDrawing_1.default.Boxify(characterString));
}
exports.characterCommand = characterCommand;
function generateCharacterExample() {
    return {
        "hit points": 5,
        "attributes": {
            "strg": new characterSheet_1.default(10).toString(),
            "agil": new characterSheet_1.default(17).toString(),
            "stam": new characterSheet_1.default(5).toString(),
            "pers": new characterSheet_1.default(14).toString(),
            "intl": new characterSheet_1.default(10).toString(),
            "luck": new characterSheet_1.default(10).toString()
        },
        "rolls": {
            "reflex": 5,
            "fortitude": 4,
            "willpower": 3,
            "aromor class": 10,
        },
        "equipment": [
            {
                "name": "string",
                "quantity": "5",
                "value": "500"
            },
            {
                "name": "rope",
                "quantity": "50'",
                "value": ""
            }
        ],
        "features": []
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyQ21kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29tbWFuZHMvY2hhcmFjdGVyQ21kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLHlFQUFpRDtBQUNqRCxrRkFBaUY7QUFFakYsU0FBZ0IsZ0JBQWdCLENBQUUsT0FBd0IsRUFBRSxJQUFjO0lBRXRFLE1BQU0sZUFBZSxHQUFHLG9CQUFVLENBQUMsWUFBWSxDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQztJQUM1RSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBQzdELENBQUM7QUFKRCw0Q0FJQztBQUVELFNBQVMsd0JBQXdCO0lBQzdCLE9BQU87UUFDSCxZQUFZLEVBQUUsQ0FBQztRQUNmLFlBQVksRUFBRztZQUNYLE1BQU0sRUFBRSxJQUFJLHdCQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3BDLE1BQU0sRUFBRSxJQUFJLHdCQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3BDLE1BQU0sRUFBRSxJQUFJLHdCQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ25DLE1BQU0sRUFBRSxJQUFJLHdCQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3BDLE1BQU0sRUFBRSxJQUFJLHdCQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3BDLE1BQU0sRUFBRSxJQUFJLHdCQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO1NBQ3ZDO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsUUFBUSxFQUFFLENBQUM7WUFDWCxXQUFXLEVBQUUsQ0FBQztZQUNkLFdBQVcsRUFBRSxDQUFDO1lBQ2QsY0FBYyxFQUFFLEVBQUU7U0FDckI7UUFDRCxXQUFXLEVBQUc7WUFDVjtnQkFDSSxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFLEtBQUs7YUFDakI7WUFDRDtnQkFDSSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxVQUFVLEVBQUUsS0FBSztnQkFDakIsT0FBTyxFQUFFLEVBQUU7YUFDZDtTQUNKO1FBQ0QsVUFBVSxFQUFHLEVBQUU7S0FDbEIsQ0FBQztBQUNOLENBQUMifQ==
interface ICharacter {
    "hit points": number,
    "attributes" : {
        "strength": attribute,
        "agility": attribute,
        "stamina": attribute,
        "personality": attribute,
        "intelligence": attribute,
        "luck": attribute
    },
    "rolls": {
        "reflex": number,
        "fortitude": number,
        "willpower": number,
        "aromor class": number,
    },
    "equipment" : IEquipment[],
    "features" : { [key: string]: any }[];
}

interface IEquipment {
    "name": string,
    "quantity": string,
    "value": string
}

class attribute {
    score: number;
    mod: number;

    constructor(score: number) {
        if(score < 0) throw new Error(`score cannot be negative: ${score}`);
        
        this.score = score;
        switch(this.score){
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

    public toString = () : string => {
        return this.mod >= 0? `${this.score} | +${this.mod}`: `${this.score} | ${this.mod}`;
    }
}

export default ICharacter;
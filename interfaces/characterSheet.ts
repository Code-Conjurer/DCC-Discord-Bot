interface ICharacter {
    "hit points": number,
    "attributes": {
        "strg": string,
        "agil": string,
        "stam": string,
        "pers": string,
        "intl": string,
        "luck": string
    },
    "rolls": {
        "reflex": number,
        "fortitude": number,
        "willpower": number,
        "aromor class": number,
    },
    "equipment": IEquipment[],
    "features": { [key: string]: any }[];
}

interface IEquipment {
    "name": string,
    "quantity": string,
    "value": string
}

class Attribute {
    score: number;
    mod: number;

    constructor(score: number) {
        if (score < 0) throw new Error(`score cannot be negative: ${score}`);

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

    public toString = (): string => {
        let scoreStr;
        let modStr;
        scoreStr = this.score < 10? ` ${this.score}` : `${this.score}`;
        modStr = this.mod >= 0 ? `+${this.mod}` : `${this.mod}`;

        return `${scoreStr} | ${modStr}`;
    }

}
export { IEquipment, ICharacter };
export default Attribute;

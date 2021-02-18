const box = {
    'topLeft': '╔',
    'center': '═',
    'topRight': '╗',
    'side': '║',
    'botRight': '╝',
    'botLeft': '╚'
};

const levelSpace = '┃  ';
const levelMarker = '┣━━';
const levelDivider = '┣┅┅┅┅┅┅';

const firstLine = '₁₁ ₀ ₁₁ ₀ ₁₀ ₁ ₁₁₁ | ₁₁ ₁₁₁ ₀₁₀ ₀₀';
const BOX_LENGTH = 65;
const breakAfterPiority = [new RegExp("[,|\\.|\\t|!|?]"),new RegExp("[ |\\-|=|{|}|)|\\\|_|\\t]")];

function BoxifyString(str: string): string {
    const strArr = String(str).split('\n');

    return Boxify(strArr);
}

function FormatStringArr(arr: string[]) {

    let result = arr;

    // we're updating arr.length, so a while loop is used
    let i = 0;
    while (i < result.length) {
        const s = arr[i];
        if (s.length > BOX_LENGTH) {

            let splitIndex = undefined;
            for(let i = 0; i < breakAfterPiority.length && splitIndex != -1; i++){
                splitIndex = s.substring(BOX_LENGTH - 5, BOX_LENGTH).search(breakAfterPiority[i]); // give index of substring
            }

            let left = '';
            let right = '';

            if (splitIndex == -1 || splitIndex == undefined) {
                left = s.substring(0, BOX_LENGTH);
                right = s.substring(BOX_LENGTH);
            } else {
                splitIndex += BOX_LENGTH - 5;
                left = s.substring(0, splitIndex);
                right = s.substring(splitIndex);
            }

            result[i] = left;
            result.splice(i + 1, 0, right);

        }

        i++;
    }

    return result;
}

function FormatObject(obj: { [key: string]: any }, level = 0): string{
    let result: string = '';

    Object.keys(obj).forEach(key => {

        let temp = '';
        const value = obj[key];

        if(Array.isArray(value)){

            let atLeastOneObject = false;
            value.forEach((ele, index, arr) => {
                if(typeof ele === 'object'){
                    atLeastOneObject = true;
                    temp += '\n' + FormatObject(ele, level + 1);
                } else {
                    temp += level > 0? '\n' + levelSpace.repeat(level) + levelMarker + ' ': '\n';
                    temp += ele;
                }
                if(atLeastOneObject && index !== arr.length-1){
                    // adds a divider if there are objects in array
                    temp += level > 0? '\n' + levelSpace.repeat(level): '\n';
                    temp += levelDivider;
                }
            });

        }else if(typeof value === 'object' && Object.keys(value).length !== 0){
            temp += '\n' + FormatObject(value, level + 1) + '\n';

        }else if(value !== '' && value !== undefined && value !== null){
            temp += value + '\n';
        }else{
            return;
        }

        result += level > 0? levelSpace.repeat(level-1) + levelMarker + ' ': '';
        result += key + ': ';
        result += temp;
    });

    return result.replace(/\n$/, '');//remove last newline char
}

function Boxify(s: string[] | string): string {
    if (typeof s == 'string') return BoxifyString(s);

    let result = firstLine + '\n';

    s = FormatStringArr(s);
    let maxLength = Math.max(...(s.map(el => el.length)));

    const top = '`' + box.topLeft + box.center.repeat(maxLength + 2) + box.topRight + '`\n';
    const bot = '`' + box.botLeft + box.center.repeat(maxLength + 2) + box.botRight + '`';

    result += top;
    s.forEach(str => {
        const spaces = ' '.repeat(maxLength - str.length);
        result += '`' + box.side + ' ' + str + spaces + ' ' + box.side + '`\n';
    });
    result += bot;

    return result;
}

export default {Boxify, FormatObject};
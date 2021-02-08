const box = {
    'topLeft': '╔',
    'center': '═',
    'topRight': '╗',
    'side': '║',
    'botRight': '╝',
    'botLeft': '╚'
};
const firstLine = '₁₁ ₀ ₁₁ ₀ ₁₀ ₁ ₁₁₁ | ₁₁ ₁₁₁ ₀₁₀ ₀₀';
const BOX_LENGTH = 65;
const breakAfterPiority = [new RegExp("[,|\\.|\\t|!|?]"),new RegExp("[ |\\-|=|{|}|)|\\\|_|\\t]")];

function BoxifyString(str) {
    const strArr = String(str).split('\n');

    return Boxify(strArr.map(s => s.trim()));
}

function FormatStringArr(arr) {

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

            if (splitIndex == -1) {
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

function Boxify(s) {
    let arr;
    if (typeof s == 'string') return BoxifyString(s);
    else if (Array.isArray(s)) arr = s;

    arr = FormatStringArr(arr);

    let result = firstLine + '\n';
    let maxLength = Math.max(...(arr.map(el => el.length)));

    const top = '`' + box.topLeft + box.center.repeat(maxLength + 2) + box.topRight + '`\n';
    const bot = '`' + box.botLeft + box.center.repeat(maxLength + 2) + box.botRight + '`';

    result += top;
    arr.forEach(str => {
        const spaces = ' '.repeat(maxLength - str.length);
        result += '`' + box.side + ' ' + str + spaces + ' ' + box.side + '`\n';
    });
    result += bot;

    return result;
}

exports.Boxify = Boxify;
const box = {
    'topLeft': '╔',
    'center': '═',
    'topRight': '╗',
    'side': '║',
    'botRight': '╝',
    'botLeft': '╚'
};
const firstLine = '₁₁ ₀ ₁₁ ₀ ₁₀ ₁ ₁₁₁ | ₁₁ ₁₁₁ ₀₁₀ ₀₀';

function BoxifyString(str){
    const strArr = String(str).split('\n');

    return Boxify(strArr.map(s => s.trim()));
}

function Boxify(s){
    if(typeof s == 'string') return BoxifyString(s);
    else if(Array.isArray(s)) const arr = s;

    let result = firstLine + '\n';
    let maxLength = Math.max(...(arr.map(el => el.length)));

    const top = '`' + box.topLeft + box.center.repeat(maxLength+2) + box.topRight + '`\n';
    const bot = '`' + box.botLeft + box.center.repeat(maxLength+2) + box.botRight + '`';

    result += top;
    arr.forEach(str => {
        const spaces = ' '.repeat(maxLength-str.length);
        result += '`' + box.side + ' ' + str + spaces + ' ' + box.side + '`\n';
    });
    result += bottom;

    return result;
}

export default Boxify;
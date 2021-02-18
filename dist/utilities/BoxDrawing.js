"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const breakAfterPiority = [new RegExp("[,|\\.|\\t|!|?]"), new RegExp("[ |\\-|=|{|}|)|\\\|_|\\t]")];
function BoxifyString(str) {
    const strArr = String(str).split('\n');
    return Boxify(strArr);
}
function FormatStringArr(arr) {
    let result = arr;
    let i = 0;
    while (i < result.length) {
        const s = arr[i];
        if (s.length > BOX_LENGTH) {
            let splitIndex = undefined;
            for (let i = 0; i < breakAfterPiority.length && splitIndex != -1; i++) {
                splitIndex = s.substring(BOX_LENGTH - 5, BOX_LENGTH).search(breakAfterPiority[i]);
            }
            let left = '';
            let right = '';
            if (splitIndex == -1 || splitIndex == undefined) {
                left = s.substring(0, BOX_LENGTH);
                right = s.substring(BOX_LENGTH);
            }
            else {
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
function FormatObject(obj, level = 0) {
    let result = '';
    Object.keys(obj).forEach(key => {
        let temp = '';
        const value = obj[key];
        if (Array.isArray(value)) {
            value.forEach((ele, index, arr) => {
                if (typeof ele === 'object') {
                    temp += '\n' + FormatObject(ele, level + 1);
                }
                else {
                    temp += level > 0 ? '\n' + levelSpace.repeat(level) + levelMarker + ' ' : '\n';
                    temp += ele;
                }
            });
        }
        else if (typeof value === 'object' && Object.keys(value).length !== 0) {
            temp += '\n' + FormatObject(value, level + 1) + '\n';
        }
        else if (value !== '' && value !== undefined && value !== null) {
            temp += value + '\n';
        }
        else {
            return;
        }
        result += level > 0 ? levelSpace.repeat(level - 1) + levelMarker + ' ' : '';
        result += key + ': ';
        result += temp;
    });
    return result.replace(/\n$/, '');
}
function Boxify(s) {
    if (typeof s == 'string')
        return BoxifyString(s);
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
exports.default = { Boxify, FormatObject };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm94RHJhd2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxpdGllcy9Cb3hEcmF3aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxHQUFHLEdBQUc7SUFDUixTQUFTLEVBQUUsR0FBRztJQUNkLFFBQVEsRUFBRSxHQUFHO0lBQ2IsVUFBVSxFQUFFLEdBQUc7SUFDZixNQUFNLEVBQUUsR0FBRztJQUNYLFVBQVUsRUFBRSxHQUFHO0lBQ2YsU0FBUyxFQUFFLEdBQUc7Q0FDakIsQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQztBQUN6QixNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDMUIsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDO0FBRS9CLE1BQU0sU0FBUyxHQUFHLG9DQUFvQyxDQUFDO0FBQ3ZELE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUN0QixNQUFNLGlCQUFpQixHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBQyxJQUFJLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7QUFFbEcsU0FBUyxZQUFZLENBQUMsR0FBVztJQUM3QixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXZDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFFRCxTQUFTLGVBQWUsQ0FBQyxHQUFhO0lBRWxDLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUdqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQ3RCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxFQUFFO1lBRXZCLElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUMzQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxJQUFJLFVBQVUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQztnQkFDakUsVUFBVSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyRjtZQUVELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNkLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUVmLElBQUksVUFBVSxJQUFJLENBQUMsQ0FBQyxJQUFJLFVBQVUsSUFBSSxTQUFTLEVBQUU7Z0JBQzdDLElBQUksR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDbEMsS0FBSyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0gsVUFBVSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLElBQUksR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDbEMsS0FBSyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDbkM7WUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FFbEM7UUFFRCxDQUFDLEVBQUUsQ0FBQztLQUNQO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLEdBQTJCLEVBQUUsS0FBSyxHQUFHLENBQUM7SUFDeEQsSUFBSSxNQUFNLEdBQVcsRUFBRSxDQUFDO0lBRXhCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBRTNCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV2QixJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUM7WUFFcEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQzlCLElBQUcsT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFDO29CQUN2QixJQUFJLElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQyxHQUFHLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUMvQztxQkFBTTtvQkFDSCxJQUFJLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsV0FBVyxHQUFHLEdBQUcsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUM3RSxJQUFJLElBQUksR0FBRyxDQUFDO2lCQUNmO1lBS0wsQ0FBQyxDQUFDLENBQUM7U0FFTjthQUFLLElBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBQztZQUNsRSxJQUFJLElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUV4RDthQUFLLElBQUcsS0FBSyxLQUFLLEVBQUUsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUM7WUFDM0QsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDeEI7YUFBSTtZQUNELE9BQU87U0FDVjtRQUVELE1BQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDeEUsTUFBTSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDckIsTUFBTSxJQUFJLElBQUksQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLENBQW9CO0lBQ2hDLElBQUksT0FBTyxDQUFDLElBQUksUUFBUTtRQUFFLE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWpELElBQUksTUFBTSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFFOUIsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV0RCxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEYsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0lBRXRGLE1BQU0sSUFBSSxHQUFHLENBQUM7SUFDZCxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1osTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELE1BQU0sSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDM0UsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLElBQUksR0FBRyxDQUFDO0lBRWQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVELGtCQUFlLEVBQUMsTUFBTSxFQUFFLFlBQVksRUFBQyxDQUFDIn0=

const fs = require('fs');



let foo = {};

for(let i = 1; i <= 30; i++){
    foo[i] = {
        "name": "",
        "modifier" : ""
    };
}

console.log("foo");
fs.writeFile("test.json", JSON.stringify(foo, undefined, 2), function(err) {
    if (err) {
        console.log(err);
    }
});
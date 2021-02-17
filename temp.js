
const fs = require('fs');



let foo = {};

for(let i = 1; i <= 24; i++){
    // @ts-ignore
    foo[i] = {
        "name": "",
        "quantity": "",
        "value": ""
      };
}

console.log("foo");
fs.writeFile("test.json", JSON.stringify(foo, undefined, 2), function(err) {
    if (err) {
        console.log(err);
    }
});
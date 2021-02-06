
const fs = require('fs');



let foo = {};

for(let i = 1; i <= 100; i++){
    foo[i] = {
        "name" : "",
        "trained_weapon" : {
            "name" : "",
            "type" : ""
        },
        "trade_goods": [
            {
                "name": "",
                "quantity": ""
            }
        ]
    };
}

delete foo["24"];

delete foo["28"];

delete foo["34"];

delete foo["40"];
delete foo["41"];
delete foo["42"];
delete foo["43"];
delete foo["44"];
delete foo["45"];
delete foo["46"];
delete foo["47"];
delete foo["48"];
delete foo["49"];

delete foo["52"];

delete foo["54"];

delete foo["57"];

delete foo["69"];

delete foo["90"];

delete foo["93"];

delete foo["100"];

console.log("foo");
fs.writeFile("test.json", JSON.stringify(foo, undefined, 2), function(err) {
    if (err) {
        console.log(err);
    }
});
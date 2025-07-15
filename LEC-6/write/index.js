const fs = require("fs");
fs.writeFile("../demo.txt", "G26 helllo", function(err){
    if(err) return console.log(err);
    console.log("success!!1");
})

fs.writeFile("../demo2.txt", "Hello , sbhi ko RAJA group ki taraf se namaste", function(err){
    if(err) return console.log(err);
    console.log("success!!2");
})
 const fs = require("fs");


// fs.readFile("../users.txt","utf-8",function(err,data){
//     if(err) return console.log(err);
//     console.log("Data read from file:", data);
// })

fs.readFile("../users.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    // console.log("Data read from file:", data[0]);
    let users = JSON.parse(data);
    console.log(users[0].name);
})
let users=[
    {
        name:"Nitesh",
        age:"24",
        address:"Delhi",

    },
    {
       name:"Rohit",
       age:"22",
       address:"Mumbai", 
    }
]

const fs = require("fs");
// fs.writeFile("../users.txt",users.toString(),function(err){
//     if(err) return console.log(err);
//     console.log("Users data written successfully!");
// })

fs.writeFile("../users.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log("Users data written successfully!");
})
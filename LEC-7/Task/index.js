let users1=[
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

let users2=[
    {
        name:"Sehaj",
        age:"20",
        address:"Mohali",

    },
    {
       name:"Rohan",
       age:"20",
       address:"Pathankot", 
    }
]

const fs = require("fs");


fs.writeFile("users1.txt",JSON.stringify(users1),function(err){
    if(err) return console.log(err);
    console.log("Users data written successfully!");

    fs.writeFile("users2.txt",JSON.stringify(users2),function(err){
        if(err) return console.log(err);
        console.log("Users data written successfully!");

        fs.readFile("users1.txt","utf-8",function(err,data1){
            if(err) return console.log(err);
            let print1 = JSON.parse(data1);
            console.log(users1);

            fs.readFile("users2.txt","utf-8",function(err,data2){
                if(err) return console.log(err);
                let print2 = JSON.parse(data2);
                console.log(users2);

                let combined=users1.concat(users2);
                fs.writeFile("combined.txt", JSON.stringify(combined,null,2), function(err) {
                    if(err) return console.log(err);
                    console.log("Combined users data written successfully!");
                });
            })
        })
    })
})






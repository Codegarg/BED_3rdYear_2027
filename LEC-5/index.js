
let users =[
    {
        id: 1,
        name: "Nitesh",
        age: 24,
    },
    {
        id: 2,
        name: "Ritik",
        age: 25,
    },
]

// function isAllowed(id){
//     //id ka user dhundo,
//     //fir uska age check karo>18
//     // for(let i=0;i<users.length;i++){
//     //     if(users[i].id==id){
//     //         if(users[i].age>18){
//     //             console.log("hello");
//     //             return true;
//     //         }
//     //     }
//     // }

//     // return false;

//     //filter return a new array
//     let user=users.filter((u)=>{
//         return u.id==id
//     })[0]
//     console.log(user);
//     if(!user) return console.log("No user found")
//     if(user.age<18) return console.log("Not eligible to vote")
//     return console.log("eligible to vote")

// }


function isAllowed(id){
    return new Promise((resolve, reject) => {
       let user = users.filter((u)=>{
        return u.id == id;
        })[0];
        console.log(user);
        if (!user) {
            return reject("User not found");
        }
        if (user.age < 18) {
            return reject("User is not allowed");
        }
        return resolve("User is allowed");

})
}
isAllowed(1).then((data) => {
    console.log(data);  
})
.catch((err)=>{
    console.log(err);
});

console.log("Start");



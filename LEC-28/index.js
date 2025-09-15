const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();
// async function addUser(email,name,password){
//     await prisma.user.create({
//         data: {
//             email: email,
//             name: name,
//             password: password
//         }
//     })
// }

// addUser("ridhamgarg@gmail.com","Ridham Garg","1234")
// addUser("ridhamgarg1@gmail.com","Ridham","1234")
// addUser("ridhamgarg2@gmail.com","Ridham1","12345")
// addUser("ridhamgarg3@gmail.com","Ridham2","123456")
// .then(()=>{
//     console.log("User added successfully")
// })

async function getAllUser(){
    let allUser = await prisma.user.findMany();
    return allUser;
}
getAllUser().
then((data)=>{
    console.log(data)
})


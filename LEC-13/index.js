function getUsersData(URL){
    fetch(URL)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.error(err);
    });
}
getUsersData('https://jsonplaceholder.typicode.com/users');
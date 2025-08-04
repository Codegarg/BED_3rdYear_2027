function getUsersData(URL){
    fetch(URL)
    .then((res)=>{
        console.log(res)
        return res.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.error(err);
    });
}
getUsersData('https://jsonplaceholder.typicode.com/users');
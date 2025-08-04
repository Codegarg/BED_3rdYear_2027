let userContainer = document.querySelector('.user-container');
console.log(userContainer);
function getUsersData(URl){
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

function displayUsers(user){
    let li = document.createElement('li');
    li.setAttribute('class', 'user-item');
    li.innerHTML = '<div class = "user-info">
                <h1>${user.name}</h1>
                <p>${user.email}</p>
            </div>
            <div class = "user-btn">
                <button class = "user-delete">❌</button>
                <button class = "user-edit">✏️</button>
            </div>'
    userContainer.appendChild(li);
}
getUsersData('https://jsonplaceholder.typicode.com/users');

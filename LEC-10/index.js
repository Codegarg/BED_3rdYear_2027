const express = require('express');
const app = express();
app.use(express.static(__dirname+"/public"));
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/about',(req, res) => {
//     res.sendFile(__dirname + '/about.html');
// })
app.post('/users', (req, res) => {
    
});

app.listen(4444 , ()=> {
    console.log('Server is running on port 4444');
});
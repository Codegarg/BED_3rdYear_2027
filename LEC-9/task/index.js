const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());

app.post('/user', (req, res) => {
    res.send("User endpoint reached!");
    console.log(req.body);

    let data = req.body;

    fs.appendFile('users.txt', JSON.stringify(data,null,2), (err) => {
        if (err) {
            console.error('Error appending to file', err);
        } else {
            console.log('Data appended to file successfully');
        }
    });
});

app.listen(4400),function(){
    console.log('Server is running on port 4400');
}
const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.static(__dirname+ '/public'));

app.get('/users', (req, res) => {
    fs.readFile('users.json', 'utf8', function(err, data){
        if (err) res.send(err);
        let allusers = JSON.parse(data);
        res.json(allusers);
    });
})

app.listen(4444, function() {
    console.log('Server started on port 4444');
});
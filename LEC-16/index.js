const express = require('express');
const mongoose = require('mongoose');
const app = express();



app.listen(3333, function() {
    console.log('Server started on port 5500');
});

mongoose.connect('mongodb://localhost:27017/LEC-16')
    .then(()=> console.log("Connected"));

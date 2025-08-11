const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Blogs = require("./model/user")
app.post("/blogs",async(req,res)=>{
    let {title,body} = req.body;
    let newBlog = new Blogs({
        title:title,
        body:body,
        date: Date.now()
    })
    await newBlog.save()
    res.json({
        success: true,
        data: newBlog,
        message: "Blog created successfully"
    });
})

// app.post("/blogs",(req,res)=>{
//     let {title,body} = req.body;
//     console.log(title,body);
//     res.send("GOT IT");
// })

app.listen(4445, function() {
    console.log('Server started on port 4445');
});

mongoose.connect('mongodb://localhost:27017/BED_DB')
    .then(()=> console.log("Connected"));

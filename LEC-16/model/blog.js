const mongoose = require('mongoose');
const schema = mongoose.Schema;

const BlogPost = new schema({
    title: String,
    body: String,
    date: Date,
    blogs:[{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }]
});

module.exports = mongoose.model('BlogPost', BlogPost);

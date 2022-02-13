const mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comment: {
        type: String,
        required: true
    },
})

let Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
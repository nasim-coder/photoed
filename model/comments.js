const mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comment: {
        type: String,
        required: true,
        maxlength:500
    },
})

let Comments = mongoose.model('Comments', commentSchema);
module.exports = Comments;
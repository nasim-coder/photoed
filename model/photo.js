const mongoose = require('mongoose');
let photoSchema = new mongoose.Schema({
    caption: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    likedby: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    fileId: {
        type: mongoose.Types.ObjectId,
        required:true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments'
    
    }]
})

let Photo = mongoose.model('Photo', photoSchema);
module.exports = Photo;
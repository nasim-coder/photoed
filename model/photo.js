const mongoose = require('mongoose');
let photoSchema = new mongoose.Schema({
    caption: {
        type: String,
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
       ref: 'User' 
    },
    likedby: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})
const User = require('../model/userModel');
const Photo = require('../model/photo');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Comments= require('../model/comments')

//creating sign up function for the user
exports.signUp = (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });
    user.save((err, user) => {
        if (err) {
            res.status('500').send({ message: err })
            return
        }
        res.status(200).json('you are registered successfully')
    });

};

//login function for the user and assigning token
exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!(email && password)) {
        res.status(400).send("All input is required");
    }
    const user = await User.findOne({ email });
    let isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (user && (isPasswordCorrect)) {
        const token = jwt.sign({ user }, jwtconfig.secret, { "expiresIn": "2h" });
        user.token = token;
        res.status(200).json(user)
    } else {
        res.status(400).send("invalid credential")
    }
}

//fuction to upload file and book data
exports.addPhoto = async (req, res) => {
    const caption = req.body.caption;
    const photo = new Photo({
        caption: caption,
        fileId: req.file.id
    });
    await photo.save((err, photo) => {
        if (err) {
            res.status(400).json({ msg: err })
        } else {
            res.status(200).json(photo)
        }
    })
}

exports.likeIt = (req, res) => {
    let photo = Photo.findById(mongoose.Types.ObjectId(req.photoId));
    if (!photo.likedBy.includes(req.userId)) {
        photo.likedby.push(req.userId);
    }
    photo.save();
};

exports.doComment = async (req, res) => {
    let photoId = req.body.photoId;
    let comment = req.body.comment;
    let userId = req.body.userId;
    let mycomment = new Comments({
        userId: userId,
        comment: comment
    });
    // mycomment.save();
    let photo = await Photo.findById(mongoose.Types.ObjectId(photoId))
   
    photo.comments.push(mycomment.id);
    mycomment.save();
    photo.save();
    res.send({msg:'abcd'})
}


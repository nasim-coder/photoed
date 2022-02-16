const express = require('express');
const userRouter = express.Router();
const controller = require('../controller/usersController');
const {upload} = require('../middleware/gridFsEngine')
 
userRouter.post('/login', controller.login);
userRouter.post('/register', controller.signUp);
userRouter.post('/upload', upload.single('file'), controller.addPhoto);
userRouter.get('/photo/:id', controller.getPhoto);
userRouter.post('/like', controller.likeIt);
userRouter.post('/comment', controller.doComment);
userRouter.get('/download/:id', controller.downloadPhoto);
module.exports = userRouter;


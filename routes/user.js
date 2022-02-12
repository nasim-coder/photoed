const express = require('express');
const userRouter = express.Router();
const controller = require('../controller/usersController');
const {upload} = require('../middleware/gridFsEngine')

userRouter.post('/login', controller.login);
userRouter.post('/register', controller.signUp);
userRouter.post('/upload', upload.single('file'), controller.addPhoto);

module.exports = userRouter;
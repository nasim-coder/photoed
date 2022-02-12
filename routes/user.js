const express = require('express');
const userRouter = express.Router();
const controller = require('../controller/usersController');
const upload = require('../middleware/gridFsEngine')

userRouter.post('/login', controller.login);
userRouter.post('register', controller.signin);
userRouter.post('/upload', upload.single('file'), controller.addPhoto);
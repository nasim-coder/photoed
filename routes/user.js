const express = require('express');
const userRouter = express.Router();
const controller = require('../controller/usersController')

userRouter.post('/login', controller.login);
userRouter.post('register', controller.signin);
userRouter.post('/upload', controller.uploadPhoto);
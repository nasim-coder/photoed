const express = require('express');
const userRouter = require('./routes/user') 
const app = express();
const PORT = process.env.PORT||3000;
const mongose = require('mongoose');
mongose.connect('mongodb://localhost:27017/photodb', () => {
    console.log('db connected');
});

app.use(express.json());
app.use('/user', userRouter)
app.listen(PORT, function(){
console.log("server is running on port 3000");
})

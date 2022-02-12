const express = require('express');
const env = require('dotenv');
env.config();
const app = express();
const PORT = process.env.PORT||3000;
const mongose = require('mongoose');
mongose.connect('mongodb://localhost:27017/photodb', () => {
    console.log('db connected');
})

app.use(express.json());

app.listen(PORT, function(){
console.log("server is running on port 3000");
})

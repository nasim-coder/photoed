const express = require('express');
const env = require('dotenv');
env.config();
const app = express();
const PORT = 3000; 
const mongose = require('mongoose');
mongose.connect(process.env.DATABASE_URL);
const db = mongose.connection;

db.on('error', function(error){
    console.error(error);
});

db.once('open', function(){
    console.log("connected to database");
})
app.use(express.json());
const subscribersRouter = require('./routes/subscribers');
app.use('subscribers', subscribersRouter);


app.listen(PORT, function(){
console.log("server is running on port 3000");
})

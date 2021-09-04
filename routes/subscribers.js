const express = require('express');
const router = express.Router();

//getting all
router.get('/', (req, res)=>{
    res.send("Hello rest");
});

//getting one
router.get('/:id', (req, res)=>{

});

//creating one
router.post('/', (req, res)=>{

});

//updating one
router.patch('/:id', (req, res)=>{

});

//delete one
router.delete('/:id', (req, res)=>{

});

module.exports = router;
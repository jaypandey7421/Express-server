const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res)=>{
    console.log('Get route in Raouts/login');
    res.sendFile(path.join(__dirname, '../src/login.html'));
});

router.post('/user',(req, res)=>{
    console.log("Post executed.");
    let email = req.body.email;
    let password = req.body.password;
    res.send(`Email: ${email} Password: ${password}`);
});

module.exports = router;
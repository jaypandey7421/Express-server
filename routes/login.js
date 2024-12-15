const express = require('express');
const path = require('path');
const {connectToDB, findDocument} = require('../mongoDB');
const router = express.Router();

router.get('/', (req, res)=>{
    console.log('Get route in Raouts/login');
    res.sendFile(path.join(__dirname, '../src/login.html'));
});

router.post('/user', async (req, res)=>{
    let queryDoc = {
        "email": req.body.email, 
        "password": req.body.password
    };

    try{
        let {db, client} = await connectToDB();
        let result = await findDocument(db, queryDoc);
        
        if(!result){
            res.send('Bad credentials');
        }else{
            res.json(result);
        }

        await client.close();
        console.log('DB connection closed.');
    }catch(err){
        res.send(`Accept it, it's your fault.`);
        console.log(err);
    }  

});

module.exports = router;
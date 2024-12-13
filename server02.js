const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));       // parse body data
app.use(express.static(path.join(__dirname, 'public'))); // serve static file

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// app.get('/login',(req, res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'login.html'));
//     console.log('log-in handler');
// });

app.post('/login',(req, res)=>{
    let email = req.body.email;
    let password = req.body.password;
    console.log("Post executed.");
    res.send(`Email: ${email} Password: ${password}`);
})

app.listen(PORT,()=> console.log("app is up and running!"));
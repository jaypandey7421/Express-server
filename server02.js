const express = require('express');
const path = require('path');
const loginRouter = require('./routes/login');

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));       
app.use('/', loginRouter);


app.listen(PORT,()=> console.log("app is up and running!"));
const express = require('express');
const path = require('path');
const loginRouter = require('./routes/login');
const homeRouter = require('./routes/home');

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: false}));       
app.use('/', homeRouter);
app.use('/login', loginRouter);


app.listen(PORT,()=> console.log("app is up and running!"));
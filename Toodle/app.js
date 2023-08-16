const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();


app.set('views',path.join(__dirname,'views'));  
app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,'public')))

app.listen(3000, () => {
    console.log('Server is now running at port 3000');
})

app.get('/home',(req,res) => {
    res.render('homepage')
})
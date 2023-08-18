const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')

//Listening at Port
app.listen(3000, () => {
  console.log('Server is Live at port 3000')
});

//MongoDB connection
async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Toodle',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('MONGO CONNECTION IS SUCCESSFUL');
  } catch (error) {
    console.error('Connection Error:', error);
  }
}
mongoose.set('strictQuery', false);
main().catch(err => console.log(err));

//Setting up view engine
app.set('views',path.join(__dirname,'views'));  
app.set('view engine','ejs')

//Setting up static files
app.use(express.static(path.join(__dirname,'public')))

//Adding Routes

//Homepage Route
app.get('/', (req,res) => {
    res.render('homepage')
});

//Add Task
app.get('/addTask', (req,res) => {
    res.render('addTask')
});



//Importing all libraries
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const allTasks = require('./models/addTask');

//Including Mongoose
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


//Setting up the view engine
app.set('views',path.join(__dirname,'views'));  
app.set('view engine','ejs')

//Setting up the static files
app.use(express.static(path.join(__dirname,'public')))

//Setting up the routes
app.listen(3000, () => {
    console.log('Server is now running at port 3000');
})

//Home Page
app.get('/home',(req,res) => {
    res.render('homepage')
})
//Creating a new task
app.get('/addtask' , async (req,res) => {
    const newTask = new allTasks({
        task: 'Do homework',
        dueDays: '1 Day',
        time: '10 AM',
        status: 'Done'
    });
    await newTask.save()
    res.send("Added!!")})

//Reading all the tasks
app.get('/readtask' , async (req,res) => {
    const tasks = await allTasks.find({})
    res.render('viewAllTask',{newTask})
}
)

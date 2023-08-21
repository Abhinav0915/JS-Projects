const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require ('method-override');
const Schema = mongoose.Schema;

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));

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
    console.log('Database is now connected');
  } catch (error) {
    console.error('Connection Error:', error);
  }
}
mongoose.set('strictQuery', false);
main().catch(err => console.log(err));

//Model
const taskSchema = new Schema({
  task: String,
  dueDays: String,
  time: String,
  status: String
})

const tasksDB = mongoose.model('allTasks', taskSchema);

//Setting up view engine
app.set('views',path.join(__dirname,'views'));  
app.set('view engine','ejs')

//Setting up static files
app.use(express.static(path.join(__dirname,'public')))

//Adding Routes

//Homepage Route
app.get('/home', (req,res) => {
    res.render('homepage',{tasksDB})
});

//Add Task
app.get('/addTask', (req,res) => {
    res.render('addTask')
});

//Add Task
app.post('/home', async (req,res) => {
    const newTask = new tasksDB(req.body)
    await newTask.save();
    res.redirect('/home');
    res.send('DONE!!!')
});

const item1 = new tasksDB({
    task: 'Do Homework',
    dueDays: 'Today',
    time: '12:00',
    status: 'Pending'
});

item1.save();

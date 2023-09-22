const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const app = express();

// Set the strictQuery option before connecting
mongoose.set('strictQuery', false);

main().catch(err => console.log(err));

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/toodle');
    console.log('Connection Successful');
  } catch (error) {
    console.error('Connection Error:', error);
  }
}

const toodleSchema = new mongoose.Schema({
    task: String
});

const Toodle = mongoose.model('Toodle', toodleSchema);

app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'/views'))
app.use(express.static(path.join(__dirname, '/public')));

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

app.get('/', async (req,res) => {
    const toodle = await Toodle.find({})
    res.render('home', {toodle})
})

app.get('/addTask', (req,res) =>{
    res.render('addTask')
})

app.post('/addNewTask',(req,res)=>{
    const newTask = new Toodle({
        task: req.body.task
    })
    newTask.save()
    res.redirect('/') 
})
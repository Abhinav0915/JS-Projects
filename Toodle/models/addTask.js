const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating Schema
const taskSchema = new Schema({
    task: String,
    dueDays: String,
    time: String,
    status: String
})

//Creating Model
module.exports = mongoose.model('allTasks', taskSchema);


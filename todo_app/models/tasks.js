const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task : {
        type: String,
        required : true
    },
    isDone : {
        type: Boolean,
        default: false
    },
    isActive :  {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model("task",taskSchema);

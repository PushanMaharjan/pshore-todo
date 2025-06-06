import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true,
        maxlength: 50
    },
    completed: {
        type: Boolean,
        default: false
    },
    short_desc:{
        type: String,
        required: true,
        maxlength: 150
    },
    date_and_time:{
        type: Date,
        required: true,
    }
},{
timestamps: true
});

export const TodoModel = mongoose.model('Todo', todoSchema);

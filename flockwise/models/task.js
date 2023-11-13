// Written by Evan

import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  taskCode: {
    type: Number,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = model('Task', taskSchema);

export default Task;

// Written by Evan

import { Schema, model } from 'mongoose';
import Employee from './employee';

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
    type: String,
    required: true,
  },
  state: {
    type: Boolean,
    default: false, // false = WIP, true = completed
  },
  billable: {
    type: Boolean,
    default: false,
  },
  plannedEffort: {
    type: Number,
    default: 1 // hours needed to complete
  },
  assignedTo: {
    type: [Number], // array of employeeID's
    default: []
  }
});

const Task = model('Task', taskSchema);

export default Task;

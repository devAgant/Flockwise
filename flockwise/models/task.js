
// Written by Evan and Arif
import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

const TaskSchema = new Schema({
  title: {
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
  billable: {
    type: Boolean,
    default: false,
  },
  estimatedEffort: {
    type: Number,
    default: 1, // hours needed to complete
  },
  assignedTo: {
    type: [Number], // array of employeeID's
    default: [],
  },
});

let Task;
try {
  Task = mongoose.model('Task');
} catch (error) {
  Task = mongoose.model('Task', TaskSchema);
}

export default Task;
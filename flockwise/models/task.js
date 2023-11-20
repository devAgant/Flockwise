
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
  assignedEmployees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee', // Make sure this matches the name of your Employee model
    },
  ],
});

let Task;
try {
  Task = mongoose.model('Task');
} catch (error) {
  Task = mongoose.model('Task', TaskSchema);
}

export default Task;
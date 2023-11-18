import { Schema, model, models } from 'mongoose';

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

const Task = models.Task || model("Task", TaskSchema);

export default Task;
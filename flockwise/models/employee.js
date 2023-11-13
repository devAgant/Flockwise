// Written by Evan

import { Schema, model } from 'mongoose';
import Task from './task'; // Import the Task model

const employeeSchema = new Schema({
  employeeID: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  assignedTasks: {
    type: [Task.schema],
    default: [],
  },
  workSchedule: {
    type: Schema.Types.ObjectId, // make another object for work schedule or implement however desired
    ref: 'WorkSchedule',
  },
  benefits: {
    type: Schema.Types.ObjectId, // make another object for benefits or implement however desired
    ref: 'BenefitsManagement',
  },
  accessLevel: {
    type: Number,
    default: 1,
  },
});

const Employee = model('Employee', employeeSchema);

export default Employee;
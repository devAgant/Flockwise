// Written by Evan and Arif

import { Schema, model, models } from 'mongoose';
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
  // workSchedule: {
  //   type: Schema.Types.ObjectId, // make another object for work schedule or implement however desired
  //   ref: 'WorkSchedule',
  // },
  // benefits: {
  //   type: [Benefits.schema], // make another object for benefits or implement however desired
  //   ref: 'BenefitsManagement',
  // },
  salary: {
    type: Number,
    default: 7.25,
  },
  accessLevel: {
    type: Number,
    default: 1, // 1 is for employees, 2 is for managers, 3 is for HR Staff
  },
});

const Employee = models.Employee || model('Employee', employeeSchema);

export default Employee;
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
  workSchedule: {
    type: [Shift.schema],
    default: [[new Date("2023-11-29T09:00:00"), new Date("2023-11-29T17:00:00")], 
      [new Date("2023-11-30T09:00:00"), new Date("2023-11-30T17:00:00")], 
      [new Date("2023-12-01T09:00:00"), new Date("2023-12-01T17:00:00")]], //still needs to be fixed
  },
  editReqs: {
    type: [EditReq.schema],
    default: [],
  },
  timeOffReqs: {
    type: [TimeOffReq.schema],
    default: [],
  },
  editReqsToApprove: { //if access > 1
    type: [EditReq.schema],
    default: [],
  },
  timeOffReqsToApprove: { //if access > 1
    type: [TimeOffReq.schema],
    default: [],
  },
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
import mongoose from 'mongoose';
import { connectToDB } from '@utils/database';
import Employee from '@models/employee';
import Task from '@models/task';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { selectedEmployee, selectedTask } = req.body;

    try {
      await connectToDB();

      // Find the employee by employeeID
      const employee = await Employee.findOne({ employeeID: selectedEmployee });

      if (!employee) {
        return res.status(404).json({ success: false, error: 'Employee not found' });
      }

      // Find the task by taskCode
      const task = await Task.findOne({ taskCode: selectedTask });

      if (!task) {
        return res.status(404).json({ success: false, error: 'Task not found' });
      }

      // Convert the task._id to a string
      const taskId = task._id.toString();

      // Push the taskId to the assignedTasks array
      employee.assignedTasks.push({ _id: taskId });

      await employee.save();

      // Respond with success
      return res.status(200).json({ success: true, message: 'Task assigned successfully' });
    } catch (error) {
      console.error('Error assigning task:', error);
      return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
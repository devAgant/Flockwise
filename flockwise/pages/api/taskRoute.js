// pages/api/taskRoute.js
// Written by Evan and Arif
import { connectToDB } from '@utils/database';
import Task from '@models/task'; // Your Task model

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDB(); // Ensure the database is connected

      let taskCode = await generateUniqueTaskCode();
      const taskData = { ...req.body, taskCode }; // Combine the generated task code with the request body
      const task = await Task.create(taskData); // Create a new task with the request body data
      res.status(201).json({ success: true, task });
      // res.status(200).json({ message: 'success' });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    } 
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const generateUniqueTaskCode = async () => {
    // -1 for sorting in decending order, findone will return the first document, so returns the largest current employee ID
    const lastTask = await Task.findOne().sort({ taskCode: -1 }); 
    if (lastTask) {
      return lastTask.taskCode + 1;
    } else {
      // If no employees exist yet, start with an initial value
      return 100000;
    }
  };


// Written by Evan

import { connectToDB } from '@utils/database';
import Task from '@models/task';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connectToDB();

      const taskId = req.query.taskId;
      const task = await Task.findById(taskId);

      if (!task) {
        return res.status(404).json({ success: false, error: 'Task not found' });
      }

      return res.status(200).json({ success: true, task });
    } catch (error) {
      console.error('Error fetching task:', error);
      return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
// Written by Evan

import { connectToDB } from '@utils/database';
import Task from '@models/task';

export default async function handler(req, res) {
  try {
    await connectToDB();
    const tasks = await Task.find({}, 'taskCode title');

    // Log the tasks to the console for debugging
    console.log('Tasks:', tasks);

    // Ensure that the tasks array is structured properly
    const formattedTasks = tasks.map((task) => ({
      value: task.taskCode,
      label: task.title,
    }));

    res.status(200).json({ success: true, tasks: formattedTasks });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

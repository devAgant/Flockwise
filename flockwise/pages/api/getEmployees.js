// Written by Evan

import { connectToDB } from '@utils/database';
import Employee from '@models/employee';

export default async function handler(req, res) {
  try {
    await connectToDB();
    const employees = await Employee.find({}, 'employeeID name');

    // Ensure that the employees array is structured properly
    const formattedEmployees = employees.map((employee) => ({
      value: employee.employeeID,
      label: employee.name,
    }));

    res.status(200).json(formattedEmployees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
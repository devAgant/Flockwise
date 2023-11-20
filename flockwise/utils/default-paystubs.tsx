// Written by Elijah Simmons

import Paystub from '@models/paystub';

interface PaystubData {
  employeeID: number;
  hoursWorked: number;
  hourlyRate: number;
  date: Date;
  amount: number;
}

const generateSamplePaystubs = (employeeID: number): PaystubData[] => {
  const paystubs: PaystubData[] = [];

  for (let i = 0; i < 5; i++) {
    
    const hoursWorked = Math.floor(Math.random() * 50) + 150; // Random between 150 and 200
    const hourlyRate = 7.25; // Default hourly rate
    const amount = hoursWorked * hourlyRate;

    // Set the date to the current date and add i days to it
    const date = new Date();
    date.setDate(date.getDate() - (i * 31));

    const paystub: PaystubData = {
      employeeID: employeeID,
      hoursWorked: hoursWorked,
      hourlyRate: hourlyRate,
      date: date,
      amount: amount,
    };

    paystubs.push(paystub);
  }
  return paystubs;
};

export default generateSamplePaystubs;

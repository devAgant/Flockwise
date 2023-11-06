// File written by Elijah Simmons

import React from 'react';

const viewPayStubs = () => {
  // For now, we just hard code them, but for final product retrieve the paystubs information from the database :)
  // Not sure what the final paystub formats will be so i kept it simple to keep things short
  const paystubs = [
    {
      month: 'July 2023',
      amount: 5000,
    },
    {
      month: 'August 2023',
      amount: 5000,
    },
    {
      month: 'September 2023',
      amount: 5000,
    },
    {
      month: 'October 2023',
      amount: 5000,
    },
    {
      month: 'November 2023',
      amount: 5000,
    },
    {
      month: 'December 2023',
      amount: 5000,
    },
    
  ];

  return paystubs;
};


const exportPayStub = () => {
  // There is likely some oversights here but this is just a super super basic outline for what it might look like
  // Hard-coded sample paystub data
  const paystub = {
    employeeName: 'John Doe',
    employeeID: '12345',
    payPeriod: 'Month 2023',
    hoursWorked: 160,
    hourlyRate: 30.0,
    grossPay: 4800.0,
    deductions: 800.0,
    netPay: 4000.0,
  };

  // Format the paystub data
  const formattedPayStub = `
    Employee Name: ${paystub.employeeName}
    Employee ID: ${paystub.employeeID}
    Pay Period: ${paystub.payPeriod}
    Hours Worked: ${paystub.hoursWorked}
    Hourly Rate: $${paystub.hourlyRate}
    Gross Pay: $${paystub.grossPay}
    Deductions: $${paystub.deductions}
    Net Pay: $${paystub.netPay}
  `;

  // Save formattedPayStub as a text file
  const blob = new Blob([formattedPayStub], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `paystub_${paystub.employeeID}_${paystub.payPeriod.replace(/\s/g, '_')}.txt`;
  a.click();
  URL.revokeObjectURL(url);
};

export { exportPayStub, viewPayStubs };

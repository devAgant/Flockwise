// SelctedPaystub.js

import React from 'react';

interface Paystub {
  employeeID: number;
  hoursWorked: number;
  hourlyRate: number;
  date: Date;
  amount: number;
}

interface SelectedPaystubProps {
  paystubs?: Paystub[] | null;
  selectedPaystub: number | null;
}

const SelectedPaystub: React.FC<SelectedPaystubProps> = ({ paystubs, selectedPaystub }) => {
  if (!paystubs) {
    return <p data-cy="selected-paystub">No paystubs available</p>;
  }

  if (selectedPaystub === null || selectedPaystub < 0 || selectedPaystub >= paystubs.length) {
    return <p data-cy="selected-paystub">Invalid paystub index</p>;
  }

  const selectedPaystubData = paystubs[selectedPaystub];
  const dateObject = new Date(selectedPaystubData.date);
  const month = dateObject.toLocaleString('en-US', { month: 'long' });
  const year = dateObject.getFullYear();

  return (
    <div data-cy="selected-paystub">
      <h2 className="text-xl font-bold mb-2">Paystub Details</h2>
      <p><strong>Employee ID:</strong> {selectedPaystubData.employeeID}</p>
      <p><strong>Date:</strong> {`${month} ${year}`}</p>
      <p><strong>Hours Worked:</strong> {selectedPaystubData.hoursWorked}</p>
      <p><strong>Hourly Rate:</strong> {selectedPaystubData.hourlyRate}</p>
      <p><strong>Total Pay:</strong> ${selectedPaystubData.amount}</p>
    </div>
  );
};

export default SelectedPaystub;
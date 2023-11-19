// File written by Elijah Simmons

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import SessionManager from '@models/sessionManager';

const getPayStubs = () => {

  const { data: session } = useSession();

  useEffect(() => {
    SessionManager.setSession(session);
  }, [session]);

  const paystubs = session?.user?.employee?.paystubs;

  if (paystubs === undefined) {
    console.log('Error: paystubs is undefined');
    return [];    
  }

  console.log(paystubs);
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

const ViewPayStubs = () => {
  const [selectedPaystub, setSelectedPaystub] = useState(null);

  const paystubs = getPayStubs();

  const handlePaystubSelect = (index) => {
    setSelectedPaystub(index);
  };
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Paystubs</h2>
      <div className="max-h-60 overflow-y-auto border rounded border-gray-300 p-4 mb-5">
        <ul className="divide-y">
          {paystubs.length === 0 && ( 
            <div className="text-center">
              <p className="text-gray-600 mb-4">No paystubs available</p>
            </div>
          )}
          {paystubs.map((paystub, index) => (
            <div
              key={index}
              onClick={() => handlePaystubSelect(index)}
              className={`flex justify-between p-2 cursor-pointer relative ${selectedPaystub === index ? 'blue_gradient ' : ''}`}
            >
              <div>
                <div className="mr-2">{paystub.month} - ${paystub.amount}</div>
              </div>
              <div className="text-right">
                <button onClick={() => handlePaystubSelect(index)} className="outline_btn">
                  Select
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
      {selectedPaystub !== null && (
        <div>
          <div className="flex justify-between">
            <h3 className="text-xl font-bold mt-4 mb-2">
              Details for {paystubs[selectedPaystub].month}
            </h3>
            <button onClick={() => exportPayStub()} className="outline_btn m-2">
              Export
            </button>
          </div>
          <p><strong>Employee ID:</strong> {paystubs[selectedPaystub].employeeID}</p>
          <p><strong>Date:</strong> {paystubs[selectedPaystub].date}</p>
          <p><strong>Hours Worked:</strong> {paystubs[selectedPaystub].hoursWorked}</p>
          <p><strong>Hourly Rate:</strong> {paystubs[selectedPaystub].salary}</p>
          <p><strong>Total Pay:</strong> {paystubs[selectedPaystub].amount}</p>
        </div>
      )}
    </div>
  );
};
export default ViewPayStubs;
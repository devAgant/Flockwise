// File written by Elijah Simmons

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import SessionManager from '@models/sessionManager';
import SelectedPaystub from './selected-paystub';

const ViewPayStubs = () => {
  const [selectedPaystub, setSelectedPaystub] = useState(null);

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
    return paystubs;
  };

  const exportPayStub = (selectedPaystub) => {
    // Check if selectedPaystub is not null and is a valid index
    if (selectedPaystub === null || selectedPaystub < 0 || selectedPaystub >= paystubs.length) {
      console.error('Invalid paystub selection');
      return;
    }
  
    // Retrieve the selected paystub
    const paystub = paystubs[selectedPaystub];
  
    const dateObject = new Date(paystub.date);

    // Get the month and year
    const month = dateObject.toLocaleString('en-US', { month: 'long' });
    const year = dateObject.getFullYear();

    // Format the paystub data
    const formattedPayStub = `
      Employee ID: ${paystub.employeeID}
      Date: ${month} ${year}
      Hours Worked: ${paystub.hoursWorked}
      Hourly Rate: $${paystub.hourlyRate}
      Amount: $${paystub.amount}
    `;
  
    // Save formattedPayStub as a text file
    const blob = new Blob([formattedPayStub], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `paystub_${paystub.employeeID}_${month}_${year}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const paystubs = getPayStubs();


  const handlePaystubSelect = (index) => {
    setSelectedPaystub(index);
  };

  const handleExportPaystub = () => {
    exportPayStub(selectedPaystub);
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
          {paystubs.map((paystub, index) => {
            const dateObject = new Date(paystub.date);

            // Get the month and year
            const month = dateObject.toLocaleString('en-US', { month: 'long' });
            const year = dateObject.getFullYear();

            return (
              <div
                key={index}
                onClick={() => handlePaystubSelect(index)}
                className={`flex justify-between p-2 cursor-pointer relative ${selectedPaystub === index ? 'blue_gradient ' : ''}`}
              >
                <div>
                  <div className="mr-2">
                    {`${month} ${year}`} - ${paystub.amount}
                  </div>
                </div>
                <div className="text-right">
                  <button onClick={() => handlePaystubSelect(index)} className="outline_btn">
                    Select
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
      {selectedPaystub !== null && (
        <div className="mb-4 flex justify-between items-center">
          <SelectedPaystub paystubs={paystubs} selectedPaystub={selectedPaystub} />
          <button onClick={() => handleExportPaystub(selectedPaystub)} className="outline_btn">
            Export Paystub
          </button>
        </div>
      )}
    </div>
  );
};
export default ViewPayStubs;
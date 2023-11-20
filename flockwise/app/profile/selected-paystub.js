import React from 'react';

// Assuming you have the paystubs array and the selectedPaystub index

const SelctedPaystub = ({ paystubs, selectedPaystub }) => {
    // Check if selectedPaystub is null or a valid index
    if (selectedPaystub === null) {
        return <p>No paystub selected</p>;
    } else if (selectedPaystub < 0 || selectedPaystub >= paystubs.length) {
        return <p>Invalid paystub index</p>;
    }

    // Retrieve the selected paystub
    const selectedPaystubData = paystubs[selectedPaystub];

    // Create a Date object from the paystub date
    const dateObject = new Date(selectedPaystubData.date);

    // Get the month and year
    const month = dateObject.toLocaleString('en-US', { month: 'long' });
    const year = dateObject.getFullYear();

    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Paystub Details</h2>
            <p><strong>Employee ID:</strong> {selectedPaystubData.employeeID}</p>
            <p><strong>Date:</strong> {`${month} ${year}`}</p>
            <p><strong>Hours Worked:</strong> {selectedPaystubData.hoursWorked}</p>
            <p><strong>Hourly Rate:</strong> {selectedPaystubData.hourlyRate}</p>
            <p><strong>Total Pay:</strong> ${selectedPaystubData.amount}</p>
        </div>
    );
};

export default SelctedPaystub;

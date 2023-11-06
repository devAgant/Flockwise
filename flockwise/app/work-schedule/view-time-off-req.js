// created by Isabella Pereira

import React, { useState } from 'react';

const ViewTimeOffRequests = () => {
    const [selectedTimeOffReq, setSelectedTimeOffReq] = useState(null);

    const timeOffReqs = [
        {
            id: 1,
            begin: "10/30/2023",
            end: "11/2/2023",
            notes: "Vacation",
            employee: "Employee 1",
        },
        {
            id: 2, 
            begin: "11/15/2023",
            end: "11/30/2023",
            notes: "",
            employee: "Employee 2",
        },
    ];

    const handleTimeOffRequestClick = (timeOffReq) => {
        setSelectedTimeOffReq(timeOffReq);
    };

    const handleApproveClick = () => {
        //
    };

    const handleRejectClick = () => {
        //
    };

    const containerStyles = {
        display: 'flex',
        width: '100%',
    };

    const reqListStyles = {
        width: '40%',
        overflowY: 'scroll',
        border: '1px solid #ccc',
        padding: '10px',
        background: '#f2f2f2',
        margin: '0 10px 0 0',
    };

    const reqDetailsStyles = {
        width: '70%',
        padding: '10px',
        textAlign: 'left',
        margin: '0 0 0 80px',
    };

    const buttonStyles = {
        padding: '10px 20px',
        border: '1px solid #ccc',
        background: 'transparent',
        color: '#000',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '30px',
    };

    return(
        <div>
            <div style={containerStyles}>
                <div style={reqListStyles}>
                    {timeOffReqs.map((timeOffReq) => (
                        <div
                            key={timeOffReq.id}
                            onClick={() => handleTimeOffRequestClick(timeOffReq)}
                            style={{ cursor: 'pointer', padding: '5px' }}
                        >
                            {timeOffReq.employee}
                        </div>
                    ))}
                </div>
                <div style={reqDetailsStyles}>
                    {selectedTimeOffReq ? (
                        <div>
                            <p>
                                <b>Start Date:</b> {selectedTimeOffReq.begin}
                            </p>
                            <p>
                                <b>End Date:</b> {selectedTimeOffReq.end}
                            </p>
                            <p>
                                <b>Notes:</b> {selectedTimeOffReq.notes}
                            </p>
                            <p>
                                <b>Employee:</b> {selectedTimeOffReq.employee}
                            </p>
                            <button type="submit" style={buttonStyles} onClick={handleApproveClick}>Approve Time Off</button>
                            <button type="submit" style={buttonStyles} onClick={handleRejectClick}>Reject Time Off</button>
                        </div>
                    ) : (
                        <div>Select a request to view</div>
                    )}
                </div>
            </div>       
        </div>
    );
};

export default ViewTimeOffRequests;
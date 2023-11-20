// created by Isabella Pereira

import React, {useState} from 'react';

const ViewEditRequests = () => {
    const [selectedEditReq, setSelectedEditReq] = useState(null);

    const editReqs = [
        {
            id: 1, 
            newClockIn: "10/30/2023, 6:30 AM",
            newClockOut: "10/30/2023, 1:15 PM",
            employee: "Employee 1",
            reason: "Forgot to clock out.",
        },
        {
            id: 2,
            newClockIn: "10/31/2023, 10:52 AM",
            newClockOut: "10/31/2023, 4:45 PM",
            employee: "Employee 2",
            reason: "Internet was out.",
        },
    ];

    const handleEditRequestClick = (editReq) => {
        setSelectedEditReq(editReq);
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
                    {editReqs.map((editReq) => (
                        <div
                            key={editReq.id}
                            onClick={() => handleEditRequestClick(editReq)}
                            style={{cursor: 'pointer', padding: '5px'}}
                        >
                            {editReq.employee}
                        </div>
                    ))}
                </div>
                <div style={reqDetailsStyles}>
                    {selectedEditReq ? (
                        <div> 
                            <p>
                                <b>Employee:</b> {selectedEditReq.employee}
                            </p>
                            <p>
                                <b>New Clock In Time:</b> {selectedEditReq.newClockIn}
                            </p>
                            <p>
                                <b>New Clock Out Time:</b> {selectedEditReq.newClockOut}
                            </p>
                            <p>
                                <b>Reason For Change:</b> {selectedEditReq.reason}
                            </p>
                            <button type="submit" style={buttonStyles} onClick={handleApproveClick}>Approve Edit</button>
                            <button type="submit" style={buttonStyles} onClick={handleRejectClick}>Reject Edit</button>
                        </div>
                    ) : (
                        <div>Select a request to view</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ViewEditRequests;
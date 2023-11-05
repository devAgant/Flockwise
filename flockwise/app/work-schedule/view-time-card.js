import React, { useState } from 'react';
import RequestEdit from './request-edit';

const ViewTimeCard = () => {
    const [activeComponent, setActiveComponent] = useState(null);
    const [selectedShift, setSelectedShift] = useState(null);
    const edit_button = document.getElementById("edit-button");

    /*edit_button.addEventListener("click", function() {
        //
      } );*/

    const shifts = [
        {
            clockInDate: "11/2/2023",
            clockInTime: "9:05 AM",
            clockOutDate: "11/2/2023",
            clockOutTime: "3:23 PM",
            id: 1,
        },
        {
            clockInDate: "11/3/2023",
            clockInTime: "11:30 AM",
            clockOutDate: "11/3/2023",
            clockOutTime: "4:15 PM",
            id: 2,
        },
        {
            clockInDate: "11/4/2023",
            clockInTime: "12:52 PM",
            clockOutDate: "11/4/2023",
            clockOutTime: "5:35 PM",
            id: 3,
        },
    ];

    const handleShiftClick = (shift) =>{
        setSelectedShift(shift);
    };

    const handleEditClick = () => {
        setActiveComponent('requestEdit');
    };

    const containerStyles = {
        display: 'flex',
        width: '100%',
    };

    const listStyles = {
        width: '40%',
        overflowY: 'scroll',
        border: '1px solid #ccc',
        padding: '10px',
        background: '#f2f2f2',
        margin: '0 10px 0 0',
    };
    
    const shiftDetailsStyles = {
        width: '90%',
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
                <div style={listStyles}>
                    {shifts.map((shift) => (
                        <div
                            key={shift.id}
                            onClick={() => handleShiftClick(shift)}
                            style={{ cursor: 'pointer', padding: '5px' }}
                        >
                            {shift.clockInDate}
                        </div>
                    ))}
                </div>
                <div style={shiftDetailsStyles}>
                    {selectedShift ? (
                        <div>
                            <p>
                                <b>Clock In Date:</b> {selectedShift.clockInDate}
                            </p>
                            <p>
                                <b>Clock In Time:</b> {selectedShift.clockInTime}
                            </p>
                            <p>
                                <b>Clock Out Date:</b> {selectedShift.clockOutDate}
                            </p>
                            <p>
                                <b>Clock Out Time:</b> {selectedShift.clockOutTime}
                            </p>
                            <button type="submit" style={buttonStyles} onClick={handleEditClick}>Request Edit</button>
                            {activeComponent === 'requestEdit' && <RequestEdit />}
                        </div>
                    ) : (
                        <div>Select a shift to view details</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ViewTimeCard;

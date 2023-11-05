import React,  { useState } from 'react';

const RequestEdit = () => {
    const [selectedShift, setSelectedShift] = useState(null);
    const [editReq, setEditReq] = useState({
        newClockInDate: '',
        newClockInTime: '',
        newClockOutDate: '',
        newClockOutTime: '',
        reason: '',
    });

    const handleShiftChange = (event) => {
        setSelectedShift(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTask({
            ...shift,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        ///add stuff
        console.log("New Edit Request:", editReq);
    };
    
    const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px', 
        maxWidth: '400px', 
        margin: '0 auto',
    };

    const labelStyles = {
        width: '100px',
        textAlign: 'left',
    };

    const inputContainerStyles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const inputStyles = {
        flex: 1,
        padding: '5px',
        width: '100%',
    };

    const buttonStyles = {
        padding: '10px 20px',
        border: '1px solid #ccc',
        background: 'transparent',
        color: '#000',
        cursor: 'pointer',
        fontSize: '16px',
    };

    return(
        <div>
            <form style={formStyles} onSubmit={handleSubmit}>
                <div style={inputContainerStyles}>
                    <label style={labelStyles}>New Clock In Date:</label>
                    <input
                        type="date"
                        name="newClockInDate"
                        value={editReq.newClockInDate}
                        onChange={handleInputChange}
                        style={inputStyles}
                    />
                </div>
                <div style={inputContainerStyles}>
                    <label style={labelStyles}>New Clock In Time:</label>
                    <input
                        type="time"
                        name="newClockInTime"
                        value={editReq.newClockInTime}
                        onChange={handleInputChange}
                        style={inputStyles}
                    />
                </div>
                <div style={inputContainerStyles}>
                    <label style={labelStyles}>New Clock Out Date:</label>
                    <input
                        type="date"
                        name="newClockOutDate"
                        value={editReq.newClockOutDate}
                        onChange={handleInputChange}
                        style={inputStyles}
                    />
                </div>
                <div style={inputContainerStyles}>
                    <label style={labelStyles}>New Clock Out Time:</label>
                    <input
                        type="time"
                        name="newClockOutTime"
                        value={editReq.newClockOutTime}
                        onChange={handleInputChange}
                        style={inputStyles}
                    />
                </div>
                <div style={inputContainerStyles}>
                    <label style={labelStyles}>Reason For Change:</label>
                    <input
                        type="text"
                        name="reason"
                        value={editReq.reason}
                        onChange={handleInputChange}
                        style={inputStyles}
                        />
                </div>
                <button type="submit" style={buttonStyles}>Request Edit</button>
            </form>
        </div>

    );
};

export default RequestEdit;
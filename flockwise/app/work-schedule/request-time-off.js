// created by Isabella Pereira

import React, { useState } from 'react';

const RequestTimeOff = () => {
    const [timeOffReq, setTimeOffReq] = useState({
        begin: '',
        end: '',
        notes: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTimeOffReq({
            ...timeOffReq,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('New Time Off Request:', timeOffReq);
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
        marginTop: '30px',
    };

    return (
        <div>
            <form style={formStyles} onSubmit={handleSubmit}>
                <div style={inputContainerStyles}>
                    <label style={labelStyles}>Time Off Start:</label>
                    <input  
                        type="date"
                        name="begin"
                        value={timeOffReq.begin}
                        onChange={handleInputChange}
                        style={inputStyles}
                    />
                </div>
                <div style={inputContainerStyles}>
                    <label style={labelStyles}>Time Off End:</label>
                    <input  
                        type="date"
                        name="end"
                        value={timeOffReq.end}
                        onChange={handleInputChange}
                        style={inputStyles}
                    />
                </div>
                
                <div style={inputContainerStyles}>
                    <label style={labelStyles}>Notes:</label>
                    <input
                        type="text"
                        name="notes"
                        value={timeOffReq.notes}
                        onChange={handleInputChange}
                        style={inputStyles}
                    />
                </div>
                <button type="submit" style={buttonStyles}>Submit</button>
            </form>
        </div>
    );
};

export default RequestTimeOff;

// created by Isabella Pereira

"use client";

import React, { useState, useEffect } from 'react';
import Task from '@models/task';
import { useSession } from 'next-auth/react';
import SessionManager from '@models/sessionManager';
import NextAuth from 'next-auth/next';
import { connectToDB } from '@utils/database';

const RequestTimeOff = () => {
    const { data: session } = useSession();

    useEffect(() => {
        SessionManager.setSession(session);
    }, [session]);

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
        event.preventDefault(); /*
        try {
            const response = await fetch('/api/timeOffRoute', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(timeOffReq),
            });
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const responseData = await response.json();
            console.log('Time off requested:', responseData);
            // Reset form or handle success (e.g., display success message, navigate to another page)
            setTask({ start: '', end: '', notes: '' });
          } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., display error message)
          }*/
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

// created by Isabella Pereira
"use client";
import React, { useState } from 'react';
import ClockIn from './clock-in';
import ViewTimeCard from './view-time-card';
import RequestTimeOff from './request-time-off';
import ViewTimeOffRequests from './view-time-off-req';
import ViewEditRequests from './view-edit-req';

const WorkSchedule = () => { 
  var value = "Clock In";
  const [activeComponent, setActiveComponent] = useState<null | string>(null);
  const timekeepingStyles = {
    textAlign: 'center',
    padding: '20px',
  } as React.CSSProperties;

  const sectionStyles = {
    margin: '20px 50px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    flex: 1,
  };

  const containerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const handleClockInClick = () => {
    if(value=="Clock In") value="Clock Out";
    else value="Clock In";
    setActiveComponent('clockIn');
  };

  const handleViewTimeCardClick = () => {
    setActiveComponent('viewTimeCard');
  };

  const handleRequestTimeOffClick = () => {
    setActiveComponent('requestTimeOff');
  };

  const handleViewTimeOffRequestsClick = () => {
    setActiveComponent('viewTimeOffRequests');
  };

  const handleViewEditRequestsClick = () => {
    setActiveComponent('viewEditRequests');
  }

  return (
    <div style={timekeepingStyles}>
      <h1>Work Schedule</h1>

      <div style={containerStyles}>
        <div style={sectionStyles} onClick={handleClockInClick}>
          <h2>{value}</h2>
        </div>

        <div style={sectionStyles} onClick={handleViewTimeCardClick}>
          <h2>View Time Card</h2>
        </div>

        <div style={sectionStyles} onClick={handleRequestTimeOffClick}>
          <h2>Request Time Off</h2>
        </div>

        <div style={sectionStyles} onClick={handleViewTimeOffRequestsClick}>
          <h2>View Time Off Requests</h2>
        </div>

        <div style={sectionStyles} onClick={handleViewEditRequestsClick}>
          <h2>View Edit Requests</h2>
        </div>
      </div>

      {activeComponent === 'clockIn' && <ClockIn />}
      {activeComponent === 'viewTimeCard' && <ViewTimeCard />}
      {activeComponent === 'requestTimeOff' && <RequestTimeOff />}
      {activeComponent === 'viewTimeOffRequests' && <ViewTimeOffRequests />}
      {activeComponent === 'viewEditRequests' && <ViewEditRequests />}
    </div>
  );
};

export default WorkSchedule;
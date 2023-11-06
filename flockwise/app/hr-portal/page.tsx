"use client"

import React, { useState } from 'react';
import VerifyHR from './manager-check';

const HrPortal = () => {
  const taskManagerStyles = {
    textAlign: 'center',
    padding: '20px',
  } as React.CSSProperties;

  const headingStyles = {
    fontSize: '32px', 
    marginBottom: '30px',
  } as React.CSSProperties;

  return (
    <div style={taskManagerStyles}>
      <h1 style={headingStyles}>HR Portal</h1>
      <VerifyHR />
    </div>
  );
};

export default HrPortal;

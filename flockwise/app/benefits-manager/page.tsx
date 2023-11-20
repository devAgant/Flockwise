// Viraaj Veeramachaneni's Code
"use client";

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import AssignBenefit from './AssignBenefit';
import ViewBenefits from './ViewBenefits';

const BenefitsManager = () => {
  const { data: session } = useSession();
  const [activeComponent, setActiveComponent] = useState<null | string>(null);

  const managerStyles: React.CSSProperties = {
    textAlign: 'center',
    padding: '20px',
  };

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

  return (
    <div style={managerStyles}>
      <h1>Benefits Manager</h1>

      <div style={containerStyles}>
        <div style={sectionStyles} onClick={() => setActiveComponent('viewBenefits')}>
          <h2>View Benefits</h2>
        </div>

        <div style={sectionStyles} onClick={() => setActiveComponent('assignBenefits')}>
          <h2>Assign Benefits</h2>
        </div>
      </div>

      {activeComponent === 'viewBenefits' && <ViewBenefits />}
      {activeComponent === 'assignBenefits' && <AssignBenefit />}
    </div>
  );
};

export default BenefitsManager;

import React, { useState } from 'react';

// Style objects
const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '5px',
    width: '80%',
    margin: '0 auto',
    marginTop: '50px',
  },
  backButton: {
    padding: '5px 15px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  title: {
    margin: '0',
    marginBottom: '10px',
  },
  policyItem: {
    margin: '20px 0',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    padding: '5px 15px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50', // Green
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
  inactiveButton: {
    backgroundColor: '#ddd', // Grey
    color: '#666',
  },
};

// The CompanyPolicies component
const CompanyPolicies = ({onBack}) => {
  const [policies, setPolicies] = useState({
    'Reason for Starting Company': true,
    'Companies Mission': true,
    'Companies Core Values': false,
    'Company Dress Code': false,
    'Company Policies': false,
  });

  // Function to handle button clicks
  const handleButtonClick = (policy) => {
    setPolicies((prevPolicies) => ({
      ...prevPolicies,
      [policy]: true, // Set the policy to 'finished' (true)
    }));
  };

  // Function to render policy buttons
  const renderPolicy = (policy, isCompleted) => {
    return (
      <div key={policy} style={styles.policyItem}>
        <span>{policy}</span>
        <button
          style={isCompleted ? styles.button : { ...styles.button, ...styles.inactiveButton }}
          onClick={() => handleButtonClick(policy)}
          disabled={isCompleted}
        >
          {isCompleted ? 'Finished' : 'Click to start'}
        </button>
      </div>
    );
  };

  const buttonStyle = {
    border: '1px solid #333',
    padding: '10px 20px',      
    borderRadius: '4px',
  };

  return (
    <div style={styles.container}>
      <button style={buttonStyle} onClick={onBack}>Back</button>
      <h1 style={styles.title}>Virtual Orientation and Company Policies</h1>
      {Object.entries(policies).map(([policy, isCompleted]) => renderPolicy(policy, isCompleted))}
    </div>
  );
};

export default CompanyPolicies;

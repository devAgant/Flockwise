 "use client";
import React, { useState } from 'react';
import CompanyPolicies from './CompanyPolicies'; // Import CompanyPolicies component

const styles = {
  app: {
    textAlign: 'center',
  },
  header: {
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
  },
  onboardingStep: {
    margin: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  onboardingTitle: {
    margin: '0',
    marginBottom: '10px',
  },
  button: {
    padding: '5px 15px',
    marginTop: '5px',
    cursor: 'pointer',
  },
};

function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState('');

  const handleStartClick = (step) => {
    setCurrentStep(step);
  };

  const goBack = () => {
    setCurrentStep('');
  };

  if (currentStep === 'orientation') {
    // Pass the goBack function as a prop to the CompanyPolicies component
    return <CompanyPolicies onBack={goBack} />;
  }

  const buttonStyle = {
    border: '1px solid #333',
    padding: '10px 20px',      
    borderRadius: '4px',
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1>Onboarding Materials</h1>
        <div style={styles.onboardingStep}>
          <h2 style={styles.onboardingTitle}>
            Virtual Orientation and Company Policies
          </h2>
          <button style={buttonStyle} onClick={() => handleStartClick('orientation')}>
            Click to continue
          </button>
        </div>
        <div style={styles.onboardingStep}>
          <h2 style={styles.onboardingTitle}>Technology Setup</h2>
          <button style={styles.button} onClick={() => {}}>
            Not Open Yet
          </button>
        </div>
        <div style={styles.onboardingStep}>
          <h2 style={styles.onboardingTitle}>Safety Training</h2>
          <button style={styles.button} onClick={() => {}}>
          Not Open Yet
          </button>
        </div>
      </header>
    </div>
  );
}

export default OnboardingPage;

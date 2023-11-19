// Viraaj Veeramachaneni's Code
"use client";

import React, { useState, CSSProperties } from 'react';
import NewEmployee from './NewEmployee';
import CurrentEmployee from './CurrentEmployee';
import Retirees from './Retirees';

const styles: Record<string, CSSProperties> = {
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
  card: {
    margin: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    display: 'inline-block',
    width: '250px',
  },
  cardTitle: {
    margin: '0',
    marginBottom: '10px',
  },
  button: {
    padding: '5px 15px',
    marginTop: '20px',
    cursor: 'pointer',
  },
};


const BenefitsManager = () => {
  const [currentPage, setCurrentPage] = useState('benefits');

  const handleStartNewEmployee = () => setCurrentPage('newEmployee');
  const handleStartCurrentEmployee = () => setCurrentPage('currentEmployee');
  const handleStartRetirees = () => setCurrentPage('retirees');

  const renderPage = () => {
    switch (currentPage) {
      case 'newEmployee':
        return <NewEmployee onBack={() => setCurrentPage('benefits')} />;
      case 'currentEmployee':
        return <CurrentEmployee onBack={() => setCurrentPage('benefits')} />;
      case 'retirees':
        return <Retirees onBack={() => setCurrentPage('benefits')} />;
      default:
        return renderDefault();
    }
  };

  const buttonStyle = {
    border: '1px solid #333',
    padding: '10px 20px',      
    borderRadius: '4px',
  };

  const renderDefault = () => (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1>Benefits and Wellness</h1>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>New Employee</h2>
          <button style={buttonStyle} onClick={handleStartNewEmployee}>
            Click to start
          </button>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Current Employee</h2>
          <button style={buttonStyle} onClick={handleStartCurrentEmployee}>
            Click to start
          </button>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Retirees</h2>
          <button style={buttonStyle} onClick={handleStartRetirees}>
            Click to update
          </button>
        </div>
      </header>
    </div>
  );

  return renderPage();
};

export default BenefitsManager;


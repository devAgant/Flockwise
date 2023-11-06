// Viraaj Veeramachaneni's Code
import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  backButton: {
    alignSelf: 'flex-start',
    margin: '10px',
    cursor: 'pointer',
    border: '1px solid #333',
    padding: '10px 20px',      
    borderRadius: '4px',
  },
  welcome: {
    margin: '20px 0',
    fontWeight: 'bold',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%', // You may want to set a max-width here
  },
  card: {
    border: '1px solid black',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    width: '200px', // Adjust width as necessary
    textAlign: 'center',
    cursor: 'pointer',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

const Retirees = ({ onBack }) => {

    const buttonStyle = {
        border: '1px solid #333',
        padding: '10px 20px',      
        borderRadius: '4px',
      };

  return (
    <div style={styles.container}>
      <div style={styles.backButton} onClick={onBack}>Back</div>
      <div style={styles.welcome}>Welcome Viraaj</div>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h2>Retirement Plans</h2>
          <button style={buttonStyle}>Click to update</button>
        </div>
        <div style={styles.card}>
          <h2>Life Changes</h2>
          <button style={buttonStyle}>Click to update</button>
        </div>
        <div style={styles.card}>
          <h2>401</h2>
          <button style={buttonStyle}>Click to update</button>
        </div>
        <div style={styles.card}>
          <h2>Pera</h2>
          <button style={buttonStyle}>Click to update</button>
        </div>
      </div>
    </div>
  );
};

export default Retirees;

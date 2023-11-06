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
  header: {
    margin: '20px 0',
    fontWeight: 'bold',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%', // Adjust max-width if necessary
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

const CurrentEmployee = ({ onBack }) => {
//   const handleUpdate = (benefit) => {
//     // Placeholder for whatever action needs to be taken when clicking on the update button
//     console.log(`Update for ${benefit}`);
//   };

  const buttonStyle = {
    border: '1px solid #333',
    padding: '10px 20px',      
    borderRadius: '4px',
  };

//   return (
//     <div style={styles.container}>
//       <div style={styles.backButton} onClick={onBack}>Back</div>
//       <div style={styles.header}>Welcome Viraaj</div>
//       <div style={styles.cardContainer}>
//         <div style={styles.card}>
//           <h2>Medical</h2>
//           <button style={buttonStyle} onClick={() => handleUpdate('Medical')}>Click to update</button>
//         </div>
//         <div style={styles.card}>
//           <h2>Dental</h2>
//           <button style={buttonStyle} onClick={() => handleUpdate('Dental')}>Click to update</button>
//         </div>
//         <div style={styles.card}>
//           <h2>Vision</h2>
//           <button style={buttonStyle} onClick={() => handleUpdate('Vision')}>Click to update</button>
//         </div>
//         <div style={styles.card}>
//           <h2>Disability</h2>
//           <button style={buttonStyle} onClick={() => handleUpdate('Disability')}>Click to update</button>
//         </div>
//       </div>
//     </div>
//   );

   return (
    <div style={styles.container}>
      <div style={styles.backButton} onClick={onBack}>Back</div>
      <div style={styles.header}>Welcome Viraaj</div>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h2>Medical</h2>
          <button style={buttonStyle}>Click to update</button>
        </div>
        <div style={styles.card}>
          <h2>Dental</h2>
          <button style={buttonStyle}>Click to update</button>
        </div>
        <div style={styles.card}>
          <h2>Vision</h2>
          <button style={buttonStyle}>Click to update</button>
        </div>
        <div style={styles.card}>
          <h2>Disability</h2>
          <button style={buttonStyle}>Click to update</button>
        </div>
      </div>
    </div>
  );
};

export default CurrentEmployee;

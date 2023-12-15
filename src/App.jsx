import React, { useState } from 'react';
import Detection from './Detection'; // Assuming Detection component is in a separate file

const App = () => {
  const [start, setStart] = useState(false);
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    color: '#fff',
    border: 'none',
    outline: 'none',
    fontWeight: 'bold',
    backgroundColor: start ? '#dc3545' : '#28a745', // Red for 'Stop', Green for 'Start'
  };
  return (
    <div className="App">
      <button 
      onClick={() => setStart(!start)}
      style={buttonStyle}
      >
        {start ? 'Stop' : 'Start'}
      </button>
      {start && <Detection />}
    </div>
  );
};

export default App;
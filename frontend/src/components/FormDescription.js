import React from 'react';

const FormDescription = ({ onClick, text1, text2 }) => {
  return (
    <div style={{ marginTop: '10px' }}>
      {text1}
      <span style={{ cursor: 'pointer', color: '#efb722' }} onClick={onClick}>
        {text2}
      </span>
    </div>
  );
};

export default FormDescription;

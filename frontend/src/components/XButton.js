import React from 'react';

const XButton = ({ onClick }) => {
  return (
    <div className='cross' onClick={onClick}>
      <div className='crossline'></div>
      <div className='crossline'></div>
    </div>
  );
};

export default XButton;

import React from 'react';

const LogoutButton = ({ onClick }) => {
  return (
    <section className='login'>
      <h1>Expensee</h1>
      <div className='RegisterLogin'>
        <div onClick={onClick}>LOGOUT</div>
      </div>
    </section>
  );
};

export default LogoutButton;

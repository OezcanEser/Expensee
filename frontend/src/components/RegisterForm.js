import React from 'react';

const RegisterForm = ({ submitForm, children }) => {
  return (
    <div className='RegisterForm'>
      <form onSubmit={submitForm}>
        {children}
        <input type='submit' value='SUBMIT' />
      </form>
    </div>
  );
};

export default RegisterForm;

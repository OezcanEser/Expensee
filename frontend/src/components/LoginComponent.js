import React from 'react';
import RegisterForm from './RegisterForm';
import CustomInput from './CustomInput';

const LoginComponent = ({
  handleLogin,
  email,
  password,
  handleChange,
  onClick,
}) => {
  return (
    <>
      <RegisterForm submitForm={handleLogin}>
        <CustomInput
          placeholder='Email'
          name='email'
          value={email}
          handleChange={handleChange}
        />
        <CustomInput
          placeholder='Password'
          name='password'
          value={password}
          handleChange={handleChange}
          type='password'
        />
      </RegisterForm>
      <div style={{ marginTop: '10px' }}>
        Don't have an Account?{' '}
        <span style={{ cursor: 'pointer', color: '#efb722' }} onClick={onClick}>
          Register here
        </span>
      </div>
    </>
  );
};

export default LoginComponent;

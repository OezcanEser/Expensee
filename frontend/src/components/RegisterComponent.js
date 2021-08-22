import React from 'react';
import RegisterForm from './RegisterForm';
import CustomInput from './CustomInput';

const RegisterComponent = ({
  username,
  email,
  password,
  password2,
  handleChange,
  handleRegister,
  onClick,
}) => {
  return (
    <>
      <RegisterForm submitForm={handleRegister}>
        <CustomInput
          placeholder='Username'
          name='username'
          value={username}
          handleChange={handleChange}
        />
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
        <CustomInput
          placeholder='Repeat Password'
          name='password2'
          value={password2}
          handleChange={handleChange}
          type='password'
        />
      </RegisterForm>
      <div style={{ marginTop: '10px' }}>
        Already have an account?{' '}
        <span style={{ cursor: 'pointer', color: '#efb722' }} onClick={onClick}>
          Login here
        </span>
      </div>
    </>
  );
};

export default RegisterComponent;

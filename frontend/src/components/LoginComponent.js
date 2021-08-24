import React from 'react';
import RegisterForm from './RegisterForm';
import CustomInput from './CustomInput';
import FormDescription from './FormDescription';

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
      <FormDescription
        text1="Don't have an Account? "
        text2='Register here'
        onClick={onClick}
      />
    </>
  );
};

export default LoginComponent;

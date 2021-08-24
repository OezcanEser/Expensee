import React from 'react';
import RegisterForm from './RegisterForm';
import CustomInput from './CustomInput';
import FormDescription from './FormDescription';

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
      <FormDescription
        text1='Already have an account? '
        text2='Login here'
        onClick={onClick}
      />
    </>
  );
};

export default RegisterComponent;

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import RegisterForm from './RegisterForm';
import CustomInput from './CustomInput';

const Login = () => {
  const history = useHistory();

  const [showForm, setShowForm] = useState(false);
  const [register, setRegister] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleChange = (e) => {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let dataToSave = {
      ...userData,
    };
    try {
      if (userData.password !== userData.password2) {
        throw new Error('Password does not match!');
      }

      let { data } = await axios.post('/user/register', dataToSave);

      if (data.user) {
        window.sessionStorage.clear();

        window.sessionStorage.setItem('user', JSON.stringify(data.user));
        history.push('/home');
      }
    } catch (error) {
      setError(
        error.response.data.mesage
          ? error.response.data.message
          : error.response
          ? error.response.statusText
          : error.message
      );
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let dataToSave = {
      email: userData.email,
      password: userData.password,
    };
    try {
      let { data } = await axios.post('/user/login', dataToSave);

      if (data.user) {
        window.sessionStorage.clear();

        window.sessionStorage.setItem('user', JSON.stringify(data.user));
        history.push('/home');
      }
    } catch (error) {
      setError(
        error.response.data.mesage
          ? error.response.data.message
          : error.response
          ? error.response.statusText
          : error.message
      );
    }
  };

  console.log(error);

  let registerForm = register && (
    <>
      <RegisterForm submitForm={handleSubmit}>
        <CustomInput
          placeholder='Username'
          name='username'
          value={userData.username}
          handleChange={handleChange}
        />
        <CustomInput
          placeholder='Email'
          name='email'
          value={userData.email}
          handleChange={handleChange}
        />
        <CustomInput
          placeholder='Password'
          name='password'
          value={userData.password}
          handleChange={handleChange}
          type='password'
        />
        <CustomInput
          placeholder='Repeat Password'
          name='password2'
          value={userData.password2}
          handleChange={handleChange}
          type='password'
        />
      </RegisterForm>
      <div style={{ marginTop: '10px' }}>
        Already have an account?{' '}
        <span
          style={{ cursor: 'pointer', color: '#efb722' }}
          onClick={() => setRegister(false)}
        >
          Login here
        </span>
      </div>
    </>
  );

  let loginForm = !register && (
    <>
      <RegisterForm submitForm={handleLogin}>
        <CustomInput
          placeholder='Email'
          name='email'
          value={userData.email}
          handleChange={handleChange}
        />
        <CustomInput
          placeholder='Password'
          name='password'
          value={userData.password}
          handleChange={handleChange}
          type='password'
        />
      </RegisterForm>
      <div style={{ marginTop: '10px' }}>
        Don't have an Account?{' '}
        <span
          style={{ cursor: 'pointer', color: '#efb722' }}
          onClick={() => setRegister(true)}
        >
          Register here
        </span>
      </div>
    </>
  );

  return (
    <section className='login'>
      <h1>Expensee</h1>

      {!showForm && (
        <div className='RegisterLogin'>
          <div
            onClick={() => {
              setShowForm(true);
              setRegister(true);
            }}
          >
            REGISTER
          </div>
          <div
            onClick={() => {
              setShowForm(true);
              setRegister(false);
            }}
          >
            LOGIN
          </div>
        </div>
      )}
      {showForm && registerForm}
      {showForm && loginForm}
    </section>
  );
};

export default Login;

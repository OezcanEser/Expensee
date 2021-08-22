import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import RegisterForm from './RegisterForm';
import CustomInput from './CustomInput';
import { errorResponseMessage } from '../utils/errorResponseMessage';
import Error from './ModalError';

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

  useEffect(() => {
    let close;
    if (error) {
      close = setTimeout(() => {
        setError(null);
      }, 3000);
    }
    return () => clearTimeout(close);
  }, [error]);

  const handleChange = (e) => {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleRegister = async (e) => {
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
      setError(errorResponseMessage(error));
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
      setError(errorResponseMessage(error));
    }
  };

  const handleClose = () => {
    setError(null);
  };

  let registerForm = register && (
    <>
      <RegisterForm submitForm={handleRegister}>
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
      <Error open={error ? true : false} error={error} onClose={handleClose} />
    </section>
  );
};

export default Login;

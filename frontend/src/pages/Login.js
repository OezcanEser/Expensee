import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { errorResponseMessage } from '../utils/errorResponseMessage';
import Error from '../components/ModalError';
import LoginComponent from '../components/LoginComponent';
import RegisterComponent from '../components/RegisterComponent';

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
      console.log(error.response);
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
    <RegisterComponent
      username={userData.username}
      email={userData.email}
      password={userData.password}
      password2={userData.password2}
      handleRegister={handleRegister}
      handleChange={handleChange}
      onClick={() => setRegister(false)}
    />
  );

  let loginForm = !register && (
    <LoginComponent
      email={userData.email}
      password={userData.password}
      handleLogin={handleLogin}
      onClick={() => setRegister(true)}
      handleChange={handleChange}
    />
  );

  console.log(userData);

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

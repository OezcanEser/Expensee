import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let dataToSave = {
      username,
      email,
      password,
    };
    try {
      let { data } = await axios.post('/user/register', dataToSave);

      if (data.user) {
        window.sessionStorage.clear();

        window.sessionStorage.setItem('user', JSON.stringify(data.user));
        history.push('/home');
      }
    } catch (error) {
      console.log(error.response ? error.response.data.message : error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let dataToSave = {
      email,
      password,
    };
    try {
      let { data } = await axios.post('/user/login', dataToSave);

      if (data.user) {
        window.sessionStorage.clear();

        window.sessionStorage.setItem('user', JSON.stringify(data.user));
        history.push('/home');
      }
    } catch (error) {
      console.log(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <section className='login'>
      <h1>Expensee</h1>
      {/* <a href='http://127.0.0.1:5000/user/auth/google'> Login mit Google</a> */}

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type='text'
          name='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type='submit' value='Submit' />
      </form>

      <form onSubmit={(e) => handleLogin(e)}>
        <input
          type='text'
          name='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type='submit' value='Submit' />
      </form>
    </section>
  );
};

export default Login;

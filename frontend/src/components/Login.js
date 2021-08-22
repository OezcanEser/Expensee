import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginUser } from '../state/actions/user';
import { removeError } from '../state/actions/removeError';
import Error from './ModalError';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.userReducer);

  const [showForm, setShowForm] = useState(false);
  const [register, setRegister] = useState(true);
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
        dispatch(removeError);
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

    dispatch(
      registerUser(
        userData.username,
        userData.email,
        userData.password,
        userData.password2,
        history
      )
    );
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginUser(userData.email, userData.password, history));
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
      <Error
        open={error ? true : false}
        error={error}
        onClose={() => dispatch(removeError)}
      />
    </section>
  );
};

export default Login;

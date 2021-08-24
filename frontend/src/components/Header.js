import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import axios from 'axios';
import Error from '../components/ModalError';
import BurgerMenu from './BurgerMenu';
import XButton from './XButton';
import { headerData } from '../data/headerData';
import { errorResponseMessage } from '../utils/errorResponseMessage';

const Header = (props) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpen(false));

  const logoutUser = async () => {
    try {
      let { data } = await axios.get('/user/logout');
      if (data.success) {
        sessionStorage.clear();
        history.push('/');
      }
    } catch (error) {
      setError(errorResponseMessage(error));
    }
  };

  useEffect(() => {
    let close;
    if (error) {
      close = setTimeout(() => {
        setError(null);
      }, 3000);
    }
    return () => clearTimeout(close);
  }, [error]);

  const handleClose = () => {
    setError(null);
  };

  return (
    <header>
      <section className='menu'>
        <BurgerMenu title={props.title} onClick={() => setIsOpen(!isOpen)} />
        <nav className={isOpen ? 'open' : 'closeNav'} ref={ref}>
          <XButton onClick={() => setIsOpen(false)} />
          <ul>
            {headerData.map((item) => {
              return (
                <li key={Math.random()}>
                  <Link to={item.to} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              );
            })}

            <li>
              <span
                onClick={() => {
                  setIsOpen(false);
                  logoutUser();
                }}
              >
                {' '}
                Logout
              </span>
            </li>
          </ul>
        </nav>
      </section>

      <Error open={error ? true : false} error={error} onClose={handleClose} />
    </header>
  );
};

export default Header;

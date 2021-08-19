import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpen(false));
  return (
    <header>
      <section className='menu'>
        <div className='headBurger'>
          <div className='burgerMenu' onClick={() => setIsOpen(!isOpen)}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          <h1>{props.title}</h1>
        </div>
        <nav className={isOpen ? 'open' : 'closeNav'} ref={ref}>
          <div className='cross' onClick={() => setIsOpen(false)}>
            <div className='crossline'></div>
            <div className='crossline'></div>
          </div>
          <ul>
            <li>
              <Link to='/home' onClick={() => setIsOpen(false)}>
                {' '}
                Home
              </Link>
            </li>
            <li>
              <Link to='/turnovers' onClick={() => setIsOpen(false)}>
                {' '}
                Wallet
              </Link>
            </li>
            <li>
              <Link to='/charts' onClick={() => setIsOpen(false)}>
                {' '}
                Charts
              </Link>
            </li>
            <li>
              <Link to='/' onClick={() => setIsOpen(false)}>
                {' '}
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

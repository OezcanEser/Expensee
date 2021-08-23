import { NavLink, useHistory } from 'react-router-dom';
import { footerData } from '../data/foterData';

const Footer = () => {
  const history = useHistory();
  const myLocation = history.location.pathname;

  return (
    <footer className='footer'>
      <nav>
        <ul>
          {footerData.map((item, i) => {
            return (
              <li key={Math.random()}>
                <NavLink className={item.className} to={item.to}>
                  {item.location !== myLocation ? (
                    <img
                      src={`./img/nav-bild-${i + 1}.png`}
                      alt={item.className}
                    />
                  ) : (
                    <img
                      src={`./img/nav-bild-active-${i + 1}.png`}
                      alt={item.className}
                    />
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

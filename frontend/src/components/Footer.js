import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <nav>
                <ul>
                    <li>
                        <NavLink
                            activeStyle={{ color: '#EFBC2C' }} to="/turnovers">
                            <img src="./img/wallet.svg" alt="wallet" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeStyle={{ fill: '#EFBC2C' }} to="/">
                            <img src="./img/home_button.svg" alt="home" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={{ fill: '#EFBC2C' }} to="/charts">
                            <img src="./img/charts.svg" alt="charts" />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
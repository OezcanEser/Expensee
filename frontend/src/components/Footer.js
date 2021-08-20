import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer">
            {/* <img src="./img/background_nav.png" alt="" /> */}
            <nav>
                <ul>
                    <li>
                        <NavLink className="wallet"
                            activeStyle={{ color: '#EFBC2C' }} to="/turnovers">
                            <img src="./img/wallet.png" alt="wallet" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="home"
                            activeStyle={{ fill: '#EFBC2C'}} to="/home"> 
                            <img src="./img/home_button.svg" alt="home" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="charts"
                            style={{ fill: '#EFBC2C' }} to="/charts">
                            <img src="./img/charts.svg" alt="charts" style={{ }}/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
    const [pathname, setPathname] = useState('/turnovers' || '/home' || '/charts')
    const location = useLocation();

    useEffect(() => {
        setPathname(location.pathname);
    }, [location]);
    
    return (
        <footer className="footer">
            <nav>
                <ul>
                    <li>
                        <NavLink className="wallet" to="/turnovers">
                            {   pathname === '/turnovers' ? 
                                (<img src="./img/wallet_active.png" alt="wallet" />)
                                :
                                (<img src="./img/wallet.png" alt="wallet" />)  
                            }
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="home" to="/home">
                            {   pathname === '/home' ? 
                                (<img src="./img/home_button_active.png" alt="home" />)
                                :
                                (<img src="./img/home_button.png" alt="home" />)  
                            }
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="charts" to="/charts">
                            {   pathname === '/charts' ? 
                                (<img src="./img/chart_active.png" alt="charts" />)
                                :
                                (<img src="./img/charts.png" alt="charts" />)  
                            }
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
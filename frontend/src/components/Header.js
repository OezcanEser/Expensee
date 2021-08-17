import { Link } from "react-router-dom"
import { useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header>
            <nav className={isOpen ? "open" : "closeNav"}>
            <div className="burgerMenu" onClick={() => setIsOpen(!isOpen)}>
            <div />
            <div />
            <div />
         </div>
                <ul>
                    <li> 
                        <Link to="/home">
                            <span style={{ display: isOpen ? "inline-block" : "none" }}>Home</span>
                        </Link>
                    </li>
                    <li> 
                        <Link to="/turnovers">
                            <span style={{ display: isOpen ? "inline-block" : "none" }}>Wallet</span>
                        </Link>
                    </li>
                    <li> 
                        <Link to="/charts">
                            <span style={{ display: isOpen ? "inline-block" : "none" }}>Charts</span>
                        </Link>
                    </li>
                    <li> 
                        <Link to="/">
                            <span style={{ display: isOpen ? "inline-block" : "none" }}>Logout</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
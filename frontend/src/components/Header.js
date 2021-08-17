import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef()
    useOnClickOutside(ref, () => setIsOpen(false))
    return (
        <header>
            <section>
            <div className="burgerMenu" onClick={() => setIsOpen(!isOpen)}>
            <div />
            <div />
            <div />
         </div>
            <nav className={isOpen ? "open" : "closeNav"} ref={ref}>
                <ul>
                    <li> 
                        <Link to="/home" onClick={() => setIsOpen(false)}> Home
                            {/* <span style={{ display: isOpen ? "inline-block" : "none" }}>Home</span> */}
                        </Link>
                    </li>
                    <li> 
                        <Link to="/turnovers" onClick={() => setIsOpen(false)}> Wallet
                            {/* <span style={{ display: isOpen ? "inline-block" : "none" }}>Wallet</span> */}
                        </Link>
                    </li>
                    <li> 
                        <Link to="/charts" onClick={() => setIsOpen(false)}> Charts
                            {/* <span style={{ display: isOpen ? "inline-block" : "none" }}>Charts</span> */}
                        </Link>
                    </li>
                    <li> 
                        <Link to="/" onClick={() => setIsOpen(false)}> Logout
                          {/*   <span style={{ display: isOpen ? "inline-block" : "none" }}>Logout</span> */}
                        </Link>
                    </li>
                </ul>
            </nav>
            </section>
        </header>
    );
}

export default Header;


function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        [ref, handler]
    );
}
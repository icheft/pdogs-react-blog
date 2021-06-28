// sfc

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <h1>
                    <Link to="/" className="nav-logo">
                        PDOGS Blog
                    </Link>
                </h1>
                <ul class="nav-menu">
                    <li class="nav-item">
                        <Link to="/" class="nav-link">
                            Home
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" class="nav-link">
                            About
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/create" class="nav-link">
                            ✍️
                        </Link>
                    </li>
                </ul>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    // Function to determine if a link should be considered active
    const isLinkActive = (pathname) => {
        return location.pathname === pathname;
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        React States
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className={`nav-item ${isLinkActive('/') ? 'active' : ''}`}>
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className={`nav-item ${isLinkActive('/about') ? 'active' : ''}`}>
                                <Link className="nav-link" to="/about">
                                    About Us
                                </Link>
                            </li>
                            <li className={`nav-item ${isLinkActive('/contact') ? 'active' : ''}`}>
                                <Link className="nav-link" to="/contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

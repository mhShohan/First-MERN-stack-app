import React from 'react';
import { Link } from 'react-router-dom';

function Navber() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Exersize Tracker
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Exersizes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link">
                                Create Exersizes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user" className="nav-link">
                                Create User
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navber;

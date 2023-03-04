import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <header className="header">
            <Link className="home-link" to="/">Home</Link>
                <h1 className="app-title">Animation <br/>Contemplation</h1>
            <Link className="favorites-link" to="/favorites">Favorites</Link>
        </header>
    );
}

export default Header;
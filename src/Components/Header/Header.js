import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <header className="header">
            <Link className="home-link" to="/">Home</Link>
            <div className="titles-container">
                <h1 className="app-title">Animation Contemplation</h1>
                <h2 className="app-subtitle">A place to contemplate your favorite anime quotes</h2>
            </div>
            <Link className="favorites-link" to="/favorites">Favorites</Link>
        </header>
    );
}

export default Header;
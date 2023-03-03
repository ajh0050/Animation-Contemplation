import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to="/">🏠</Link>
            <h1>Animation Contemplation</h1>
            <Link to="/favorites">Favorites</Link>
        </header>
    );
}

export default Header;
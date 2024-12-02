import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="menu">
            <div className="menu-logo">
                <img src="/images/logo.PNG" alt="Logo Locamania" />
            </div>
            <nav className={`menu-items ${isMenuOpen ? "open" : ""}`}>
                <NavLink to="/inicio" className="menu-item">Inicio</NavLink>
                <NavLink to="/diseños" className="menu-item">Diseños Realizados</NavLink>
                <NavLink to="/info" className="menu-item">Stock/Pagos/Envíos</NavLink>
                <a href="https://www.instagram.com/locamania.ce/" target="_blank" className="menu-item">Contacto</a>
            </nav>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
        </header>
    );
}

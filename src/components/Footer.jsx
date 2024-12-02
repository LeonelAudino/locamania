import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">      
        <a
          href="https://www.instagram.com/locamania.ce/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <i className="fab fa-instagram"></i> Seguime en Instagram
        </a>
        <p className="footer-text">© 2024 Locamania. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

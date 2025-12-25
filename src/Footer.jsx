import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src="/logo.png" alt="Ciertto" />
                        </Link>
                        <p className="footer-description">
                            La herramienta de gestión integral diseñada por y para autónomos en España. Centraliza tu negocio, automatiza tu administración y decide con datos reales.
                        </p>
                        <div className="footer-social">
                            {/* Social icons could go here */}
                        </div>
                    </div>

                    <div className="footer-nav-group">
                        <div className="footer-column">
                            <h4>Producto</h4>
                            <a href="/#producto">Características</a>
                            <a href="/#como-funciona">Flujo</a>
                            <Link to="/precios">Precios</Link>
                        </div>
                        <div className="footer-column">
                            <h4>Privacidad</h4>
                            <Link to="/aviso-legal">Aviso legal</Link>
                            <Link to="/privacidad">Privacidad</Link>
                            <Link to="/cookies">Cookies</Link>
                            <Link to="/contacto">Contacto</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        © 2026 Ciertto. Es una herramienta de gestión.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

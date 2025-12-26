import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div style={{ textAlign: 'center', padding: '3rem 0', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--secondary)', opacity: 0.7, marginBottom: '1rem' }}>
                        © 2026 Ciertto. Todos los derechos reservados.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <Link to="/aviso-legal" style={{ fontSize: '0.85rem', color: 'var(--secondary)', opacity: 0.6, textDecoration: 'none' }}>Aviso legal</Link>
                        <span style={{ opacity: 0.3 }}>·</span>
                        <Link to="/privacidad" style={{ fontSize: '0.85rem', color: 'var(--secondary)', opacity: 0.6, textDecoration: 'none' }}>Privacidad</Link>
                        <span style={{ opacity: 0.3 }}>·</span>
                        <Link to="/cookies" style={{ fontSize: '0.85rem', color: 'var(--secondary)', opacity: 0.6, textDecoration: 'none' }}>Cookies</Link>
                        <span style={{ opacity: 0.3 }}>·</span>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                if (window.openCookiePanel) window.openCookiePanel();
                            }}
                            style={{ fontSize: '0.85rem', color: 'var(--secondary)', opacity: 0.6, textDecoration: 'none' }}
                        >
                            Configurar cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

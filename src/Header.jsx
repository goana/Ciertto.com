import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="Ciertto Logo" />
                </Link>

                <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                    <a href="/#producto" className="nav-link" onClick={() => setIsMenuOpen(false)}>Producto</a>

                    <div className="nav-item-has-menu desktop-only">
                        <a href="#" className="nav-link">Funcionalidades</a>
                        <div className="mega-menu">
                            <div className="mega-menu-grid">
                                <div className="mega-menu-column">
                                    <a href="/#calendario" className="mega-menu-item">
                                        <div className="mega-icon">📅</div>
                                        <div className="mega-content">
                                            <h4>Calendario (Google Calendar)</h4>
                                            <p>Sincroniza Google Calendar y ve eventos + tareas en un solo sitio.</p>
                                        </div>
                                    </a>
                                    <a href="/#tareas" className="mega-menu-item">
                                        <div className="mega-icon">✔️</div>
                                        <div className="mega-content">
                                            <h4>Tareas</h4>
                                            <p>Apunta, prioriza y termina lo importante sin perderte entre listas.</p>
                                        </div>
                                    </a>
                                    <a href="/#proyectos" className="mega-menu-item">
                                        <div className="mega-icon">📊</div>
                                        <div className="mega-content">
                                            <h4>Proyectos</h4>
                                            <p>Organiza el trabajo por proyectos y controla qué está hecho y qué falta.</p>
                                        </div>
                                    </a>
                                    <a href="/#crm" className="mega-menu-item">
                                        <div className="mega-icon">👥</div>
                                        <div className="mega-content">
                                            <h4>Clientes (CRM)</h4>
                                            <p>Lleva el seguimiento de cada cliente y en qué punto está, sin notas sueltas.</p>
                                        </div>
                                    </a>
                                    <a href="/#notas" className="mega-menu-item">
                                        <div className="mega-icon">💡</div>
                                        <div className="mega-content">
                                            <h4>Ideas y notas</h4>
                                            <p>Guarda ideas y próximos pasos dentro del sistema, no en mil sitios.</p>
                                        </div>
                                    </a>
                                    <a href="/#dashboard" className="mega-menu-item">
                                        <div className="mega-icon">🏠</div>
                                        <div className="mega-content">
                                            <h4>Dashboard</h4>
                                            <p>Tu negocio resumido: lo pendiente, lo urgente y lo que está en marcha.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="mega-menu-column">
                                    <a href="/#asistente" className="mega-menu-item">
                                        <div className="mega-icon">✨</div>
                                        <div className="mega-content">
                                            <h4>Asistente incorporado</h4>
                                            <p>Pregúntale y te responde con tu información: resúmenes, prioridades y siguientes pasos.</p>
                                        </div>
                                    </a>
                                    <a href="/#facturas" className="mega-menu-item">
                                        <div className="mega-icon">🧾</div>
                                        <div className="mega-content">
                                            <h4>Facturas (España) <span className="mega-badge">Pro</span></h4>
                                            <p>Crea facturas adaptadas a España y tenlas siempre localizadas.</p>
                                        </div>
                                    </a>
                                    <a href="/#gastos" className="mega-menu-item">
                                        <div className="mega-icon">💰</div>
                                        <div className="mega-content">
                                            <h4>Gastos <span className="mega-badge">Pro</span></h4>
                                            <p>Registra gastos y revisa el mes sin hojas de cálculo.</p>
                                        </div>
                                    </a>
                                    <a href="/#export" className="mega-menu-item">
                                        <div className="mega-icon">📥</div>
                                        <div className="mega-content">
                                            <h4>Exportación de datos</h4>
                                            <p>Tus datos son tuyos: descárgalos cuando quieras.</p>
                                        </div>
                                    </a>
                                    <a href="/#quickstart" className="mega-menu-item">
                                        <div className="mega-icon">🚀</div>
                                        <div className="mega-content">
                                            <h4>Empieza en 5 minutos</h4>
                                            <p>Entra con datos de ejemplo y entiende Ciertto desde dentro. Luego lo adaptas a tu negocio.</p>
                                        </div>
                                    </a>
                                    <a href="/#all" className="mega-menu-item">
                                        <div className="mega-icon">➡️</div>
                                        <div className="mega-content">
                                            <h4>Ver todas las funcionalidades</h4>
                                            <p>Explora todo lo que incluye Ciertto.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="mega-footer">
                                <div className="mega-footer-tagline">Centraliza · Automatiza · Decide</div>
                            </div>
                        </div>
                    </div>

                    <a href="/#precios" className="nav-link mobile-only" onClick={() => setIsMenuOpen(false)}>Funcionalidades</a>
                    <Link to="/precios" className="nav-link" onClick={() => setIsMenuOpen(false)}>Precios</Link>

                    <div className="mobile-only" style={{ marginTop: "2rem", flexDirection: "column", gap: "0.75rem", width: "100%" }}>
                        <Link to="/empezar" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Pruébalo gratis</Link>
                        <a href="https://app.ciertto.com" className="btn btn-secondary" onClick={() => setIsMenuOpen(false)}>Acceder</a>
                    </div>
                </nav>

                <div className="nav-ctas">
                    <a href="https://app.ciertto.com" className="btn btn-outline desktop-only">Acceder</a>
                    <Link to="/empezar" className="btn btn-primary desktop-only">Pruébalo gratis</Link>

                    <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

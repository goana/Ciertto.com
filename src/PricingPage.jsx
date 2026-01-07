import React from 'react';
import { Link } from 'react-router-dom';
import './pricing-new.css';

const PricingPage = () => {
    const features = [
        { name: 'Dashboard (agenda de hoy + KPIs básicos)', base: 'Sí', pro: 'Sí', premium: 'Sí' },
        { name: 'Foco del día', base: 'Sí', pro: 'Sí', premium: 'Sí' },
        { name: 'Calendario (vista + conexión con Google Calendar)', base: 'Sí', pro: 'Sí', premium: 'Sí' },
        { name: 'Tareas (crear/editar, estados, estimaciones)', base: 'Sí', pro: 'Sí', premium: 'Sí' },
        { name: 'Cronómetro / control de tiempo', base: 'Sí', pro: 'Sí', premium: 'Sí' },
        { name: 'Proyectos (pipeline + progreso)', base: 'Sí', pro: 'Sí', premium: 'Sí' },
        { name: 'Ideas (captura + convertir a tarea)', base: 'Sí', pro: 'Sí', premium: 'Sí' },
        { name: 'Contactos (CRM básico: lead/prospecto/cliente)', base: 'Sí', pro: 'Sí', premium: 'Sí' },
        { name: 'Servicios (catálogo + vincular a contactos/proyectos)', base: 'No', pro: 'Sí', premium: 'Sí' },
        { name: 'Facturas (registro y control)', base: 'No', pro: 'Sí', premium: 'Sí' },
        { name: 'Gastos (registro + adjuntos)', base: 'No', pro: 'Sí', premium: 'Sí' },
        { name: 'Métricas de dinero (ingresos/gastos/objetivo)', base: 'No', pro: 'Sí', premium: 'Sí' },
        { name: 'Exportación de datos (CSV/JSON)', base: 'No', pro: 'Sí', premium: 'Sí' },
        { name: 'Asistente IA (planificación, prioridad, recomendaciones)', base: '5 créditos/mes', pro: '30 créditos/mes', premium: '200 créditos/mes' },
        { name: 'IA en gastos (extraer datos de factura/recibo)', base: 'Consume créditos', pro: 'Consume créditos', premium: 'Consume créditos' },
        { name: 'Alertas inteligentes (vencimientos, desviaciones, bloqueos)', base: 'Consume créditos', pro: 'Consume créditos', premium: 'Consume créditos' },
        { name: 'Búsqueda conversacional (clientes/proyectos/tareas)', base: 'Consume créditos', pro: 'Consume créditos', premium: 'Consume créditos' },
    ];

    return (
        <div className="pricing-page">

            <main style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '6rem' }}>
                        <h1 className="section-title" style={{ fontSize: '3.5rem' }}>Elige según el nivel de control que quieres</h1>
                        <p className="section-desc" style={{ marginTop: '1.5rem' }}>Empieza simple. Sube cuando el sistema ya te sostiene.</p>
                    </div>

                    <div className="pricing-grid">
                        {/* Plan Base */}
                        <div className="price-card">
                            <h3>BASE</h3>
                            <div className="price-amount-wrapper">
                                <span className="price-amount">19€</span>
                                <span className="price-period">/ MES</span>
                            </div>

                            <ul className="price-features-list">
                                <li className="price-feature-item">
                                    <span className="check-icon"></span>
                                    Dashboard & Foco
                                </li>
                                <li className="price-feature-item">
                                    <span className="check-icon"></span>
                                    Calendario
                                </li>
                                <li className="price-feature-item">
                                    <span className="check-icon"></span>
                                    Tareas & Tiempos
                                </li>
                                <li className="price-feature-item">
                                    <span className="check-icon"></span>
                                    CRM Ligero
                                </li>
                                <li className="price-feature-item ai-credits">
                                    <span className="sparkle-icon">✨</span>
                                    5 créditos IA / mes
                                </li>
                            </ul>

                            <Link to="/empezar?plan=base" className="btn btn-price btn-outline-dark" style={{ marginTop: 'auto' }}>ELEGIR BASE</Link>
                        </div>

                        {/* Plan Pro */}
                        <div className="price-card featured-card">
                            <div className="popular-badge">MÁS POPULAR</div>
                            <h3>PRO</h3>
                            <div className="price-amount-wrapper">
                                <span className="price-amount">39€</span>
                                <span className="price-period">/ MES</span>
                            </div>

                            <ul className="price-features-list">
                                <li className="price-feature-item">
                                    <span className="check-icon gold"></span>
                                    Todo lo Base
                                </li>
                                <li className="price-feature-item">
                                    <span className="check-icon gold"></span>
                                    Facturación ilimitada
                                </li>
                                <li className="price-feature-item">
                                    <span className="check-icon gold"></span>
                                    Gestión de gastos
                                </li>
                                <li className="price-feature-item">
                                    <span className="check-icon gold"></span>
                                    Exportación total
                                </li>
                                <li className="price-feature-item ai-credits">
                                    <span className="sparkle-icon">✨</span>
                                    30 créditos IA / mes
                                </li>
                            </ul>

                            <Link to="/empezar?plan=pro" className="btn btn-price btn-yellow" style={{ marginTop: 'auto' }}>ELEGIR PRO</Link>
                        </div>

                        {/* Plan IA Plus */}
                        <div className="price-card">
                            <h3>IA PLUS</h3>
                            <div className="price-amount-wrapper">
                                <span className="price-amount">79€</span>
                                <span className="price-period">/ MES</span>
                            </div>

                            <ul className="price-features-list">
                                <li className="price-feature-item">
                                    <span className="check-icon"></span>
                                    Todo lo Pro
                                </li>
                                <li className="price-feature-item">
                                    <span className="check-icon"></span>
                                    Lectura de gastos IA
                                </li>
                                <li className="price-feature-item">
                                    <span className="check-icon"></span>
                                    Soporte prioritario
                                </li>
                                <li className="price-feature-item">
                                    <span className="check-icon"></span>
                                    Acceso anticipado
                                </li>
                                <li className="price-feature-item ai-credits">
                                    <span className="sparkle-icon">✨</span>
                                    200 créditos IA / mes
                                </li>
                            </ul>

                            <Link to="/empezar?plan=premium" className="btn btn-price btn-outline-dark" style={{ marginTop: 'auto' }}>ELEGIR IA PLUS</Link>
                        </div>
                    </div>

                    <div className="pricing-footer-note" style={{ marginBottom: '8rem' }}>
                        Oportunidad por tiempo limitado
                    </div>

                    <div className="comparison-container">
                        <h2 className="text-center" style={{ marginBottom: '4rem', fontSize: '2.5rem' }}>Comparativa detallada</h2>
                        <div className="comparison-table-wrapper">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Funcionalidad</th>
                                        <th className="text-center">Base</th>
                                        <th className="text-center">Pro</th>
                                        <th className="text-center">Premium IA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {features.map((f, i) => (
                                        <tr key={i}>
                                            <td style={{ fontWeight: 500 }}>{f.name}</td>
                                            <td className="text-center" style={{ color: f.base === 'No' ? '#94a3b8' : 'inherit' }}>{f.base}</td>
                                            <td className="text-center" style={{ color: f.pro === 'No' ? '#94a3b8' : 'inherit' }}>{f.pro}</td>
                                            <td className="text-center" style={{ color: f.premium === 'No' ? '#94a3b8' : 'inherit' }}>{f.premium}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div >
            </main >

        </div >
    );
};

export default PricingPage;

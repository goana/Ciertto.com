import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

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
            <Header />

            <main style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '6rem' }}>
                        <h1 className="section-title" style={{ fontSize: '3.5rem' }}>Precios honestos</h1>
                        <p className="section-desc">Transparencia total para que solo te preocupes de crecer.</p>
                    </div>

                    <div className="pricing-grid">
                        {/* Plan Base */}
                        <div className="price-card">
                            <h3>Base</h3>
                            <div className="price-slogan">Orden y control operativo</div>
                            <div className="price-amount-wrapper">
                                <span className="price-amount">19€</span>
                                <span className="price-period">/mes</span>
                            </div>
                            <div className="launch-badge">Precio lanzamiento</div>
                            <div className="after-price">Después 29€/mes</div>

                            <ul className="price-features-list">
                                <li className="price-feature-item">✓ Dashboard & Foco</li>
                                <li className="price-feature-item">✓ Calendario Google</li>
                                <li className="price-feature-item">✓ Tareas & Cronómetro</li>
                            </ul>

                            <Link to="/empezar?plan=base" className="btn btn-price btn-price-dark" style={{ marginTop: 'auto' }}>Elegir Base</Link>
                        </div>

                        {/* Plan Pro */}
                        <div className="price-card featured">
                            <div className="popular-badge">Más popular</div>
                            <h3>Pro</h3>
                            <div className="price-slogan">Gestión integral + dinero</div>
                            <div className="price-amount-wrapper">
                                <span className="price-amount">39€</span>
                                <span className="price-period">/mes</span>
                            </div>
                            <div className="launch-badge">Precio lanzamiento</div>
                            <div className="after-price">Después 59€/mes</div>

                            <div className="price-feature-plus">+ Todo lo de base</div>
                            <ul className="price-features-list">
                                <li className="price-feature-item">✓ Facturación & Gastos</li>
                                <li className="price-feature-item">✓ Métricas de Dinero</li>
                            </ul>

                            <Link to="/empezar?plan=pro" className="btn btn-price btn-price-yellow" style={{ marginTop: 'auto' }}>Elegir Pro</Link>
                        </div>

                        {/* Plan Premium IA */}
                        <div className="price-card dark-theme">
                            <h3>Premium IA</h3>
                            <div className="price-slogan">Automatización máxima</div>
                            <div className="price-amount-wrapper">
                                <span className="price-amount">79€</span>
                                <span className="price-period">/mes</span>
                            </div>
                            <div className="launch-badge">Precio lanzamiento</div>
                            <div className="after-price">Después 119€/mes</div>

                            <div className="price-feature-plus">+ Todo lo de pro</div>
                            <ul className="price-features-list">
                                <li className="price-feature-item">✓ Asistente IA Total</li>
                                <li className="price-feature-item">✓ Búsqueda Conversacional</li>
                            </ul>

                            <Link to="/empezar?plan=premium" className="btn btn-price btn-price-white" style={{ marginTop: 'auto' }}>Elegir Premium IA</Link>
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
                </div>
            </main>

        </div>
    );
};

export default PricingPage;

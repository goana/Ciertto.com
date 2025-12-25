import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Signup from './Signup'
import PricingPage from './PricingPage'
import Header from './Header'
import SuccessPage from './SuccessPage'

function HomePage() {
  const [adminHours, setAdminHours] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(40);

  const timeSaved = Math.round(adminHours * 0.5); // 50% efficiency
  const moneyRecovered = Math.round(timeSaved * hourlyRate * 4); // Monthly recovery

  return (
    <div className="app">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="animate-up">
              <span className="section-tag">ASISTENTE DE PRODUCTIVIDAD</span>
              <h1>Herramienta de gestión para <span style={{ color: '#FFB800' }}>autónomos</span> y emprendedores en España</h1>
              <p className="hero-subtitle">
                Ciertto no solo guarda la información de tu negocio (tareas, proyectos, clientes y facturas). Su asistente la convierte en decisiones y siguientes pasos para que crezcas sin perder el control.
              </p>
              <div className="hero-btns">
                <Link to="/empezar" className="btn btn-primary btn-lg" style={{ textTransform: 'uppercase' }}>Pruébalo gratis</Link>
                <a href="https://app.ciertto.com" className="btn btn-outline btn-lg">Acceder</a>
              </div>
              <p className="microcopy" style={{ fontSize: '0.8rem', opacity: 0.5 }}>
                Exporta tus datos cuando quieras.
              </p>
            </div>

            <div className="product-preview animate-up" style={{ animationDelay: '0.2s', marginTop: '3.5rem' }}>
              <div style={{
                width: '100%',
                aspectRatio: '16/9',
                background: '#fafbfc',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1.5px solid #f1f5f9',
                boxShadow: '0 20px 40px -15px rgba(29, 36, 61, 0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img src="/logo-variants.png" alt="Ciertto Interface" style={{ width: '60%', opacity: 0.04, position: 'absolute' }} />
                <div style={{ textAlign: 'center', zIndex: 1 }}>
                  <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--secondary)' }}>[ Dashboard Preview ]</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ciertto vs Chaos */}
        <section className="versus-section">
          <div className="container">
            <div className="text-center">
              <span className="section-tag">CENTRALIZACIÓN</span>
              <h2 className="section-title">Deja de saltar entre 5 pestañas</h2>
              <p className="section-desc">¿Tu negocio vive repartido en mil sitios?</p>
            </div>
            <div className="versus-grid">
              <div className="versus-card chaos">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>El Caos Actual</h3>
                <ul className="versus-list">
                  <li className="versus-item"><span className="versus-icon">❌</span> Excel + Notion para proyectos.</li>
                  <li className="versus-item"><span className="versus-icon">❌</span> WhatsApp para gestionar clientes.</li>
                  <li className="versus-item"><span className="versus-icon">❌</span> Programa externo para facturar.</li>
                  <li className="versus-item"><span className="versus-icon">❌</span> Papeles sueltos para los gastos.</li>
                  <li className="versus-item"><span className="versus-icon">❌</span> Fatiga por cambio de contexto.</li>
                </ul>
              </div>
              <div className="versus-card ciertto">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>El Orden de Ciertto</h3>
                <ul className="versus-list">
                  <li className="versus-item"><span className="versus-icon">✨</span> Todo tu flujo en un solo sitio.</li>
                  <li className="versus-item"><span className="versus-icon">✨</span> CRM vinculado a tus facturas.</li>
                  <li className="versus-item"><span className="versus-icon">✨</span> Gastos archivados automáticamente.</li>
                  <li className="versus-item"><span className="versus-icon">✨</span> La IA decide las prioridades por ti.</li>
                  <li className="versus-item"><span className="versus-icon">✨</span> Foco total en lo que te hace crecer.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What is Ciertto Section */}
        <section id="que-es-ciertto" style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: '#fafbfc' }}>
          <div className="container">
            <span className="section-tag">CONCEPTO</span>
            <h2 className="section-title">Qué es Ciertto</h2>
            <div className="animate-up" style={{ maxWidth: '850px', margin: '0 auto' }}>
              <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.75rem)', lineHeight: '1.6', color: 'var(--secondary)', fontWeight: 500 }}>
                Ciertto es la única herramienta que <span className="highlight-fosforito">junta tu trabajo, tus clientes y tus números</span> en un solo sitio y, además, tiene un <span className="highlight-fosforito">asistente incorporado</span> que convierte todo eso en <span className="highlight-fosforito">decisiones y siguientes pasos</span>. Menos herramientas, menos búsqueda, más control para crecer sin perderte.
              </p>
            </div>
          </div>
        </section>

        {/* Problem - Focus on Spanish issues */}
        <section id="como-funciona" style={{ backgroundColor: 'white' }}>
          <div className="container">
            <div className="text-center">
              <span className="section-tag">EL DESAFÍO</span>
              <h2 className="section-title">¿Cansado de la dispersión?</h2>
              <p className="section-desc">Gestionar un negocio con herramientas desconectadas te quita el foco y te hace perder el control sobre tus verdaderos números.</p>
            </div>
            <div className="problem-grid">
              <div className="problem-card">
                <h3>Datos aislados</h3>
                <p>Información repartida en hojas de cálculo y apps que no se hablan entre sí. Pierdes el contexto de cada cliente.</p>
              </div>
              <div className="problem-card">
                <h3>Agenda vs Realidad</h3>
                <p>Tu calendario está lleno, pero tus tareas pendientes siguen creciendo. Sin conexión, priorizas a ciegas.</p>
              </div>
              <div className="problem-card">
                <h3>Punto ciego fiscal</h3>
                <p>No conoces tu beneficio real hasta que llega el trimestre. Sin una visión clara de tus gastos e ingresos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Matrix */}
        <section id="producto">
          <div className="container">
            <div className="text-center">
              <span className="section-tag">MÓDULOS</span>
              <h2 className="section-title">Todo tu negocio, sincronizado</h2>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📅</div>
                <h3>Sincronización Multi-calendario</h3>
                <p>Integra Google Calendar y tus tareas operativas en una sola vista para planificar con realismo.</p>
                <span className="feature-badge">Foco diario</span>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Control de Proyectos</h3>
                <p>Vincular tareas, servicios y facturas a cada proyecto para entender su rentabilidad por hora.</p>
                <span className="feature-badge">Visión 360º</span>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🧾</div>
                <h3>Facturación y Modelos</h3>
                <p>Emite facturas legales en España con IVA e IRPF configurados. Dashboard fiscal integrado.</p>
                <span className="feature-badge">Localizado España</span>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🤖</div>
                <h3>Gastos Inteligentes</h3>
                <p>Sube gastos y nuestra IA extraerá los datos. Archivamos el documento en tu Google Drive por ti.</p>
                <span className="feature-badge">IA Integrada</span>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Contactos y CRM</h3>
                <p>Gestiona estados de leads, NIFs y relaciones comerciales sin la fricción de un CRM pesado.</p>
                <span className="feature-badge">Operativo</span>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h3>Laboratorio de Ideas</h3>
                <p>Un espacio para capturar lo que surge y convertirlo después en tareas o proyectos activos.</p>
                <span className="feature-badge">Ejecución</span>
              </div>
            </div>
          </div>
        </section>

        {/* AI Assistant - Side by Side layout to differentiate from ROI */}
        <section className="ai-section">
          <div className="container">
            <div className="ai-flex">
              <div className="ai-content">
                <span className="section-tag" style={{ background: 'rgba(255,184,0,0.1)', color: 'var(--primary)', border: 'none' }}>IA CON CONTEXTO</span>
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', color: 'var(--secondary)' }}>Un asistente que sí conoce tus números</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--secondary)', opacity: 0.8, marginBottom: '2rem', lineHeight: '1.6' }}>
                  No es un chat genérico. Es inteligencia aplicada a tus datos reales de facturación, horas y proyectos. Ciertto entiende el contexto de tu negocio en España para darte respuestas accionables.
                </p>
                <Link to="/empezar" className="btn btn-primary">Ver demo de la IA</Link>
              </div>

              <div className="ai-demo">
                <div className="ai-card">
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--secondary)', marginBottom: '0.75rem' }}>"¿Qué clientes me dan más margen real?"</p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--secondary)', opacity: 0.7 }}>Cruza ingresos y horas trabajadas para obtener un análisis de rentabilidad exacto por cliente.</p>
                </div>
                <div className="ai-card">
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--secondary)', marginBottom: '0.75rem' }}>"Optimiza mi agenda para esta semana."</p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--secondary)', opacity: 0.7 }}>Propone bloques de tiempo basados en tus prioridades y disponibilidad real en tu calendario.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="roi-section">
          <div className="container">
            <div className="roi-container">
              <div className="roi-content">
                <span className="section-tag" style={{ color: 'var(--primary)', background: 'rgba(255,184,0,0.1)', border: 'none' }}>RENTABILIDAD</span>
                <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'white' }}>¿Cuánto vale tu tiempo?</h2>
                <p style={{ opacity: 0.8, fontSize: '1.2rem', marginBottom: '4rem', color: 'white' }}>La mayoría de autónomos pierden hasta un 30% de su semana en gestión administrativa que Ciertto puede automatizar.</p>

                <div className="roi-controls">
                  <div className="roi-control-group">
                    <div className="roi-label-row">
                      <label style={{ color: 'white' }}>Horas de gestión/semana</label>
                      <span className="roi-value-display">{adminHours}h</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="40"
                      value={adminHours}
                      onChange={(e) => setAdminHours(parseInt(e.target.value))}
                      className="roi-slider"
                    />
                  </div>
                  <div className="roi-control-group">
                    <div className="roi-label-row">
                      <label style={{ color: 'white' }}>Tu tarifa horaria</label>
                      <span className="roi-value-display">{hourlyRate}€/h</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="200"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                      className="roi-slider"
                    />
                  </div>
                </div>
              </div>

              <div className="roi-results">
                <div className="roi-result-item">
                  <h4>TIEMPO RECUPERADO</h4>
                  <div className="roi-result-value">{timeSaved}h <span style={{ fontSize: '1rem', opacity: 0.5 }}>/semana</span></div>
                </div>
                <div className="roi-result-item">
                  <h4>DINERO RECUPERADO</h4>
                  <div className="roi-result-value">{moneyRecovered}€ <span style={{ fontSize: '1rem', opacity: 0.5 }}>/mes</span></div>
                </div>
                <div className="text-center" style={{ marginTop: '2rem' }}>
                  <p style={{ fontSize: '0.9rem', opacity: 0.5 }}>Calculado estimando que Ciertto automatiza o agiliza el 50% de tus procesos administrativos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="social-proof">
          <div className="container">
            <div className="text-center">
              <span className="section-tag">CONFIANZA</span>
              <h2 className="section-title">Autónomos que ya han recuperado el control</h2>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <p className="testimonial-text">"Antes llegaba al final del trimestre sin saber cuánto había ganado realmente. Ahora tengo una foto exacta de mi negocio cada mañana."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">MS</div>
                  <div className="author-info">
                    <h4>Marc Serna</h4>
                    <span>Diseñador UI Freelance</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-text">"Lo que más me gusta es el asistente. Le pregunto qué es lo más urgente y me ordena el día basándose en mis proyectos activos. Un lujo."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">EA</div>
                  <div className="author-info">
                    <h4>Elena Amor</h4>
                    <span>Consultora de Marketing</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-text">"Por fin una herramienta que cumple con Verifactu sin ser un programa de contabilidad aburrido. Todo fluye de maravilla."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">JP</div>
                  <div className="author-info">
                    <h4>Javier Pozas</h4>
                    <span>Desarrollador Full Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="integrations-section">
          <div className="container">
            <div className="text-center">
              <span className="section-tag">SISTEMA</span>
              <h2 className="section-title">Tu ecosistema actual, mejorado</h2>
              <p className="section-desc">Ciertto se conecta con las herramientas que ya usas para que no empieces de cero.</p>
            </div>
            <div className="logos-grid">
              <div className="integration-logo">Google Drive</div>
              <div className="integration-logo">Google Calendar</div>
              <div className="integration-logo">Gmail</div>
              <div className="integration-logo">Slack</div>
              <div className="integration-logo">Bancos (PSD2)</div>
              <div className="integration-logo">Dropbox</div>
            </div>
          </div>
        </section>

        {/* Compliance Bar */}
        <section className="compliance-bar">
          <div className="container">
            <div className="compliance-grid">
              <div className="compliance-item">
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>⚖️</span>
                <h4>Ley Crea y Crece</h4>
                <p>Preparado para la factura electrónica obligatoria.</p>
              </div>
              <div className="compliance-item">
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>🛡️</span>
                <h4>Veri*factu</h4>
                <p>Cumple con los requisitos de Hacienda para software de facturación.</p>
              </div>
              <div className="compliance-item">
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>🇪🇸</span>
                <h4>100% España</h4>
                <p>Modelos y normativas locales siempre actualizados.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Support & Community */}
        <section className="support-section">
          <div className="container">
            <div className="support-flex">
              <div className="support-image-mock">🤝</div>
              <div className="support-content">
                <span className="section-tag">HUMANOS</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>No estás solo en esto</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.8 }}>Sabemos que ser autónomo es un reto. Por eso en Ciertto te ofrecemos soporte humano directo en español.</p>
                <p style={{ marginBottom: '3rem', opacity: 0.7 }}>Además, al unirte a Ciertto, entras en nuestra comunidad de usuarios donde podrás hacer networking y compartir aprendizajes con otros emprendedores como tú.</p>
                <Link to="/empezar" className="btn btn-primary">Únete a la comunidad</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Audience */}
        <section>
          <div className="container">
            <div className="audience">
              <div className="audience-block audience-yes">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Ideal para</h3>
                <ul className="audience-list">
                  <li>✨ Autónomos de servicios digitales.</li>
                  <li>✨ Formadores e infoproductores.</li>
                  <li>✨ Solopreneurs apasionados por el foco.</li>
                  <li>✨ Consultores que necesitan medir rentabilidad.</li>
                </ul>
              </div>
              <div className="audience-block audience-no">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>No diseñado para</h3>
                <ul className="audience-list">
                  <li>✕ Tiendas físicas o e-commerce masivo.</li>
                  <li>✕ Equipos grandes con flujos de aprobación.</li>
                  <li>✕ Necesidades de contabilidad fiscal avanzada.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Refined */}
        <section id="precios" style={{ backgroundColor: '#fafbfc', padding: '10rem 0' }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '6rem' }}>
              <h2 className="section-title" style={{ fontSize: '3.5rem' }}>Precios honestos</h2>
            </div>

            <div className="pricing-grid">
              {/* Plan Base */}
              <div className="price-card">
                <h3>Base</h3>
                <div className="price-slogan">ORDEN Y CONTROL OPERATIVO</div>
                <div className="price-amount-wrapper">
                  <span className="price-amount">19€</span>
                  <span className="price-period">/mes</span>
                </div>
                <div className="launch-badge">PRECIO LANZAMIENTO</div>
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
                <div className="popular-badge">MÁS POPULAR</div>
                <h3>Pro</h3>
                <div className="price-slogan">GESTIÓN INTEGRAL + DINERO</div>
                <div className="price-amount-wrapper">
                  <span className="price-amount">39€</span>
                  <span className="price-period">/mes</span>
                </div>
                <div className="launch-badge">PRECIO LANZAMIENTO</div>
                <div className="after-price">Después 59€/mes</div>

                <div className="price-feature-plus">+ TODO LO DE BASE</div>
                <ul className="price-features-list">
                  <li className="price-feature-item">✓ Facturación & Gastos</li>
                  <li className="price-feature-item">✓ Métricas de Dinero</li>
                </ul>

                <Link to="/empezar?plan=pro" className="btn btn-price btn-price-yellow" style={{ marginTop: 'auto' }}>Elegir Pro</Link>
              </div>

              {/* Plan Premium IA */}
              <div className="price-card dark-theme">
                <h3>Premium IA</h3>
                <div className="price-slogan">AUTOMATIZACIÓN MÁXIMA</div>
                <div className="price-amount-wrapper">
                  <span className="price-amount">79€</span>
                  <span className="price-period">/mes</span>
                </div>
                <div className="launch-badge">PRECIO LANZAMIENTO</div>
                <div className="after-price">Después 119€/mes</div>

                <div className="price-feature-plus">+ TODO LO DE PRO</div>
                <ul className="price-features-list">
                  <li className="price-feature-item">✓ Asistente IA Total</li>
                  <li className="price-feature-item">✓ Búsqueda Conversacional</li>
                </ul>

                <Link to="/empezar?plan=premium" className="btn btn-price btn-price-white" style={{ marginTop: 'auto' }}>Elegir Premium IA</Link>
              </div>
            </div>

            <div className="pricing-footer-note">
              OPORTUNIDAD POR TIEMPO LIMITADO
            </div>

            <div className="text-center" style={{ marginTop: '4rem' }}>
              <Link to="/precios" className="nav-link" style={{ fontSize: '0.9rem', textDecoration: 'underline', opacity: 0.6 }}>Ver comparativa completa y detalles de créditos IA</Link>
            </div>
          </div>
        </section>

        {/* Final CTA Refined */}
        <section className="final-cta">
          <div className="container">
            <h2 style={{ fontSize: '2.25rem' }}>Recupera el control de tu tiempo hoy.</h2>
            <div className="hero-btns">
              <Link to="/empezar" className="btn btn-secondary btn-lg">Empezar ahora</Link>
              <a href="https://app.ciertto.com" className="btn btn-outline btn-lg" style={{ borderColor: 'var(--secondary)', background: 'transparent', color: 'var(--secondary)' }}>Acceder</a>
            </div>
            <p style={{ fontSize: '0.8rem', marginTop: '2rem', opacity: 0.6 }}>Garantía de exportación total. Tus datos son tuyos.</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-main">
            <div>
              <img src="/logo.png" alt="Ciertto" style={{ height: '22px', marginBottom: '1.5rem' }} />
              <p style={{ maxWidth: '300px', lineHeight: '1.6' }}>La herramienta de gestión integral diseñada por y para autónomos en España.</p>
            </div>
            <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Producto</h4>
                <a href="#producto" className="nav-link">Características</a>
                <a href="#como-funciona" className="nav-link">Flujo</a>
                <a href="#precios" className="nav-link">Precios</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Privacidad</h4>
                <a href="#" className="nav-link">Legal</a>
                <a href="#" className="nav-link">Cookies</a>
                <a href="mailto:hola@ciertto.com" className="nav-link">Contacto</a>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '2.5rem' }}>
            <p style={{ fontSize: '0.8rem', textAlign: 'center', opacity: 0.6 }}>
              © 2024 Ciertto. No es una asesoría fiscal. Es una herramienta de gestión.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/empezar" element={<Signup />} />
        <Route path="/precios" element={<PricingPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import Signup from './Signup'
import PricingPage from './PricingPage'
import Header from './Header'
import SuccessPage from './SuccessPage'
import Footer from './Footer'
import ContactPage from './ContactPage'
import CookieConsent from './CookieConsent'
import { AvisoLegal, PoliticaPrivacidad, PoliticaCookies } from './LegalPages'
import FAQPage from './FAQPage'
import './pricing-new.css'
import ScrollToTop from './ScrollToTop'

function HomePage() {
  const [adminHours, setAdminHours] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(40);

  const timeSaved = Math.round(adminHours * 0.5); // 50% efficiency
  const moneyRecovered = Math.round(timeSaved * hourlyRate * 4); // Monthly recovery

  return (
    <div className="app">
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="animate-up">
              <span className="section-tag">Asistente de productividad</span>
              <h1>Herramienta de gestión para <span style={{ color: '#FFB800' }}>autónomos</span>: tareas, calendario, clientes y finanzas en un solo sitio</h1>
              <p className="hero-subtitle">
                Ciertto no solo guarda la información de tu negocio (tareas, proyectos, clientes y facturas). Su asistente la convierte en decisiones y siguientes pasos para que crezcas sin perder el control.
              </p>
              <div className="hero-btns">
                <Link to="/empezar" className="btn btn-primary btn-lg">Pruébalo gratis</Link>
                <a href="https://app.ciertto.com" className="btn btn-outline btn-lg">Acceder</a>
              </div>
              <p className="microcopy" style={{ fontSize: '0.8rem', opacity: 0.5 }}>
                Exporta tus datos cuando quieras.
              </p>
            </div>

            <div className="product-preview animate-up" style={{ animationDelay: '0.2s', marginTop: '3.5rem' }}>
              <div style={{
                width: '100%',

                background: 'white',
                borderRadius: '24px',
                border: '1.5px solid #f1f5f9',
                boxShadow: '0 20px 40px -15px rgba(29, 36, 61, 0.05)',
                overflow: 'hidden'
              }}>
                <img
                  src="/dashboard-preview.png"
                  alt="Ciertto Dashboard Preview"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '16px'
                  }}
                />

              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section style={{ padding: '3rem 0', backgroundColor: 'white' }}>
          <div className="container">
            <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem 3rem', background: 'rgba(255, 255, 255, 0.6)', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <p style={{ fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--secondary)', lineHeight: '1.7', marginBottom: '1rem', opacity: 0.9 }}>
                "Antes saltaba entre Notion, Google Calendar y Excel. Ahora todo está en Ciertto y sé exactamente qué toca cada día."
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--secondary)', opacity: 0.6, fontWeight: 600 }}>
                — Laura M., Consultora de Marketing
              </p>
            </div>
          </div>
        </section>

        {/* Ciertto vs Chaos */}
        <section className="versus-section">
          <div className="container">
            <div className="text-center" style={{ marginBottom: '4rem' }}>
              <span className="section-tag">Centralización</span>
              <h2 className="section-title">Deja de trabajar "por partes"</h2>
              <p className="section-desc" style={{ margin: '0 auto' }}>Cuando cada parte del negocio vive en un sitio, pierdes contexto: apuntas lo mismo dos veces, se te olvidan seguimientos y priorizas lo urgente. Ciertto lo ordena para que tu día tenga una sola dirección.</p>
            </div>
            <div className="versus-grid">
              <div className="versus-card chaos">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Antes: "Tengo cosas apuntadas… pero no un plan"</h3>
                <ul className="versus-list">
                  <li className="versus-item"><span className="versus-icon">❌</span> Excel + Notion para proyectos.</li>
                  <li className="versus-item"><span className="versus-icon">❌</span> WhatsApp para gestionar clientes.</li>
                  <li className="versus-item"><span className="versus-icon">❌</span> Programa externo para facturar.</li>
                  <li className="versus-item"><span className="versus-icon">❌</span> Papeles sueltos para los gastos.</li>
                  <li className="versus-item"><span className="versus-icon">❌</span> Fatiga por cambio de contexto.</li>
                </ul>
              </div>
              <div className="versus-card ciertto">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Con Ciertto: "Sé qué toca hoy y por qué"</h3>
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
            <span className="section-tag">Concepto</span>
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
              <span className="section-tag">El desafío</span>
              <h2 className="section-title">Lo que te está costando el caos (aunque no lo apuntes)</h2>
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
              <span className="section-tag">Módulos</span>
              <h2 className="section-title">Todo tu negocio, sincronizado</h2>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📅</div>
                <h3>Sincronización multi-calendario</h3>
                <p>Integra Google Calendar y tus tareas operativas en una sola vista para planificar con realismo.</p>
                <span className="feature-badge">Foco diario</span>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Control de proyectos</h3>
                <p>Vincular tareas, servicios y facturas a cada proyecto para entender su rentabilidad por hora.</p>
                <span className="feature-badge">Visión 360º</span>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🧾</div>
                <h3>Facturación y modelos</h3>
                <p>Emite facturas legales en España con IVA e IRPF configurados. Dashboard fiscal integrado. <span style={{ fontSize: '0.85rem', opacity: 0.6 }}>(Verifactu en roadmap 2026)</span></p>
                <span className="feature-badge">Localizado España</span>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🤖</div>
                <h3>Gastos inteligentes</h3>
                <p>Sube gastos y nuestra IA extraerá los datos automáticamente. Mantén tus tickets organizados y vinculados a tus proyectos.</p>
                <span className="feature-badge">IA Integrada</span>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Contactos y CRM</h3>
                <p>Guarda clientes con sus NIFs, vincula facturas y proyectos, y gestiona el estado de cada relación comercial. Todo en un solo sitio.</p>
                <span className="feature-badge">Operativo</span>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h3>Laboratorio de ideas</h3>
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
                <span className="section-tag" style={{ background: 'rgba(255,184,0,0.1)', color: 'var(--primary)', border: 'none' }}>IA con contexto</span>
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', color: 'var(--secondary)' }}>Un asistente que no solo conversa: te aterriza</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--secondary)', opacity: 0.8, marginBottom: '2rem', lineHeight: '1.6' }}>
                  Pídele un resumen, una alerta o el siguiente paso. El asistente trabaja con tu información dentro de Ciertto para que no tengas que montar el puzzle a mano.
                </p>
                <Link to="/empezar" className="btn btn-primary">Ver demo de la IA</Link>
              </div>

              <div className="ai-demo">
                <div className="ai-card">
                  <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--secondary)', marginBottom: '0' }}>"Qué me falta por cerrar hoy y cuánto tiempo me queda"</p>
                </div>
                <div className="ai-card">
                  <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--secondary)', marginBottom: '0' }}>"Resumen de la semana: avances, pendientes y bloqueos"</p>
                </div>
                <div className="ai-card">
                  <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--secondary)', marginBottom: '0' }}>"Dónde se me va el tiempo y qué debería recortar"</p>
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
                <span className="section-tag" style={{ color: 'var(--primary)', background: 'rgba(255,184,0,0.1)', border: 'none' }}>Rentabilidad</span>
                <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'white' }}>¿Cuánto vale tu tiempo?</h2>
                <p style={{ opacity: 0.9, fontSize: '1.15rem', marginBottom: '4rem', color: 'white', lineHeight: '1.6' }}>
                  Los autónomos pierden horas cada semana en tareas administrativas. Mueve los controles para ver cuánto tiempo y dinero podrías recuperar con Ciertto.
                </p>

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
                  <div className="roi-result-value">{timeSaved}h <span style={{ fontSize: '1.5rem', opacity: 0.6, fontWeight: 400 }}>/semana</span></div>
                  <h4 style={{ marginTop: '0.5rem' }}>Tiempo que recuperas</h4>
                </div>
                <div className="roi-result-item">
                  <div className="roi-result-value">{moneyRecovered}€ <span style={{ fontSize: '1.5rem', opacity: 0.6, fontWeight: 400 }}>/mes</span></div>
                  <h4 style={{ marginTop: '0.5rem' }}>Dinero que recuperas</h4>
                </div>
                <div className="text-center" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <p style={{ fontSize: '0.9rem', opacity: 0.7, color: 'white' }}>Estimación basada en automatizar el 50% de tus tareas administrativas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="social-proof">
          <div className="container">
            <div className="text-center">
              <span className="section-tag">Confianza</span>
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

        {/* Google Calendar Integration */}
        <section className="integrations-section">
          <div className="container">
            <div className="text-center">
              <span className="section-tag">Sincronización</span>
              <h2 className="section-title">Conecta tu calendario y trabaja desde un solo sitio</h2>
              <p className="section-desc">Ciertto se sincroniza con Google Calendar para que veas todas tus reuniones y tareas en una sola vista. Sin duplicar, sin saltar entre pestañas.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginTop: '4rem' }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/960px-Google_Calendar_icon_%282020%29.svg.png"
                alt="Google Calendar"
                style={{ width: '80px', height: '80px' }}
              />
              <div style={{ fontSize: '1.25rem', color: 'var(--secondary)', fontWeight: 600 }}>
                Google Calendar
              </div>
            </div>
          </div>
        </section>





        {/* Audience */}
        <section style={{ padding: '8rem 0', backgroundColor: 'white' }}>
          <div className="container">
            <div className="audience">
              <div className="audience-block audience-yes">
                <h3 style={{ fontSize: '1.35rem', marginBottom: '2rem', fontWeight: 700, color: 'var(--secondary)' }}>Ideal para</h3>
                <ul className="audience-list">
                  <li>Autónomos de servicios digitales</li>
                  <li>Formadores e infoproductores</li>
                  <li>Emprendedores enfocados en productividad</li>
                  <li>Consultores que necesitan medir rentabilidad</li>
                </ul>
              </div>
              <div className="audience-block audience-no">
                <h3 style={{ fontSize: '1.35rem', marginBottom: '2rem', fontWeight: 700, color: 'var(--secondary)' }}>No diseñado para</h3>
                <ul className="audience-list">
                  <li>Tiendas físicas o e-commerce masivo</li>
                  <li>Equipos grandes con flujos de aprobación</li>
                  <li>Necesidades de contabilidad fiscal avanzada</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Refined */}
        <section id="precios" style={{ backgroundColor: '#fafbfc', padding: '10rem 0' }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '6rem' }}>
              <h2 className="section-title" style={{ fontSize: '3.5rem' }}>Elige según el nivel de control que quieres</h2>
              <p style={{ fontSize: '1.1rem', opacity: 0.7, marginTop: '1.5rem' }}>Empieza simple. Sube cuando el sistema ya te sostiene.</p>
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

            <div className="pricing-footer-note">
              Oportunidad por tiempo limitado
            </div>

            <div className="text-center" style={{ marginTop: '4rem' }}>
              <Link to="/precios" className="nav-link" style={{ fontSize: '0.9rem', textDecoration: 'underline', opacity: 0.6 }}>Ver comparativa completa y detalles de créditos IA</Link>
            </div>
          </div>
        </section>

        {/* Final CTA Refined */}
        <section className="final-cta">
          <div className="container">
            <h2 style={{ fontSize: '2.25rem' }}>Ordena tu negocio en una sola vista</h2>
            <div className="hero-btns">
              <Link to="#precios" className="btn btn-secondary btn-lg">Ver planes</Link>
              <a href="https://app.ciertto.com" className="btn btn-outline btn-lg" style={{ borderColor: 'var(--secondary)', background: 'transparent', color: 'var(--secondary)' }}>Entrar en Ciertto</a>
            </div>
            <p style={{ fontSize: '0.8rem', marginTop: '2rem', opacity: 0.6 }}>Garantía de exportación total. Tus datos son tuyos.</p>
          </div>
        </section>
      </main>

    </div >
  )
}

const MainLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="main-layout">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/precios" element={<PricingPage />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/cookies" element={<PoliticaCookies />} />
            <Route path="/preguntas-frecuentes" element={<FAQPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Route>
          <Route path="/empezar" element={<Signup />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
      <Footer />
      <CookieConsent />
    </Router>
  )
}

export default App

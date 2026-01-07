import React, { useState } from 'react';

const ContactPage = () => {
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        const formData = new FormData(e.target);
        const data = {
            firstName: formData.get('firstName'),
            lastName: '', // No longer collected
            email: formData.get('email'),
            company: formData.get('website') || 'No especificada',
            companySize: 'Autónomo',
            message: formData.get('message') || ''
        };

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
            const response = await fetch(`${apiUrl}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: '¡Genial! Tu mensaje está en camino. Te responderemos muy pronto 🚀' });
                e.target.reset();
            } else {
                throw new Error(result.error || 'Error al enviar');
            }
        } catch (error) {
            console.error("Error en contacto:", error);
            setStatus({ type: 'error', message: 'Hubo un error. Inténtalo de nuevo.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page">
            <main className="contact-main">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-content">
                            <span className="contact-tagline">Descubre Ciertto en acción</span>
                            <h1 className="contact-title">Mira Ciertto en acción</h1>
                            <p className="contact-subtitle">
                                Agenda una demostración personalizada con nuestros expertos y centraliza tu negocio hoy mismo.
                            </p>

                            <div className="social-proof-mini">
                                <div className="stars">★★★★★</div>
                                <p><strong>1000+ Autónomos</strong> satisfechos</p>
                            </div>

                            <div className="contact-visual-duo">
                                <div className="visual-image"></div>
                                <div className="visual-testimonial">
                                    <span className="testimonial-logo">fare*well</span>
                                    <p>"La agencia Fare-well aumentó sus ingresos en 4000€/mes con Ciertto."</p>
                                    <a href="#" className="btn-white-pill">Ver historias</a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-container">
                            <div className="contact-card">
                                {status.message && (
                                    <div className={`status-message ${status.type}`} style={{
                                        padding: '0.75rem',
                                        borderRadius: '6px',
                                        marginBottom: '1.5rem',
                                        fontSize: '0.85rem',
                                        backgroundColor: status.type === 'success' ? '#def7ec' : '#fde8e8',
                                        color: status.type === 'success' ? '#03543f' : '#9b1c1c',
                                        textAlign: 'center'
                                    }}>
                                        {status.message}
                                    </div>
                                )}
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Nombre</label>
                                        <input type="text" name="firstName" placeholder="Tu nombre" required />
                                    </div>

                                    <div className="form-group">
                                        <label>Email de trabajo</label>
                                        <input type="email" name="email" placeholder="nombre@empresa.com" required />
                                    </div>

                                    <div className="form-group">
                                        <label>Página web del negocio (opcional)</label>
                                        <input type="url" name="website" placeholder="https://tunegocio.com" />
                                    </div>

                                    <div className="form-group">
                                        <label>Mensaje</label>
                                        <textarea name="message" placeholder="Cuéntanos qué necesitas..." rows="4" required></textarea>
                                    </div>

                                    <div className="form-group privacy-checkbox" style={{ marginTop: '1.5rem' }}>
                                        <label style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            fontWeight: 'normal',
                                            cursor: 'pointer',
                                            fontSize: '0.85rem',
                                            lineHeight: '1.5'
                                        }}>
                                            <input
                                                type="checkbox"
                                                required
                                                style={{
                                                    width: '18px',
                                                    height: '18px',
                                                    cursor: 'pointer',
                                                    flexShrink: 0
                                                }}
                                            />
                                            <span>
                                                He leído y acepto la <a href="/privacidad" target="_blank" style={{ color: '#000', textDecoration: 'underline', fontWeight: '600' }}>Política de privacidad</a>
                                            </span>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-black"
                                        disabled={loading}
                                    >
                                        {loading ? 'Enviando...' : 'Continuar'}
                                    </button>

                                    <p className="form-note">
                                        Te responderemos en menos de 24 horas.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;

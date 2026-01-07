import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Get plan from query params: /empezar?plan=pro
    const queryParams = new URLSearchParams(location.search);
    const initialPlan = queryParams.get('plan') || 'base';

    const [plan, setPlan] = useState(initialPlan);
    const [loading, setLoading] = useState(false);

    const plansMapping = {
        base: { name: 'Base', price: '19€' },
        pro: { name: 'Pro', price: '39€' },
        premium: { name: 'Premium IA', price: '79€' }
    };

    const selectedPlanInfo = plansMapping[plan] || plansMapping.base;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = {
            name: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
            plan: plan
        };

        try {
            // Fallback directo a producción si no hay ENV (evita error de localhost en deploy)
            const apiUrl = import.meta.env.VITE_API_URL || 'https://us-central1-ciertto-os.cloudfunctions.net';
            const response = await fetch(`${apiUrl}/api/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error al procesar el registro');
            }

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                throw new Error('No se recibió la URL de pago');
            }
        } catch (error) {
            console.error("Error en registro:", error);
            alert(`Error: ${error.message}`);
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            {/* Left Panel */}
            <div className="auth-left desktop-only">
                <div className="auth-left-content">
                    <span className="section-tag" style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'white', background: 'rgba(255,255,255,0.05)', marginBottom: '1.5rem' }}>ESTÁS A UN PASO</span>
                    <h1>La central operativa para autónomos y emprendedores.</h1>
                    <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                        Empieza hoy con el plan <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{selectedPlanInfo.name}</span> por <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{selectedPlanInfo.price}/mes</span> tras tu prueba gratuita.
                    </p>

                    <div className="auth-visuals" style={{ opacity: 0.8 }}>
                        {/* Mock visuals with glassmorphism */}
                        <div className="visual-card" style={{ width: '100%', height: '100px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <div style={{ width: '40%', height: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px' }}></div>
                            <div style={{ width: '70%', height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px' }}></div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                            <div className="visual-card" style={{ height: '100px', background: 'rgba(255,184,0,0.05)', borderRadius: '20px', border: '1px solid rgba(255,184,0,0.1)', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📈</div>
                                <div style={{ width: '50%', height: '8px', background: 'var(--primary)', borderRadius: '4px', opacity: 0.5 }}></div>
                            </div>
                            <div className="visual-card" style={{ height: '100px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>⚙️</div>
                                <div style={{ width: '50%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel */}
            <div className="auth-right">
                <div className="auth-header">
                    <img src="/logo.png" alt="Ciertto" className="auth-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
                    <p className="auth-switch">¿Ya tienes una cuenta? <a href="https://app.ciertto.com">Acceder</a></p>
                </div>

                <div className="auth-form-wrapper">
                    <div className="auth-form-container">
                        <h2>Empieza con el Plan {selectedPlanInfo.name}</h2>
                        <p className="auth-subtitle">3 días de prueba gratuita. Luego {selectedPlanInfo.price}/mes.</p>

                        <form className="auth-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Nombre completo</label>
                                <input type="text" placeholder="Tu nombre" required />
                            </div>

                            <div className="form-group">
                                <label>Correo electrónico</label>
                                <input type="email" placeholder="Email" required />
                            </div>

                            <div className="form-group">
                                <label>Contraseña</label>
                                <div className="password-input">
                                    <input type="password" placeholder="Contraseña" required />
                                    <span className="password-toggle">Mostrar</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}
                                disabled={loading}
                            >
                                {loading ? 'Procesando...' : `Confirmar Plan ${selectedPlanInfo.name}`}
                            </button>
                        </form>

                        <p className="auth-terms">
                            Al continuar confirmas que aceptas nuestro <br />
                            <Link to="/aviso-legal">Aviso legal</Link> y nuestra <Link to="/privacidad">Política de privacidad y cookies</Link>.
                        </p>
                    </div>
                </div>

                <div className="auth-footer">
                    <span>Español</span>
                </div>
            </div>
        </div>
    );
};

export default Signup;

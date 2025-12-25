import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-page" style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fafbfc',
            padding: '2rem',
            textAlign: 'center'
        }}>
            <div style={{ maxWidth: '500px', backgroundColor: 'white', padding: '3rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✨</div>
                <h1 style={{ fontSize: '2rem', color: '#1a2036', marginBottom: '1rem' }}>¡Pago Confirmado!</h1>
                <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                    Gracias por confiar en Ciertto. Tu periodo de prueba de 3 días ha comenzado.
                    <br /><br />
                    Ya puedes acceder a tu panel de control y empezar a organizar tu negocio.
                </p>
                <button
                    onClick={() => window.location.href = 'http://localhost:3000'}
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%', padding: '1rem' }}
                >
                    Ir a mi Panel de Control
                </button>
                <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#94a3b8' }}>
                    Recibirás un correo de confirmación en unos minutos.
                </p>
            </div>
        </div>
    );
};

export default SuccessPage;

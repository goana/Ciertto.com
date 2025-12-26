import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [showPanel, setShowPanel] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true, // Always true, can't be changed
        analytics: false,
        preferences: false,
        marketing: false
    });

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        const consentDate = localStorage.getItem('cookieConsentDate');

        if (!consent) {
            // No consent yet, show banner
            setShowBanner(true);
        } else {
            // Check if consent is older than 24 months (730 days)
            const consentTimestamp = parseInt(consentDate);
            const now = Date.now();
            const daysSinceConsent = (now - consentTimestamp) / (1000 * 60 * 60 * 24);

            if (daysSinceConsent > 730) {
                // Consent expired, show banner again
                setShowBanner(true);
            } else {
                // Load saved preferences
                const saved = JSON.parse(consent);
                setPreferences(saved);
                applyConsent(saved);
            }
        }
    }, []);

    const applyConsent = (prefs) => {
        // Apply Google Analytics based on consent
        if (prefs.analytics) {
            loadGoogleAnalytics();
        }

        // Dispatch event for other scripts to listen
        window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: prefs }));
    };

    const loadGoogleAnalytics = () => {
        // Only load if not already loaded
        if (!window.gtag) {
            // Add Google Analytics script
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-TNEMMK67V5';
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag() { window.dataLayer.push(arguments); }
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-TNEMMK67V5', {
                'anonymize_ip': true,
                'cookie_flags': 'SameSite=None;Secure'
            });
        }
    };

    const saveConsent = (prefs) => {
        const consentData = {
            ...prefs,
            necessary: true, // Always true
            version: '1.0',
            timestamp: Date.now()
        };

        localStorage.setItem('cookieConsent', JSON.stringify(consentData));
        localStorage.setItem('cookieConsentDate', consentData.timestamp.toString());

        setPreferences(consentData);
        applyConsent(consentData);
        setShowBanner(false);
        setShowPanel(false);
    };

    const handleAcceptAll = () => {
        saveConsent({
            necessary: true,
            analytics: true,
            preferences: true,
            marketing: false
        });
    };

    const handleRejectAll = () => {
        saveConsent({
            necessary: true,
            analytics: false,
            preferences: false,
            marketing: false
        });
    };

    const handleSavePreferences = () => {
        saveConsent(preferences);
    };

    const handleConfigure = () => {
        setShowPanel(true);
    };

    // Expose function to open panel from anywhere
    useEffect(() => {
        window.openCookiePanel = () => {
            const consent = localStorage.getItem('cookieConsent');
            if (consent) {
                const saved = JSON.parse(consent);
                setPreferences(saved);
            }
            setShowPanel(true);
        };
    }, []);

    if (!showBanner && !showPanel) return null;

    return (
        <>
            {/* Banner - First Layer */}
            {showBanner && !showPanel && (
                <div style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    boxShadow: '0 -4px 20px rgba(0,0,0,0.15)',
                    padding: '2rem',
                    zIndex: 10000,
                    borderTop: '3px solid var(--primary)'
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--secondary)' }}>
                                🍪 Configuración de cookies
                            </h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: 0 }}>
                                Utilizamos cookies propias y de terceros para mejorar tu experiencia. Las cookies técnicas son necesarias para el funcionamiento.
                                Para analítica necesitamos tu consentimiento. Puedes aceptar, rechazar o configurar según tus preferencias.
                            </p>
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            flexWrap: 'wrap',
                            justifyContent: 'flex-start'
                        }}>
                            <button
                                onClick={handleAcceptAll}
                                style={{
                                    padding: '0.875rem 2rem',
                                    backgroundColor: 'var(--primary)',
                                    color: 'var(--secondary)',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontWeight: 700,
                                    fontSize: '0.95rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                            >
                                Aceptar todas
                            </button>
                            <button
                                onClick={handleRejectAll}
                                style={{
                                    padding: '0.875rem 2rem',
                                    backgroundColor: '#e2e8f0',
                                    color: 'var(--secondary)',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontWeight: 700,
                                    fontSize: '0.95rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                            >
                                Rechazar todas
                            </button>
                            <button
                                onClick={handleConfigure}
                                style={{
                                    padding: '0.875rem 2rem',
                                    backgroundColor: 'transparent',
                                    color: 'var(--secondary)',
                                    border: '2px solid var(--secondary)',
                                    borderRadius: '8px',
                                    fontWeight: 700,
                                    fontSize: '0.95rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                            >
                                Configurar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Configuration Panel - Second Layer */}
            {showPanel && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 10001,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem'
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '16px',
                        maxWidth: '600px',
                        width: '100%',
                        maxHeight: '80vh',
                        overflow: 'auto',
                        padding: '2.5rem'
                    }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--secondary)' }}>
                            Configuración de cookies
                        </h2>
                        <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            Selecciona qué tipos de cookies quieres permitir. Puedes cambiar estas preferencias en cualquier momento.
                        </p>

                        {/* Necessary Cookies */}
                        <div style={{
                            padding: '1.5rem',
                            backgroundColor: '#f8fafc',
                            borderRadius: '12px',
                            marginBottom: '1rem',
                            border: '1px solid #e2e8f0'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--secondary)' }}>
                                        Cookies necesarias
                                    </h3>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                                        Esenciales para el funcionamiento del sitio (sesión, seguridad, preferencias de cookies). No se pueden desactivar.
                                    </p>
                                </div>
                                <div style={{
                                    padding: '0.5rem 1rem',
                                    backgroundColor: '#e2e8f0',
                                    borderRadius: '6px',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    color: 'var(--secondary)',
                                    marginLeft: '1rem'
                                }}>
                                    Siempre activas
                                </div>
                            </div>
                        </div>

                        {/* Analytics Cookies */}
                        <div style={{
                            padding: '1.5rem',
                            backgroundColor: '#f8fafc',
                            borderRadius: '12px',
                            marginBottom: '1rem',
                            border: '1px solid #e2e8f0'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--secondary)' }}>
                                        Cookies de analítica
                                    </h3>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                                        Nos ayudan a entender cómo usas el sitio (Google Analytics). Datos agregados y anónimos.
                                    </p>
                                </div>
                                <label style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    width: '50px',
                                    height: '26px',
                                    marginLeft: '1rem',
                                    flexShrink: 0
                                }}>
                                    <input
                                        type="checkbox"
                                        checked={preferences.analytics}
                                        onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                                        style={{ opacity: 0, width: 0, height: 0 }}
                                    />
                                    <span style={{
                                        position: 'absolute',
                                        cursor: 'pointer',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundColor: preferences.analytics ? 'var(--primary)' : '#cbd5e1',
                                        transition: '0.3s',
                                        borderRadius: '26px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            content: '',
                                            height: '20px',
                                            width: '20px',
                                            left: preferences.analytics ? '27px' : '3px',
                                            bottom: '3px',
                                            backgroundColor: 'white',
                                            transition: '0.3s',
                                            borderRadius: '50%'
                                        }} />
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Preferences Cookies */}
                        <div style={{
                            padding: '1.5rem',
                            backgroundColor: '#f8fafc',
                            borderRadius: '12px',
                            marginBottom: '2rem',
                            border: '1px solid #e2e8f0'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--secondary)' }}>
                                        Cookies de preferencias
                                    </h3>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                                        Recuerdan tus preferencias (idioma, configuración visual).
                                    </p>
                                </div>
                                <label style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    width: '50px',
                                    height: '26px',
                                    marginLeft: '1rem',
                                    flexShrink: 0
                                }}>
                                    <input
                                        type="checkbox"
                                        checked={preferences.preferences}
                                        onChange={(e) => setPreferences({ ...preferences, preferences: e.target.checked })}
                                        style={{ opacity: 0, width: 0, height: 0 }}
                                    />
                                    <span style={{
                                        position: 'absolute',
                                        cursor: 'pointer',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundColor: preferences.preferences ? 'var(--primary)' : '#cbd5e1',
                                        transition: '0.3s',
                                        borderRadius: '26px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            content: '',
                                            height: '20px',
                                            width: '20px',
                                            left: preferences.preferences ? '27px' : '3px',
                                            bottom: '3px',
                                            backgroundColor: 'white',
                                            transition: '0.3s',
                                            borderRadius: '50%'
                                        }} />
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                            <button
                                onClick={() => setShowPanel(false)}
                                style={{
                                    padding: '0.875rem 1.5rem',
                                    backgroundColor: 'transparent',
                                    color: 'var(--secondary)',
                                    border: '2px solid #e2e8f0',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    cursor: 'pointer'
                                }}
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleSavePreferences}
                                style={{
                                    padding: '0.875rem 2rem',
                                    backgroundColor: 'var(--primary)',
                                    color: 'var(--secondary)',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontWeight: 700,
                                    fontSize: '0.95rem',
                                    cursor: 'pointer'
                                }}
                            >
                                Guardar preferencias
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CookieConsent;

import React, { useEffect } from 'react';

const FAQPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '5rem', minHeight: '80vh' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <span className="section-tag">Dudas Frecuentes</span>
                        <h1 className="section-title">Preguntas Frecuentes</h1>
                        <p className="section-desc" style={{ marginBottom: '0' }}>Resuelve tus dudas sobre seguridad, datos y funcionamiento de Ciertto.</p>
                    </div>

                    <div className="faq-item" style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
                            ¿Qué pasa si se cae la web? ¿Qué pasa con mi información? ¿Puedo perderla?
                        </h2>

                        <div style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
                            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', fontWeight: 500, color: 'var(--secondary)' }}>
                                Es una excelente pregunta. Ciertto está construido sobre la infraestructura de Google Cloud (Firebase), la misma que usa Google para sus servicios. Esto significa que estás protegido por partida doble:
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {/* Point 1 */}
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'rgba(255,184,0,0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                                        🏦
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>La web es solo la ventana, no la caja fuerte</h3>
                                        <p style={{ fontSize: '0.95rem' }}>
                                            Ciertto funciona en dos partes separadas: la Web (lo que ves) y los Datos (lo que guardas). Si la web tuviera una caída temporal (como cuando una tienda cierra la persiana un momento), <strong>tus datos (clientes, facturas, tareas) siguen intactos</strong> y guardados en la nube de Google. No están en la web, están en los servidores seguros de Google.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 2 */}
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'rgba(255,184,0,0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                                        ☁️
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Tus datos están replicados (Seguridad Google)</h3>
                                        <p style={{ fontSize: '0.95rem' }}>
                                            Al usar la infraestructura de Google, tu base de datos no está en un solo ordenador que se pueda romper. Está en la nube con sistemas de redundancia. Si un servidor falla, hay copias automáticas en otros lugares instantáneamente. Perder datos ahí es mucho más difícil que perder un Excel en tu propio ordenador.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 3 */}
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'rgba(255,184,0,0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                                        💾
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Tú tienes el control: Copias de Seguridad</h3>
                                        <p style={{ fontSize: '0.95rem' }}>
                                            Para tu tranquilidad total, Ciertto tiene una sección en <strong>Configuración</strong> donde puedes descargar <strong>TU copia de seguridad</strong> cuando quieras. Puedes exportar tus contactos, facturas y datos en formatos abiertos (JSON/CSV) para guardarlos en tu ordenador. Así nunca dependes al 100% de nosotros.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 4 */}
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'rgba(255,184,0,0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                                        🔄
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Sesión Persistente</h3>
                                        <p style={{ fontSize: '0.95rem' }}>
                                            Hemos configurado la autenticación para que sea "Local". Si recargas la página o se va internet un momento, no pierdes tu sesión ni lo que estabas viendo. El sistema te recuerda automáticamente.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder for more questions if needed */}
                    <div className="faq-item" style={{ marginBottom: '2rem', padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>¿Tengo permanencia?</h3>
                        <p style={{ fontSize: '0.95rem' }}>No, puedes cancelar tu suscripción en cualquier momento desde tu panel de usuario sin penalizaciones.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FAQPage;

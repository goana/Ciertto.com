import React, { useEffect } from 'react';

const LegalPage = ({ title, content }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <div className="legal-page">
            <main style={{ paddingTop: '8rem', paddingBottom: '8rem', minHeight: '80vh' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 className="section-title" style={{ marginBottom: '3rem' }}>{title}</h1>
                    <div className="legal-content" style={{ lineHeight: '1.8', color: 'var(--text-muted)' }}>
                        {content}
                    </div>
                </div>
            </main>
        </div>
    );
};

export const AvisoLegal = () => (
    <LegalPage
        title="Aviso legal"
        content={
            <>
                <div style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>Titular del sitio web</h2>
                    <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa:</p>
                    <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                        <li><strong>Titular:</strong> Ana Sánchez Gómiz</li>
                        <li><strong>NIF:</strong> 31731933Y</li>
                        <li><strong>Domicilio:</strong> C/ Muladíes 4, 18006, Granada, España</li>
                        <li><strong>Email de contacto:</strong> <a href="mailto:info@ciertto.com">info@ciertto.com</a></li>
                        <li><strong>Dominio web:</strong> ciertto.com</li>
                    </ul>
                </div>

                <hr style={{ margin: '3rem 0', border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)' }} />

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>1. Objeto y ámbito de aplicación</h2>
                <p>Este Aviso Legal regula el acceso, navegación y uso del sitio web <strong>ciertto.com</strong> (en adelante, el "Sitio Web"), así como las responsabilidades derivadas de la utilización de sus contenidos (textos, imágenes, diseños, software, bases de datos, código, marcas y cualquier otra creación protegible).</p>
                <p>El acceso al Sitio Web atribuye la condición de <strong>usuario</strong> e implica la aceptación de este Aviso Legal. Si no estás de acuerdo, no uses el Sitio Web.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>2. Servicios</h2>
                <p>Ciertto es una herramienta de gestión para autónomos y emprendedores, accesible desde el navegador y, en su caso, mediante áreas privadas con cuenta de usuario. Algunas funcionalidades pueden requerir registro y/o contratación de un plan.</p>
                <p>Las características del servicio, planes, precios y límites de uso se indican en el Sitio Web y/o durante el proceso de contratación.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>3. Condiciones de acceso y uso</h2>
                <p>Como usuario te comprometes a:</p>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                    <li>Utilizar el Sitio Web de forma lícita y conforme a la buena fe.</li>
                    <li>No realizar actividades que puedan dañar, sobrecargar o inutilizar el Sitio Web o los sistemas asociados.</li>
                    <li>No intentar acceder a áreas restringidas, cuentas de terceros, ni interferir en la seguridad del servicio.</li>
                    <li>No usar el Sitio Web para transmitir contenido ilegal, ofensivo, difamatorio, discriminatorio o que infrinja derechos de terceros.</li>
                </ul>
                <p>Ana Sánchez Gómiz se reserva el derecho a <strong>denegar o retirar el acceso</strong> al Sitio Web cuando se incumplan estas condiciones.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>4. Propiedad intelectual e industrial</h2>
                <p>Todos los contenidos del Sitio Web y de la plataforma (incluyendo, sin carácter limitativo, diseño, interfaz, código, textos, logotipos, marcas, estructura, selección y presentación de contenidos) son titularidad de <strong>Ana Sánchez Gómiz</strong> o dispone de derechos suficientes para su uso, y están protegidos por la normativa de propiedad intelectual e industrial.</p>
                <p>Queda prohibida la reproducción, distribución, comunicación pública, puesta a disposición, transformación o cualquier forma de explotación, total o parcial, sin autorización expresa y por escrito de la titular, salvo en los casos legalmente permitidos.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>5. Responsabilidad</h2>
                <h3 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--secondary)' }}>5.1. Disponibilidad del sitio y del servicio</h3>
                <p>Se trabaja para mantener el Sitio Web y la plataforma disponibles, pero no se puede garantizar la disponibilidad continua y sin interrupciones por causas técnicas, mantenimiento, actualizaciones, incidencias de terceros o fuerza mayor.</p>

                <h3 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--secondary)' }}>5.2. Uso por parte del usuario</h3>
                <p>El usuario es responsable del uso que haga del Sitio Web. No se asume responsabilidad por daños derivados de un uso indebido, negligente o contrario a este Aviso Legal.</p>

                <h3 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--secondary)' }}>5.3. Contenidos y decisiones del usuario</h3>
                <p>La información y herramientas ofrecidas en Ciertto tienen finalidad organizativa y operativa. La titular no se responsabiliza de decisiones empresariales, económicas o de gestión tomadas por el usuario a partir del uso de la herramienta.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>6. Enlaces a terceros</h2>
                <p>El Sitio Web puede incluir enlaces a páginas de terceros (por ejemplo, integraciones, documentación o servicios externos). Estos enlaces se facilitan con finalidad informativa. No se controla ni se asume responsabilidad sobre contenidos, políticas o prácticas de sitios de terceros.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>7. Registro, credenciales y seguridad</h2>
                <p>Cuando el uso del servicio requiera crear una cuenta:</p>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                    <li>El usuario es responsable de mantener la confidencialidad de sus credenciales.</li>
                    <li>El usuario debe notificar de inmediato cualquier acceso no autorizado o uso indebido de su cuenta.</li>
                    <li>Se podrán aplicar medidas razonables de seguridad y, si procede, suspender temporalmente el acceso ante indicios de uso fraudulento.</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>8. Contratación y pagos (si aplica)</h2>
                <p>Cuando el usuario contrata un plan de pago, la contratación se realiza conforme a la información mostrada durante el proceso de compra. Los pagos pueden gestionarse a través de proveedores externos (por ejemplo, pasarelas de pago). La titular no almacena datos completos de tarjeta; estos son tratados por el proveedor de pago según sus propias condiciones.</p>
                <p>Para condiciones específicas de facturación, renovación, cancelación y reembolsos, se aplicará lo indicado en el proceso de contratación y, en su caso, en las páginas informativas del Sitio Web.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>9. Protección de datos personales</h2>
                <p>El tratamiento de datos personales se rige por la <strong>Política de Privacidad</strong> del Sitio Web, donde se explica qué datos se recogen, con qué finalidades, base legal, plazos de conservación y cómo ejercer los derechos del usuario.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>10. Cookies</h2>
                <p>El Sitio Web puede utilizar cookies y tecnologías similares. La información detallada se indica en la <strong>Política de Cookies</strong> y, en su caso, en el banner o centro de preferencias.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>11. Modificaciones</h2>
                <p>Se podrá modificar este Aviso Legal para adaptarlo a cambios normativos, mejoras del servicio o cambios operativos. La versión vigente será la publicada en el Sitio Web. Se recomienda revisarlo periódicamente.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>12. Legislación aplicable y jurisdicción</h2>
                <p>Este Aviso Legal se rige por la legislación española. Salvo que la normativa de consumidores establezca otro fuero imperativo, para cualquier conflicto que pudiera derivarse del acceso o uso del Sitio Web, las partes se someten a los juzgados y tribunales de <strong>Granada</strong>.</p>

                <hr style={{ margin: '3rem 0', border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)' }} />

                <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '2rem' }}><strong>Última actualización:</strong> 26/12/2025</p>
            </>
        }
    />
);

export const PoliticaPrivacidad = () => (
    <LegalPage
        title="Política de privacidad"
        content={
            <>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>1. Quién es la responsable del tratamiento</h2>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                    <li><strong>Responsable:</strong> Ana Sánchez Gómiz</li>
                    <li><strong>NIF:</strong> 31731933Y</li>
                    <li><strong>Domicilio:</strong> C/ Muladíes 4, 18006, Granada, España</li>
                    <li><strong>Email de contacto:</strong> <a href="mailto:info@ciertto.com">info@ciertto.com</a></li>
                    <li><strong>Web:</strong> ciertto.com</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>2. Qué datos tratamos</h2>
                <p>Según cómo uses el sitio y/o la herramienta, podemos tratar:</p>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                    <li><strong>Datos identificativos y de contacto:</strong> nombre, apellidos, email.</li>
                    <li><strong>Datos de cuenta:</strong> credenciales (en formato cifrado), preferencias, plan contratado, límites de uso.</li>
                    <li><strong>Datos de facturación:</strong> datos necesarios para emitir factura (nombre/razón social, NIF/CIF, dirección).</li>
                    <li><strong>Datos de uso y navegación:</strong> información técnica (IP, dispositivo, navegador), eventos de uso, logs, rendimiento.</li>
                    <li><strong>Contenido que introduces en Ciertto:</strong> información de proyectos, tareas, contactos y otros datos que tú decides guardar en tu cuenta.</li>
                </ul>
                <p>No tratamos categorías especiales de datos (salud, ideología, etc.) de forma intencional. Si introduces ese tipo de información en tu cuenta, lo haces bajo tu responsabilidad.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>3. Para qué usamos tus datos (finalidades)</h2>
                <p>Tratamos tus datos para:</p>
                <ol style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                    <li><strong>Gestionar tu alta y tu cuenta</strong> en Ciertto, y permitirte acceder al área privada.</li>
                    <li><strong>Prestar el servicio</strong> y mantenerlo operativo (funcionalidades, soporte, mejoras, seguridad).</li>
                    <li><strong>Gestionar pagos, facturación y control administrativo</strong> cuando contratas un plan.</li>
                    <li><strong>Atender consultas y soporte</strong> (por email u otros canales habilitados).</li>
                    <li><strong>Comunicaciones informativas del servicio</strong> (cambios relevantes, seguridad, incidencias, avisos operativos).</li>
                    <li><strong>Analítica y mejora del producto</strong> (entender qué funciona, rendimiento, errores), siempre con criterios de minimización.</li>
                    <li><strong>Cumplir obligaciones legales</strong> aplicables.</li>
                </ol>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>4. Base legal del tratamiento</h2>
                <p>La base jurídica depende de cada finalidad:</p>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                    <li><strong>Ejecución de un contrato:</strong> para crear tu cuenta y prestarte el servicio.</li>
                    <li><strong>Consentimiento:</strong> para cookies no necesarias y, cuando proceda, comunicaciones comerciales.</li>
                    <li><strong>Interés legítimo:</strong> para seguridad, prevención de fraude, mantenimiento, y mejora del servicio (con equilibrio de derechos).</li>
                    <li><strong>Obligación legal:</strong> para facturación, impuestos y atención de requerimientos.</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>5. Durante cuánto tiempo conservamos tus datos</h2>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                    <li><strong>Datos de cuenta:</strong> mientras mantengas la cuenta activa. Si la eliminas, se bloquearán y/o suprimirán según proceda, salvo obligaciones legales.</li>
                    <li><strong>Datos de facturación:</strong> el tiempo exigido por normativa fiscal/contable.</li>
                    <li><strong>Soporte y comunicaciones:</strong> el tiempo necesario para atender y dejar constancia razonable.</li>
                    <li><strong>Logs y seguridad:</strong> durante plazos limitados para investigación de incidencias y protección del servicio.</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>6. A quién se comunican tus datos (destinatarios)</h2>
                <p>No vendemos tus datos.</p>
                <p>Podemos compartir datos con <strong>proveedores</strong> que nos ayudan a prestar el servicio (encargados del tratamiento), por ejemplo:</p>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                    <li><strong>Hosting/infraestructura y almacenamiento</strong></li>
                    <li><strong>Email y soporte</strong></li>
                    <li><strong>Analítica y monitorización</strong></li>
                    <li><strong>Pasarela de pago</strong> (para procesar cobros)</li>
                    <li><strong>Herramientas técnicas necesarias para el funcionamiento</strong></li>
                </ul>
                <p>Estos proveedores actúan bajo contrato y siguiendo instrucciones, con medidas de seguridad y confidencialidad.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>7. Transferencias internacionales</h2>
                <p>Algunos proveedores pueden estar ubicados fuera del Espacio Económico Europeo o alojar datos en esa ubicación. En esos casos, se aplicarán <strong>garantías adecuadas</strong> (por ejemplo, Cláusulas Contractuales Tipo u otros mecanismos legales vigentes).</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>8. Seguridad de los datos</h2>
                <p>Aplicamos medidas técnicas y organizativas razonables para proteger tus datos: control de accesos, cifrado cuando aplica, registro de actividad, copias de seguridad y prácticas orientadas a reducir riesgos.</p>
                <p>Aun así, ningún sistema es infalible. Si detectamos una brecha de seguridad relevante, actuaremos conforme a la normativa.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>9. Derechos del usuario</h2>
                <p>Puedes ejercer:</p>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                    <li><strong>Acceso</strong> a tus datos</li>
                    <li><strong>Rectificación</strong> de datos inexactos</li>
                    <li><strong>Supresión</strong> (derecho al olvido) cuando proceda</li>
                    <li><strong>Oposición</strong></li>
                    <li><strong>Limitación</strong> del tratamiento</li>
                    <li><strong>Portabilidad</strong> de tus datos</li>
                    <li><strong>Retirar el consentimiento</strong> en cualquier momento (si el tratamiento se basaba en consentimiento)</li>
                </ul>
                <p>Para ejercerlos, escribe a <strong><a href="mailto:info@ciertto.com">info@ciertto.com</a></strong> indicando el derecho que quieres ejercer y un medio para verificar tu identidad (solo lo mínimo necesario).</p>
                <p>Si consideras que no hemos gestionado bien tu solicitud, puedes reclamar ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong>.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>10. Datos de terceros que introduces en Ciertto</h2>
                <p>Si introduces datos personales de terceros (por ejemplo, contactos o clientes), tú actúas como responsable de esos datos respecto a esa información y te comprometes a:</p>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                    <li>tener base legal para tratarlos,</li>
                    <li>informarles según corresponda,</li>
                    <li>y mantenerlos actualizados.</li>
                </ul>
                <p>Ciertto actúa como prestador de la herramienta respecto a esos datos.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>11. Menores de edad</h2>
                <p>El servicio no está dirigido a menores de 14 años. Si detectamos registros de menores sin autorización, podremos cancelar la cuenta y eliminar los datos.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>12. Cambios en esta política</h2>
                <p>Podremos actualizar esta Política para adaptarla a cambios legales o del servicio. La versión vigente será la publicada en el sitio.</p>

                <hr style={{ margin: '3rem 0', border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)' }} />

                <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '2rem' }}><strong>Última actualización:</strong> 26/12/2025</p>
            </>
        }
    />
);

export const PoliticaCookies = () => (
    <LegalPage
        title="Política de cookies"
        content={
            <>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>1. Qué son las cookies</h2>
                <p>Las cookies son pequeños archivos que se guardan en tu dispositivo cuando visitas una web. Sirven para que el sitio funcione, para recordar preferencias y, en algunos casos, para medir el uso y mejorar la experiencia.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>2. Qué tipos de cookies usamos</h2>
                <p>En <strong>ciertto.com</strong> podemos usar:</p>

                <h3 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--secondary)' }}>A) Cookies técnicas (necesarias)</h3>
                <p>Permiten que la web funcione correctamente y que puedas navegar y usar funciones básicas (por ejemplo, mantener la sesión, seguridad, balanceo de carga, guardar tu elección de cookies).</p>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                    <li><strong>Base legal:</strong> interés legítimo / prestación del servicio.</li>
                    <li><strong>Se instalan:</strong> siempre (no requieren consentimiento).</li>
                </ul>

                <h3 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--secondary)' }}>B) Cookies de preferencias (opcionales)</h3>
                <p>Recuerdan opciones como idioma, configuración visual o preferencias del usuario.</p>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                    <li><strong>Base legal:</strong> consentimiento.</li>
                    <li><strong>Se instalan:</strong> solo si las aceptas.</li>
                </ul>

                <h3 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--secondary)' }}>C) Cookies de analítica o medición (opcionales)</h3>
                <p>Nos ayudan a entender cómo se usa la web (páginas más vistas, tiempos, errores) para mejorar Ciertto. Se usan de forma agregada y con minimización.</p>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                    <li><strong>Base legal:</strong> consentimiento.</li>
                    <li><strong>Se instalan:</strong> solo si las aceptas.</li>
                </ul>

                <h3 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--secondary)' }}>D) Cookies de marketing/publicidad (opcionales)</h3>
                <p>Se utilizan para mostrar publicidad personalizada o medir campañas. Solo se usarán si activamos este tipo de medición y tú lo aceptas.</p>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                    <li><strong>Base legal:</strong> consentimiento.</li>
                    <li><strong>Se instalan:</strong> solo si las aceptas.</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>3. Qué cookies concretas se instalan</h2>
                <p>El listado exacto de cookies depende de los servicios activos en cada momento (analítica, pasarela de pago, soporte, etc.). Por eso, el detalle final se muestra en el <strong>panel de configuración de cookies</strong> del banner, donde podrás ver:</p>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                    <li>nombre de la cookie,</li>
                    <li>proveedor,</li>
                    <li>finalidad,</li>
                    <li>duración,</li>
                    <li>tipo.</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>4. Cómo gestionar o retirar tu consentimiento</h2>
                <p>Puedes cambiar tu decisión en cualquier momento desde el <button onClick={() => window.openCookiePanel && window.openCookiePanel()} style={{ all: 'unset', cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline', color: 'var(--primary)' }}>panel de configuración de cookies</button> (o desde el enlace "Configurar cookies" del pie de página).</p>
                <p>Si desactivas cookies opcionales, la web seguirá funcionando, pero algunas funciones o la experiencia pueden verse limitadas.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>5. Cómo desactivar cookies desde el navegador</h2>
                <p>También puedes eliminar o bloquear cookies desde tu navegador. Aquí tienes las rutas habituales (pueden variar según versión):</p>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                    <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
                    <li><strong>Safari:</strong> Preferencias → Privacidad</li>
                    <li><strong>Firefox:</strong> Ajustes → Privacidad y seguridad</li>
                    <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
                </ul>
                <p>Si bloqueas cookies necesarias, es posible que la web no funcione correctamente.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>6. Cookies de terceros</h2>
                <p>Algunas cookies pueden ser de terceros (por ejemplo, herramientas de analítica, soporte o pagos). Esos terceros pueden tratar datos según sus propias políticas.</p>
                <p>En Ciertto se aplican criterios de minimización y se evita cargar cookies no necesarias sin consentimiento.</p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>7. Más información</h2>
                <p>Para más información sobre cómo tratamos datos personales, consulta la <strong>Política de Privacidad</strong>.</p>

                <hr style={{ margin: '3rem 0', border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)' }} />

                <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '2rem' }}><strong>Última actualización:</strong> 26/12/2025</p>
            </>
        }
    />
);

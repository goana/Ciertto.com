import React, { useEffect } from 'react';
import Header from './Header';

const LegalPage = ({ title, content }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <div className="legal-page">
            <Header />
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
        title="Aviso Legal"
        content={
            <>
                <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), a continuación se exponen los datos identificativos de la empresa.</p>
                <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>1. Datos Identificativos</h3>
                <p>Denominación social: Ciertto S.L. (o nombre del titular)<br />
                    NIF/CIF: [Introduce NIF]<br />
                    Domicilio social: [Introduce dirección]<br />
                    Correo electrónico: hola@ciertto.com</p>

                <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>2. Propiedad Intelectual</h3>
                <p>El código fuente, los diseños gráficos, las imágenes, las fotografías, los sonidos, las animaciones, el software, los textos, así como la información y los contenidos que se recogen en el presente sitio web están protegidos por la legislación española sobre los derechos de propiedad intelectual e industrial a favor de Ciertto.</p>
            </>
        }
    />
);

export const PoliticaPrivacidad = () => (
    <LegalPage
        title="Política de Privacidad"
        content={
            <>
                <p>La presente Política de Privacidad tiene por objeto facilitar información sobre los derechos que le asisten en virtud de lo dispuesto en el REGLAMENTO (UE) 2016/679 DEL PARLAMENTO EUROPEO y del CONSEJO de 27 de abril de 2016.</p>
                <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>1. Responsable del Tratamiento</h3>
                <p>Ciertto es el responsable del tratamiento de sus datos personales, con domicilio en [Dirección] y email hola@ciertto.com.</p>

                <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>2. Finalidad</h3>
                <p>Tratamos sus datos con la única finalidad de prestarle el servicio de gestión operativa de su negocio solicitado a través de nuestra plataforma.</p>
            </>
        }
    />
);

export const PoliticaCookies = () => (
    <LegalPage
        title="Política de Cookies"
        content={
            <>
                <p>Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación del usuario.</p>
                <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>1. ¿Qué son las cookies?</h3>
                <p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo.</p>

                <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>2. Tipos de cookies utilizadas</h3>
                <p>Utilizamos cookies técnicas necesarias para el funcionamiento de la aplicación y cookies analíticas para entender cómo se usa el sitio web.</p>
            </>
        }
    />
);

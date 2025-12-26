# Implementación RGPD - Ciertto

## ✅ Lo que ya está implementado

### 1. Páginas legales completas
- ✅ **Aviso Legal** (`/aviso-legal`) - 12 secciones completas
- ✅ **Política de Privacidad** (`/privacidad`) - 12 secciones GDPR-compliant
- ✅ **Política de Cookies** (`/cookies`) - 7 secciones con tipos de cookies

### 2. Sistema de gestión de cookies
- ✅ **Banner de cookies** con tres botones al mismo nivel:
  - "Aceptar todas"
  - "Rechazar todas"
  - "Configurar"
- ✅ **Panel de configuración** (segunda capa) con categorías:
  - Cookies necesarias (siempre activas)
  - Cookies de analítica (toggle)
  - Cookies de preferencias (toggle)
- ✅ **Enlace permanente** "Configurar cookies" en el footer
- ✅ **Renovación automática** cada 24 meses
- ✅ **Bloqueo de Google Analytics** hasta consentimiento

### 3. Cumplimiento AEPD
- ✅ Botones "Aceptar" y "Rechazar" al mismo nivel (sin jerarquía visual)
- ✅ Sin casillas premarcadas
- ✅ Sin consentimiento por navegación continuada
- ✅ Posibilidad de retirar/cambiar consentimiento en cualquier momento
- ✅ Almacenamiento de preferencias con timestamp y versión

## 🔧 Pasos pendientes para completar RGPD

### 1. Configurar Google Analytics

**En `src/CookieConsent.jsx`, línea 57 y 62:**

Reemplaza `G-XXXXXXXXXX` con tu ID real de Google Analytics:

```javascript
script.src = 'https://www.googletagmanager.com/gtag/js?id=G-TU_ID_AQUI';
// ...
gtag('config', 'G-TU_ID_AQUI');
```

### 2. Contratos de encargo (Art. 28 RGPD)

Debes tener documentados los acuerdos con:

#### A) SiteGround (Hosting)
- **Acción**: Revisar el DPA (Data Processing Agreement) de SiteGround
- **Dónde**: Panel de SiteGround → Legal/Compliance
- **Qué verificar**:
  - Que actúan como encargados del tratamiento
  - Medidas de seguridad implementadas
  - Ubicación de los servidores
  - Garantías para transferencias internacionales

#### B) Google Analytics
- **Acción**: Aceptar el DPA de Google
- **Dónde**: Google Analytics → Admin → Account Settings → Data Processing Amendment
- **Link**: https://support.google.com/analytics/answer/3379636
- **Qué hacer**:
  1. Ir a la configuración de tu cuenta de Analytics
  2. Aceptar el "Data Processing Terms"
  3. Guardar copia del acuerdo

### 3. Registro de actividades de tratamiento

Aunque seas autónoma, es recomendable tener un documento interno que liste:

**Tratamientos principales:**

1. **Gestión de usuarios/cuentas**
   - Finalidad: Prestación del servicio
   - Base legal: Ejecución de contrato
   - Datos: Email, nombre, credenciales
   - Destinatarios: SiteGround (hosting)
   - Conservación: Mientras esté activa la cuenta

2. **Analítica web**
   - Finalidad: Mejora del servicio
   - Base legal: Consentimiento
   - Datos: IP (anonimizada), navegador, páginas visitadas
   - Destinatarios: Google Analytics
   - Conservación: 26 meses (configurable en GA)

3. **Facturación**
   - Finalidad: Cumplimiento legal fiscal
   - Base legal: Obligación legal
   - Datos: Nombre/razón social, NIF, dirección
   - Conservación: 6 años (normativa fiscal)

4. **Soporte/Contacto**
   - Finalidad: Atención de consultas
   - Base legal: Interés legítimo / medidas precontractuales
   - Datos: Email, nombre, mensaje
   - Conservación: Tiempo necesario para resolver + 1 año

### 4. Medidas de seguridad

**Ya implementadas:**
- ✅ HTTPS (certificado SSL)
- ✅ Hosting en SiteGround (medidas de seguridad del proveedor)

**Recomendadas:**
- [ ] Backups automáticos (verificar que estén activos en SiteGround)
- [ ] Actualizaciones regulares de dependencias
- [ ] Contraseñas seguras para accesos administrativos
- [ ] Registro de accesos (logs)

### 5. Procedimiento de brechas de seguridad

**Documento interno** con:
- Qué se considera una brecha
- A quién notificar (AEPD si afecta a derechos de usuarios)
- Plazo: 72 horas desde conocimiento
- Registro de incidentes

### 6. Configurar Google Analytics para privacidad

**En tu cuenta de Google Analytics:**

1. **Anonimización de IP** (ya incluido en gtag.js por defecto en GA4)
2. **Tiempo de retención de datos**:
   - Admin → Data Settings → Data Retention
   - Recomendado: 14 o 26 meses
3. **Compartir datos con Google**:
   - Admin → Account Settings → Data Sharing Settings
   - Desactivar lo que no necesites

### 7. Formularios de contacto

**En `src/ContactPage.jsx`:**

Añadir texto informativo bajo el botón de envío:

```jsx
<p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
  Al enviar este formulario, aceptas que tratemos tus datos para responder a tu consulta. 
  Consulta nuestra <Link to="/privacidad">Política de Privacidad</Link>.
</p>
```

## 📋 Checklist final RGPD

- [ ] ID de Google Analytics configurado en `CookieConsent.jsx`
- [ ] DPA de SiteGround revisado y guardado
- [ ] DPA de Google Analytics aceptado
- [ ] Registro de actividades de tratamiento creado (documento interno)
- [ ] Backups automáticos verificados
- [ ] Configuración de privacidad en Google Analytics
- [ ] Texto informativo en formularios de contacto
- [ ] Procedimiento de brechas documentado (interno)

## 🎯 Cómo funciona el sistema de cookies

### Flujo de usuario:

1. **Primera visita**: Se muestra el banner con 3 opciones
2. **Aceptar todas**: Se activan todas las cookies y se carga GA
3. **Rechazar todas**: Solo cookies necesarias, GA no se carga
4. **Configurar**: Panel con toggles para elegir categorías
5. **Guardar**: Preferencias guardadas en localStorage con timestamp
6. **Renovación**: Cada 24 meses se vuelve a pedir consentimiento

### Datos almacenados:

```javascript
{
  necessary: true,      // Siempre true
  analytics: true/false,
  preferences: true/false,
  marketing: false,     // Preparado para futuro
  version: "1.0",
  timestamp: 1703592000000
}
```

### Acceso al panel:

- Desde el footer: Click en "Configurar cookies"
- Programáticamente: `window.openCookiePanel()`

## 📚 Referencias legales

- **RGPD**: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- **LSSI-CE**: https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758
- **Guía de cookies AEPD**: https://www.aepd.es/es/documento/guia-cookies.pdf
- **Google Analytics DPA**: https://support.google.com/analytics/answer/3379636

## ⚠️ Importante

Este sistema cumple con los requisitos básicos del RGPD y la LSSI-CE, pero **no sustituye el asesoramiento legal profesional**. Para casos específicos o dudas legales, consulta con un abogado especializado en protección de datos.

---

**Última actualización**: 26/12/2025

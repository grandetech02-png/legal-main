# Configuración de EmailJS para el Formulario de Contacto

El formulario de contacto del sitio utiliza EmailJS para enviar correos electrónicos directamente a `info@grandesv.com`. Sigue estos pasos para configurar el servicio:

## Paso 1: Crear una cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" para crear una cuenta gratuita
3. Verifica tu correo electrónico

## Paso 2: Agregar un servicio de email

1. Una vez dentro de tu cuenta, ve a la sección "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta de email
5. **Importante**: Asegúrate de usar la cuenta de email `info@grandesv.com`
6. Guarda el **Service ID** que se genera (algo como `service_abc123`)

## Paso 3: Crear un template de email

1. Ve a la sección "Email Templates"
2. Haz clic en "Create New Template"
3. Configura el template con los siguientes campos:

### Configuración del Template:

**Subject (Asunto):**
```
Nuevo mensaje de contacto de {{from_name}}
```

**Content (Contenido del email):**
```
Has recibido un nuevo mensaje desde el formulario de contacto del sitio web.

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Área de interés: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de Boscia Legal.
```

**Configuración adicional:**
- To Email: `info@grandesv.com` (o usa `{{to_email}}` para que sea dinámico)
- From Name: `{{from_name}}`
- Reply To: `{{from_email}}`

4. Guarda el template y copia el **Template ID** (algo como `template_xyz456`)

## Paso 4: Obtener tu Public Key

1. Ve a "Account" en el menú superior
2. En la sección "General", encontrarás tu **Public Key** (algo como `abcdefghijk123456`)

## Paso 5: Configurar las variables de entorno

1. Abre el archivo `.env` en la raíz del proyecto
2. Reemplaza los valores placeholder con tus credenciales de EmailJS:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

## Paso 6: Reiniciar el servidor de desarrollo

Después de actualizar el archivo `.env`, reinicia el servidor de desarrollo:

```bash
npm run dev
```

## Verificación

1. Ve a la página de contacto del sitio
2. Completa el formulario con información de prueba
3. Envía el formulario
4. Deberías ver un mensaje de éxito
5. Revisa la bandeja de entrada de `info@grandesv.com` para confirmar que el email llegó

## Características del Formulario

El formulario incluye:

- Validación de campos obligatorios (nombre, email, mensaje)
- Validación de formato de email
- Indicador visual de carga mientras se envía
- Mensaje de éxito cuando el envío es correcto
- Mensaje de error detallado si algo falla
- No recarga la página al enviar
- Deshabilita el formulario mientras se está enviando
- Limpia los campos después de un envío exitoso

## Plan Gratuito de EmailJS

El plan gratuito de EmailJS incluye:
- 200 emails por mes
- Sin tarjeta de crédito requerida
- Soporte básico

Si necesitas más de 200 emails al mes, considera actualizar a un plan de pago.

## Solución de Problemas

### Error: "EmailJS configuration is missing"
- Verifica que las variables de entorno estén correctamente configuradas en el archivo `.env`
- Asegúrate de que los nombres de las variables sean exactamente como se muestran arriba
- Reinicia el servidor de desarrollo después de modificar el `.env`

### El email no llega
- Verifica que el Service ID y Template ID sean correctos
- Asegúrate de que el servicio de email esté correctamente conectado en EmailJS
- Revisa la carpeta de spam de `info@grandesv.com`
- Verifica que el template esté usando `{{to_email}}` o tenga configurado `info@grandesv.com` como destinatario

### Error de CORS
- EmailJS ya incluye configuración de CORS, no deberías tener problemas
- Si aparece un error de CORS, verifica que estés usando las credenciales correctas

## Soporte

Si tienes problemas con la configuración, visita:
- [Documentación de EmailJS](https://www.emailjs.com/docs/)
- [FAQ de EmailJS](https://www.emailjs.com/docs/faq/)

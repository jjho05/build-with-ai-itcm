# Proyecto: Build with AI - ITCM 2026
## Materia: Programación Web [AEB-1055]
### Eje Estratégico: Innovación Tecnológica y Desarrollo de IA

---

## Tabla de Contenidos
1. [Introducción y Contexto Institucional](#introducción-y-contexto-institucional)
2. [Visión Estratégica del Proyecto](#visión-estratégica-del-proyecto)
3. [Arquitectura Tecnológica Detallada](#arquitectura-tecnológica-detallada)
    - [Frontend: Interfaz y Experiencia de Usuario](#frontend-interfaz-y-experiencia-de-usuario)
    - [Backend: Motor de Procesamiento y Seguridad](#backend-motor-de-procesamiento-y-seguridad)
    - [Ecosistema de Integración: Gemini y Google Sheets](#ecosistema-de-integración-gemini-y-google-sheets)
4. [Funcionalidades de Grado Industrial](#funcionalidades-de-grado-industrial)
5. [Auditoría Técnica y Fundamentos de Inteligencia Artificial](#auditoría-técnica-y-fundamentos-de-inteligencia-artificial)
6. [Seguridad y Hardening de la Aplicación](#seguridad-y-hardening-de-la-aplicación)
7. [Guía de Instalación, Configuración y Despliegue](#guía-de-instalación-configuración-y-despliegue)
8. [Manifesto de Archivos y Responsabilidades](#manifesto-de-archivos-y-responsabilidades)
9. [Identidad Institucional y Créditos](#identidad-institucional-y-créditos)

---

## Introducción y Contexto Institucional

El proyecto **Build with AI - ITCM 2026** representa una iniciativa tecnológica de vanguardia desarrollada para el **Instituto Tecnológico de Ciudad Madero (ITCM)**. Enmarcado en la gira oficial de **Google Developers**, este sistema tiene como objetivo primordial la gestión inteligente de propuestas de innovación generadas por la comunidad estudiantil y docente de la carrera de Ingeniería en Sistemas Computacionales.

Este repositorio no es solo un entregable académico para la materia de **Programación Web**; es una plataforma soberana que integra principios avanzados de arquitectura de software, seguridad informática y procesamiento de lenguaje natural (NLP) para potenciar el ecosistema digital del **Tecnológico Nacional de México**.

---

## Visión Estratégica del Proyecto

La visión del proyecto se centra en tres ejes fundamentales:
1. **Profesionalización Digital:** Proporcionar una herramienta que esté a la altura de los estándares de la industria tecnológica actual (Google, Meta, Amazon).
2. **Fomento a la Innovación:** Facilitar el canal de comunicación entre las ideas disruptivas de los estudiantes y los expertos de Google Developers.
3. **Identidad Institucional:** Reforzar el sentido de pertenencia y orgullo maderense mediante una interfaz que respira la cultura del ITCM.

---

## Arquitectura Tecnológica Detallada

### Frontend: Interfaz y Experiencia de Usuario
La interfaz de usuario ha sido desarrollada bajo la metodología de **Material Design 3**, asegurando una estética limpia, minimalista y funcional. 

- **Sistema de Temas Dinámico:** Implementación de un motor de temas (Light/Dark Mode) basado en variables CSS (Custom Properties) que se sincroniza con la preferencia del sistema del usuario y persiste mediante `localStorage`.
- **Animaciones de Revelado:** Uso de la API `Intersection Observer` para gestionar animaciones de entrada suaves (`reveal`), reduciendo la carga cognitiva y mejorando la fluidez visual.
- **Top Loader Institucional:** Una barra de carga superior que utiliza un degradado lineal con los cuatro colores primarios de Google (#4285F4, #EA4335, #FBBC05, #34A853), proporcionando feedback visual constante durante las operaciones asíncronas.
- **Persistencia de Drafts:** Lógica integrada para salvaguardar el contenido de los formularios en tiempo real, evitando la pérdida de información ante recargas accidentales de la página.

### Backend: Motor de Procesamiento y Seguridad
El servidor está construido sobre **Node.js** utilizando el framework **Express**, diseñado para operar de forma eficiente en entornos de funciones serverless (Vercel).

- **Patrón AIRequestHandler (OOP):** El procesamiento de las solicitudes se gestiona mediante una clase orientada a objetos que centraliza la sanitización de datos, el cálculo de métricas (conteo de palabras) y la validación de integridad del payload.
- **Proxy Inverso de Seguridad:** El backend actúa como un escudo protector para las llaves de API. Ninguna credencial sensible es expuesta al cliente, mitigando riesgos de exfiltración y abuso financiero de la API de Gemini.
- **Manejo de Errores Resiliente:** Implementación de bloques `try-catch` y validaciones de estado HTTP para garantizar que el usuario siempre reciba una respuesta clara, incluso ante fallos de servicios externos.

### Ecosistema de Integración: Gemini y Google Sheets
El sistema se integra de forma nativa con el ecosistema de Google:
- **Google Gemini API:** Utiliza el modelo `gemini-1.5-flash` para el chatbot de asistencia, permitiendo una interacción natural y técnica con los usuarios.
- **Google Sheets Webhook:** Los datos capturados se envían a un script de Google Apps (`.gs`) mediante peticiones asíncronas, permitiendo el almacenamiento y análisis de las propuestas en una hoja de cálculo institucional de forma automatizada.

---

## Funcionalidades de Grado Industrial

1. **Gestión de Propuestas de Proyecto:** Formulario avanzado con contador de palabras dinámico y validación de longitud mínima para asegurar la calidad de las propuestas.
2. **Asistente Virtual Gemini:** Chatbot integrado que responde dudas sobre el evento, tecnologías de IA y requisitos de participación.
3. **Página de Contacto Institucional:** Sección dedicada con información de contacto del ITCM, ubicación geográfica y horarios de atención, diseñada con el lenguaje visual de Google.
4. **Temporizador de Cuenta Regresiva:** Sistema de cronometraje preciso hacia la fecha central del evento: **25 de Mayo de 2026**.
5. **Módulo de Social Share:** Botones de compartición optimizados para WhatsApp y Twitter, fomentando la viralización del evento en la comunidad académica.

---

## Auditoría Técnica y Fundamentos de Inteligencia Artificial

### Modelos Probabilísticos vs. Deterministas
En este proyecto se documenta la transición tecnológica del desarrollo web tradicional hacia la integración de LLMs (Large Language Models). Mientras que el desarrollo frontend es **determinista** (una acción genera siempre el mismo resultado visual), la integración con Gemini es **probabilística**. Esto requiere un diseño de software que maneje la incertidumbre de las respuestas y asegure que el contexto se mantenga dentro de las instrucciones de sistema definidas.

### Ingeniería de Prompts (Prompt Engineering)
El chatbot no es un agente genérico. Se han configurado **Instrucciones de Sistema** que definen su personalidad como un representante oficial del ITCM, limitando su alcance a temas relevantes al evento y asegurando un tono profesional y amable.

---

## Seguridad y Hardening de la Aplicación

1. **Protección de API Keys:** Uso estricto de variables de entorno (`process.env`) gestionadas a través del panel de Vercel y archivos `.env` locales.
2. **Sanitización de Inputs:** Eliminación de etiquetas HTML y caracteres especiales potencialmente peligrosos mediante expresiones regulares (RegEx) para prevenir ataques de Cross-Site Scripting (XSS).
3. **Arquitectura Zero-Exposure:** El frontend nunca se comunica directamente con la API de Google; todas las transacciones pasan por el túnel seguro del servidor Express.

---

## Guía de Instalación, Configuración y Despliegue

### Requisitos del Sistema
- Node.js (Versión 18 o superior recomendada).
- NPM (Node Package Manager).
- Credenciales de Google AI Studio.

### Proceso de Instalación Local
1. Clonar el repositorio: `git clone https://github.com/jjho05/build-with-ai-itcm.git`
2. Navegar al directorio: `cd build-with-ai-itcm`
3. Instalar dependencias: `npm install`
4. Configurar el entorno: Crear un archivo `.env` en la raíz con:
   ```env
   GEMINI_API_KEY=TU_API_KEY_AQUI
   GOOGLE_SHEET_WEBHOOK_URL=TU_WEBHOOK_AQUI
   ```
5. Iniciar el servidor de desarrollo: `npm run dev`

### Despliegue en Vercel
El proyecto incluye un archivo `vercel.json` preconfigurado. Solo es necesario vincular el repositorio a una cuenta de Vercel y configurar las variables de entorno en el panel de control del proyecto.

---

## Manifesto de Archivos y Responsabilidades

- **server.js:** Orquestador del backend, gestión de IA y Webhooks.
- **public/index.html:** Arquitectura base del frontend y lógica de cliente.
- **public/contacto.html:** Interfaz de soporte e información institucional.
- **public/style.css:** Motor de diseño, tokens visuales y animaciones.
- **vercel.json:** Configuración de despliegue y rutas serverless.

---

## Identidad Institucional y Créditos

Este proyecto es una obra original desarrollada con un firme compromiso hacia la excelencia académica y tecnológica.

**Autor:**
**Jesús Javier Hernández Olvera**
Estudiante de Ingeniería en Sistemas Computacionales
Instituto Tecnológico de Ciudad Madero (ITCM)

**Afiliación:**
- Tecnológico Nacional de México (TecNM)
- Google Developers Group (GDG)

**Sello Institucional:**
*"Por mi Patria y por mi Bien"*
**Orgullo Tec Madero**

---

© 2026 - Instituto Tecnológico de Ciudad Madero. Todos los derechos reservados.
Queda prohibida la reproducción total o parcial sin la debida atribución al autor original.

# 🚀 Build with AI - ITCM 2026
## Programación Web [AEB-1055] - Plataforma de Innovación Institucional

---

## 📖 Introducción y Visión del Proyecto

Bienvenido al repositorio **Build with AI - ITCM 2026**, una plataforma de grado industrial diseñada para la gestión, captura y validación de propuestas tecnológicas en el marco de la gira oficial de **Google Developers**. 

Este proyecto trasciende el ámbito académico de la materia de **Programación Web**, posicionándose como una herramienta soberana para la comunidad del **Instituto Tecnológico de Ciudad Madero**. Integra lo último en Inteligencia Artificial Generativa con una arquitectura robusta y una experiencia de usuario de nivel premium.

### 🌟 Pilares del Proyecto
- **Innovación con IA:** Integración nativa con **Google Gemini** para asistencia técnica y estratégica.
- **Excelencia en UX/UI:** Implementación rigurosa de **Material Design 3** con estética Google-First.
- **Soberanía de Datos:** Pipeline completo desde la captura hasta el almacenamiento en **Google Sheets**.
- **Seguridad Proactiva:** Protección de activos críticos mediante arquitectura Proxy y variables de entorno.

---

## 💎 Características Principales (Full Suite)

### 1. Sistema de Captura Inteligente
- **Validación en Tiempo Real:** Barra de progreso dinámica para el conteo de palabras (mínimo 10 para calidad).
- **Draft Persistence:** Uso de `localStorage` para que los estudiantes nunca pierdan su progreso ante recargas accidentales.
- **Sugerencias Dinámicas:** Contenedor de "AI Tips" que rota automáticamente consejos para mejorar las propuestas.

### 2. Gemini Assistant (Chatbot 2.0)
- **Skeleton Loading:** Interfaz reactiva con estados de carga que mejoran la percepción de velocidad.
- **Inferencia en Tiempo Real:** Conectado a Gemini 1.5 Flash para respuestas precisas y profesionales.
- **Seguridad de Grado Industrial:** Las peticiones se procesan en el backend, manteniendo la API Key oculta del navegador.

### 3. Google Integration & Webhooks
- **Sincronización Automática:** Cada propuesta enviada se registra instantáneamente en una hoja de **Google Sheets** mediante un Webhook asíncrono.
- **Diferenciación de Datos:** El sistema distingue automáticamente entre "Propuestas de Proyecto" y "Mensajes de Contacto".

### 4. Estética Disruptiva y Moderna
- **Google Top Loader:** Barra de carga superior que alterna los 4 colores icónicos durante procesos asíncronos.
- **Scroll Reveal:** Animaciones de entrada suaves que dotan a la página de dinamismo al navegar.
- **Modo Oscuro Nativo:** Soporte completo para temas claro y oscuro, respetando las preferencias del sistema del usuario.
- **Countdown Timer:** Contador regresivo minimalista hacia la fecha del evento (20 de Mayo).

---

## 🏛️ Identidad Institucional y Ecosistema

Este proyecto es una extensión de la visión de excelencia del **Instituto Tecnológico de Ciudad Madero (ITCM)**.

### 🏫 Ecosistema ISC-ITCM
Este sitio está diseñado para coexistir con el portal oficial de la carrera:
**👉 [jjho05.github.io/ISC-ITCM/](https://jjho05.github.io/ISC-ITCM/)**

> [!IMPORTANT]
> **Autoría y Liderazgo Técnico:**  
> Ambos proyectos (ISC-ITCM y Build with AI) han sido diseñados y desarrollados por **Jesús Olvera** como parte de una iniciativa personal y académica para modernizar la infraestructura digital de la carrera de Ingeniería en Sistemas Computacionales.

---

## 🧠 Auditoría Técnica y Arquitectura

### Arquitectura de Sistemas
- **Backend:** Node.js + Express (Serverless ready para Vercel).
- **Seguridad:** Implementación de CORS, sanitización de inputs y manejo de errores asíncronos.
- **OOP Pattern:** Uso de la clase `AIRequestHandler` en el servidor para el procesamiento modular de datos.
- **Frontend:** HTML5 Semántico, CSS3 Moderno (Variables, Flex, Grid) y JavaScript ES6+.

### Auditoría de IA (Académico)
1. **Modelos Probabilísticos:** A diferencia de una base de datos tradicional, Gemini no "busca" información, la **genera** en base a patrones, lo que requiere un manejo de errores robusto ante posibles alucinaciones.
2. **Protección de Assets:** El uso de un **Backend Proxy** es la única forma segura de implementar LLMs en la web, evitando que terceros roben la cuota de uso de la API Key.
3. **Optimización de Prompting:** El sistema utiliza instrucciones de sistema (System Instructions) para garantizar que la IA se comporte como un representante oficial del ITCM.

---

## 🛠️ Despliegue y Configuración

El proyecto está optimizado para **Vercel**.

### Variables de Entorno Requeridas:
- `GEMINI_API_KEY`: Tu llave privada de Google AI Studio.
- `GOOGLE_SHEET_WEBHOOK_URL`: URL del script de Google Apps para el registro de datos.

### Instalación Local:
1. Clonar: `git clone https://github.com/jjho05/build-with-ai-itcm.git`
2. Instalar: `npm install`
3. Ejecutar: `npm run dev`

---

## 👨‍💻 Autoría y Orgullo Madero

**Jesús Olvera**  
Ingeniería en Sistemas Computacionales - ITCM  
Líder de Proyecto | Arquitecto de Software

- **GitHub:** [@jjho05](https://github.com/jjho05)
- **LinkedIn:** [Jesús Javier Hernández Olvera](https://www.linkedin.com/in/jjhernandezolvera/)

---

**"Por mi Patria y por mi Bien"**  
**Instituto Tecnológico de Ciudad Madero** 🦅  
© 2026 - Proyecto de Excelencia Académica

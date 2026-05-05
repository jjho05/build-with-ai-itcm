# Build with AI - ITCM 2026
## Programación Web [AEB-1055] - Proyecto de Innovación con IA

---

## 📖 Introducción

Bienvenido al repositorio **Build with AI - ITCM 2026**, una plataforma de vanguardia diseñada para la gestión de propuestas tecnológicas en el marco de la gira oficial de **Google Developers**. Este proyecto no solo cumple con los requerimientos académicos de la materia de **Programación Web**, sino que integra tecnologías de inteligencia artificial de última generación para potenciar la comunidad del **Instituto Tecnológico de Ciudad Madero**.

### ¿Qué es este proyecto?

Este sistema es una aplicación Full-Stack que permite:
- ✅ **Recepción de Propuestas:** Interfaz premium para la captura de ideas innovadoras.
- ✅ **Asistente Inteligente:** Integración con **Google Gemini** para asistencia en tiempo real mediante un chatbot especializado.
- ✅ **Arquitectura Segura:** Implementación de un Proxy en Node.js para la protección de llaves de API (Seguridad de Grado Industrial).
- ✅ **UX/UI de Google:** Diseño alineado con los estándares de **Material Design 3** y la estética minimalista de Google.

### ¿Para quién es?

- **Estudiantes del ITCM** que deseen participar en la gira "Build with AI".
- **Desarrolladores** interesados en la integración segura de modelos de lenguaje (LLMs) en entornos productivos.
- **Comunidad TecNM** que busca ejemplos de aplicaciones web modernas, seguras y estéticas.

---

## 🌐 Identidad Institucional y Ecosistema

Este proyecto es una pieza clave en el ecosistema digital de la carrera de **Ingeniería en Sistemas Computacionales** del **Instituto Tecnológico de Ciudad Madero (ITCM)**.

### 🏫 El Portal Oficial de la Carrera (ISC-ITCM)
Para una experiencia visual e institucional completa, visita el portal:
**👉 [jjho05.github.io/ISC-ITCM/](https://jjho05.github.io/ISC-ITCM/)**

> [!IMPORTANT]
> **Reconocimiento y Autoría:**  
> El portal **ISC-ITCM** fue diseñado y desarrollado por **Jesús Olvera** como una iniciativa para profesionalizar la identidad digital de nuestra carrera. Este proyecto "Build with AI" se alinea con esa visión de excelencia técnica e institucional.

---

## 🧠 Fundamentos Técnicos (Auditoría de IA)

Como parte de los requerimientos de la materia, se documentan los siguientes pilares de la arquitectura:

### 1. Diferencia técnica: API de Base de Datos vs. API de IA
La lógica del servidor cambia radicalmente de un modelo **determinista** a uno **probabilístico**. Mientras que una API de base de datos busca y entrega datos exactos (Stateless), una API de IA como Gemini genera respuestas basadas en inferencia y requiere la gestión de una **ventana de contexto** masiva. El rendimiento se mide en **TTFT (Time To First Token)** debido a la generación secuencial.

### 2. Seguridad: Vulnerabilidad de API Keys
Exponer una API Key en el frontend permite su exfiltración inmediata. Este proyecto implementa un **Backend Proxy** que protege la llave en variables de entorno, evitando abusos financieros y suplantación de identidad.

### 3. Herramientas: Google AI Studio
Utilizamos **Google AI Studio** como el núcleo de prototipado para la ingeniería de prompts, permitiendo definir instrucciones de sistema precisas que dotan al chatbot de su identidad institucional.

---

## 🛠️ Estructura del Proyecto

El repositorio sigue un estándar de organización profesional:

```
build-with-ai/
├── server.js              # Servidor Express (Proxy Seguro y OOP)
├── public/                # Frontend (HTML5, CSS3, JS Vanilla)
│   ├── index.html         # Interfaz de usuario (Material 3)
│   ├── style.css          # Sistema de diseño y animaciones
│   └── gemini-sparkle.png # Identidad visual de Gemini
├── .env                   # Configuración de llaves (Oculto por seguridad)
└── package.json           # Dependencias del ecosistema Node.js
```

### Tecnologías Destacadas:
- **Backend:** Node.js, Express, Google Generative AI SDK.
- **Frontend:** JavaScript Vanilla (ES6+), CSS Grid/Flexbox, Custom Properties.
- **IA:** Gemini 3.0 Flash (Optimizado para velocidad y precisión).

---

## 📥 Cómo Ejecutar el Proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/jjho05/build-with-ai.git
   ```
2. **Instalar dependencias:**
   ```bash
   npm install
   ```
3. **Configurar el entorno:**
   Crea un archivo `.env` con tu `GEMINI_API_KEY`.
4. **Iniciar servidor:**
   ```bash
   npm run dev
   ```

---

## 👨‍💻 Autor

**Jesús Olvera**  
Estudiante de Ingeniería en Sistemas Computacionales  
Instituto Tecnológico de Ciudad Madero

- **Portal de la Carrera (ISC-ITCM):** [jjho05.github.io/ISC-ITCM/](https://jjho05.github.io/ISC-ITCM/)  
- **GitHub:** [@jjho05](https://github.com/jjho05)
- **Email:** [jjho.reivaj05@gmail.com](mailto:jjho.reivaj05@gmail.com)

---

**Por mi Patria y por mi Bien**  
**Orgullo Tec Madero** 🦅

©TecNM - Tecnológico Nacional de México  
Instituto Tecnológico de Ciudad Madero

# Build with AI - ITCM 2026
## Programación Web [AEB-1055] - Plataforma de Innovación Tecnológica de Grado Industrial

---

## Acceso Rápido
**Sitio Web Oficial:** [build-with-ai-itcm.vercel.app](https://build-with-ai-itcm.vercel.app/)

---

## Tabla de Contenidos
1. [Introducción y Contexto](#introducción-y-contexto)
2. [Identidad Institucional y Ecosistema](#identidad-institucional-y-ecosistema)
3. [Metodología de Desarrollo](#metodología-de-desarrollo)
4. [Análisis Detallado de Funcionalidades](#análisis-detallado-de-funcionalidades)
5. [Arquitectura del Sistema y Flujo de Datos](#arquitectura-del-sistema-y-flujo-de-datos)
6. [Ingeniería de Backend: Clase AIRequestHandler](#ingeniería-de-backend-clase-airequesthandler)
7. [Ingeniería de Prompts (Prompt Engineering)](#ingeniería-de-prompts-prompt-engineering)
8. [Auditoría Técnica: IA y Desarrollo Web Moderno](#auditoría-técnica-ia-y-desarrollo-web-moderno)
9. [Seguridad y Hardening de la Aplicación](#seguridad-y-hardening-de-la-aplicación)
10. [Optimización de Performance y QA](#optimización-de-performance-y-qa)
11. [Diseño Responsivo y Experiencia de Usuario](#diseño-responsivo-y-experiencia-de-usuario)
12. [Estructura del Proyecto y Glosario](#estructura-del-proyecto-y-glosario)
13. [Guía de Instalación, Configuración y Despliegue](#guía-de-instalación-configuración-y-despliegue)
14. [Roadmap y Futuras Implementaciones](#roadmap-y-futuras-implementaciones)
15. [Contribución y Licencia](#contribución-y-licencia)
16. [Autor](#autor)

---

## Introducción y Contexto

El repositorio **Build with AI - ITCM 2026** representa la culminación de un esfuerzo de desarrollo orientado a la excelencia académica y tecnológica. Esta plataforma ha sido diseñada como el núcleo operativo para la gestión de propuestas en el marco de la gira universitaria de **Google Developers**, la cual tendrá lugar en el **Instituto Tecnológico de Ciudad Madero** el próximo **25 de Mayo de 2026**.

A diferencia de las aplicaciones web convencionales, este sistema ha sido concebido bajo un paradigma de **Inteligencia Artificial Integrada**, donde el frontend y el backend colaboran no solo para almacenar información, sino para asistirla, validarla y mejorarla en tiempo real. Este proyecto se presenta como una solución soberana del **TecNM**, demostrando la capacidad de los estudiantes del ITCM para liderar la transformación digital regional.

---

## Identidad Institucional y Ecosistema

Este proyecto no es una entidad aislada, sino que forma parte de un ecosistema digital más amplio dedicado a la carrera de **Ingeniería en Sistemas Computacionales**. Su diseño y funcionalidad están intrínsecamente ligados al portal oficial de la carrera:

**Portal ISC-ITCM:** [jjho05.github.io/ISC-ITCM/](https://jjho05.github.io/ISC-ITCM/)

La alineación visual con los estándares de **Material Design 3** de Google, combinada con la sobriedad institucional del ITCM, garantiza que la plataforma proyecte una imagen de vanguardia y profesionalismo. Cada elemento, desde la paleta de colores hasta la tipografía, ha sido seleccionado para reforzar el sentido de pertenencia y el orgullo por nuestra institución.

> [!IMPORTANT]
> **Visión de Excelencia:**  
> Tanto el portal **ISC-ITCM** como esta plataforma **Build with AI** son el resultado de la visión técnica y el compromiso de **Jesús Olvera**. Estos proyectos buscan establecer un nuevo estándar de calidad en las herramientas digitales utilizadas por nuestra comunidad académica.

---

## Metodología de Desarrollo

Para la realización de este proyecto se siguió un ciclo de vida de desarrollo de software (SDLC) iterativo, priorizando la agilidad y la calidad técnica:

1. **Análisis de Requerimientos:** Identificación de las necesidades de la comunidad estudiantil y los requisitos técnicos de la gira Google Developers.
2. **Diseño de Arquitectura:** Definición del modelo de datos y la estrategia de seguridad para el manejo de APIs externas.
3. **Desarrollo Frontend:** Implementación de una interfaz limpia y responsiva utilizando estándares modernos de CSS (Grid y Flexbox).
4. **Integración de IA:** Configuración y entrenamiento de prompts para el motor Gemini 3.0 Flash.
5. **Pruebas y QA:** Auditoría de seguridad, pruebas de carga en el chatbot y validación de la persistencia de datos.

---

## Análisis Detallado de Funcionalidades

La plataforma integra una serie de módulos avanzados que garantizan una experiencia de usuario fluida y una gestión de datos eficiente:

### 1. Motor de Captura y Persistencia
- **Validación Dinámica:** El formulario de propuestas cuenta con un motor de análisis léxico en tiempo real que contabiliza las palabras del usuario, asegurando que las propuestas cumplan con un estándar mínimo de calidad y detalle (10 palabras).
- **Draft Persistence (Drafts):** Implementación de una capa de persistencia basada en `localStorage`. Esta funcionalidad asegura que, en caso de un fallo en la conexión o recarga accidental de la página, los datos capturados se conserven íntegros, minimizando la fricción del usuario.
- **AI Tips System:** Un sistema rotativo de consejos inteligentes que orienta al estudiante sobre cómo redactar propuestas de impacto.

### 2. Gemini Assistant (Chatbot Contextual)
- **Generación Asíncrona:** Conectado a **Gemini 3.0 Flash**, el asistente ofrece respuestas de alta fidelidad con una latencia mínima.
- **Skeleton Loading:** Implementación de estados de carga animados que proporcionan feedback visual inmediato mientras la IA procesa la solicitud, mejorando la UX percibida.
- **Typing Indicator:** Un simulador de escritura que humaniza la interacción con el bot.

### 3. Google Integration Suite
- **Webhook de Google Sheets:** Integración nativa con la suite de Google para el almacenamiento de datos en tiempo real.
- **Multiprocesamiento de Inputs:** El backend diferencia y procesa tanto propuestas de proyectos como mensajes de contacto institucional.

### 4. Estética y Micro-animaciones
- **Google Top Loader:** Barra de carga superior multicolor que se activa durante las peticiones fetch.
- **Scroll Reveal Animations:** Uso del `Intersection Observer API` para desencadenar animaciones de entrada fluidas.
- **Modo Oscuro Adaptativo:** Sistema de temas con persistencia que se adapta automáticamente a las preferencias del usuario.

---

## Arquitectura del Sistema y Flujo de Datos

La arquitectura sigue un modelo **Serverless Proxy Pattern**, diseñado para maximizar la seguridad y la escalabilidad:

```mermaid
graph TD
    A[Frontend: HTML5/JS ES6+] -->|Petición POST Sanitizada| B[Backend: Express en Vercel]
    B -->|Capa de Seguridad: API Key Masking| C[Google Gemini Engine]
    B -->|Webhook Asíncrono| D[Google Sheets Database]
    A -->|Persistencia Local| E[Browser LocalStorage]
    C -->|Respuesta Probabilística| B
    B -->|JSON Response| A
```

---

## Ingeniería de Backend: Clase AIRequestHandler

Para garantizar un código mantenible y escalable, el backend utiliza un patrón de Programación Orientada a Objetos (OOP). La clase `AIRequestHandler` se encarga de:

- **Constructor Modular:** Recibe el payload del formulario (nombre, email, título, propuesta/mensaje) y lo normaliza según el tipo de solicitud.
- **Sanitización Dinámica:** Limpia el texto de entrada eliminando etiquetas HTML y caracteres potencialmente peligrosos para prevenir ataques de inyección.
- **Lógica de Validación:** Calcula el conteo de palabras y valida si el mensaje cumple con los requisitos mínimos de calidad institucional.
- **Pipeline de Datos:** Estructura la información de manera uniforme para su envío tanto a la IA como a la base de datos externa de Google Sheets.

---

## Ingeniería de Prompts (Prompt Engineering)

El comportamiento del chatbot no es accidental; es el resultado de una ingeniería de prompts rigurosa aplicada en el servidor:

- **System Instruction:** Se ha definido una personalidad para el bot que es profesional, amable y equilibrada. Se le instruye para que actúe como un representante oficial de **Build with AI** en el **ITCM**.
- **Control de Formato:** La IA entrega respuestas en Markdown limpio, permitiendo que el frontend renderice listas, negritas y enlaces de manera estructurada mediante la librería `marked.js`.
- **Restricción de Dominio:** El asistente está programado para enfocarse exclusivamente en temas relacionados con el evento y el desarrollo tecnológico del ITCM.

---

## Auditoría Técnica: IA y Desarrollo Web Moderno

### 1. Inferencia vs. Consulta Tradicional
En el desarrollo web estándar, una API entrega datos estáticos (Determinismo). En esta plataforma, la integración con Gemini introduce el **Probabilismo**, donde la respuesta se genera en tiempo real basándose en una ventana de contexto masiva.

### 2. Time To First Token (TTFT)
El rendimiento del chatbot se mide en la velocidad con la que entrega la primera unidad de información. Hemos optimizado las peticiones para reducir el overhead del servidor y asegurar una experiencia fluida.

### 3. Patrones de Diseño CSS
El uso de **CSS Grid** y **Flexbox** en combinación con variables de entorno de diseño permite que la aplicación sea responsiva sin necesidad de librerías externas, manteniendo un bundle size mínimo.

---

## Seguridad y Hardening de la Aplicación

- **API Key Proxying:** Se prohíbe el uso de llaves de API en el frontend. El servidor actúa como un túnel seguro, manteniendo las credenciales protegidas.
- **Sanitización de Entradas:** Implementación de expresiones regulares para limpiar los inputs del usuario antes de cualquier procesamiento.
- **CORS Policy:** Configuración de políticas de intercambio de recursos para asegurar que solo el dominio autorizado interactúe con la API.

---

## Optimización de Performance y QA

La aplicación ha sido sometida a un riguroso proceso de auditoría de rendimiento:

- **Lighthouse Scores:** Se ha trabajado para mantener puntuaciones superiores a 90 en Performance, Accesibilidad y Mejores Prácticas.
- **Asset Optimization:** Uso de formatos vectoriales (SVG) para logos e iconos, garantizando nitidez en cualquier resolución con un peso de archivo insignificante.
- **Minificación de Lógica:** El código JavaScript es Vanilla, evitando el costo de parseo de frameworks complejos y asegurando la compatibilidad con navegadores modernos.

---

## Diseño Responsivo y Experiencia de Usuario

La plataforma ha sido diseñada bajo la filosofía de **Mobile First**:

- **Grid Layouts:** Uso de rejillas flexibles que se adaptan a smartphones, tablets y pantallas de escritorio de gran formato.
- **Accesibilidad (A11y):** Etiquetas ARIA en botones interactivos y contrastes de color validados por el estándar WCAG.
- **Feedback Inmediato:** Cada acción del usuario tiene una respuesta visual clara mediante la barra de carga superior y notificaciones de éxito.

---

## Estructura del Proyecto y Glosario

- `/public`: Contiene todos los activos estáticos.
  - `index.html`: Núcleo de la plataforma y sistema de diseño.
  - `contacto.html`: Página de información y soporte institucional.
  - `style.css`: Motor de estilos, animaciones y tokens de diseño.
- `server.js`: El cerebro de la aplicación. Gestiona la lógica Full-Stack y las integraciones.
- `vercel.json`: Reglas de despliegue y routing serverless.
- `package.json`: Definición de dependencias del ecosistema.

---

## Guía de Instalación, Configuración y Despliegue

1. Clonar el repositorio: `git clone https://github.com/jjho05/build-with-ai-itcm.git`
2. Instalar dependencias: `npm install`
3. Configurar archivo `.env`:
   ```env
   GEMINI_API_KEY=tu_api_key_aqui
   GOOGLE_SHEET_WEBHOOK_URL=tu_webhook_aqui
   ```
4. Iniciar entorno local: `npm run dev`

---

## Roadmap y Futuras Implementaciones

Para el ciclo 2026-2027, se planean las siguientes mejoras:
- **Autenticación Institucional:** Integración con cuentas oficiales @cdmadero.tecnm.mx.
- **Dashboard Administrativo:** Panel de control para que los docentes califiquen propuestas.
- **Análisis de Sentimiento:** Uso de IA para clasificar la intención de los mensajes de contacto.

---

## Contribución y Licencia

Este es un proyecto académico de código abierto. Si deseas contribuir:
1. Realiza un Fork del proyecto.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/mejora`).
3. Envía un Pull Request para revisión.

**Licencia:** Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

---

## Autor

**Jesús Olvera**  
**Estudiante de Ingeniería en Sistemas Computacionales**  
Instituto Tecnológico de Ciudad Madero

- **Portal de la Carrera (ISC-ITCM):** [jjho05.github.io/ISC-ITCM/](https://jjho05.github.io/ISC-ITCM/)  
- **GitHub:** [@jjho05](https://github.com/jjho05)
- **Email:** [jjho.reivaj05@gmail.com](mailto:jjho.reivaj05@gmail.com)

---

**Por mi Patria y por mi Bien**  
**Orgullo Tec Madero** 🦅

© 2026 - Tecnológico Nacional de México  
Instituto Tecnológico de Ciudad Madero

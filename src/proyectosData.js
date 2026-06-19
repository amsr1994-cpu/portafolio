// src/proyectosData.js
export const misProyectos = [
  {
    id: 'traspasos-ams',
    titulo: 'Traspasos AMSystem',
    subtitulo: 'BACKEND • ETL • .NET',
    tipo: 'Empresarial',
    stackCorto: 'C#, .NET Core, SQL Server, Vue.js',
    resumen: 'Sistema ETL de alto rendimiento para la migración masiva y segura de datos críticos de negocio.',
    descripcionLarga: [
      'Desarrollo de un motor de migración encargado de procesar, transformar y transferir un volumen masivo de datos e históricos (aproximadamente 68.000 documentos) entre sistemas de gestión.',
      'Implementado en C# y .NET, el núcleo del software aplica complejas reglas de negocio para la conversión de esquemas relacionales, asegurando la integridad referencial y minimizando el tiempo de inactividad de los servidores.',
      'Incluye una interfaz de control en Vue.js que actúa como panel de monitorización, permitiendo auditar el flujo de transferencia y conciliar datos en tiempo real.'
    ],
    funcionalidades: [
      { titulo: 'Procesamiento Masivo', desc: 'Transformación y migración de esquemas con más de 68.000 documentos históricos.' },
      { titulo: 'Conversión Relacional', desc: 'Lógica transaccional estricta para mitigar pérdidas de integridad referencial.' },
      { titulo: 'Panel de Auditoría', desc: 'Dashboard reactivo en Vue.js para la monitorización de transferencias y logs en tiempo real.' }
    ],
    imagenesGaleria:['/ImageTraspaso/menu.png','/ImageTraspaso/script.png','/ImageTraspaso/traspm.png','/ImageTraspaso/docs.png','/ImageTraspaso/objmig.png','/ImageTraspaso/seria.png','/ImageTraspaso/estadis.png','/ImageTraspaso/ajust.png'],
    tablaTecnologias: [
      { tech: 'C# / .NET', uso: 'Desarrollo del motor central de extracción, transformación y carga (ETL).' },
      { tech: 'SQL Server', uso: 'Optimización de tablas de destino, índices y optimización de procedimientos.' },
      { tech: 'Vue.js', uso: 'Interfaz gráfica del panel de control de transferencias.' }
    ],
    imagen: '/ImageTraspaso/menu.png',
    linkRepo: 'https://github.com/amsr1994-CPU/AMSConsultas-BACK'
  },
  {
    id: 'consultas-ams',
    titulo: 'Consultas AMSystem',
    subtitulo: 'DATA MONITORING • SQL SERVER',
    tipo: 'Empresarial',
    stackCorto: 'SQL Server, Procedimientos Almacenados, .NET',
    resumen: 'Herramienta avanzada de análisis, monitorización de infraestructura e informes mediante consultas optimizadas.',
    descripcionLarga: [
      'Diseño y optimización de una infraestructura de consultas complejas sobre bases de datos relacionales con un volumen masivo de información.',
      'El proyecto se centró en la creación de vistas avanzadas, funciones escalares y procedimientos almacenados (Stored Procedures) altamente eficientes para generar informes analíticos de rendimiento de servidores y uso de recursos.',
      'Se redujeron drásticamente los tiempos de respuesta en consultas críticas, garantizando la estabilidad del sistema durante picos de acceso y ofreciendo logs detallados para la toma de decisiones técnicas.'
    ],
    funcionalidades: [
      { titulo: 'Stored Procedures Optimizados', desc: 'Reducción drástica de tiempos de respuesta en entornos con alta concurrencia.' },
      { titulo: 'Vistas Analíticas', desc: 'Consolidación de métricas complejas de infraestructura en reportes limpios.' },
      { titulo: 'Auditoría de Servidores', desc: 'Historial detallado de carga para la toma de decisiones sobre recursos técnicos.' }
    ],
    imagenesGaleria: ['/ImageAnalitic/Panel.png','/ImageAnalitic/1.png','/ImageAnalitic/2.png','/ImageAnalitic/3.png','/ImageAnalitic/4.png','/ImageAnalitic/5.png','/ImageAnalitic/6.png','/ImageAnalitic/7.png','/ImageAnalitic/8.png','/ImageAnalitic/9.png','/ImageAnalitic/10.png','/ImageAnalitic/11.png','/ImageAnalitic/12.png'], 
    tablaTecnologias: [
      { tech: 'SQL Server', uso: 'Creación y tuning de funciones escalares, vistas complejas y procedimientos almacenados.' },
      { tech: '.NET', uso: 'Consumo asíncrono backend de reportes analíticos pesados.' }
    ],
    imagen: '/ImageAnalitic/Panel.png',
    linkRepo: 'https://github.com/amsr1994-CPU/AMSConsultas-BACK'
  },
  {
    id: 'santa-ana',
    titulo: 'Pinturas Santa Ana',
    subtitulo: 'ANDROID NATIVE • SQLITE',
    tipo: 'profesional',
    stackCorto: 'Java, Android Studio, SQLite',
    resumen: 'Aplicación móvil nativa para gestión de inventarios y ventas con sincronización offline.',
    descripcionLarga: [
      'Pinturas Santa Ana es un proyecto ambicioso que replica la funcionalidad de un sistema ERP móvil utilizando arquitectura nativa en Android.',
      'Su principal fuerte es el módulo de persistencia local con SQLite, diseñado específicamente para que los operarios puedan gestionar stock, consultar precios y registrar ventas en sótanos, almacenes blindados o zonas industriales sin cobertura.',
      'La interfaz implementa Material Design a nivel profesional, garantizando una navegación fluida, carga eficiente de imágenes de productos y un sistema de sincronización automática en cuanto el dispositivo recupera la conexión de red.'
    ],
    funcionalidades: [
      { titulo: 'Persistencia Local Completa', desc: 'Base de datos embebida SQLite para trabajar al 100% de manera offline.' },
      { titulo: 'Sincronización Inteligente', desc: 'Envío automático de transacciones acumuladas en cuanto se restablece la cobertura.' },
      { titulo: 'UI Material Design', desc: 'Diseño adaptado a las pautas de Google para una experiencia fluida e intuitiva.' }
    ],
    imagenesGaleria: ['/ImagePintura/cap1.png','/ImagePintura/cap2.png'],
    tablaTecnologias: [
      { tech: 'Java / Android SDK', uso: 'Desarrollo de actividades nativas, control de vistas e hilos asíncronos.' },
      { tech: 'SQLite', uso: 'Base de datos local relacional integrada en el dispositivo móvil.' }
    ],
    imagen: '/ImagePintura/cap1.png',
    linkRepo: 'https://github.com/amsr1994-CPU/PinturasSantaAna'
  },
  {
    id: 'miapp3d',
    titulo: 'MiApp3D (en desarrollo)',
    subtitulo: 'MULTIPLATFORM • UI/UX • 3D RENDERING',
    tipo: 'Profesional / Proyecto Destacado',
    stackCorto: 'Vue.js 3 (Composition API), Vite, Tailwind CSS, Three.js / Model-Viewer',
    resumen: 'Plataforma web avanzada que integra un catálogo interactivo con visor de modelos 3D en tiempo real y Realidad Aumentada, conectando diseñadores, compradores y plantas de fabricación.',
    descripcionLarga: [
      'MiApp3D es un ecosistema digital completo diseñado para la gestión y encargo de piezas tridimensionales, utilizando una interfaz premium de alto rendimiento y baja latencia.',
      'Desarrollado sobre Vue.js 3 y Vite, el proyecto implementa un sistema robusto de autenticación por roles que divide la experiencia en tres paneles independientes: un catálogo interactivo para compradores, una central de telemetría y colas de trabajo en tiempo real para fabricantes, y una billetera digital para la gestión de regalías de diseñadores.',
      'El núcleo visual explota las capacidades de Tailwind CSS para lograr micro-interacciones fluidas, layouts adaptables y una estética técnica oscura (holográfica/cyberpunk) optimizada para entornos industriales modernos.'
    ],
    funcionalidades: [
      { titulo: 'Visor 3D Dinámico & Realidad Aumentada', desc: 'Renderizado interactivo de archivos .glb en el cliente y previsualización en el espacio real del usuario mediante tecnología web AR.' },
      { titulo: 'Pasarela de Pago Animada (Estilo iOS)', desc: 'Flujo de checkout express integrado con animaciones avanzadas basadas en estados dinámicos y simulación biométrica (FaceID).' },
      { titulo: 'Panel de Telemetría Industrial', desc: 'Monitorización de colas de impresión y estados de manufactura síncronos para perfiles de fabricante.' },
      { titulo: 'Arquitectura Segura y Modular', desc: 'Gestión de estados globales mediante Pinia, enrutamiento dinámico protegido por guardas de navegación y carga perezosa (lazy loading) para optimizar el rendimiento.' }
    ],
    imagenesGaleria: ['./Image3d/login.png','./Image3d/explo.png','./Image3d/3d.png','./Image3d/carrit.png','./Image3d/diseñ.png','./Image3d/fabric.png','./Image3d/fabric2.png'],
    tablaTecnologias: [
      { tech: 'Vue.js 3', uso: 'Estructuración modular mediante Composition API y gestión de estados reactivos complejos.' },
      { tech: 'Model-Viewer (Google)', uso: 'Integración del motor gráfico en el DOM para el manejo e interacción de archivos tridimensionales sin penalizar la carga.' },
      { tech: 'Tailwind CSS', uso: 'Diseño de interfaz personalizado con efectos de cristal esmerilado (glassmorphism), variables dinámicas y transiciones fluidas.' },
      { tech: 'Vite', uso: 'Entorno de desarrollo y empaquetado ultra rápido con división de código (code-splitting) por componentes.' }
    ],
    imagen: './Image3d/login.png',
    linkRepo: 'https://github.com/amsr1994-CPU/MiApp3D'
}
]
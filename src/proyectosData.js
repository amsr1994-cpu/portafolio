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
    imagenesGaleria: [],
    tablaTecnologias: [
      { tech: 'C# / .NET', uso: 'Desarrollo del motor central de extracción, transformación y carga (ETL).' },
      { tech: 'SQL Server', uso: 'Optimización de tablas de destino, índices y optimización de procedimientos.' },
      { tech: 'Vue.js', uso: 'Interfaz gráfica del panel de control de transferencias.' }
    ],
    imagen: '',
    linkRepo: 'https://github.com/amsr1994-CPU'
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
    imagenesGaleria: ['/ImageAnalitic/Panel.png'],
    tablaTecnologias: [
      { tech: 'SQL Server', uso: 'Creación y tuning de funciones escalares, vistas complejas y procedimientos almacenados.' },
      { tech: '.NET', uso: 'Consumo asíncrono backend de reportes analíticos pesados.' }
    ],
    imagen: '/ImageAnalitic/Panel.png',
    linkRepo: 'https://github.com/amsr1994-CPU'
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
    imagenesGaleria: ['/hero.png'],
    tablaTecnologias: [
      { tech: 'Java / Android SDK', uso: 'Desarrollo de actividades nativas, control de vistas e hilos asíncronos.' },
      { tech: 'SQLite', uso: 'Base de datos local relacional integrada en el dispositivo móvil.' }
    ],
    imagen: '/hero.png',
    linkRepo: 'https://github.com/amsr1994-CPU'
  },
  {
    id: 'miapp3d',
    titulo: 'MiApp3d',
    subtitulo: 'MULTIPLATFORM • UI/UX',
    tipo: 'Profesional',
    stackCorto: 'Vue.js, Tailwind CSS, Vite',
    resumen: 'Prototipo e interfaz web moderna enfocada en la visualización interactiva y experiencia de usuario.',
    descripcionLarga: [
      'MiApp3d es un proyecto enfocado en las interfaces de usuario de última generación utilizando el paradigma de diseño oscuro y componentes reactivos.',
      'Desarrollado sobre Vue.js y Vite, exprime las capacidades de Tailwind CSS para lograr efectos visuales fluidos, layouts adaptables (responsive) y micro-interacciones de alta calidad.',
      'Sirve como base sólida para herramientas que requieran dashboards limpios, optimizados y con una estética tecnológica premium muy cuidada.'
    ],
    funcionalidades: [
      { titulo: 'Estética Cyberpunk Dark', desc: 'Fondo oscuro puro con acentos de luz neón y efectos de cristal esmerilado.' },
      { titulo: 'Optimización de Carga con Vite', desc: 'Empaquetado ultra rápido y modularizado de componentes en el cliente.' }
    ],
    imagenesGaleria: [],
    tablaTecnologias: [
      { tech: 'Vue.js 3', uso: 'Estructuración modular mediante la Composition API para código escalable.' },
      { tech: 'Tailwind CSS v4', uso: 'Estilos visuales avanzados mediante clases de utilidad de última generación.' }
    ],
    imagen: '',
    linkRepo: 'https://github.com/amsr1994-CPU'
  }
]
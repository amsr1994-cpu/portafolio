<script setup>
import { ref } from 'vue'

// Estado para controlar qué proyecto se muestra en el modal
const proyectoSeleccionado = ref(null)

// Datos de tus proyectos
const misProyectos = [
  {
    id: 'santa-ana',
    titulo: 'Pinturas Santa Ana',
    subtitulo: 'ANDROID NATIVE • SQLITE',
    stackCorto: 'Java, Android SDK, SQLite',
    resumen: 'Clon completo de sistema de gestión con persistencia local. Incluye búsqueda avanzada, gestión de inventarios y sistema de ventas offline.',
    descripcionLarga: [
      'Pinturas Santa Ana es un proyecto ambicioso que replica la funcionalidad de un sistema ERP móvil utilizando arquitectura nativa en Android.',
      'Este proyecto va más allá de un simple CRUD. Implementa una base de datos SQLite robusta que permite a los operarios trabajar en sótanos o zonas industriales sin cobertura, sincronizando los datos al recuperar la conexión.',
      'La interfaz sigue los principios de Material Design, ofreciendo una experiencia fluida con un panel de administración para el control de stock y un perfil de cliente para pedidos rápidos.'
    ],
    imagen: './assets/hero.png', // Asegúrate de tener esta imagen en assets
    linkSitio: '#',
    linkRepo: 'https://github.com/amsr1994-CPU'
  },
  {
    id: 'traspasos-ams',
    titulo: 'Traspasos AMSystem',
    subtitulo: 'BACKEND • ETL • .NET',
    stackCorto: 'C#, .NET Core, SQL Server, Vue.js',
    resumen: 'Sistema ETL de alto rendimiento para la migración masiva y segura de datos críticos de negocio.',
    descripcionLarga: [
      'Desarrollo de un motor de migración encargado de procesar, transformar y transferir un volumen masivo de datos e históricos (aproximadamente 68.000 documentos) entre sistemas de gestión.',
      'Implementado en C# y .NET, el núcleo del software aplica complejas reglas de negocio para la conversión de esquemas relacionales, asegurando la integridad referencial y minimizando el tiempo de inactividad de los servidores.',
      'Incluye una interfaz de control en Vue.js que actúa como panel de monitorización, permitiendo auditar el flujo de transferencia y conciliar datos en tiempo real.'
    ],
    imagen: '',
    linkRepo: 'https://github.com/amsr1994-CPU'
  },
  {
    id: 'consultas-ams',
    titulo: 'Consultas AMSystem',
    subtitulo: 'DATA MONITORING • SQL SERVER',
    stackCorto: 'SQL Server, Procedimientos Almacenados, .NET',
    resumen: 'Herramienta avanzada de análisis, monitorización de infraestructura e informes mediante consultas optimizadas.',
    descripcionLarga: [
      'Diseño y optimización de una infraestructura de consultas complejas sobre bases de datos relacionales con un volumen masivo de información.',
      'El proyecto se centró en la creación de vistas avanzadas, funciones escalares y procedimientos almacenados (Stored Procedures) altamente eficientes para generar informes analíticos de rendimiento de servidores y uso de recursos.',
      'Se redujeron drásticamente los tiempos de respuesta en consultas críticas, garantizando la estabilidad del sistema durante picos de acceso y ofreciendo logs detallados para la toma de decisiones técnicas.'
    ],
    imagen: '',
    linkRepo: 'https://github.com/amsr1994-CPU'
  },
  {
    id: 'miapp3d',
    titulo: 'MiApp3d',
    subtitulo: 'MULTIPLATFORM • UI/UX',
    stackCorto: 'Vue.js, Tailwind CSS, Vite',
    resumen: 'Prototipo e interfaz web moderna enfocada en la visualización interactiva y experiencia de usuario.',
    descripcionLarga: [
      'MiApp3d es un proyecto enfocado en las interfaces de usuario de última generación utilizando el paradigma de diseño oscuro y componentes reactivos.',
      'Desarrollado sobre Vue.js y Vite, exprime las capacidades de Tailwind CSS para lograr efectos visuales fluidos, layouts adaptables (responsive) y micro-interacciones de alta calidad.',
      'Sirve como base sólida para herramientas que requieran dashboards limpios, optimizados y con una estética tecnológica premium muy cuidada.'
    ],
    imagen: '',
    linkRepo: 'https://github.com/amsr1994-CPU'
  },
]
</script>

<template>
  <div class="bg-[#080808] min-h-screen text-white selection:bg-purple-500/30">
    
    <nav class="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5 px-8 py-4 flex justify-between items-center">
  <div class="text-xl font-black tracking-tighter text-white">G.S.</div>
  
  <div class="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-medium text-gray-400">
    <a href="#inicio" class="hover:text-white transition italic font-bold">Inicio</a> 
    <a href="#sobre-mi" class="hover:text-white transition">Sobre mí</a> 
    <a href="#proyectos" class="hover:text-white transition">Proyectos</a>
    <a href="#experiencia" class="hover:text-white transition">Experiencia</a>
    <a href="#contacto" class="hover:text-white transition">Contacto</a>
  </div>

  <div class="flex items-center gap-6">
    <a href="#" class="border border-white/20 px-4 py-2 rounded-full text-xs hover:bg-white hover:text-black transition uppercase font-bold">CV 📄</a>
    
    <div class="hidden lg:flex gap-4 text-gray-400">
      <a href="https://www.linkedin.com/in/andrés-manuel-sánchez-ramírez-10a9063b7" target="_blank" class="hover:text-white transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
      <a href="https://github.com/amsr1994-CPU" target="_blank" class="hover:text-white transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
      </a>
    </div>
  </div>
</nav>

    <main id="inicio" class="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div class="absolute w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>
      <p class="text-purple-500 font-mono text-sm mb-4 tracking-widest">DISPONIBLE PARA TRABAJAR</p>
      <h1 class="text-7xl md:text-9xl font-bold tracking-tighter text-center mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent italic">
        A. M. S.
      </h1>
      <h2 class="text-xl md:text-2xl font-light text-gray-400 max-w-2xl text-center leading-relaxed px-6">
        Especialista en <span class="text-white font-medium">Desarrollo Multiplataforma</span>. 
        Creando soluciones robustas con .NET, SQL Server y Vue.js.
      </h2>
      <div class="mt-12 flex gap-6 items-center">
        <a href="#proyectos" class="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition duration-300">
          MIS PROYECTOS
        </a>
        <a href="https://github.com/amsr1994-CPU" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-gray-400 hover:text-white transition group">
          <span class="font-bold">GITHUB</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
        </a>
      </div>
    </main>

    <section id="proyectos" class="py-20 px-10 bg-[#080808] border-t border-white/5">
  <h3 class="text-3xl font-bold mb-12 text-center uppercase tracking-tighter italic text-gray-500">Proyectos Destacados</h3>
  
  <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    
    <div 
      v-for="(proyecto, index) in misProyectos" 
      :key="proyecto.id"
      @click="proyectoSeleccionado = misProyectos[index]" 
      class="cursor-pointer group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition duration-500 flex flex-col justify-between"
    >
      <div 
        class="h-48 flex items-center justify-center overflow-hidden relative"
        :class="index % 2 === 0 ? 'bg-purple-900/10' : 'bg-blue-900/10'"
      >
        <img v-if="proyecto.imagen" :src="proyecto.imagen" class="group-hover:scale-110 transition duration-500 object-cover w-full h-full opacity-40" />
        <div v-else class="font-black text-4xl italic uppercase opacity-20 tracking-tighter" :class="index % 2 === 0 ? 'text-purple-500' : 'text-blue-500'">
          {{ proyecto.id.split('-')[0] }}
        </div>
      </div>

      <div class="p-8 flex-1 flex flex-col justify-between">
        <div>
          <span class="text-xs font-mono tracking-widest" :class="index % 2 === 0 ? 'text-purple-400' : 'text-blue-400'">
            {{ proyecto.subtitulo }}
          </span>
          <h4 class="text-2xl font-bold mt-2 italic uppercase text-white">{{ proyecto.titulo }}</h4>
          <p class="text-gray-400 mt-4 text-sm leading-relaxed">{{ proyecto.resumen }}</p>
        </div>
        
        <div class="flex flex-wrap gap-2 mt-6">
          <span 
            v-for="tech in proyecto.stackCorto.split(', ')" 
            :key="tech"
            class="px-2.5 py-1 bg-white/5 rounded-full text-[10px] text-gray-400 border border-white/5"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>

  </div>
</section>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="proyectoSeleccionado" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
        <div class="bg-[#0c0c0c] border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[32px] relative shadow-2xl">
          <button @click="proyectoSeleccionado = null" class="absolute top-6 right-6 text-white/50 hover:text-white transition z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>

          <div class="p-8 md:p-12">
            <div class="flex flex-col md:flex-row gap-8 mb-10">
              <div class="w-full md:w-1/3 h-48 bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden border border-white/5">
                <img v-if="proyectoSeleccionado.imagen" :src="proyectoSeleccionado.imagen" class="object-cover w-full h-full opacity-60" />
                <span v-else class="text-white/10 font-bold italic text-2xl uppercase tracking-tighter">{{ proyectoSeleccionado.titulo }}</span>
              </div>
              <div class="flex-1">
                <h2 class="text-3xl md:text-5xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent italic uppercase">
                  {{ proyectoSeleccionado.titulo }}
                </h2>
                <div class="flex flex-wrap gap-4 text-[10px] text-gray-500 mb-6 font-mono uppercase tracking-widest italic">
                  <span>👤 Proyecto personal</span>
                  <span>🌐 Aplicación multiplataforma</span>
                  <span>🛠️ {{ proyectoSeleccionado.stackCorto }}</span>
                </div>
                <div class="flex gap-4">
                  <a :href="proyectoSeleccionado.linkRepo" target="_blank" class="text-purple-400 text-xs font-bold flex items-center gap-1 hover:underline uppercase italic">Ir al repositorio 🔗</a>
                </div>
              </div>
            </div>

            <div class="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-gray-300 text-sm leading-relaxed italic border-l-4 border-l-purple-500">
              {{ proyectoSeleccionado.resumen }}
            </div>

            <div class="space-y-6 text-gray-400 text-sm leading-relaxed">
              <p v-for="parrafo in proyectoSeleccionado.descripcionLarga" :key="parrafo">{{ parrafo }}</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <section id="experiencia" class="py-20 px-10 bg-[#080808] border-t border-white/5">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-3xl font-bold mb-12 text-center uppercase tracking-tighter italic text-gray-500">Trayectoria Profesional</h3>
        <div class="relative border-l border-white/10 ml-4 md:ml-0 md:mx-auto max-w-4xl pl-8 space-y-12">
          <div class="relative">
            <div class="absolute -left-[41px] top-1 w-5 h-5 bg-purple-500 rounded-full border-4 border-[#080808]"></div>
            <div class="flex flex-col md:flex-row md:justify-between mb-4">
              <div>
                <h4 class="text-xl font-bold text-white italic uppercase">Prácticas Formativas (FCT) - DAM</h4>
                <p class="text-purple-400 font-mono text-sm">AMSystem Jaén</p>
              </div>
              <span class="text-xs text-gray-500 font-mono mt-2 md:mt-0">MARZO 2026 — MAYO 2026 (516 HORAS)</span>
            </div>
            <ul class="text-gray-400 text-sm space-y-3 list-disc list-inside leading-relaxed">
              <li>Desarrollo y mantenimiento de aplicaciones utilizando el stack <span class="text-white">.NET y C#</span>.</li>
              <li>Optimización de bases de datos relacionales con <span class="text-white">SQL Server</span>.</li>
              <li>Colaboración en frontend con <span class="text-white">Vue.js</span>.</li>
              <li>Uso de metodologías ágiles y Git.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="sobre-mi" class="py-20 px-6 bg-[#080808]">
      <div class="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-purple-500/5 border border-white/10 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
        <div class="relative w-full md:w-1/3 flex flex-col items-center">
          <div class="w-64 h-64 bg-white/5 rounded-full border border-white/10 flex items-center justify-center italic text-gray-700">FOTO</div>
          <div class="absolute top-10 -left-4 bg-black/60 backdrop-blur-md p-2 rounded-xl border border-white/10 text-[10px]">✅ Alta adaptabilidad</div>
          <div class="absolute bottom-20 -right-4 bg-black/60 backdrop-blur-md p-2 rounded-xl border border-white/10 text-[10px]">🤝 Trabajo en equipo</div>
        </div>
        <div class="w-full md:w-2/3">
          <h3 class="text-4xl font-bold mb-2 italic">ANDRÉS MANUEL SÁNCHEZ RAMÍREZ</h3>
          <p class="text-purple-400 font-mono text-sm mb-6 uppercase tracking-widest font-bold">"Desarrollador Multiplataforma"</p>
          <div class="space-y-4 text-gray-400 leading-relaxed text-sm italic">
            <p>La programación me atrapó por la posibilidad infinita de crear. Hoy desarrollo soluciones robustas usando las últimas tecnologías.</p>
            <p>Fuera del código, el gimnasio me enseña <span class="text-white font-bold">disciplina y constancia</span>.</p>
          </div>
          <div class="mt-12">
            <h4 class="text-xs font-bold uppercase tracking-widest mb-6 text-gray-500">Habilidades</h4>
            <div class="flex flex-wrap gap-3 max-w-4xl">
              <template v-for="skill in ['HTML', 'CSS', 'JavaScript', 'React', 'ReactNative', 'Nextjs', 'Angular', 'TypeScript', 'TailwindCSS', 'Sass', 'Node', 'Nest', 'NestJS', 'Express', 'Symfony', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'GitHub', 'Git', 'GitLab', 'RenoLink', 'C#', '.NET', 'Java', 'SQL Server']" :key="skill">
                <span class="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10" :class="{ 'border-purple-500/60 text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]': skill === 'SQL Server' || skill === 'ReactNative' }">
                  {{ skill }}
                </span>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contacto" class="py-20 px-6 bg-[#080808]">
      <h2 class="text-center text-4xl font-bold mb-16 uppercase tracking-tighter italic">Contáctame</h2>
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        <div class="md:w-1/3 bg-white/5 p-10 flex flex-col items-center justify-center text-center border-r border-white/10 italic">
          <div class="w-32 h-32 rounded-full border-4 border-purple-500/30 p-1 mb-6 flex items-center justify-center text-gray-700 bg-black">AVATAR</div>
          <h4 class="text-xl font-bold uppercase">A. M. S.</h4>
          <p class="text-purple-400 text-xs mb-6 font-mono">Disponible para trabajar</p>
        </div>
        <div class="md:w-2/3 bg-black p-8 relative">
          <div class="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
            <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span class="text-xs font-mono text-gray-400 italic font-bold uppercase">En línea ahora</span>
          </div>
          <div class="space-y-6">
            <div class="bg-white/10 p-4 rounded-2xl rounded-tl-none max-w-xs text-sm italic border border-white/5">
              ¡Hola! Envíame un mensaje y te responderé lo antes posible.
            </div>
            <form class="space-y-4 mt-8" @submit.prevent>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold">
                <input type="text" placeholder="NOMBRE" class="bg-white/5 border border-white/10 p-4 rounded-xl text-xs focus:outline-none focus:border-purple-500 transition italic" />
                <input type="email" placeholder="EMAIL" class="bg-white/5 border border-white/10 p-4 rounded-xl text-xs focus:outline-none focus:border-purple-500 transition italic" />
              </div>
              <textarea placeholder="TU MENSAJE..." rows="4" class="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-xs focus:outline-none focus:border-purple-500 transition italic font-bold"></textarea>
              <button class="w-full bg-white text-black py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-purple-500 hover:text-white transition duration-300">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
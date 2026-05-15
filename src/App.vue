<template>
  <div class="bg-[#080808] min-h-screen text-white selection:bg-purple-500/30">
    
    <nav class="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5 px-8 py-4 flex justify-between items-center">
      <div class="text-xl font-black tracking-tighter text-white">G.S.</div>
      <div class="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-medium text-gray-400">
        <a href="#proyectos" class="hover:text-white transition">Proyectos</a>
        <a href="#experiencia" class="hover:text-white transition">Experiencia</a>
        <a href="#contacto" class="hover:text-white transition">Contacto</a>
      </div>
      <a href="#" class="border border-white/20 px-4 py-2 rounded-full text-xs hover:bg-white hover:text-black transition uppercase font-bold">DESCARGAR CV</a>
    </nav>

    <main class="relative h-screen flex flex-col items-center justify-center overflow-hidden">
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

        <a 
          href="https://github.com/amsr1994-CPU" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="flex items-center gap-2 text-gray-400 hover:text-white transition group"
        >
          <span class="font-bold">GITHUB</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            class="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
          >
            <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
          </svg>
        </a>
      </div>
    </main>

    <section id="proyectos" class="py-20 px-10 bg-[#080808] border-t border-white/5">
      <h3 class="text-3xl font-bold mb-12 text-center uppercase tracking-tighter">Proyectos Destacados</h3>
      
      <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        <div class="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition duration-500">
          <div class="h-64 bg-purple-900/20 flex items-center justify-center overflow-hidden">
            <img src="./assets/hero.png" class="group-hover:scale-110 transition duration-500 object-cover w-full h-full opacity-40" />
          </div>
          <div class="p-8">
            <span class="text-xs text-purple-400 font-mono tracking-widest">ANDROID NATIVE • SQLITE</span>
            <h4 class="text-2xl font-bold mt-2">Pinturas Santa Ana</h4>
            <p class="text-gray-400 mt-4 text-sm leading-relaxed">
              Aplicación móvil para gestión de inventarios y ventas. Diseñada para funcionar en sótanos y zonas sin cobertura mediante persistencia local.
            </p>
            <div class="flex gap-3 mt-6">
              <span class="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-300 border border-white/10">JAVA</span>
              <span class="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-300 border border-white/10">MATERIAL DESIGN</span>
            </div>
          </div>
        </div>

        <div class="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition duration-500">
          <div class="h-64 bg-blue-900/20 flex items-center justify-center">
            <div class="text-blue-500/30 font-black text-6xl italic">SQL SERVER</div>
          </div>
          <div class="p-8">
            <span class="text-xs text-blue-400 font-mono tracking-widest">BACKEND • ETL</span>
            <h4 class="text-2xl font-bold mt-2">Migración AMS</h4>
            <p class="text-gray-400 mt-4 text-sm leading-relaxed">
              Sistema de traspaso masivo de datos entre plataformas Resiplus y Resitevip. Implementación de lógica de negocio compleja y auditoría mediante Vue.js.
            </p>
            <div class="flex gap-3 mt-6">
              <span class="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-300 border border-white/10">C#</span>
              <span class="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-300 border border-white/10">SQL SERVER</span>
              <span class="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-300 border border-white/10">.NET</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="experiencia" class="py-20 px-10 bg-[#080808] border-t border-white/5">
  <div class="max-w-6xl mx-auto">
    <h3 class="text-3xl font-bold mb-12 text-center uppercase tracking-tighter italic text-gray-500">Trayectoria Profesional</h3>
    
    <div class="relative border-l border-white/10 ml-4 md:ml-0 md:mx-auto max-w-4xl pl-8 space-y-12">
      
      <div class="relative">
        <div class="absolute -left-[41px] top-1 w-5 h-5 bg-purple-500 rounded-full border-4 border-[#080808]"></div>
        
        <div class="flex flex-col md:flex-row md:justify-between mb-4">
          <div>
            <h4 class="text-xl font-bold text-white">Prácticas Formativas (FCT) - DAM</h4>
            <p class="text-purple-400 font-mono text-sm">Empresa en Jaén</p>
          </div>
          <span class="text-xs text-gray-500 font-mono mt-2 md:mt-0">MARZO 2026 — MAYO 2026 (516 HORAS)</span>
        </div>
        
        <ul class="text-gray-400 text-sm space-y-3 list-disc list-inside leading-relaxed">
          <li>Desarrollo y mantenimiento de aplicaciones utilizando el stack <span class="text-white">.NET y C#</span>.</li>
          <li>Optimización de bases de datos relacionales con <span class="text-white">SQL Server</span>, gestionando procedimientos almacenados y consultas complejas.</li>
          <li>Colaboración en el frontend de proyectos internos utilizando <span class="text-white">Vue.js</span> para visualización de datos de auditoría.</li>
          <li>Uso de metodologías ágiles y control de versiones con Git/GitHub.</li>
        </ul>
      </div>

    </div>
  </div>
</section>


    <section id="contacto" class="py-32 px-10 bg-[#080808] relative overflow-hidden">
  <div class="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] -z-10"></div>

  <div class="max-w-4xl mx-auto text-center">
    <h3 class="text-purple-500 font-mono text-sm mb-4 tracking-[0.3em] uppercase">¿Hablamos?</h3>
    <h2 class="text-5xl md:text-7xl font-bold tracking-tighter mb-12">Ponte en contacto</h2>
    
    <p class="text-gray-400 text-lg mb-16 max-w-xl mx-auto leading-relaxed">
      Actualmente estoy buscando nuevas oportunidades para aplicar mis conocimientos en 
      <span class="text-white">Desarrollo Multiplataforma</span>. Si tienes un proyecto o una duda, mi bandeja de entrada está abierta.
    </p>

    <div class="flex flex-wrap justify-center gap-8">
      <a href="mailto:tu-amsr1994@outlook.com" class="group flex flex-col items-center gap-4 p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-purple-500/50 transition-all duration-300 w-64">
        <div class="p-4 bg-purple-500/10 rounded-2xl text-purple-400 group-hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </div>
        <span class="text-sm font-bold tracking-widest text-gray-300">EMAIL</span>
        <span class="text-xs text-gray-500">Haz clic para escribir</span>
      </a>

      <a href="https://linkedin.com/in/andrés-manuel-sánchez-ramírez-10a9063b7" target="_blank" class="group flex flex-col items-center gap-4 p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all duration-300 w-64">
        <div class="p-4 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </div>
        <span class="text-sm font-bold tracking-widest text-gray-300">LINKEDIN</span>
        <span class="text-xs text-gray-500">Conectemos</span>
      </a>
    </div>

    <footer class="mt-32 pt-8 border-t border-white/5 text-gray-600 text-[10px] tracking-widest uppercase italic">
      © 2026 A. M. S. • Desarrollado con Vue.js y Tailwind CSS
    </footer>
  </div>
</section>
  </div>
</template>
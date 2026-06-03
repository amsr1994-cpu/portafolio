<script setup>
// El componente se adapta de forma totalmente nativa mediante las clases adaptativas de Tailwind v4
</script>

<template>
  <main id="inicio" class="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#f7f7f9] dark:bg-[#080808] transition-colors duration-300 px-6">
    
    <div class="absolute w-[500px] h-[500px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[120px] -z-10 animate-pulse duration-[6000ms]"></div>
    <div class="absolute w-[300px] h-[300px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] -z-10 top-20 right-20"></div>

    <div class="inline-flex items-center gap-2.5 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 font-bold shadow-sm mb-6 transition-all">
      <span class="relative flex h-2 w-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      DISPONIBLE PARA TRABAJAR
    </div>
    
    <h1 class="text-7xl md:text-9xl font-black tracking-tighter text-center mb-4 bg-gradient-to-b from-neutral-900 to-neutral-500 dark:from-white dark:to-gray-500 bg-clip-text text-transparent italic uppercase">
      A. M. S. R.
    </h1>

    <h2 class="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 max-w-3xl text-center tracking-tight leading-tight uppercase italic mb-6">
      Desarrollador de Aplicaciones Multiplataforma
    </h2>

    <p class="text-base md:text-lg font-normal text-neutral-500 dark:text-gray-400 max-w-2xl text-center leading-relaxed mb-8">
      Especializado en el diseño e integración de arquitecturas backend seguras, gestión avanzada de bases de datos relacionales y el despliegue de soluciones móviles nativas e híbridas.
    </p>

    <div class="w-full max-w-3xl border-t border-b border-neutral-200 dark:border-white/10 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12 text-xs font-mono text-neutral-400 dark:text-gray-500 uppercase tracking-widest">
      <span class="flex items-center gap-1.5"><b class="text-neutral-800 dark:text-white">⚡ BACKEND:</b> C# / .NET / JAVA</span>
      <span class="text-neutral-300 dark:text-white/10 hidden md:inline">|</span>
      <span class="flex items-center gap-1.5"><b class="text-neutral-800 dark:text-white">📱 MOBILE:</b> ANDROID STUDIO / KOTLIN</span>
      <span class="text-neutral-300 dark:text-white/10 hidden md:inline">|</span>
      <span class="flex items-center gap-1.5"><b class="text-neutral-800 dark:text-white">💻 FRONTEND:</b> VUE.JS / HTML / CSS</span>
      <span class="text-neutral-300 dark:text-white/10 hidden md:inline">|</span>
      <span class="flex items-center gap-1.5"><b class="text-neutral-800 dark:text-white">🗄️ DATA:</b> SQL SERVER</span>
    </div>

    <div class="flex flex-col sm:flex-row gap-5 items-center justify-center w-full">
      
      <a href="#proyectos" class="w-full sm:w-auto text-center bg-neutral-900 text-white dark:bg-white dark:text-black px-10 py-3.5 rounded-full font-bold hover:scale-105 transition duration-300 shadow-md dark:shadow-none tracking-wide text-sm uppercase italic">
        Ver Proyectos 📂
      </a>
      
      <div class="flex gap-6 items-center">
        <a href="https://github.com/amsr1994-CPU" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm font-bold text-neutral-500 dark:text-gray-400 hover:text-neutral-900 dark:hover:text-white transition group font-mono tracking-wider">
          GITHUB
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
        </a>

        <span class="text-neutral-300 dark:text-white/10">|</span>

        <a href="/Andres_Sanchez_CV.pdf" target="_blank" class="flex items-center gap-2 text-sm font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition group font-mono tracking-wider">
          DESCARGAR CV 📄
        </a>
      </div>

    </div>
  </main>
</template>
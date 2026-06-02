<template>
  <main id="inicio" class="relative h-screen flex flex-col items-center justify-center overflow-hidden">
    <!-- El brillo de fondo se adapta sutilmente -->
    <div class="absolute w-[500px] h-[500px] bg-purple-600/10 dark:bg-purple-600/10 bg-purple-500/5 rounded-full blur-[120px] -z-10"></div>
    <p class="text-purple-600 dark:text-purple-500 font-mono text-sm mb-4 tracking-widest">DISPONIBLE PARA TRABAJAR</p>
    
    <h1 class="text-7xl md:text-9xl font-bold tracking-tighter text-center mb-6 bg-gradient-to-b from-neutral-800 to-neutral-400 dark:from-white dark:to-gray-500 bg-clip-text text-transparent italic">
      A. M. S.
    </h1>
    <h2 class="text-xl md:text-2xl font-light text-neutral-600 dark:text-gray-400 max-w-2xl text-center leading-relaxed px-6">
      Especialista en <span class="text-neutral-900 dark:text-white font-medium">Desarrollo Multiplataforma</span>. 
      Creando soluciones robustas con .NET, SQL Server y Vue.js.
    </h2>
    <div class="mt-12 flex gap-6 items-center">
      <a href="#proyectos" class="bg-neutral-900 text-white dark:bg-white dark:text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition duration-300">
        MIS PROYECTOS
      </a>
      <a href="https://github.com/amsr1994-CPU" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-neutral-500 dark:text-gray-400 hover:text-neutral-900 dark:hover:text-white transition group">
        <span class="font-bold">GITHUB</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
      </a>
    </div>
  </main>
</template>
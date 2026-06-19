<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useParticles } from '../composables/useParticles.js'
import { useTypewriter } from '../composables/useTypewriter.js'

const xOffset = ref(0)
const yOffset = ref(0)

const manejarMovimientoRaton = (evento) => {
  xOffset.value = (evento.clientX - window.innerWidth / 2) * 0.03
  yOffset.value = (evento.clientY - window.innerHeight / 2) * 0.03
}

onMounted(() => {
  window.addEventListener('mousemove', manejarMovimientoRaton)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', manejarMovimientoRaton)
})

const { canvasRef } = useParticles()

const { textoMostrado } = useTypewriter('FULLSTACK & MULTIPLATFORM DEVELOPER', {
  velocidad: 50,
  delayInicial: 800
})
</script>

<template>
  <main id="inicio" class="relative min-h-screen w-full flex flex-col items-center justify-between bg-[#f7f7f9] dark:bg-[#080808] transition-colors duration-500 overflow-hidden pt-24 pb-8 px-4 md:px-8" role="main" aria-label="Inicio">
    
    <canvas ref="canvasRef" class="absolute inset-0 z-[1] pointer-events-none"></canvas>

    <div 
      class="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 transition-transform duration-300 ease-out"
      :style="{ transform: `translate(${xOffset}px, ${yOffset}px)` }"
      aria-hidden="true"
    >
      <h1 class="text-[16vw] font-black tracking-tighter text-neutral-200/60 dark:text-white/[0.02] uppercase italic leading-none select-none text-center w-full whitespace-nowrap">
        AMSR DEVELOPER
      </h1>
    </div>

    <div class="absolute w-[800px] h-[800px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[140px] top-12 -z-10 animate-pulse duration-[8000ms]"></div>
    <div class="absolute w-[500px] h-[500px] bg-pink-600/5 dark:bg-pink-600/10 rounded-full blur-[120px] bottom-12 right-0 -z-10 animate-pulse duration-[10000ms] delay-1000"></div>

    <div class="relative z-10 flex flex-col items-center justify-center flex-1 w-full max-w-6xl mx-auto text-center">
      
      <div class="inline-flex items-center gap-2.5 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-purple-600 dark:text-purple-400 font-bold shadow-sm mb-6 transition-all hover:border-purple-500/50 hover:shadow-purple-500/20">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        DISPONIBLE PARA TRABAJAR
      </div>

      <div class="relative w-full flex justify-center items-center mb-6">
        <div class="relative group w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72">
          <div class="absolute inset-0 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 group-hover:opacity-60 transition duration-500 pointer-events-none"></div>
          
          <div class="relative w-full h-full rounded-full border-2 border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.01] backdrop-blur-md overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-purple-500/25">
            <img src="/CV/yo.png" alt="Andrés Sánchez" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <h2 class="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-neutral-900 dark:text-white uppercase italic leading-none mb-4 max-w-5xl">
        ANDRÉS SÁNCHEZ
      </h2>
      
      <p class="text-purple-600 dark:text-purple-400 font-mono text-xs md:text-sm mb-6 uppercase tracking-[0.3em] font-black min-h-[1.2em]">
        {{ textoMostrado }}<span v-if="textoMostrado.length < 'FULLSTACK & MULTIPLATFORM DEVELOPER'.length" class="animate-pulse">|</span>
      </p>

      <p class="text-sm md:text-base text-neutral-500 dark:text-gray-400 max-w-2xl leading-relaxed mb-8 font-normal px-4">
        Especializado en arquitecturas backend robustas con <span class="text-neutral-900 dark:text-white font-semibold">.NET y C#</span>, gestión de datos en <span class="text-neutral-900 dark:text-white font-semibold">SQL Server</span> y desarrollo móvil nativo en <span class="text-neutral-900 dark:text-white font-semibold">Android Studio (Java/Kotlin)</span>.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md px-4">
        <a href="#proyectos" class="glow-hover w-full sm:w-auto text-center bg-neutral-900 text-white dark:bg-white dark:text-black px-10 py-3.5 rounded-xl font-bold hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-md text-xs uppercase tracking-wider italic font-black" aria-label="Explorar proyectos destacados">
          Explorar Proyectos ↓
        </a>
        <a href="/CV/AMSR_DAM.pdf" target="_blank" rel="noopener noreferrer" class="glow-hover w-full sm:w-auto text-center bg-white dark:bg-white/5 text-neutral-800 dark:text-purple-300 border border-neutral-200 dark:border-white/10 px-8 py-3.5 rounded-xl font-bold hover:border-purple-500/50 transition-all duration-300 text-xs uppercase tracking-wider font-mono" aria-label="Descargar currículum vitae">
          DESCARGAR CV 📄
        </a>
      </div>
    </div> <div class="w-full max-w-6xl border-t border-neutral-200 dark:border-white/5 pt-4 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400 dark:text-gray-500 z-10">
      <a href="mailto:amsr1994@outlook.com" class="flex items-center gap-2 hover:text-purple-500 transition duration-300" aria-label="Enviar correo electrónico">
        ✉️ <span class="lowercase">amsr1994@outlook.com</span>
      </a>
      <div class="hidden lg:flex items-center gap-4 uppercase text-[10px] tracking-widest text-neutral-300 dark:text-white/10">
        <span>.NET</span> • <span>SQL SERVER</span> • <span>ANDROID STUDIO</span> • <span>VUE</span>
      </div>
      <div class="flex items-center gap-6 font-bold tracking-wider">
        <a href="https://github.com/amsr1994-CPU" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-white transition group" aria-label="GitHub">
          GITHUB
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" class="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/andr%C3%A9s-manuel-s%C3%A1nchez-ram%C3%ADrez-10a9063b7" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 hover:text-blue-500 transition group" aria-label="LinkedIn">
          LINKEDIN
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" class="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
        </a>
      </div>
    </div>

  </main>
</template>
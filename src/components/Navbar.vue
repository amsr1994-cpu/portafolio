<script setup>
import { ref } from 'vue'

const emit = defineEmits(['toggle-theme'])
const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  console.log("Cambiando tema a oscuro =", isDark.value) // 👈 Añade esto para comprobar en F12
  emit('toggle-theme', isDark.value)
}
</script>
<template>
  <nav class="fixed top-0 w-full z-50 bg-black/40 dark:bg-black/40 bg-white/40 backdrop-blur-md border-b border-black/5 dark:border-white/5 px-8 py-4 flex justify-between items-center transition-colors duration-300">
    <div class="text-xl font-black tracking-tighter text-black dark:text-white">G.S.</div>
    
    <div class="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-medium text-gray-500 dark:text-gray-400">
      <a href="#inicio" class="hover:text-black dark:hover:text-white transition italic font-bold">Inicio</a> 
      <a href="#sobre-mi" class="hover:text-black dark:hover:text-white transition">Sobre mí</a> 
      <a href="#proyectos" class="hover:text-black dark:hover:text-white transition">Proyectos</a>
      <a href="#experiencia" class="hover:text-black dark:hover:text-white transition">Experiencia</a>
      <a href="#contacto" class="hover:text-black dark:hover:text-white transition">Contacto</a>
    </div>

    <div class="flex items-center gap-6">
      <a href="#" class="border border-black/20 dark:border-white/20 px-4 py-2 rounded-full text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white transition uppercase font-bold">CV 📄</a>
      
      <div class="flex items-center gap-4 text-gray-500 dark:text-gray-400">
        <!-- BOTÓN MODO CLARO / OSCURO -->
        <button @click="toggleTheme" class="hover:text-black dark:hover:text-white transition p-1 rounded-lg" title="Cambiar tema">
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        </button>

        <a href="https://www.linkedin.com/in/andrés-manuel-sánchez-ramírez-10a9063b7" target="_blank" class="hidden lg:block hover:text-black dark:hover:text-white transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="https://github.com/amsr1994-CPU" target="_blank" class="hidden lg:block hover:text-black dark:hover:text-white transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
      </div>
    </div>
  </nav>
</template>
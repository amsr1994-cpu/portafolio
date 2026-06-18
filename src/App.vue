<!-- src/App.vue -->
<script setup>
import { ref } from 'vue'
import { misProyectos } from './proyectosData.js'
import { useCursorGlow } from './composables/useCursorGlow.js'

import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Proyectos from './components/Proyectos.vue'
import ProyectoModal from './components/ProyectoModal.vue'
import Experiencia from './components/Experiencia.vue'
import SobreMi from './components/SobreMi.vue'
import Contacto from './components/Contacto.vue'

const proyectoSeleccionado = ref(null)
const temaOscuro = ref(true)

const seleccionarProyecto = (proyecto) => {
  proyectoSeleccionado.value = proyecto
}
const cerrarModal = () => {
  proyectoSeleccionado.value = null
}

const manejarTema = (esOscuro) => {
  temaOscuro.value = esOscuro
  localStorage.setItem('tema-oscuro', esOscuro)
  if (esOscuro) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const { glowRef } = useCursorGlow()
</script>

<template>
  <div class="bg-[#f7f7f9] dark:bg-[#080808] text-neutral-900 dark:text-white min-h-screen selection:bg-purple-500/30 transition-colors duration-300 relative">
    
    <div ref="glowRef" class="fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-purple-600/10 dark:bg-purple-600/20 blur-[100px] pointer-events-none z-[9999] hidden md:block" aria-hidden="true"></div>

    <div class="fixed inset-0 pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.04] fondo-grid" aria-hidden="true" style="background-image: linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px); background-size: 60px 60px;"></div>

    <Navbar @toggle-theme="manejarTema" />

    <Hero />

    <Proyectos :proyectos="misProyectos" @abrir-modal="seleccionarProyecto" />

    <ProyectoModal :proyecto="proyectoSeleccionado" @cerrar="cerrarModal" />

    <Experiencia />

    <SobreMi />

    <Contacto />

  </div>
</template>
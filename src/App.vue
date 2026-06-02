<!-- src/App.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import { misProyectos } from './proyectosData.js'

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

// ESTA FUNCIÓN AHORA CONTROLARÁ EL HTML DEL NAVEGADOR
const manejarTema = (esOscuro) => {
  temaOscuro.value = esOscuro
  if (esOscuro) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Aseguramos que al arrancar la web empiece en modo oscuro por defecto
onMounted(() => {
  document.documentElement.classList.add('dark')
})
</script>

<template>
  <!-- Eliminamos el div :class externo; ahora el fondo se adapta directamente -->
  <div class="bg-[#f7f7f9] dark:bg-[#080808] text-neutral-900 dark:text-white min-h-screen selection:bg-purple-500/30 transition-colors duration-300">
    
    <Navbar @toggle-theme="manejarTema" />

    <Hero />

    <Proyectos :proyectos="misProyectos" @abrir-modal="seleccionarProyecto" />

    <ProyectoModal :proyecto="proyectoSeleccionado" @cerrar="cerrarModal" />

    <Experiencia />

    <SobreMi />

    <Contacto />

  </div>
</template>
<script setup>
defineProps({
  proyecto: {
    type: Object,
    default: null
  }
})

defineEmits(['cerrar'])
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="proyecto" class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-white/80 dark:bg-black/95 backdrop-blur-md" role="dialog" aria-modal="true" :aria-label="`Detalles de ${proyecto.titulo}`">
      
      <div class="bg-white dark:bg-[#0b0b0b] border border-neutral-200 dark:border-white/10 w-full max-w-6xl h-[92vh] overflow-y-auto rounded-[36px] relative shadow-2xl text-neutral-800 dark:text-white transition-colors duration-300">
        
        <button @click="$emit('cerrar')" class="sticky top-6 float-right mr-6 bg-neutral-100 dark:bg-black/60 backdrop-blur-md border border-neutral-200 dark:border-white/10 p-3 rounded-full text-neutral-600 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white hover:scale-110 transition-all z-50 shadow-sm" aria-label="Cerrar modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <div class="p-6 md:p-14 space-y-12">
          
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <div class="w-full md:w-5/12 h-56 bg-neutral-100 dark:bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden border border-neutral-200 dark:border-white/10 shadow-sm">
              <img v-if="proyecto.imagen" :src="proyecto.imagen" :alt="`Imagen representativa de ${proyecto.titulo}`" class="object-cover w-full h-full opacity-90 dark:opacity-70" />
              <span v-else class="text-neutral-300 dark:text-white/10 font-black italic text-3xl uppercase tracking-tighter" aria-hidden="true">
                {{ proyecto.titulo.split(' ')[0] }}
              </span>
            </div>
            
            <div class="flex-1">
              <h2 class="text-4xl md:text-6xl font-black tracking-tighter mb-4 bg-gradient-to-r from-neutral-900 via-neutral-700 to-purple-600 dark:from-white dark:via-white dark:to-purple-400 bg-clip-text text-transparent italic uppercase leading-none">
                {{ proyecto.titulo }}
              </h2>
              
              <div class="flex flex-wrap gap-3 text-[10px] text-neutral-500 dark:text-gray-400 mb-6 font-mono uppercase tracking-widest italic items-center">
                <span class="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400 rounded-full font-bold uppercase">{{ proyecto.tipo }}</span>
                <span class="px-3 py-1 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-full">Aplicación Multiplataforma</span>
                <span class="px-3 py-1 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-full text-neutral-700 dark:text-white/70">{{ proyecto.stackCorto }}</span>
              </div>
              
              <div class="flex gap-4">
                <a :href="proyecto.linkRepo" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-neutral-900 dark:bg-white/5 text-white dark:text-purple-300 hover:bg-neutral-800 dark:hover:bg-white/10 border border-transparent dark:border-white/10 text-xs font-bold flex items-center gap-2 rounded-xl transition duration-300 uppercase italic tracking-wider" :aria-label="`Ir al repositorio de ${proyecto.titulo}`">
                  Ir al repositorio
                </a>
              </div>
            </div>
          </div>

          <div class="bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 rounded-2xl p-6 text-neutral-700 dark:text-gray-300 text-sm leading-relaxed italic border-l-4 border-l-purple-500 font-medium shadow-sm">
            {{ proyecto.resumen }}
          </div>

          <div class="space-y-6 text-neutral-600 dark:text-gray-400 text-sm leading-relaxed max-w-4xl">
            <p v-for="(parrafo, idx) in proyecto.descripcionLarga" :key="idx">{{ parrafo }}</p>
          </div>

          <div class="space-y-6 pt-4" v-if="proyecto.funcionalidades && proyecto.funcionalidades.length">
            <h3 class="text-2xl font-bold uppercase tracking-tighter text-purple-600 dark:text-purple-400 italic">Funcionalidades Clave</h3>
            <ul class="space-y-4 max-w-4xl">
              <li v-for="func in proyecto.funcionalidades" :key="func.titulo" class="text-sm leading-relaxed">
                <span class="text-green-600 dark:text-green-400 font-bold block md:inline-block md:w-64">• {{ func.titulo }}:</span>
                <span class="text-neutral-600 dark:text-gray-400">{{ func.desc }}</span>
              </li>
            </ul>
          </div>

          <div class="space-y-6 pt-4" v-if="proyecto.imagenesGaleria && proyecto.imagenesGaleria.length">
            <h3 class="text-2xl font-bold uppercase tracking-tighter text-purple-600 dark:text-purple-400 italic">Vista previa (Screenshots)</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="(imgSrc, index) in proyecto.imagenesGaleria" :key="index" class="border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 rounded-2xl overflow-hidden p-2 shadow-sm">
                <img :src="imgSrc" :alt="`Captura ${index + 1} de ${proyecto.titulo}`" class="w-full h-auto rounded-xl object-contain" loading="lazy" />
              </div>
            </div>
          </div>

          <div class="space-y-6 pt-4" v-if="proyecto.tablaTecnologias && proyecto.tablaTecnologias.length">
            <h3 class="text-2xl font-bold uppercase tracking-tighter text-purple-600 dark:text-purple-400 italic">Arquitectura y Tecnologías</h3>
            <div class="border border-neutral-200 dark:border-white/10 rounded-2xl overflow-hidden bg-neutral-50 dark:bg-white/[0.02] shadow-sm">
              <table class="w-full text-left border-collapse text-xs md:text-sm">
                <caption class="sr-only">Tecnologías usadas en {{ proyecto.titulo }}</caption>
                <thead>
                  <tr class="border-b border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/[0.04] font-mono text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                    <th scope="col" class="p-4 md:p-5 font-bold text-center w-1/3">Tecnología</th>
                    <th scope="col" class="p-4 md:p-5 font-bold">Rol / Uso en el sistema</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-neutral-200 dark:divide-white/5 text-neutral-600 dark:text-gray-400">
                  <tr v-for="row in proyecto.tablaTecnologias" :key="row.tech" class="hover:bg-neutral-100/50 dark:hover:bg-white/[0.02] transition">
                    <th scope="row" class="p-4 md:p-5 font-bold text-neutral-900 dark:text-white text-center border-r border-neutral-200 dark:border-white/5 bg-neutral-50/50 dark:bg-transparent">
                      {{ row.tech }}
                    </th>
                    <td class="p-4 md:p-5 leading-relaxed">
                      {{ row.uso }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  </Transition>
</template>
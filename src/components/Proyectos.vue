<script setup>
// 👈 ESTO ES LO QUE FALTA COMPROBAR: Declarar las propiedades y eventos de entrada
defineProps({
  proyectos: {
    type: Array,
    required: true
  }
})

defineEmits(['abrir-modal'])
</script>

<template>
  <section id="proyectos" class="py-20 px-10 bg-[#f4f4f7] dark:bg-[#080808] border-t border-black/5 dark:border-white/5 transition-colors duration-300">
    <h3 class="text-3xl font-bold mb-12 text-center uppercase tracking-tighter italic text-neutral-400 dark:text-gray-500">Proyectos Destacados</h3>
    
    <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div 
        v-for="proyecto in proyectos" 
        :key="proyecto.id"
        @click="$emit('abrir-modal', proyecto)" 
        class="cursor-pointer group bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition duration-500 flex flex-col justify-between shadow-sm hover:shadow-md"
      >
        <div class="h-48 flex items-center justify-center overflow-hidden relative bg-neutral-100 dark:bg-white/[0.02]">
          <img v-if="proyecto.imagen" :src="proyecto.imagen" class="group-hover:scale-110 transition duration-500 object-cover w-full h-full opacity-60 dark:opacity-40" />
          <div v-else class="font-black text-4xl italic uppercase opacity-10 dark:opacity-20 tracking-tighter text-purple-500">
            {{ proyecto.id.split('-')[0] }}
          </div>
        </div>

        <div class="p-8 flex-1 flex flex-col justify-between">
          <div>
            <span class="text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400">
              {{ proyecto.subtitulo }}
            </span>
            <h4 class="text-2xl font-bold mt-2 italic uppercase text-neutral-900 dark:text-white">{{ proyecto.titulo }}</h4>
            <p class="text-neutral-500 dark:text-gray-400 mt-4 text-sm leading-relaxed">{{ proyecto.resumen }}</p>
          </div>
          
          <div class="flex flex-wrap gap-2 mt-6">
            <span 
              v-for="tech in proyecto.stackCorto.split(', ')" 
              :key="tech"
              class="px-2.5 py-1 bg-neutral-100 dark:bg-white/5 rounded-full text-[10px] text-neutral-600 dark:text-gray-400 border border-neutral-200 dark:border-white/5"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({
  proyectos: {
    type: Array,
    required: true
  }
})

defineEmits(['abrir-modal'])

const manejarTilt = (e) => {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = ((y - centerY) / centerY) * -8
  const rotateY = ((x - centerX) / centerX) * 8
  el.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
}

const quitarTilt = (e) => {
  const el = e.currentTarget
  el.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
}
</script>

<template>
  <section id="proyectos" class="py-20 px-10 bg-[#f4f4f7] dark:bg-[#080808] border-t border-black/5 dark:border-white/5 transition-colors duration-300" aria-label="Proyectos destacados" role="region">
    <h3 class="text-3xl font-bold mb-12 text-center uppercase tracking-tighter italic text-neutral-400 dark:text-gray-500">Proyectos Destacados</h3>
    
    <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div 
        v-for="(proyecto, index) in proyectos" 
        :key="proyecto.id"
        @click="$emit('abrir-modal', proyecto)" 
        @mousemove="manejarTilt"
        @mouseleave="quitarTilt"
        :style="{ animationDelay: `${index * 150}ms` }"
        class="animado-scroll tarjeta-brillo cursor-pointer group bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-purple-500/10"
        role="button"
        :aria-label="`Ver detalles de ${proyecto.titulo}`"
        :tabindex="0"
        @keydown.enter="$emit('abrir-modal', proyecto)"
        @keydown.space.prevent="$emit('abrir-modal', proyecto)"
      >
        <div class="h-48 flex items-center justify-center overflow-hidden relative bg-neutral-100 dark:bg-white/[0.02]">
          <img v-if="proyecto.imagen" :src="proyecto.imagen" :alt="`Captura de ${proyecto.titulo}`" class="group-hover:scale-110 transition duration-500 object-cover w-full h-full opacity-60 dark:opacity-40" />
          <div v-else class="font-black text-4xl italic uppercase opacity-10 dark:opacity-20 tracking-tighter text-purple-500" aria-hidden="true">
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
          
          <div class="flex flex-wrap gap-2 mt-6" aria-label="Tecnologías usadas">
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
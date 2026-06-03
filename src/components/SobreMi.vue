<script setup>
// Configuración limpia sin necesidad de props; Tailwind v4 detecta la clase .dark en el html automáticamente
</script>

<template>
  <section id="sobre-mi" class="py-20 px-6 bg-[#f4f4f7] dark:bg-[#080808] transition-colors duration-300">
    
    <div class="max-w-6xl mx-auto bg-white dark:bg-[#0b0b0b] dark:bg-gradient-to-br dark:from-white/5 dark:to-purple-500/5 border border-neutral-200 dark:border-white/10 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-sm dark:shadow-none transition-all duration-300">
      
      <div class="relative w-full md:w-1/3 flex flex-col items-center">
        <div class="w-64 h-64 bg-neutral-100 dark:bg-white/5 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center italic text-neutral-400 dark:text-gray-500 transition-colors duration-300 font-medium">
          FOTO
        </div>
        
        <div class="absolute top-10 -left-4 bg-neutral-50/90 dark:bg-black/60 backdrop-blur-md p-2 rounded-xl border border-neutral-200 dark:border-white/10 text-[10px] text-neutral-800 dark:text-white font-bold shadow-sm transition-all">
          ✅ Alta adaptabilidad
        </div>
        <div class="absolute bottom-20 -right-4 bg-neutral-50/90 dark:bg-black/60 backdrop-blur-md p-2 rounded-xl border border-neutral-200 dark:border-white/10 text-[10px] text-neutral-800 dark:text-white font-bold shadow-sm transition-all">
          🤝 Trabajo en equipo
        </div>
      </div>

      <div class="w-full md:w-2/3">
        <h3 class="text-3xl md:text-4xl font-black mb-2 italic text-neutral-900 dark:text-white tracking-tighter transition-colors duration-300">
          ANDRÉS MANUEL SÁNCHEZ RAMÍREZ
        </h3>
        
        <p class="text-purple-600 dark:text-purple-400 font-mono text-sm mb-6 uppercase tracking-widest font-bold">
          "Desarrollador Multiplataforma"
        </p>
        
        <div class="space-y-4 text-neutral-600 dark:text-gray-400 leading-relaxed text-sm italic transition-colors duration-300">
          <p>La programación me atrapó por la posibilidad infinita de crear. Hoy desarrollo soluciones robustas usando las últimas tecnologías.</p>
          <p>Fuera del código, tengo mucha pasión por la tecnología en general, soy piloto de drones y me fascina la impresión 3D.</p>
          <p>Por otro lado, el deporte como gimnasio, running, etc., me enseña <span class="text-neutral-900 dark:text-white font-bold not-italic">disciplina y constancia</span>.</p>
        </div>

        <div class="mt-12">
          <h4 class="text-xs font-bold uppercase tracking-widest mb-6 text-neutral-400 dark:text-gray-500 font-mono">
            Habilidades
          </h4>
          <div class="flex flex-wrap gap-3 max-w-4xl">
            <template v-for="skill in ['HTML', 'CSS', 'JavaScript', 'React', 'ReactNative', 'Nextjs', 'Angular', 'TypeScript', 'TailwindCSS', 'Sass', 'Node', 'Nest', 'NestJS', 'Express', 'Symfony', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'GitHub', 'Git', 'GitLab', 'RenoLink', 'C#', '.NET', 'Java', 'SQL Server']" :key="skill">
              <span 
                class="px-5 py-2 rounded-full text-[10px] font-bold transition-all duration-300 cursor-default uppercase tracking-wider"
                :class="skill === 'SQL Server' || skill === 'ReactNative' 
                  ? 'bg-purple-600 text-white dark:border-purple-500/60 dark:bg-transparent dark:text-white shadow-md dark:shadow-[0_0_15px_rgba(168,85,247,0.2)] border border-transparent' 
                  : 'bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-gray-400 border border-neutral-200/60 dark:border-white/5 hover:border-purple-500/50 dark:hover:bg-purple-500/10'"
              >
                {{ skill }}
              </span>
            </template>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
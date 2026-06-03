<!-- src/components/Experiencia.vue -->
<template>
  <section id="experiencia" class="py-20 px-10 bg-[#f7f7f9] dark:bg-[#080808] border-t border-neutral-200 dark:border-white/5 transition-colors duration-300">
    <div class="max-w-6xl mx-auto">
      <h3 class="text-3xl font-bold mb-12 text-center uppercase tracking-tighter italic text-neutral-400 dark:text-gray-500">Trayectoria Profesional</h3>
      <div class="relative border-l border-neutral-200 dark:border-white/10 ml-4 md:ml-0 md:mx-auto max-w-4xl pl-8 space-y-12">
        <div class="relative">
          <!-- Punto de la línea de tiempo -->
          <div class="absolute -left-[41px] top-1 w-5 h-5 bg-purple-600 dark:bg-purple-500 rounded-full border-4 border-[#f7f7f9] dark:border-[#080808] transition-colors duration-300"></div>
          
          <div class="flex flex-col md:flex-row md:justify-between mb-4">
            <div>
              <h4 class="text-xl font-bold text-neutral-900 dark:text-white italic uppercase">AMSystem - Jaén </h4>
              <p class="text-purple-600 dark:text-purple-400 font-mono text-sm font-semibold">Prácticas Formativas (FCT) - DAM</p>
            </div>
            <span class="text-xs text-neutral-400 dark:text-gray-500 font-mono mt-2 md:mt-0 font-bold">MARZO 2026 — JUNIO 2026 (516 HORAS)</span>
          </div>
          <ul class="text-neutral-600 dark:text-gray-400 text-sm space-y-3 list-disc list-inside leading-relaxed">
            <li>Desarrollo y mantenimiento de aplicaciones utilizando el stack <span class="text-neutral-900 dark:text-white font-semibold">.NET y C#</span>.</li>
            <li>Optimización de bases de datos relacionales con <span class="text-neutral-900 dark:text-white font-semibold">SQL Server</span>.</li>
            <li>Desarrollo de frontend con <span class="text-neutral-900 dark:text-white font-semibold">Vue.js</span>.</li>
            <li>Uso de metodologías ágiles y Git.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
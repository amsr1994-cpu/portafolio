<!-- src/components/Contacto.vue -->
<template>
  <section id="contacto" class="py-20 px-6 bg-[#f7f7f9] dark:bg-[#080808] transition-colors duration-300">
    <h2 class="text-center text-4xl font-bold mb-16 uppercase tracking-tighter italic text-neutral-900 dark:text-white">Contáctame</h2>
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row border border-neutral-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl dark:shadow-2xl transition-all duration-300">
      
      <!-- Lado Izquierdo Card -->
      <div class="md:w-1/3 bg-white dark:bg-white/5 p-10 flex flex-col items-center justify-center text-center border-r border-neutral-200 dark:border-white/10 italic transition-colors duration-300">
        <div class="w-32 h-32 rounded-full border-4 border-purple-500/20 dark:border-purple-500/30 p-1 mb-6 flex items-center justify-center text-neutral-400 dark:text-gray-700 bg-neutral-100 dark:bg-black transition-colors duration-300">AVATAR</div>
        <h4 class="text-xl font-bold uppercase text-neutral-900 dark:text-white">A. M. S.</h4>
        <p class="text-purple-600 dark:text-purple-400 text-xs mb-6 font-mono font-semibold">Disponible para trabajar</p>
      </div>

      <!-- Lado Derecho Chat -->
      <div class="md:w-2/3 bg-[#f0f0f4] dark:bg-black p-8 relative transition-colors duration-300">
        <!-- Header del chat -->
        <div class="flex items-center gap-3 mb-8 border-b border-neutral-200 dark:border-white/5 pb-4">
          <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span class="text-xs font-mono text-neutral-500 dark:text-gray-400 italic font-bold uppercase">En línea ahora</span>
        </div>

        <div class="space-y-6">
          <!-- Burbuja de mensaje recibido -->
          <div class="bg-white dark:bg-white/10 text-neutral-800 dark:text-white p-4 rounded-2xl rounded-tl-none max-w-xs text-sm italic border border-neutral-200 dark:border-white/5 shadow-sm transition-all duration-300">
            ¡Hola! Envíame un mensaje y te responderé lo antes posible.
          </div>

          <!-- Formulario -->
          <form class="space-y-4 mt-8" @submit.prevent>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold">
              <input type="text" placeholder="NOMBRE" class="bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-4 rounded-xl text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-purple-500 transition italic shadow-sm dark:shadow-none" />
              <input type="email" placeholder="EMAIL" class="bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-4 rounded-xl text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-purple-500 transition italic shadow-sm dark:shadow-none" />
            </div>
            <textarea placeholder="TU MENSAJE..." rows="4" class="w-full bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-4 rounded-xl text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-purple-500 transition italic font-bold shadow-sm dark:shadow-none"></textarea>
            
            <!-- Botón Enviar Dinámico -->
            <button class="w-full bg-neutral-950 text-white dark:bg-white dark:text-black py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white transition duration-300 shadow-md">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>

    </div>
  </section>
</template>
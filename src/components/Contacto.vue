<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { elRef } = useScrollReveal()

const nombre = ref('')
const email = ref('')
const mensaje = ref('')

const enviando = ref(false)
const enviadoExito = ref(false)
const errorEnvio = ref(false)

const FORMSPREE_URL = 'https://formspree.io/f/xeewjrjw' 

const enviarFormulario = async () => {
  if (!nombre.value || !email.value || !mensaje.value) return

  enviando.value = true
  errorEnvio.value = false

  try {
    const respuesta = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        nombre: nombre.value,
        email: email.value,
        mensaje: mensaje.value
      })
    })

    if (respuesta.ok) {
      enviadoExito.value = true
      nombre.value = ''
      email.value = ''
      mensaje.value = ''
    } else {
      errorEnvio.value = true
    }
  } catch (error) {
    errorEnvio.value = true
    console.error('Error al enviar el correo:', error)
  } finally {
    enviando.value = false
  }
}
</script>

<template>
  <section id="contacto" class="py-20 px-6 bg-[#f7f7f9] dark:bg-[#080808] transition-colors duration-300" aria-label="Contacto" role="region">
    <h2 class="text-center text-4xl font-bold mb-16 uppercase tracking-tighter italic text-neutral-900 dark:text-white">Contáctame</h2>
    
    <div ref="elRef" class="max-w-5xl mx-auto flex flex-col md:flex-row border border-neutral-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl dark:shadow-2xl transition-all duration-300">
      
      <div class="md:w-1/3 bg-white dark:bg-white/5 p-10 flex flex-col items-center justify-center text-center border-r border-neutral-200 dark:border-white/10 italic transition-colors duration-300">
        <div class="w-32 h-32 rounded-full border-4 border-purple-500/20 dark:border-purple-500/30 p-1 mb-6 flex items-center justify-center text-neutral-500 dark:text-gray-400 bg-neutral-100 dark:bg-black font-mono text-xs font-bold transition-colors duration-300 tracking-wider" aria-hidden="true">
          AMS
        </div>
        <h4 class="text-xl font-bold uppercase text-neutral-900 dark:text-white">A. M. S.</h4>
        <p class="text-purple-600 dark:text-purple-400 text-xs mb-6 font-mono font-semibold">Disponible para trabajar</p>
      </div>

      <div class="md:w-2/3 bg-[#f0f0f4] dark:bg-black p-8 relative transition-colors duration-300 flex flex-col justify-between min-h-[400px]">
        
        <div>
          <div class="flex items-center gap-3 mb-8 border-b border-neutral-200 dark:border-white/5 pb-4">
            <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>
            <span class="text-xs font-mono text-neutral-500 dark:text-gray-400 italic font-bold uppercase">En línea ahora</span>
          </div>

          <div class="space-y-6">
            <div class="bg-white dark:bg-white/10 text-neutral-800 dark:text-white p-4 rounded-2xl rounded-tl-none max-w-xs text-sm italic border border-neutral-200 dark:border-white/5 shadow-sm transition-all duration-300" aria-live="polite">
              ¡Hola! Envíame un mensaje y te responderé lo antes posible.
            </div>

            <div v-if="enviadoExito" class="bg-purple-600 text-white p-4 rounded-2xl rounded-tl-none max-w-xs text-sm italic border border-purple-500/20 shadow-md transition-all" role="alert">
              ¡Mensaje enviado con éxito! Acabo de recibir tu notificación en mi correo. Te responderé lo antes posible. ¡Gracias!
            </div>
          </div>
        </div>

        <form v-if="!enviadoExito" class="space-y-4 mt-8" @submit.prevent="enviarFormulario" novalidate aria-label="Formulario de contacto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold">
            <input 
              v-model="nombre"
              type="text" 
              required
              placeholder="NOMBRE"
              aria-label="Tu nombre"
              class="bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-4 rounded-xl text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-purple-500 transition italic shadow-sm" 
            />
            <input 
              v-model="email"
              type="email" 
              required
              placeholder="EMAIL"
              aria-label="Tu correo electrónico"
              class="bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-4 rounded-xl text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-purple-500 transition italic shadow-sm" 
            />
          </div>
          <textarea 
            v-model="mensaje"
            required
            placeholder="TU MENSAJE..." 
            rows="4"
            aria-label="Tu mensaje"
            class="w-full bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-4 rounded-xl text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-purple-500 transition italic font-bold shadow-sm"
          ></textarea>
          
          <p v-if="errorEnvio" class="text-xs text-red-500 font-mono font-bold uppercase italic" role="alert">
            Ocurrió un error de conexión. Inténtalo de nuevo o escríbeme directamente.
          </p>

          <button 
            :disabled="enviando"
            type="submit"
            class="w-full bg-neutral-950 text-white dark:bg-white dark:text-black py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            aria-label="Enviar mensaje de contacto"
          >
            <span v-if="enviando" class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" aria-hidden="true"></span>
            {{ enviando ? 'Enviando...' : 'Enviar mensaje' }}
          </button>
        </form>
        
      </div>

    </div>
  </section>
</template>
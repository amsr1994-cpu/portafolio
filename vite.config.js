import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' // Si usas el plugin de la v4

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss({
      // Esto fuerza a Tailwind a buscar la clase .dark en el html
      darkMode: 'class' 
    })
  ]
})
import { ref, onMounted } from 'vue'

export function useTypewriter(texto, options = {}) {
  const {
    velocidad = 60,
    delayInicial = 500,
    borrar = false,
    velocidadBorrar = 30,
    pausaFinal = 2000
  } = options

  const textoMostrado = ref('')
  const escribiendo = ref(true)

  onMounted(() => {
    let indice = 0
    let timeout

    const escribir = () => {
      if (indice < texto.length) {
        textoMostrado.value += texto[indice]
        indice++
        timeout = setTimeout(escribir, velocidad + Math.random() * 40)
      } else if (borrar) {
        timeout = setTimeout(borrarTexto, pausaFinal)
      } else {
        escribiendo.value = false
      }
    }

    const borrarTexto = () => {
      if (textoMostrado.value.length > 0) {
        textoMostrado.value = textoMostrado.value.slice(0, -1)
        timeout = setTimeout(borrarTexto, velocidadBorrar)
      } else {
        indice = 0
        escribiendo.value = true
        timeout = setTimeout(escribir, delayInicial)
      }
    }

    timeout = setTimeout(escribir, delayInicial)
  })

  return { textoMostrado, escribiendo }
}

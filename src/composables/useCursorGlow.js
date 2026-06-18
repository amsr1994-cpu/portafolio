import { ref, onMounted, onUnmounted } from 'vue'

export function useCursorGlow() {
  const glowRef = ref(null)

  onMounted(() => {
    const glow = glowRef.value
    if (!glow) return

    let ratonX = -200
    let ratonY = -200
    let currentX = -200
    let currentY = -200
    let animId

    const actualizarPosicion = (e) => {
      ratonX = e.clientX
      ratonY = e.clientY
    }

    const animar = () => {
      currentX += (ratonX - currentX) * 0.08
      currentY += (ratonY - currentY) * 0.08
      glow.style.transform = `translate(${currentX - 150}px, ${currentY - 150}px)`
      animId = requestAnimationFrame(animar)
    }

    document.addEventListener('mousemove', actualizarPosicion)
    animId = requestAnimationFrame(animar)

    onUnmounted(() => {
      document.removeEventListener('mousemove', actualizarPosicion)
      cancelAnimationFrame(animId)
    })
  })

  return { glowRef }
}

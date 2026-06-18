import { ref, onMounted, onUnmounted } from 'vue'

export function useParticles() {
  const canvasRef = ref(null)

  onMounted(() => {
    const canvas = canvasRef.value
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animId
    let particulas = []

    const redimensionar = () => {
      canvas.width = canvas.parentElement.offsetWidth
      canvas.height = canvas.parentElement.offsetHeight
    }

    const COLORES = ['#a855f7', '#ec4899', '#6366f1', '#8b5cf6', '#d946ef']

    class Particula {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.tamano = Math.random() * 3 + 1
        this.velX = (Math.random() - 0.5) * 0.5
        this.velY = (Math.random() - 0.5) * 0.5
        this.opacidad = Math.random() * 0.5 + 0.1
        this.color = COLORES[Math.floor(Math.random() * COLORES.length)]
        this.pulso = Math.random() * Math.PI * 2
        this.velPulso = Math.random() * 0.02 + 0.01
      }

      actualizar() {
        this.x += this.velX
        this.y += this.velY
        this.pulso += this.velPulso
        this.opacidadActual = this.opacidad * (0.5 + 0.5 * Math.sin(this.pulso))

        if (this.x < -10 || this.x > canvas.width + 10 || this.y < -10 || this.y > canvas.height + 10) {
          this.reset()
        }
      }

      dibujar() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.tamano, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacidadActual
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    const init = () => {
      redimensionar()
      const numParticulas = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80)
      particulas = Array.from({ length: numParticulas }, () => new Particula())
    }

    const dibujarConexiones = () => {
      for (let i = 0; i < particulas.length; i++) {
        for (let j = i + 1; j < particulas.length; j++) {
          const dx = particulas[i].x - particulas[j].x
          const dy = particulas[i].y - particulas[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particulas[i].x, particulas[i].y)
            ctx.lineTo(particulas[j].x, particulas[j].y)
            ctx.strokeStyle = '#a855f7'
            ctx.globalAlpha = 0.08 * (1 - dist / 120)
            ctx.lineWidth = 0.5
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }
    }

    const animar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particulas.forEach(p => {
        p.actualizar()
        p.dibujar()
      })
      dibujarConexiones()
      animId = requestAnimationFrame(animar)
    }

    init()
    animar()
    window.addEventListener('resize', redimensionar)

    onUnmounted(() => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', redimensionar)
    })
  })

  return { canvasRef }
}

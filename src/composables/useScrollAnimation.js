import { ref, onMounted } from 'vue'

export function useScrollAnimation() {
  const elRef = ref(null)

  onMounted(() => {
    const el = elRef.value
    if (!el) return

    if (!window.IntersectionObserver) {
      el.classList.add('animado')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animado')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
  })

  return { elRef }
}

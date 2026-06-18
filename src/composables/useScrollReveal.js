import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  const elRef = ref(null)

  onMounted(() => {
    const el = elRef.value
    if (!el) return

    el.style.opacity = '0'
    el.style.transform = 'translateY(40px)'

    if (!window.IntersectionObserver) {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)

    onUnmounted(() => observer.disconnect())
  })

  return { elRef }
}

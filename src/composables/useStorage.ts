import { ref, watch, onMounted } from 'vue'

export function useStorage<T>(key: string, initialValue: T) {
  const storedValue = ref<T>(initialValue)

  // Load from localStorage on startup
  onMounted(() => {
    const item = window.localStorage.getItem(key)
    if (item) {
      try {
        storedValue.value = JSON.parse(item)
      } catch (e) {
        console.error("Error parsing localStorage", e)
      }
    }
  })

  // Automatically save whenever the value changes
  watch(storedValue, (newValue) => {
    window.localStorage.setItem(key, JSON.stringify(newValue))
  }, { deep: true })

  return storedValue
}
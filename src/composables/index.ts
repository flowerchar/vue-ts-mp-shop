import type { XtxGuessInstance } from '@/types/components'
import { ref } from 'vue'

export const useGuessList = () => {
  const guessRef = ref<XtxGuessInstance>()

  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  return {
    guessRef,
    onScrolltolower,
  }
}

import { useEffect, useRef } from 'react'

import {
  useAnimation as useAnimationLib,
  useInView,
} from '@/libs/animations'

export const useAnimation = () => {
  const ref = useRef(null)
  const control = useAnimationLib()

  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  return {
    ref,
    inView,
  }
}

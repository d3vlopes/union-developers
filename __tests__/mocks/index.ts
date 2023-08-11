/* eslint-disable @typescript-eslint/no-empty-function */
import { vitest } from 'vitest'

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    return null
  }

  disconnect() {
    return null
  }

  unobserve() {
    return null
  }
} as any

vitest.mock('next/router', () => ({
  useRouter: vitest.fn(),
}))

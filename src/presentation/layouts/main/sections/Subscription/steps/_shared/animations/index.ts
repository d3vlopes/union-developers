export const makeFormAnimation = () => {
  const animation = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.3, type: 'spring' },
  }

  return animation
}

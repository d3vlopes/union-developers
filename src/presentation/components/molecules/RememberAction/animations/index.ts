export const makeFlashAnimation = () => {
  const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      repeat: Infinity,
      type: 'spring',
    },
  }

  return animation
}

export const makeFloatingAnimation = () => {
  const animation = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 2.2,
        repeat: Infinity,
      },
    },
  }

  return animation
}

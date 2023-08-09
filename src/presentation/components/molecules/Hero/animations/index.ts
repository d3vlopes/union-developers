export const makeFadeInAnimation = (delay: number) => {
  const animation = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.9,
      delay,
      ease: [0, 0.71, 0.2, 1.01],
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

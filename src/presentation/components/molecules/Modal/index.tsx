import { ModalWrapper, ModalWrapperProps } from '@/libs/modals'
import { motion } from '@/libs/animations'

export type ModalProps = ModalWrapperProps

export const Modal = ({
  children,
  isOpen,
  onRequestClose,
}: ModalProps) => {
  const customModalVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <ModalWrapper isOpen={isOpen} onRequestClose={onRequestClose}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={customModalVariants}
        transition={{ duration: 0.3, type: 'tween', delay: 0.1 }}
      >
        {children}
      </motion.div>
    </ModalWrapper>
  )
}

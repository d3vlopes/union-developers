import { ModalWrapper, ModalWrapperProps } from '@/libs/modals'

export type ModalProps = ModalWrapperProps

export const Modal = ({
  children,
  isOpen,
  onRequestClose,
}: ModalProps) => {
  return (
    <ModalWrapper isOpen={isOpen} onRequestClose={onRequestClose}>
      {children}
    </ModalWrapper>
  )
}

import { ReactNode } from 'react'
import ReactModal from 'react-modal'

export interface ModalWrapperProps {
  children: ReactNode
  isOpen: boolean
  onRequestClose: () => void
}

export const ModalWrapper = ({
  isOpen,
  onRequestClose,
  children,
}: ModalWrapperProps) => {
  ReactModal.setAppElement('#modal-root')

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <button type="button" onClick={onRequestClose}>
        <img
          src="https://media.graphassets.com/2b1hfUteQ6ufV3b1dkRf"
          alt="Fechar modal"
          className="modal-close"
        />
      </button>

      {children}
    </ReactModal>
  )
}

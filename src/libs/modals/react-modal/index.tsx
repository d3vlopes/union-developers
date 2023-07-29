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
  ReactModal.defaultStyles = {}

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-content"
      onAfterOpen={() => (document.body.style.overflow = 'hidden')}
      onAfterClose={() => (document.body.style.overflow = 'unset')}
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

export { ReactModal }

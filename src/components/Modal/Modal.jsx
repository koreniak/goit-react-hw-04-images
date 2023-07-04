import PropTypes from 'prop-types';
import { useEffect } from "react";
import { ModalOverlay, ModalField } from "./Modal.styled";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root')

const Modal = ({onClose, children}) => {
  useEffect(() => {
    window.addEventListener('keydown', handleOnClose);

    return () => {
      window.removeEventListener('keydown', handleOnClose);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnClose = e => {
    if (e.code === "Escape" || e.currentTarget === e.target) {
      onClose();
    };
  };

  return createPortal(
    <ModalOverlay onClose={handleOnClose}>
      <ModalField>
        {children}
      </ModalField>
    </ModalOverlay>, modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default Modal;
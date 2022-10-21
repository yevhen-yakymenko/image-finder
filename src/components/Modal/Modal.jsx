import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ModalOverlay, ModalBody } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ src, alt, onClose }) {
  // Hook equivalent adding a event listener in componentDidMount
  // and removing it in componentWillUnmount
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // returned function will be called on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClick = e => {
    if (e.target !== e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <ModalOverlay onClick={handleClick}>
      <ModalBody>
        <img src={src} alt={alt} />
      </ModalBody>
    </ModalOverlay>,
    modalRoot
  );
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ModalOverlay, ModalBody } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = e => {
    if (e.target !== e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;

    return createPortal(
      <ModalOverlay onClick={this.handleClick}>
        <ModalBody>
          <img src={src} alt={alt} />
        </ModalBody>
      </ModalOverlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

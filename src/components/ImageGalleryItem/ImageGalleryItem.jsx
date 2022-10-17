import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal';

import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const {
      image: { webformatURL, largeImageURL, tags },
    } = this.props;
    const { showModal } = this.state;

    return (
      <GalleryItem onClick={this.togleModal}>
        <GalleryImage src={webformatURL} alt={tags} />
        {showModal && (
          <Modal src={largeImageURL} alt={tags} onClose={this.togleModal} />
        )}
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};

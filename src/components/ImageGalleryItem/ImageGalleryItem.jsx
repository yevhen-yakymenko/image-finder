import { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal';

import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  image: { webformatURL, largeImageURL, tags },
}) {
  const [showModal, setshowModal] = useState(false);

  const togleModal = () => setshowModal(!showModal);

  return (
    <GalleryItem onClick={togleModal}>
      <GalleryImage src={webformatURL} alt={tags} />
      {showModal && (
        <Modal src={largeImageURL} alt={tags} onClose={togleModal} />
      )}
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};

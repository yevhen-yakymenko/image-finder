import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem';

import { GalleryList } from './ImageGallery.styled';

export default function ImageGallery({ images }) {
  return (
    <GalleryList>
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
    </GalleryList>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

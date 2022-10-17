import axios from 'axios';
import PropTypes from 'prop-types';

export const getImages = async (request, page = 1) => {
  const key = process.env.REACT_APP_PIXABAY_API_KEY;
  // const url = `https://pixabay.com/api/?q=${request}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=4`;
  const url = `https://pixabay.com/api/?q=${request}&page=${page}&key=${key}&orientation=horizontal&per_page=8`;

  const responce = await axios.get(url);

  return responce.data;
};

getImages.propTypes = {
  request: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

import axios from 'axios';
import PropTypes from 'prop-types';

export const getImages = async (request, page = 1, perPage = 12) => {
  // const key = process.env.REACT_APP_PIXABAY_API_KEY;
  const key = '30596493-cea9f55333817c2aaa883ff0b';
  const url = `https://pixabay.com/api/?q=${request}&page=${page}&key=${key}&orientation=horizontal&per_page=${perPage}`;

  const responce = await axios.get(url);

  return responce.data;
};

getImages.propTypes = {
  request: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number,
};

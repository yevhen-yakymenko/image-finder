import axios from 'axios';
import PropTypes from 'prop-types';

export const getImages = async (request, page = 1, perPage = 8) => {
  // const key = process.env.REACT_APP_PIXABAY_API_KEY;
  const key = '30596493-cea9f55333817c2aaa883ff0b';
  // const url = `https://pixabay.com/api/?q=${request}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=4`;
  const url = `https://pixabay.com/api/?q=${request}&page=${page}&key=${key}&orientation=horizontal&per_page=${perPage}`;

  const responce = await axios.get(url);

  return responce.data;
};

getImages.propTypes = {
  request: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number,
};

// axios.defaults.headers.common['Authorization'] =
//   'Bearer 433@ebfabc654a6992c2aa792f3173a3';
// const fetchArticles = ({ searchQuery = '', currentPage = 1, pageSize = 5 }) => {
//   return axios
//     .get(
//       `https://newsapi.org/v2/everything?q=${searchQuery}&pageStze=${pageSize}$page=${currentPage}`
//     )

//     .then(response => response.data.articles);
// };

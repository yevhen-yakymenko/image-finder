import { useState, useEffect } from 'react';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';

import { getImages } from 'services/apiService';

import { AppContainer } from './App.styled';

export default function App() {
  const [request, setRequest] = useState('');
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  useEffect(() => {
    const searchImages = async () => {
      try {
        setIsLoading(true);
        await getImages(request, page).then(({ totalHits, hits }) => {
          setImages(prevImage => [...prevImage, ...hits]);
          setTotalPages(totalHits);
        });
      } catch (error) {
        // setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (request === '') {
      return;
    }

    searchImages();
  }, [page, request]);

  useEffect(() => {
    const handleScroll = () => {
      console.log('handleScroll');
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    };

    if (page !== 1 && !isLoading) {
      handleScroll();
    }
  }, [isLoading, page]);

  const handleSubmit = request => {
    setRequest(request);
    setImages([]);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <AppContainer>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      <Loader loading={isLoading} />
      {images.length > 0 && !isLoading && page < totalPages && (
        <Button onClick={onLoadMore} />
      )}
    </AppContainer>
  );
}

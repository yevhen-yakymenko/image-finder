import React, { Component } from 'react';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';

import { getImages } from 'services/apiService';

import { AppContainer } from './App.styled';

export default class App extends Component {
  state = {
    request: '',
    images: [],
    totalPages: 0,
    page: 1,
    isLoading: false,
    error: false,
  };

  componentDidUpdate(_, prevState) {
    const prevRequest = prevState.request;
    const prevPage = prevState.page;
    const { request, page } = this.state;

    if (request !== prevRequest || page > prevPage) {
      this.searchImages(request, page);
    }

    if (page !== 1) {
      this.handleScroll();
    }
  }

  handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  handleSubmit = request =>
    this.setState({ request: request, images: [], page: 1 });

  searchImages = async (request, page) => {
    try {
      this.setState({ isLoading: true });
      await getImages(request, page).then(({ totalHits, hits }) =>
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          totalPages: totalHits,
        }))
      );
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
      this.handleScroll();
    }
  };

  onLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { images, page, isLoading, totalPages } = this.state;

    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        <Loader loading={isLoading} />
        {images.length > 0 && !isLoading && page < totalPages && (
          <Button onClick={this.onLoadMore} />
        )}
      </AppContainer>
    );
  }
}

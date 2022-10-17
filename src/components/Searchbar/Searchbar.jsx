import React, { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';

import {
  SearchHeader,
  SearchForm,
  SearchButton,
  ButtonLable,
  SeachField,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    request: '',
  };

  handleChange = e => {
    this.setState({ request: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { request } = this.state;

    onSubmit(request);

    const form = e.currentTarget;

    form.elements.search.value = '';
    this.recet();
  };

  recet = () => this.setState({ request: '' });

  render() {
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <FcSearch size="36px" />
            <ButtonLable>Search</ButtonLable>
          </SearchButton>

          <SeachField
            type="text"
            name="search"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

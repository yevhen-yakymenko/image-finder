import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';

import {
  SearchHeader,
  SearchForm,
  SearchButton,
  ButtonLable,
  SeachField,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [request, setRequest] = useState('');

  const handleChange = e => {
    setRequest(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(request);

    const form = e.target;

    form.elements.search.value = '';
    recet();
  };

  const recet = () => setRequest('');

  return (
    <SearchHeader>
      <SearchForm onSubmit={handleSubmit}>
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
          onChange={handleChange}
        />
      </SearchForm>
    </SearchHeader>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

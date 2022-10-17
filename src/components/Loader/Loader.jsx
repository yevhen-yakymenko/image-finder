import React from 'react';
import PropTypes from 'prop-types';

import FadeLoader from 'react-spinners/FadeLoader';

const override: React.CSSProperties = {
  display: 'block',
  margin: '0 auto',
};

export default function Loader({ loading }) {
  return (
    <FadeLoader
      color="#3f51b5"
      loading={loading}
      cssOverride={override}
      aria-label="Loading Spinner"
    />
  );
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import LazyLoadImage from 'components/LazyLoadImage';
import { StyledContainer, StyledOverlay } from './styles';

const Jumbotron = ({
  data = [],
}) => {
  const [iterator, setIterator] = useState(0);

  const cycleImageOnTime = () => {
    const newIterator = (iterator === data.length - 1) ? 0 : iterator + 1;
    setIterator(newIterator);
  };

  useEffect(() => {
    setTimeout(cycleImageOnTime, Math.random() * 5000 + 5000);
  });

  return (
    <StyledContainer>
      <LazyLoadImage
        {...data[iterator]}
      />
      <StyledOverlay />
    </StyledContainer>
  );
};

Jumbotron.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Jumbotron;

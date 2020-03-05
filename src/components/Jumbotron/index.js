import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import LazyLoadImage from 'components/LazyLoadImage';
import { JumbotronContainer, JumbotronOverlay } from './styles';

// Component that cycles through images every few seconds
// Acts as HERO component for the page
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
    <JumbotronContainer>
      <LazyLoadImage
        {...data[iterator]}
      />
      <JumbotronOverlay />
    </JumbotronContainer>
  );
};

Jumbotron.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Jumbotron;

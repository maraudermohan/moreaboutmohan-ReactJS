import React, { lazy, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { JumbotronContainer, JumbotronOverlay } from './styles';

const LazyLoadImage = lazy(() => import('components/LazyLoadImage'));

// Component that cycles through images every few seconds
// Acts as HERO component for the page
function Jumbotron({
  data = [],
}) {
  const [iterator, setIterator] = useState(0);

  const cycleImageOnTime = () => {
    const newIterator = (iterator === data.length - 1) ? 0 : iterator + 1;
    setIterator(newIterator);
  };

  useEffect(() => {
    setTimeout(cycleImageOnTime, Math.random() * 5000 + 5000);
  });

  return (
    <JumbotronContainer className="jumbotron">
      <LazyLoadImage
        className="jumbotron__img"
        {...data[iterator]}
      />
      <JumbotronOverlay />
    </JumbotronContainer>
  );
}

Jumbotron.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Jumbotron;

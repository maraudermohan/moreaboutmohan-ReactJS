import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { StyledImgSubstitute, StyledImg } from './styles';

// Component that lazy loads image from the given URL
// Renders a white div till the image is loaded
// Adds height, width and alt properties
const LazyLoadImage = ({
  height = '350px',
  imageAlt = 'Portfolio - Mohan Subramanian',
  imageUrl = '',
  width = 'auto',
}) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  const onLoad = () => {
    setHasLoaded(true);
  };

  return (
    <>
      <StyledImg
        src={imageUrl}
        alt={imageAlt}
        onLoad={onLoad}
        hasLoaded={hasLoaded}
        $width={width} // Styled props, hence adding $
        $height={height}
      />
      {
        !hasLoaded
        && <StyledImgSubstitute />
      }
    </>
  );
};

LazyLoadImage.propTypes = {
  height: PropTypes.string,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default LazyLoadImage;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledImgSubstitute, StyledImg } from './styles';

// Component that lazy loads image from the given URL
// Renders a white div till the image is loaded
// Adds height, width and alt properties
function LazyLoadImage({
  imageAlt = 'Portfolio - Mohan Subramanian',
  imageUrl = '',
  width = 'auto',
  height = '350px',
  className = '',
}) {
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
        className={className}
      />
      {
        !hasLoaded
        && <StyledImgSubstitute />
      }
    </>
  );
}

LazyLoadImage.propTypes = {
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};

export default LazyLoadImage;

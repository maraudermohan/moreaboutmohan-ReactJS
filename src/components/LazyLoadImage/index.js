import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { StyledDiv, StyledImg } from './styles';

// Component that lazy loads image from the given URL
// Renders a white div till the image is loaded
// Adds height, width and alt properties
const LazyLoadImage = ({
  height = '350px',
  imageAlt = '',
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
        && <StyledDiv />
      }
    </>
  );
};

LazyLoadImage.propTypes = {
  height: Proptypes.string,
  imageAlt: Proptypes.string,
  imageUrl: Proptypes.string,
  width: Proptypes.string,
};

export default LazyLoadImage;

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ImgWithRef = forwardRef(({
  imageUrl = '',
  imageAlt = '',
  ...rest
}, ref) => (
  <img
    src={imageUrl}
    alt={imageAlt}
    ref={ref}
    {...rest}
  />
));

ImgWithRef.propTypes = {
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default ImgWithRef;

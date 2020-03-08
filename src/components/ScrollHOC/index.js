import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ScrollPositionContext from 'constants/contexts';

// Higher order component that handles the scroll and resize event
// It passes the current top and bottom scroll position to Children
// by setting the scroll context with the current scroll values
const ScrollHOC = ({
  children = {},
}) => {
  const [scrollPos, setScrollPos] = useState([]);

  const scrollHandler = () => {
    setScrollPos([window.pageYOffset, window.pageYOffset + window.innerHeight]);
  };

  useEffect(() => {
    let throttle = false;
    window.addEventListener('scroll', () => {
      if (!throttle) {
        scrollHandler();
        throttle = true;
        setTimeout(() => { throttle = false}, 10);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);
  console.log(scrollPos);
  return (
    <ScrollPositionContext.Provider value={scrollPos}>
      {children}
    </ScrollPositionContext.Provider>
  );
};

ScrollHOC.propTypes = {
  children: PropTypes.element,
};

export default ScrollHOC;

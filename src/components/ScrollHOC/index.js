import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ScrollPositionContext from 'constants/contexts';

// Higher order component that handles the scroll and resize event
// It passes the current top and bottom scroll position to Children
// by setting the scroll context with the current scroll values
const ScrollHOC = ({
  children = {},
}) => {
  const [scrollPos, setScrollPos] = useState({});

  const scrollHandler = () => {
    setScrollPos({
      topScroll: window.pageYOffset,
      bottomScroll: window.pageYOffset + window.innerHeight,
    });
  };

  useEffect(() => {
    // Throttling scroll handling every 10 micro seconds for smooth scoll animation
    let throttle = false;
    window.addEventListener('scroll', () => {
      if (!throttle) {
        scrollHandler();
        throttle = true;
        setTimeout(() => { throttle = false; }, 10);
      }
    });

    // Debouncing resize event to calculate the correct window.innerheight
    let timeoutID = null;
    window.addEventListener('resize', () => {
      if (timeoutID !== 'undefined') {
        clearTimeout(timeoutID);
      }
      timeoutID = setTimeout(scrollHandler, 300);
    });

    return () => {
      window.removeEventListener('scroll', () => {});
      window.removeEventListener('resize', () => {});
    };
  }, []);

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

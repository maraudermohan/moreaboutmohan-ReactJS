import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { BrowserContext, calcBreakpoint, calcOrientation } from 'constants/contexts';

// Higher order component that handles the resize event
// It passes the current browser parameters to Children elements
function ResizeHOC({
  children,
}) {
  const [browserParams, setBrowserParams] = useState({});

  const resizeHandler = () => {
    setBrowserParams({
      breakpoint: calcBreakpoint(window.innerWidth),
      orientation: calcOrientation(window.innerWidth, window.innerHeight),
    });
  };

  useEffect(() => {
    resizeHandler();
    // Debouncing resize event to calculate the browser context
    let timeoutID = null;
    window.addEventListener('resize', () => {
      if (timeoutID !== 'undefined') {
        clearTimeout(timeoutID);
      }
      timeoutID = setTimeout(resizeHandler, 300);
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <BrowserContext.Provider value={browserParams}>
      {children}
    </BrowserContext.Provider>
  );
}

ResizeHOC.propTypes = {
  children: PropTypes.node,
};

export default ResizeHOC;

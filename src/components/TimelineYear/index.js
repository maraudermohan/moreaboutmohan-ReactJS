import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { BrowserContext, ScrollPositionContext } from 'constants/contexts';
import { StyledSubtext } from 'components/Typography';
import YearContainer from './styles';

// Component used in ResumePage to display Year
const TimelineYear = ({
  children,
  offsetAhead,
  alignment = 'right',
}) => {
  const { bottomScroll } = useContext(ScrollPositionContext);
  const { breakpoint, orientation } = useContext(BrowserContext);
  const elemRef = useRef(null);
  const multiplier = (browserHeight) => {
    let mul = 0.15;
    if (breakpoint < 2 && orientation === 'landscape') {
      mul = 0.05;
    }
    return mul * browserHeight;
  };

  useEffect(() => {
    // Fade in animation
    if (bottomScroll > 200) {
      const browserHeight = window.innerHeight;
      const elem = elemRef.current;
      const elemHeight = offsetAhead + elem.offsetTop
        + elem.offsetHeight + multiplier(browserHeight);
      if (bottomScroll >= elemHeight) {
        elem.classList.add('animated');
      }
    }
  }, [bottomScroll]);

  return (
    <YearContainer
      $alignment={alignment}
      ref={elemRef}
      className="resume-page__year"
    >
      {
        alignment === 'right'
        && <span />
      }
      { !!children && <StyledSubtext>{children}</StyledSubtext> }
      {
        alignment === 'left'
        && <span />
      }
    </YearContainer>
  );
};

TimelineYear.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string, PropTypes.array,
  ]),
  offsetAhead: PropTypes.number,
  alignment: PropTypes.oneOf(['left', 'right']),
};

export default TimelineYear;

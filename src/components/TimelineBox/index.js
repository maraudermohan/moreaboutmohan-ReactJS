import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { BrowserContext, ScrollPositionContext } from 'constants/contexts';
import { StyledH4 } from 'components/Typography';
import BoxContainer from './styles';

// Component used in ResumePage to display Company info
const TimelineBox = ({
  title,
  subTitle,
  offsetAhead,
  color,
  height,
  alignment = 'right',
}) => {
  const { bottomScroll } = useContext(ScrollPositionContext);
  const { breakpoint, orientation } = useContext(BrowserContext);
  const elemRef = useRef(null);
  const multiplier = (browserHeight) => {
    let mul = 0.3;
    if (breakpoint < 2 && orientation === 'landscape') {
      mul = 0.15;
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
    <BoxContainer
      $color={color}
      $height={height}
      $alignment={alignment}
      ref={elemRef}
    >
      {
        alignment === 'right'
        && <span />
      }
      <div>
        <StyledH4>{title}</StyledH4>
        <p>{subTitle}</p>
      </div>
      {
        alignment === 'left'
        && <span />
      }
    </BoxContainer>
  );
};

TimelineBox.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  offsetAhead: PropTypes.number,
  color: PropTypes.string,
  height: PropTypes.number,
  alignment: PropTypes.oneOf(['left', 'right']),
};

export default TimelineBox;

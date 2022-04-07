import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import { ScrollPositionContext } from 'constants/contexts';
import HiddenSection from './styles';

// Component that creates a slide-up animation
function TransparentScroller({
  children,
  className,
  background,
  variant = 'fold',
}) {
  const transparentElem = useRef(null);
  const [hiddenSectionCss, setHiddenSectionCss] = useState();
  const browserWidth = window.innerWidth;
  const browserHeight = window.innerHeight;
  const {
    bottomScroll = 0,
  } = useContext(ScrollPositionContext);
  const transparentElemCss = {
    width: browserWidth,
    height: browserHeight,
    background: 'transparent',
  };

  useEffect(() => {
    const styles = {
      background,
      width: `${browserWidth}px`,
      height: `${browserHeight}px`,
      padding: '0',
      zIndex: 1,
    };
    const elem = transparentElem.current;
    if (variant === 'fold' && bottomScroll >= elem.offsetTop + browserHeight) {
      styles.display = 'grid';
      styles.position = 'relative';
    } else if (variant === 'hide' && bottomScroll >= elem.offsetTop + (browserHeight * 2)) {
      styles.display = 'none';
    } else if (bottomScroll >= elem.offsetTop) {
      styles.display = 'grid';
    }

    setHiddenSectionCss(styles);
  }, [bottomScroll]);

  return (
    <div
      className={className}
      ref={transparentElem}
      style={transparentElemCss}
    >
      <HiddenSection
        style={hiddenSectionCss}
      >
        {children}
      </HiddenSection>
    </div>
  );
}

TransparentScroller.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  background: PropTypes.string,
  variant: PropTypes.oneOf(['hide', 'fold']),
};

export default TransparentScroller;

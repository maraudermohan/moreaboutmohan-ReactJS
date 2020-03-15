import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import { ScrollPositionContext } from 'constants/contexts';
import HiddenSection from './styles';

const TransparentScroller = ({
  children,
  background,
  variant = 'fold',
}) => {
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
      className="main__transparent-scroller"
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
};

TransparentScroller.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  variant: PropTypes.oneOf(['hide', 'fold']),
};

export default TransparentScroller;

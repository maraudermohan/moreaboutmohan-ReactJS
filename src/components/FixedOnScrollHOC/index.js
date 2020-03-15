import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ScrollPositionContext } from 'constants/contexts';

// Higher order component that detects scroll event
// Scroll positions are compared with current element's offsetTop
// Current element is set to position FIXED
const FixedOnScrollHOC = ({
  fixedElemCss = {},
  render,
}) => {
  const [newStyles, setNewStyles] = useState({});
  const { bottomScroll } = useContext(ScrollPositionContext);
  const {
    fixedElemStart,
    fixedElemEnd,
  } = fixedElemCss;

  useEffect(() => {
    let styles = {};

    if (bottomScroll >= fixedElemEnd) {
      styles = {
        position: 'relative',
        top: fixedElemEnd - fixedElemStart,
      };
    } else if (bottomScroll >= fixedElemStart) {
      styles = {
        position: 'fixed',
        width: '100%',
        height: 'auto',
        bottom: 0,
        right: 0,
      };
    }

    setNewStyles(styles);
  }, [bottomScroll]);

  return render(newStyles);
};

FixedOnScrollHOC.propTypes = {
  fixedElemCss: PropTypes.objectOf(PropTypes.number),
  render: PropTypes.func,
};

export default FixedOnScrollHOC;

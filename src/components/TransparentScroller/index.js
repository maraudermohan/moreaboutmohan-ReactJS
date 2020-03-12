import React, {
  useContext,
  useEffect,
  useRef,
  useState } from 'react';

import ScrollPositionContext from 'constants/contexts';

const TransparentScroller = () => {
  const transparentElem = useRef(null);
  const {
    // bottomScroll = 0,
    browserWidth = 0,
    browserHeight = 0,
  } = useContext(ScrollPositionContext);
  const [transparentElemCss] = useState({
    width: browserWidth,
    height: browserHeight,
    background: transparentElem,
  });

  useEffect(() => {

  }, []);

  return (
    <div
      ref={transparentElem}
      style={transparentElemCss}
    >
      <section
        style={{
          position: 'fixed',
          width: browserWidth,
          height: browserHeight,
          top: 0,
          left: 0,
          background: 'red',
          zIndex: '-5',
        }}
      >
        hello
      </section>
    </div>
  );
};

export default TransparentScroller;

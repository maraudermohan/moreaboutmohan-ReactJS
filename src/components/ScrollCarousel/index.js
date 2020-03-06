import React, { useRef } from 'react';

import { summary } from 'pages/intuit';
import ContentList from 'components/ContentList';

const ScrollCarousel = () => {
  const ref2 = useRef(null);

  const scrollHandler = (e) => {
    const startScroll = (window.innerHeight - ref2.current.offsetHeight)/2;
    console.log(e, window.innerHeight, ref2.current.offsetHeight, startScroll, window.pageYOffset);
    if (window.pageYOffset >= startScroll) {
      console.log('true');
    }
  };

  return (
    <div style={{ width: '100%', height: '1000px', }} onScroll={() => { console.log('hello', scrollHandler)}}>
      <ContentList
        style={{ width: '45%', color: 'white', fontSize: '18px', lineHeight: '1.5em'}}
        ref={ref2}
        data={summary}
      />
    </div>
  );
};

export default ScrollCarousel;

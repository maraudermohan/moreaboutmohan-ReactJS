import React, {
  useRef,
  useState,
  useEffect,
  useContext,
} from 'react';

import { carouselProps, duration, summary1 } from 'pages/intuit';
import ScrollPositionContext from 'constants/contexts';
import ContentList from 'components/ContentList';
import FixedOnScrollHOC from 'components/FixedOnScrollHOC';
import ImageCarousel from 'components/ImageCarousel';

// Combining FixedOnScroll and Image Carousel
// The text stays fixed to the screen bottom, while the images slide
// Slide direction can be customized
const TextImageCarouselOnScroll = () => {
  const fixedElem = useRef(null);
  const slideElements = useRef(null);
  const [cssObject, setCssObject] = useState({});
  const { browserWidth, browserHeight } = useContext(ScrollPositionContext);

  useEffect(() => {
    const fixedCss = {};
    if (!!fixedElem && !!slideElements) {
      fixedCss.top = fixedElem.current.offsetTop
                    + fixedElem.current.offsetHeight;
      fixedCss.bottom = slideElements.current.offsetTop
                        + slideElements.current.offsetHeight
                        + fixedElem.current.offsetHeight
                        + 100;
    }

    setCssObject({
      fixedElemStart: fixedCss.top,
      fixedElemEnd: fixedCss.bottom,
      fixedElemHeight: fixedElem.current.offsetHeight,
    });
  }, [browserWidth, browserHeight]);

  return (
    <FixedOnScrollHOC
      fixedElemCss={cssObject}
      render={
        (stylesProps) => (
          <>
            <div
              ref={fixedElem}
              style={stylesProps}
            >
              <ContentList
                data={summary1}
                alignment="full"
                browserHeight={browserHeight}
                heading={duration.heading}
                subHeading={duration.subHeading}
              />
            </div>
            {
              Object.keys(stylesProps).length && stylesProps.position === 'fixed'
                ? (<div style={{ width: '100%', height: cssObject.fixedElemHeight }} />)
                : null
            }
            <div ref={slideElements}>
              <ImageCarousel data={carouselProps} />
            </div>
            {
              Object.keys(stylesProps).length
                ? (<div style={{ width: '100%', height: cssObject.fixedElemHeight }} />)
                : null
            }
          </>
        )
      }
    />
  );
};

export default TextImageCarouselOnScroll;

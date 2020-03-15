import React, {
  useRef,
  useState,
  useEffect,
} from 'react';

import { carouselProps, duration, summary1 } from 'pages/intuit';
import ContentList from 'components/ContentList';
import FixedOnScrollHOC from 'components/FixedOnScrollHOC';
import ImageCarousel from 'components/ImageCarousel';

// Combining FixedOnScroll and Image Carousel
// The text stays fixed to the screen bottom, while the images slide
// Slide direction can be customized
const TextImageCarouselOnScroll = () => {
  const fixedElem = useRef({
    current: {},
  });
  const slideElements = useRef({
    current: {},
  });
  const [cssObject, setCssObject] = useState({});
  const browserHeight = window.innerHeight;

  useEffect(() => {
    const fixedCss = {};
    if (!!fixedElem && !!slideElements) {
      fixedCss.top = fixedElem.current.offsetTop
                    + fixedElem.current.offsetHeight;
      fixedCss.bottom = slideElements.current.offsetTop
                        + slideElements.current.offsetHeight
                        + fixedElem.current.offsetHeight
                        + 50;
    }

    setCssObject({
      fixedElemStart: fixedCss.top,
      fixedElemEnd: fixedCss.bottom,
      fixedElemHeight: fixedElem.current.offsetHeight,
    });
  }, [fixedElem.current.offsetHeight, slideElements.current.offsetHeight]);

  return (
    <FixedOnScrollHOC
      fixedElemCss={cssObject}
      slideElements={slideElements}
      render={
        (stylesProps) => (
          <>
            <div
              ref={fixedElem}
              style={stylesProps}
              className="main__content-summary"
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
                ? (<div className="main__placeholder" style={{ width: '100%', height: cssObject.fixedElemHeight }} />)
                : null
            }
            <div ref={slideElements} className="main__image-carousel">
              <ImageCarousel data={carouselProps} />
            </div>
            {
              Object.keys(stylesProps).length
                ? (<div className="main__placeholder" style={{ width: '100%', height: cssObject.fixedElemHeight }} />)
                : null
            }
          </>
        )
      }
    />
  );
};

export default TextImageCarouselOnScroll;

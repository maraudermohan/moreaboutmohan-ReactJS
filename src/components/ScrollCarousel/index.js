import React, {
  useRef,
  useState,
  useEffect,
} from 'react';

import { carouselProps, summary1 } from 'pages/intuit';
import ContentList from 'components/ContentList';
import FixedOnScrollHOC from 'components/ScrollAnimations/FixedOnScrollHOC';
import LazyLoadImage from 'components/LazyLoadImage';
import ScrollCarouselContainer from './styles';

const ScrollCarousel = () => {
  const fixedElem = useRef(null);
  const slideElements = useRef(null);
  const [cssObject, setCssObject] = useState({});

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
  }, []);

  return (
    <ScrollCarouselContainer>
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
                  alignment="left"
                />
              </div>
              {
                Object.keys(stylesProps).length && stylesProps.position === 'fixed'
                  ? (<div style={{ width: '100%', height: cssObject.fixedElemHeight }} />)
                  : null
              }
              <div ref={slideElements}>
                {
                  carouselProps.map(({
                    imageUrl,
                    imageAlt,
                  }) => (
                    <LazyLoadImage
                      key={imageUrl}
                      imageUrl={imageUrl}
                      imageAlt={imageAlt}
                    />
                  ))
                }
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
    </ScrollCarouselContainer>
  );
};

export default ScrollCarousel;

import React, {
  useRef,
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import ContentList from 'components/ContentList';
import FixedOnScrollHOC from 'components/FixedOnScrollHOC';
import ImageCarousel from 'components/ImageCarousel';

// Combining FixedOnScroll and Image Carousel
// The text stays fixed to the screen bottom, while the images slide
// Slide direction can be customized
function TextImageCarouselOnScroll({
  carouselData = [],
  contentListDuration = {
    heading: '',
    subHeading: '',
  },
  contentListData = [],
}) {
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
      render={
        (stylesProps) => (
          <>
            <div
              ref={fixedElem}
              style={stylesProps}
              className="main__content-summary"
            >
              <ContentList
                data={contentListData}
                alignment="full"
                browserHeight={browserHeight}
                heading={contentListDuration.heading}
                subHeading={contentListDuration.subHeading}
              />
            </div>
            {
              Object.keys(stylesProps).length && stylesProps.position === 'fixed'
                ? (<div className="main__placeholder" style={{ width: '100%', height: cssObject.fixedElemHeight }} />)
                : null
            }
            <div ref={slideElements} className="main__image-carousel">
              <ImageCarousel data={carouselData} />
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
}

TextImageCarouselOnScroll.propTypes = {
  carouselData: PropTypes.arrayOf(PropTypes.object),
  contentListDuration: PropTypes.objectOf(PropTypes.object),
  contentListData: PropTypes.arrayOf(PropTypes.string),
};

export default TextImageCarouselOnScroll;

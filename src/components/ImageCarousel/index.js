import React, {
  useEffect,
  useRef,
  useContext,
  useState } from 'react';
import PropTypes from 'prop-types';

import ScrollPositionContext from 'constants/contexts';
import LazyLoadImage from 'components/LazyLoadImage';
import { ImageCarouselContainer, calculateStaticHeight, calculateImageWidth } from './styles';

// Component that renders a list of images in a single row
// Normal scroll event is transformed to offset the image carousel
// Hence scrolling down the page will create a sliding effect on the images
const ImageCarousel = ({
  data = [],
  slideDirection = 'left',
}) => {
  const imagesList = useRef(null);
  const [staticCss, setStaticCss] = useState({});
  const [slideCss, setSlideCss] = useState({});
  const {
    browserWidth = window.innerWidth,
    browserHeight = window.innerHeight,
    topScroll = 0,
  } = useContext(ScrollPositionContext);

  useEffect(() => {
    const imageListWidth = calculateStaticHeight(data.length, browserWidth, browserHeight);
    const containerHeight = imageListWidth
                            - (browserHeight / 2)
                            + calculateImageWidth(browserWidth, browserHeight);

    setStaticCss({
      imageListWidth,
      containerHeight,
      offsetTop: imagesList.current.offsetTop,
      offsetHeight: imagesList.current.offsetHeight,
    });
  }, [browserWidth]);

  useEffect(() => {
    let styles = slideDirection === 'left' ? {}
    : {
      position: 'fixed',
      top: 0,
      right: 0,
    };
    if (topScroll >= staticCss.offsetTop + staticCss.containerHeight - browserHeight / 2) {
      styles = {
        position: 'fixed',
        top: 0,
        [slideDirection]: `${browserWidth - staticCss.imageListWidth}px`,
      };
    } else if (topScroll >= staticCss.offsetTop) {
      let leftCss = staticCss.offsetTop - topScroll;
      leftCss = leftCss < (browserWidth - staticCss.imageListWidth)
        ? browserWidth - staticCss.imageListWidth : leftCss;
      styles = {
        position: 'fixed',
        top: 0,
        [slideDirection]: `${leftCss}px`,
        opacity: 1,
      };
    }

    setSlideCss(styles);
  }, [topScroll]);

  return (
    <ImageCarouselContainer
      $browserWidth={browserWidth}
      $browserHeight={browserHeight}
      $imageListWidth={staticCss.imageListWidth}
      $slideDirection={slideDirection}
      style={{ height: staticCss.containerHeight }}
    >
      <div
        ref={imagesList}
        style={slideCss}
      >
        {
          data.map(({
            imageUrl,
            imageAlt,
          }) => (
            <LazyLoadImage
              key={imageUrl}
              imageUrl={imageUrl}
              imageAlt={imageAlt}
              width={`${0.9 * browserWidth}px`}
              height="auto"
            />
          ))
        }
      </div>
    </ImageCarouselContainer>
  );
};

ImageCarousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  slideDirection: PropTypes.string,
};

export default ImageCarousel;

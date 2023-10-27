import React, {
  lazy,
  useEffect,
  useRef,
  useContext,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import { ScrollPositionContext } from 'constants/contexts';
import { ImageCarouselContainer, calculateStaticHeight, calculateImageWidth } from './styles';

const LazyLoadImage = lazy(() => import('components/LazyLoadImage'));

// Component that renders a list of images in a single row
// Normal scroll event is transformed to offset the image carousel
// Hence scrolling down the page will create a sliding effect on the images
function ImageCarousel({
  data = [],
  slideDirection = 'left',
}) {
  const imagesList = useRef(null);
  const [staticCss, setStaticCss] = useState({});
  const [slideCss, setSlideCss] = useState({
    startedScrolling: 0,
  });
  const browserWidth = window.innerWidth;
  const browserHeight = window.innerHeight;
  const isIphoneIpad = (window.navigator.userAgent.indexOf('iPad') >= 0
    || window.navigator.userAgent.indexOf('iPhone') >= 0
    || (window.navigator.userAgent.indexOf('Safari') >= 0
    && window.navigator.userAgent.indexOf('Version') >= 0));
  const {
    topScroll = 0,
  } = useContext(ScrollPositionContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (browserWidth && browserHeight) {
      const imageListWidth = calculateStaticHeight(data.length, browserWidth, browserHeight);
      const containerHeight = imageListWidth
                              - (browserHeight / 2)
                              + calculateImageWidth(browserWidth, browserHeight);

      setStaticCss({
        imageListWidth,
        containerHeight,
        offsetTop: imagesList.current.offsetTop,
        offsetHeight: imagesList.current.offsetHeight,
        calculatedMaxWidth: calculateImageWidth(browserWidth, browserHeight),
      });
    }
  }, [browserWidth, slideCss.startedScrolling]);

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
    styles.startedScrolling = 1;

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
            ratio,
          }) => (
            <LazyLoadImage
              key={imageUrl}
              imageUrl={imageUrl}
              imageAlt={imageAlt}
              width={`${Math.floor(0.85 * browserWidth)}px`}
              height={isIphoneIpad
                ? `${Math.floor(staticCss.calculatedMaxWidth / ratio)}px`
                : 'auto'}
              className="image-carousel__img"
            />
          ))
        }
      </div>
    </ImageCarouselContainer>
  );
}

ImageCarousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  slideDirection: PropTypes.oneOf(['left', 'right']),
};

export default ImageCarousel;

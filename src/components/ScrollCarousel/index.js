import React, { createRef, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import ScrollPositionContext from 'constants/contexts';
import { carouselProps } from 'pages/intuit';
import ImgWithRef from 'components/LazyLoadImage/img-with-ref';
import ScrollCarouselContainer from './styles';

const ScrollCarousel = ({
  renderProps = '',
}) => {
  const [refArray, setRefArray] = useState([]);
  const [cssArray, setCssArray] = useState([]);
  console.log('carousel', useContext(ScrollPositionContext));

  useEffect(() => {
    let newArray = [];
    for(let index in carouselProps) {
      newArray[index] = createRef();
    }
    setRefArray(newArray);
  }, []);

  useEffect(() => {
    if (!!refArray.length){
      const [topScroll, bottomScroll] = renderProps;
      let newArray = [];

      for(let index in carouselProps) {
        const currentElem = refArray[index].current;
        let delta = 0;
        if (topScroll + 100 <= currentElem.offsetTop) {
          delta = currentElem.offsetTop - topScroll - 100;
        } else if (currentElem.offsetTop + currentElem.clientHeight + 100 <= bottomScroll) {
          delta = currentElem.offsetTop + currentElem.clientHeight + 100 - bottomScroll;
        }
        newArray[index] = delta;
      }
      setCssArray(newArray);
    }
  },[renderProps]);

  return (
    <ScrollCarouselContainer>
      {
        carouselProps.map(({
          imageUrl,
          imageAlt,
        }, index) => {
          return (
            <ImgWithRef
              key={imageUrl}
              ref={refArray[index]}
              style={{left: `${cssArray[index]}px`}}
              imageUrl={imageUrl}
              imageAlt={imageAlt}
            />
          );
        })
      }
    </ScrollCarouselContainer>
  );
};

ScrollCarousel.propTypes = {
  renderProps: PropTypes.arrayOf(PropTypes.number),
};

export default ScrollCarousel;

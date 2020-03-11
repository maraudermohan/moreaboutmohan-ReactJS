import styled from 'styled-components';
import mq from 'constants/media-queries';

export const calculateImageWidth = (
  browserWidth = null,
  browserHeight = null,
) => {
  let width = 0;

  if (browserWidth >= 1200 || (browserWidth >= 768 && browserHeight >= 768)) {
    if (browserWidth < browserHeight) {
      width = 640;
    } else {
      width = 540;
    }
  } else if (browserWidth >= 360 && browserHeight >= 360) {
    if (browserWidth < browserHeight) {
      width = 320;
    } else {
      width = 270;
    }
  } else {
    width = browserWidth * 0.9;
  }
  return width;
};

export const ImageCarouselContainer = styled.div`
  overflow: scroll;

  > div {
    display: flex;
    width: ${(props) => props.$imageListWidth}px;
    padding: 15% 0 0 0;
    flex-direction: row;
    flex-wrap: nowrap;
    opacity: 1;
    transition: opacity 0.3s;
  }

  img {
    margin: 0 ${(props) => props.$browserWidth / 3}px;

    &:first-child {
      margin-left: 0;
      padding: 0 0 0 ${(props) => props.$browserWidth}px;
    }
  
    &:last-child {
      margin-right: 0;
      padding: 0 ${(props) => props.$browserWidth / 10}px 0 0;
    }
  }

  @media ${mq.uptoSmallPhone} and (orientation: portrait) {
    > div {
      padding: 10% 0 0 0;
    }
  }

  @media ${mq.phone} and (orientation: landscape) {
    > div {
      padding: 12px 0 0 0;
    }
  }

  @media ${mq.phone} and (orientation: portrait) {
    > div {
      padding: 20% 0 0 0;
    }
  }

  @media (orientation: landscape) {
    img {
      max-width: 270px;
    }
  }

  @media (orientation: portrait) {
    img {
      max-width: 320px;
    }
  }

  @media ${mq.tablet} and (orientation: portrait) {
    img {
      max-width: 640px;
    }
  }

  @media ${mq.desktop} and (orientation: landscape) {
    img {
      max-width: 540px;
      &:first-child {
        padding: 0 0 0 ${(props) => props.$browserWidth}px;
      }
    
      &:last-child {
        padding: 0 ${(props) => (props.$browserWidth - calculateImageWidth(props.$browserWidth, props.$browserHeight)) / 2}px 0 0;
      }
    }
  }

  @media ${mq.tablet} {
    > div {
      padding-top: ${(props) => (props.$browserHeight >= 600) && '60px'};
      padding-top: ${(props) => (props.$browserHeight >= 720) && '80px'};
      padding-top: ${(props) => (props.$browserHeight >= 800) && '100px'};
      padding-top: ${(props) => (props.$browserHeight >= 1024) && '150px'};
      padding-top: ${(props) => (props.$browserHeight >= 1200) && '200px'};
    }
  }
`;

export const calculateStaticHeight = (
  dataLength = 0,
  browserWidth = null,
  browserHeight = null,
) => {
  if (browserWidth === 'undefined' || browserHeight === 'undefined') {
    return 'auto';
  }
  const width = calculateImageWidth(browserWidth, browserHeight);
  let sumWidth = browserWidth;
  sumWidth += dataLength * width;
  sumWidth += (browserWidth - width) / 2;
  sumWidth += browserWidth * 0.67 * (dataLength - 1);
  return sumWidth;
};

import styled, { keyframes } from 'styled-components';

import colors from 'constants/colors';

export const VideoContainer = styled.iframe`
  border: none;
  display: ${(props) => (props.$hasLoaded ? 'block' : 'none')};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const FallbackContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.$width === 'auto' ? props.$width : `${props.$width}px`)};
  height: ${(props) => (props.$height === 'auto' ? props.$height : `${props.$height}px`)};
  margin: 0 auto;
  background: ${colors.BLACK};

  svg {
    width: 64px;
    height: 64px;
    color: ${colors.LATTE};
    fill: ${colors.LATTE};
    animation: ${rotate} 2s linear infinite;
  }
`;

export const ThumbnailContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;

  &:hover {
    cursor: pointer;
     > svg.youtube-play {      
      top: calc(50% - 30px);
      left: calc(50% - 30px);
      width: 60px;
      height: 60px;
      opacity: 1;
    }
  }

  > img {
    border-radius: 7px;
  }
  
  > svg.youtube-play {
    opacity: 0.9;
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    width: 50px;
    height: 50px;
    margin: 0;
    z-index: 10;
    transition: all 0.3s;
  }
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%,
              rgba(255,255,255,0) 32%,
              rgba(255,255,255,0) 68%,
              rgba(0,0,0,0.8) 100%);
`;

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

import styled from 'styled-components';
import mq from 'constants/media-queries';
import { StyledImg, StyledDiv } from 'components/LazyLoadImage/styles';

export const StyledContainer = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  overflow: hidden;

  ${StyledImg},
  ${StyledDiv} {
    width: 100%;
    justify-self: end;
  }
  ${StyledImg} {
    height: auto;
  }
  ${StyledDiv} {
    height: 100%;
  }

  @media (${mq.mobile}) {
    height: 240px;
  }
  @media (${mq.tablet}) {
    height: 300px;
  }
  @media (${mq.desktop}) {
    height: 350px;
  }
  @media (${mq.largeDevice}) {
    height: 400px;
    ${StyledImg} {
      position: relative;
      top: -10%;
    }
  }
`;

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(0deg,rgba(5,22,34,1) 0%,rgba(5,22,34,.8) 25%,rgba(0,0,0,0) 100%),
              linear-gradient(45deg,rgba(5,22,34,.6) 0%,rgba(5,22,34,.4) 30%,rgba(0,0,0,0) 100%);
`;

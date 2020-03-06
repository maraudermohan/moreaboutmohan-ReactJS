import styled from 'styled-components';
import mq from 'constants/media-queries';
import { colors, theme } from 'constants/colors';
import { StyledImg, StyledImgSubstitute } from 'components/LazyLoadImage/styles';

export const JumbotronContainer = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;

  ${StyledImg},
  ${StyledImgSubstitute} {
    width: 100%;
    justify-self: end;
  }
  ${StyledImg} {
    height: auto;
  }
  ${StyledImgSubstitute} {
    height: 100%;
  }

  @media ${mq.tablet} {
    height: 300px;
  }
  @media ${mq.desktop} {
    height: 350px;
  }
  @media ${mq.largeDevice} {
    height: 400px;
    ${StyledImg} {
      position: absolute;
      top: -10%;
      right: 0;
      z-index: -1;
    }
  }
`;

export const JumbotronOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(0deg,${theme.BASE}FF 10%,${theme.BASE}CC 35%,${colors.WHITE}00 100%),
              linear-gradient(45deg,${theme.BASE}99 10%,${theme.BASE}66 40%,${colors.WHITE}00 100%);

  @media ${mq.phone} {
    background: linear-gradient(0deg,${theme.BASE}FF 0%,${theme.BASE}CC 25%,${colors.WHITE}00 100%),
                linear-gradient(45deg,${theme.BASE}99 0%,${theme.BASE}66 30%,${colors.WHITE}00 100%);
  }
`;

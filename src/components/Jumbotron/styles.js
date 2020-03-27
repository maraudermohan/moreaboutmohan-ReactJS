import styled from 'styled-components';
import mq from 'constants/media-queries';
import colors from 'constants/colors';
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
  background: linear-gradient(0deg,${colors.ABYSS}FF 10%,${colors.ABYSS}CC 35%,${colors.WHITE}00 100%),
              linear-gradient(45deg,${colors.ABYSS}99 10%,${colors.ABYSS}66 40%,${colors.WHITE}00 100%);

  @media ${mq.phone} {
    background: linear-gradient(0deg,${colors.ABYSS}FF 0%,${colors.ABYSS}CC 25%,${colors.WHITE}00 100%),
                linear-gradient(45deg,${colors.ABYSS}99 0%,${colors.ABYSS}66 30%,${colors.WHITE}00 100%);
  }
`;

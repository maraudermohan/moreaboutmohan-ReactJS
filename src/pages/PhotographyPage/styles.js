import styled from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';
import { StyledH1 } from 'components/Typography';

export const PhotographyPageContainer = styled.main`
  position: relative;
  background: ${colors.PANTONE};

  header {
    background: none;
  }

  ${StyledH1} {
    padding: 150px 0 100px 0;
    text-align: center;
    color: ${colors.LATTE};
    background: ${colors.BLUSH};

    @media ${mq.uptoTablet} and (orientation: landscape),
    ${mq.tablet} {
      padding: 150px 0 80px 0;
    }
  }
`;

export const Gradient = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background: linear-gradient(180deg, ${colors.BLUSH} 5%, ${colors.PANTONE} 5.01%);
`;

export const ImageContainer = styled.span`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
  top: 0;
  text-decoration: none;
  overflow: hidden;

  &:first-of-type {
    left: 0;
  }

  &:last-of-type {
    position: absolute;
    top: 0;
    left: 50%;
  }

  img {
    width: calc(100% - 2px);
    height: auto;
    margin: 1px 0;
  }

  @media ${mq.tablet} {
    width: 45%;

    &:first-of-type {
      left: 5%;
    }
  }

  @media ${mq.desktop} {
    width: 450px;

    &:first-of-type {
      left: calc(50% - 450px);
    }
  }

  @media ${mq.largeDevice} {
    width: 512px;

    &:first-of-type {
      left: calc(50% - 512px);
    }
  }
`;

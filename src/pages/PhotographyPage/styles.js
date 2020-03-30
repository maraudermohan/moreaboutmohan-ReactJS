import styled from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';
import { StyledH1 } from 'components/Typography';

export const PhotographyPageContainer = styled.main`
  position: relative;
  background: ${colors.PANTONE};

  header {
    background: linear-gradient(180deg,${colors.PANTONE}99 10%, ${colors.WHITE}00 90%),
                linear-gradient(170deg,${colors.PANTONE}66 10%, ${colors.WHITE}00 30%),
                linear-gradient(190deg,${colors.PANTONE}33 10%, ${colors.WHITE}00 30%); 
    &:not(.scrolling) {
      background: none;
    }
  }

  .header__title {
    font-family: "Acme", san-serif;
  }

  nav .nav__link-two > .nav__link:last-of-type,
  nav .nav__link-two > .nav__link:last-of-type:hover {
    background: transparent;

    svg {
      color: ${colors.BLUSH}BF;
      fill: ${colors.BLUSH}BF;
    }

    h4 {
      color: ${colors.BLUSH};
    }
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

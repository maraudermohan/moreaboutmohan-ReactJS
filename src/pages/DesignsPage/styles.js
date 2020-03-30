import styled from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';
import { StyledH1 } from 'components/Typography';

export const DesignsPageContainer = styled.main`
  position: relative;
  background: ${colors.PANTONE};

  header:not(.scrolling) {
    background: none;
  }

  .header__title {
    font-family: "Lobster", san-serif;
  }

  nav .nav__link-two > .nav__link:first-of-type {
    background: transparent;

    svg {
      color: ${colors.APPLE}BF;
      fill: ${colors.APPLE}BF;
    }

    h4 {
      color: ${colors.APPLE};
    }
  }

  @media (hover: hover) and (pointer: fine) {
    nav .nav__link-two > .nav__link:first-of-type:hover {
      background: transparent;
  
      svg {
        color: ${colors.APPLE}BF;
        fill: ${colors.APPLE}BF;
      }
  
      h4 {
        color: ${colors.APPLE};
      }
    }
  }

  ${StyledH1} {
    padding: 150px 0 100px 0;
    text-align: center;
    color: ${colors.LATTE};
    background: ${colors.APPLE};

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
  background: linear-gradient(180deg, ${colors.APPLE} 100px, ${colors.PANTONE} 100.1px);

  @media (min-width: 880px) {
    background: linear-gradient(180deg, ${colors.APPLE} 170px, ${colors.PANTONE} 170.1px);
  }
`;

export const DesignRow = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 12px 0;
  transition: all 0.5s;

  @media ${mq.tablet} {
    max-width: 768px;
  }

  @media (min-width: 880px) {
    max-width: 880px;
  }
`;

export const DesignButton = styled.a`
  display: flex;
  width: 170px;
  height: 48px;
  margin: 0 24px 0 0;
  grid-column: 2;
  grid-row: 1 / 3;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: ${colors.AZURE};
  text-align: center;
  font-size: 20px;
  font-family: "Staatliches", san-serif;
  color: ${colors.LATTE};
  border-radius: 4px;
  transition: all 0.3s;

  svg {
    width: 16px;
    height: 16px;
    margin: 0 8px 0 0;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${colors.APPLE};
      box-shadow: 4px 4px 7px ${colors.ABYSS}4D,
                  -1px 8px 7px ${colors.PANTONE}4D;
    }
  }
`;

export const DesignContentHidden = styled.div`
  width: 100%;
  height: auto;
  max-height: 0;
  background: ${colors.LATTE};
  transition: all 0.75s;
  box-shadow: inset 4px 4px 7px ${colors.ABYSS},
              inset -1px -1px 7px ${colors.ABYSS};

  &.selected {
    max-height: 2000px;

    ${DesignRow} {
      opacity: 1;
      z-index: 1;
    }

    .design-page__summary {
      display: grid;
    }
  }

  ${DesignRow} {
    display: grid;
    position: relative;
    grid-template-columns: auto 194px;
    grid-template-rows: 20px 28px auto auto;
    padding: 40px 0;
    opacity: 0;
    z-index: -1;
  }

  .design-page__time,
  .design-page__year {
    margin: 0 0 4px 24px;
  }

  .design-page__video {
    grid-column: 1 / 3;
    grid-row: 3;
    display: block;
    margin: 40px auto 0 auto;
    border-radius: 5px;
  }

  .design-page__summary {
    display: none;
    grid-column: 1 / 3;
    grid-row: 4;
    margin: 32px auto 0 auto;
    padding-bottom: 24px;
  }
`;

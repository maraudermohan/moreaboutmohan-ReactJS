import styled from 'styled-components';

import main1 from 'images/main1.jpg';
import main2 from 'images/main2.jpg';
import main3 from 'images/main3.jpg';
import main4 from 'images/main4.jpg';
import colors from 'constants/colors';
import mq from 'constants/media-queries';
import { StyledH4 } from 'components/Typography';

export const MainPageContainer = styled.main`
  position: relative;
  display: grid;
  justify-content:center;
  align-items: center;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  header {
    z-index: 10;
  }

  .main-page__title {
    position: fixed;
    top: 24px;
    right: 24px;
    z-index: 6;
    color: ${colors.LATTE};
    text-shadow: 4px 4px 7px ${colors.ABYSS},
                -1px -1px 7px ${colors.PANTONE};

    @media ${mq.uptoTablet} {
      top: 16px;
      right: 24px;
      font-size: 22px;
      line-height: 28px;
    }
  }

  @media ${mq.desktop} {
    nav {
      height: calc(100% - 72px);
      z-index: 3;
      .nav__close {
        display: none;
      }
  
      .nav__chevron-right {
        visibility: hidden;
      }
  
      .nav__link-two {
        background: transparent;
      }
  
      .nav__link:not(:hover),
      .nav__link-title,
      svg,
      h2,
      .nav__link-two h4 {
        background: transparent;
        color: transparent;
        fill: transparent;
      }
  
      .nav__link:hover {
        background: ${colors.LATTE}4D;
  
        svg, h2, h4 {
          text-shadow: 4px 4px 7px ${colors.BLACK}80,
                      -1px -1px 7px ${colors.BLACK}80;
        }
      }
  
      .nav__link > section {
        max-width: none;
        margin: 0;
        border-bottom: 1px solid ${colors.BLACK}26;
        justify-content: flex-start;
        svg {
          margin: 0 32px;
        }
        .nav__link-title {
          font-size: 24px;
        }
      }
    }
  }
`;

export const ImageBgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(circle, ${colors.ABYSS}66 30%, ${colors.ABYSS} 100%);
  transition: all .5s ease-out;
  z-index: 1;
`;

export const TextBox = styled.section`
  padding: 50px;
  text-align: center;
  border-radius: 8px;
  background: ${colors.ABYSS}B3;
  transition: all .5s ease-out;
  z-index: 4;

  @media ${mq.uptoTablet} {
    padding: 24px;
  }

  @media ${mq.desktop} {
    padding: 60px;
    box-shadow: inset 4px 4px 7px ${colors.ABYSS},
                inset -1px -1px 7px ${colors.ABYSS};
  }

  ${StyledH4} {
    text-align: center;
    line-height: 36px;
    font-weight: 500;
    color: ${colors.LATTE};

    @media ${mq.uptoTablet} {
      font-size: 18px;
      line-height: 32px;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  position: fixed;
  width: 200px;
  height: 72px;
  bottom: 0;
  right: calc(50% - 100px);
  justify-content: space-between;
  align-items: center;
  z-index: 4;

  svg {
    width: 40px;
    height: 40px;
    margin: 0 3px;
    color: ${colors.LATTE};
    fill: ${colors.LATTE};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      width: 46px;
      height: 46px;
      margin: 0;
    }
  }

  @media ${mq.desktop} {
    width: 300px;
    right: calc(50% - 150px);
  }
`;

export const backgroundData = [
  main1,
  main2,
  main3,
  main4,
];

export const backgroundDataIndex = Math.floor(Math.random() * 4);

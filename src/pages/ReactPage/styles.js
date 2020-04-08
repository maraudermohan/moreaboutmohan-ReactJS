import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from 'constants/colors';
import mq from 'constants/media-queries';
import { StyledH1, StyledSubtext } from 'components/Typography';
import imagetile from 'images/imagetile1.png';
import coursescalendar from 'images/coursescalendar.png';
import evadegame from 'images/evadegame.png';

export const ResumePageContainer = styled.main`
  background: ${colors.PANTONE};

  header:not(.scrolling) {
    background: none;
  }

  .header__title {
    font-family: "Lobster", san-serif;
  }

  nav > .nav__link:nth-of-type(2) {
    background: ${colors.WHITE}F2;

    svg {
      color: ${colors.AZURE}BF;
      fill: ${colors.AZURE}BF;
    }

    .nav__link-title {
      color: ${colors.AZURE};
    }
  }

  @media (hover: hover) and (pointer: fine) {
    nav > .nav__link:nth-of-type(2):hover {
      background: ${colors.WHITE}F2;
  
      svg {
        color: ${colors.AZURE}BF;
        fill: ${colors.AZURE}BF;
      }
  
      .nav__link-title {
        color: ${colors.AZURE};
      }
    }
  }

  ${StyledH1} {
    padding: 150px 0 100px 0;
    text-align: center;
    color: ${colors.LATTE};
    background: ${colors.AZURE};

    @media ${mq.uptoTablet} and (orientation: landscape),
    ${mq.tablet} {
      padding: 150px 0 80px 0;
    }
  }

  ${StyledSubtext} {
    color: ${colors.LATTE};
    text-align: center;
  }
`;

export const ProjectContainer = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  height: 420px;
  border: none;
  text-decoration: none;
  background: ${colors.PANTONE};

  &:last-of-type {
    margin-bottom: 0;
  }

  &:first-of-type {
    background: linear-gradient(180deg, ${colors.AZURE} 50%, ${colors.PANTONE} 50.1%);
  }

  > div {
    display: grid;
    position: relative;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    width: 85%;
    height: 160px;
    margin: 0 auto;
    bottom: 160px;
    left: 0;
    z-index: 2;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    background: ${colors.LATTE}E6;
    box-shadow: 4px -4px 7px ${colors.ABYSS}33,
                -1px -8px 7px ${colors.PANTONE}33;
    transition: all 0.3s;
  }

  img{
    display: block;
    margin: 0 auto;
    border-radius: 7px;
    transition: all 0.3s;
  }

  .react__title {
    grid-column: 1;
    grid-row: 1;
    padding: 16px 0 0 24px;
    color: ${colors.PANTONE};
    font-family: "El Messiri", san-serif;
    font-weight: 600;
  }

  .react__info {
    margin: 0;
    padding: 32px 24px 0 0;
    grid-column: 2;
    grid-row: 1;
    color: ${colors.MAGENTA};
    text-align: right;
    font-family: "Sen", san-serif;
    font-size: 16px;
    font-weight: 500;
  }

  .react__subtitle {
    margin: 0;
    padding: 0 0 30px 32px;
    grid-column: 1 / 3;
    grid-row: 2;
    justify-self: start;
    align-self: center;
    color: ${colors.PANTONE};
    text-align: left;
    font-family: "Sen", san-serif;
    font-size: 18px;
  }

  @media (hover: hover) and (pointer: fine) {
    text-decoration: none;
    
    &:hover img,
    &:hover > div {
      transform: scale(1.02);
      opacity: 1;
    }

    &:hover > div {
      background: ${colors.LATTE};
      bottom: 150px;
    }
  }

  @media ${mq.uptoTablet} {
    height: auto;
    margin: 0 0 60px 0;

    > div {
      bottom: 7px;
      background: ${colors.LATTE};
    }

    &:nth-of-type(3) > div {
      grid-template-columns: 60% 40%;
    }

    .react__title {
      font-size: 20px;
      padding: 20px 0 0 12px;
    }
  
    .react__info {
      padding: 20px 12px 0 0;
      font-size: 14px;
    }
  
    .react__subtitle {
      padding: 0 0 30px 16px;
      font-size: 16px;
    }
  }

  @media ${mq.tablet} and (max-width: 890px) {
    height: 380px;
  }

  @media ${mq.tablet} and ${mq.uptoDesktop} {
    margin: 0 0 80px 0;
    &:nth-of-type(2) > div {
      grid-template-columns: 40% 60%;
    }

    .react__info {
      padding: 26px 24px 0 0;
    }

    .react__subtitle {
      padding: 0 0 30px 24px;
    }
  }

  @media ${mq.desktop} {
    margin: 0 0 120px 0;
    img {
      width: 840px;
      height: 420px;
    }
    
    > div {
      width: 840px;
    }
  }
`;

export const data = [
  {
    imageUrl: imagetile,
    imageAlt: 'image tile game',
    title: 'Image tile game',
    subTitle: 'Selected image is split into tiles and randomized. Solve it in less than 100 moves.',
    techInfo: 'React + Redux + Bootstrap. 2016',
    href: '/imagetile',
  },
  {
    imageUrl: evadegame,
    imageAlt: 'Evade game',
    title: 'Evade game',
    subTitle: 'A simple dodging game, built during the corona-virus shelter-in-home phase.',
    techInfo: 'React + Hooks + Redux + Styled components. 2020',
    href: '/evade',
  },
  {
    imageUrl: coursescalendar,
    imageAlt: 'Courses-calendar app',
    title: 'Courses-calendar app',
    subTitle: 'A basic calendar app, with a catalog of mock-courses.',
    techInfo: 'React + Redux + Bootstrap. 2016',
    href: '/courses',
  },
];

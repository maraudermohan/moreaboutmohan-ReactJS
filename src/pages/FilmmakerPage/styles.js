import styled from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';
import {
  StyledH1,
  StyledH2,
  StyledH4,
  StyledSubtext,
} from 'components/Typography';
import {
  DirectorIcon,
  CinematographerIcon,
  EditorIcon,
  PerformerIcon,
  DanceIcon,
  ShortFilmIcon,
  CheckCircleIcon,
} from 'images/icons';

export const FilmmakerPageContainer = styled.main`
  background: ${colors.MAGENTA};

  header:not(.scrolling) {
    background: none;
  }

  .header__title {
    font-family: "Lobster", san-serif;
    font-display: swap;
  }

  nav > .nav__link:nth-child(4) {
    background: ${colors.WHITE}F2;

    svg {
      color: ${colors.MAGENTA}BF;
      fill: ${colors.MAGENTA}BF;
    }

    .nav__link-title {
      color: ${colors.MAGENTA};
    }
  }

  @media (hover: hover) and (pointer: fine) {
    nav > .nav__link:nth-child(4):hover {
      background: ${colors.WHITE}F2;
  
      svg {
        color: ${colors.MAGENTA}BF;
        fill: ${colors.MAGENTA}BF;
      }
  
      .nav__link-title {
        color: ${colors.MAGENTA};
      }
    }
  }

  ${StyledH1} {
    padding: 150px 0 100px 0;
    text-align: center;
    color: ${colors.LATTE};
    background: ${colors.MAGENTA};

    @media ${mq.uptoTablet} and (orientation: landscape),
    ${mq.tablet} {
      padding: 150px 0 80px 0;
    }
  }

  .filter-title {
    padding: 0 2% 32px 2%;
    color: ${colors.LATTE};
    background: ${colors.MAGENTA};
    font-size: 21px;
    font-family: 'Sen', san-serif;
    font-display: swap;

    @media ${mq.uptoTablet} and (orientation: landscape),
    ${mq.tablet} {
      padding: 0 5% 32px 5%;
      font-size: 28px;
    }
  }
`;

export const DemoContainer = styled.div`
  display: flex;
  position: relative;
  width: 96%;
  text-decoration: none;
  flex-wrap: wrap;
  margin: 24px auto;
  background: ${colors.MAGENTA};
  box-sizing: content-box;

  > section {
    position: relative;
    transition: transform 0.3s;
  }

  > section:hover {
    transform: scale(1.05);
  }

  > section > iframe,
  > section > div {
    border-radius: 7px;
  }

  > section {
    margin-right: 12px;
    margin-bottom: 12px;
  }

  @media ${mq.uptoTablet} and (orientation: landscape),
  ${mq.tablet} {
    width: ${(props) => {
    const count = Math.floor(props.$browserWidth / 332);
    return `${count * 332}px`;
  }}
  }
`;

export const FilterContainer = styled.div`
  display: grid;
  width: 96%;
  padding: 0 2% 36px 2%;
  max-height: 800px;
  opacity: 1;
  grid-template-columns: 1fr 1fr 8px 1fr;
  grid-template-rows: 28px 82px 82px;
  background: ${colors.MAGENTA};
  transition: all 1s;
  box-sizing: content-box;
  ${StyledSubtext} {
    color: ${colors.LATTE};
    margin: 0;
    grid-row: 1;
  }

  ${StyledSubtext}:first-of-type {
    grid-column: 1;
  }

  ${StyledSubtext}:last-of-type {
    grid-column: 4;
  }

  @media ${mq.uptoTablet} and (orientation: landscape),
  ${mq.tablet} {
    width: 60%;
    padding: 0 20% 36px 20%;
    grid-template-columns: 1fr 1fr 1fr 1fr 20px 1fr 1fr;
    grid-template-rows: 28px 90px;

    ${StyledSubtext}:first-of-type {
      grid-column: 1;
    }

    ${StyledSubtext}:last-of-type {
      grid-column: 6;
    }
  }
`;

export const CountContainer = styled.div`
  display: grid;
  width: 60%;
  margin: 16px auto 0 auto;
  padding: 40px 0;
  grid-template-rows: 50px 10px 28px;
  justify-content: center;
  justify-items: center;
  opacity: 1;
  background: ${colors.MAGENTA};
  transition: all 1s;
  box-sizing: content-box;
  border-top: 1px solid ${colors.LATTE};

  ${StyledH4} {
    grid-row: 3;
  }

  ${StyledH4},
  ${StyledH2} {
    color: ${colors.LATTE};
  }
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 99%;
  height: 81px;
  grid-row: 2;
  font-family: "Staatliches", san-serif;
  font-display: swap;
  font-weight: 500;
  color: ${(props) => (props.$selected ? colors.APPLE : colors.LATTE)};
  background: ${(props) => (props.$selected ? colors.LATTE : colors.BLUSH)};
  border: 1px solid  ${(props) => (props.$selected ? colors.APPLE : colors.LATTE)}80;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s;
  cursor: pointer;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${(props) => (props.$selected ? `${colors.LATTE}D9` : colors.LATTE)};
      color: ${colors.APPLE};
      font-size: 18px;
      svg {
        transform: scale(1.2);
        color: ${colors.APPLE};
        fill: ${colors.APPLE};
      }
    }
  }

  &:nth-of-type(1) {
    grid-column: 1;
  }
  &:nth-of-type(2) {
    grid-column: 2;
  }
  &:nth-of-type(3) {
    grid-row: 3;
    grid-column: 1;
  }
  &:nth-of-type(4) {
    grid-row: 3;
    grid-column: 2;
  }
  &:nth-of-type(5) {
    grid-row: 2;
    grid-column: 4;
  }
  &:nth-of-type(6) {
    grid-row: 3;
    grid-column: 4;
  }

  svg {
    width: 25px;
    height: 25px;
    padding: 0 0 8px 0;
    color: ${(props) => (props.$selected ? colors.APPLE : colors.LATTE)};
    fill: ${(props) => (props.$selected ? colors.APPLE : colors.LATTE)};
    transition: all 0.3s;
  }

  @media ${mq.uptoTablet} and (orientation: landscape),
  ${mq.tablet} {
    height: 90px;

    &:nth-of-type(3) {
      grid-row: 2;
      grid-column: 3;
    }
    &:nth-of-type(4) {
      grid-row: 2;
      grid-column: 4;
    }
    &:nth-of-type(5) {
      grid-row: 2;
      grid-column: 6;
    }
    &:nth-of-type(6) {
      grid-row: 2;
      grid-column: 7;
    }
  }
`;

export const filterInitialValues = {
  Director: false,
  'D.o.P': false,
  Editor: false,
  Performer: false,
  DanceVideos: false,
  ShortFilms: false,
};

export const filterKeys = [
  'Director',
  'D.o.P',
  'Editor',
  'Performer',
  'Dance-Videos',
  'Short-Films',
];

export const filterIcons = [
  DirectorIcon,
  CinematographerIcon,
  EditorIcon,
  PerformerIcon,
  DanceIcon,
  ShortFilmIcon,
  CheckCircleIcon,
];

import styled from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';
import { StyledH1, StyledSubtext } from 'components/Typography';
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
  background: ${colors.LATTE};

  header {
    background: none;
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
`;

export const DemoContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  text-decoration: none;
  overflow: hidden;
  background: linear-gradient(180deg, ${colors.MAGENTA} 50%, ${colors.LATTE} 50.1%);

  > section {
    display: grid;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }

  > section > iframe,
  > section > div {
    border-radius: 7px;
  }
`;

export const FilterContainer = styled.div`
  display: grid;
  width: 96%;
  padding: 2%;
  grid-template-columns: 1fr 1fr 8px 1fr;
  grid-template-rows: 28px 100px 100px;
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
    width: 90%;
    padding: 5%;
    grid-template-columns: 1fr 1fr 1fr 1fr 12px 1fr 1fr;
    grid-template-rows: 28px 150px;

    ${StyledSubtext}:first-of-type {
      grid-column: 1;
    }

    ${StyledSubtext}:last-of-type {
      grid-column: 6;
    }
  }
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  grid-row: 2;
  font-weight: 400;
  color: ${(props) => (props.$selected ? colors.LATTE : colors.MAGENTA)};
  background: ${(props) => (props.$selected ? `${colors.APPLE}F2` : colors.LATTE)};
  border: 1px solid  ${(props) => (props.$selected ? colors.APPLE : colors.MAGENTA)};
  border-radius: 5px;
  outline: none;

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
    width: 30px;
    height: 30px;
    padding: 0 0 12px 0;
    color: ${(props) => (props.$selected ? colors.LATTE : colors.MAGENTA)};
    fill: ${(props) => (props.$selected ? colors.LATTE : colors.MAGENTA)};
  }

  @media ${mq.uptoTablet} and (orientation: landscape),
  ${mq.tablet} {
    height: 150px;

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
  Director: true,
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
  'DanceVideos',
  'ShortFilms',
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

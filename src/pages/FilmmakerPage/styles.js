import styled from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';
import { StyledH1, StyledH2, StyledSubtext } from 'components/Typography';
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
  }

  > section > iframe,
  > section > div {
    border-radius: 7px;
  }
`;

export const FilterContainer = styled.div`
  display: grid;
  width: 96%;
  padding: ${(props) => (props.$show ? '0 2% 36px 2%' : '0 2%')};
  max-height: ${(props) => (props.$show ? '800px' : '0px')};
  opacity: ${(props) => (props.$show ? 1 : 0)};
  grid-template-columns: 1fr 1fr 8px 1fr;
  grid-template-rows: 28px 100px 100px;
  background: ${colors.MAGENTA};
  transition: all 1s;
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
    padding: ${(props) => (props.$show ? '0 5% 36px 5%' : '0 5%')};
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


export const CountContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100px;
  justify-content: center;
  justify-items: center;
  max-height: ${(props) => (props.$show ? '800px' : '0px')};
  opacity: ${(props) => (props.$show ? 1 : 0)};
  background: ${colors.MAGENTA};
  transition: all 1s;

  ${StyledSubtext},
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
  height: 99px;
  grid-row: 2;
  font-weight: 500;
  color: ${(props) => (props.$selected ? colors.APPLE : colors.LATTE)};
  background: ${(props) => (props.$selected ? colors.LATTE : colors.BLUSH)};
  border: 1px solid  ${(props) => (props.$selected ? colors.APPLE : colors.LATTE)}80;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.$selected ? colors.LATTE : colors.APPLE)}D9;
    font-size: 18px;
    svg {
      transform: scale(1.2);
      color: ${(props) => (props.$selected ? colors.APPLE : colors.LATTE)};
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
    width: 30px;
    height: 30px;
    padding: 0 0 12px 0;
    color: ${(props) => (props.$selected ? colors.APPLE : colors.LATTE)};
    fill: ${(props) => (props.$selected ? colors.APPLE : colors.LATTE)};
    transition: all 0.3s;
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

import styled from 'styled-components';

import { StyledH2, StyledH4 } from 'components/Typography';
import mq from 'constants/media-queries';
import colors from 'constants/colors';
import {
  BriefcaseIcon,
  ReactIcon,
  FilmIcon,
  BulbIcon,
  CameraIcon,
  CloseIcon,
} from 'images/icons';

export const NavContainer = styled.nav`
  position: fixed;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, 1fr) 2fr;
  top: 0;
  right: 0;
  z-index: 999;
  cursor: pointer;

  ${StyledH2},
  ${StyledH4} {
    color: ${colors.PANTONE};
  }

  @media ${mq.uptoTablet} and (orientation: landscape),
  ${mq.tablet} {
    grid-template-rows: repeat(4, 1fr);
  }
`;

export const LinkContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  left: -100%;
  grid-column: 1;
  background: ${colors.WHITE}F2;
  transition: left 0.2s ease-in-out;
  
  &.animated {
    left: 0;
  }

  &:hover {
    background: ${(props) => props.$background};
    > section > svg {
      color: ${colors.WHITE};
      fill: ${colors.WHITE};
    }

    ${StyledH2} {
      color: ${colors.WHITE};
    }
  }
`;

export const NavLink = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 800px;
  justify-content: space-between;
  align-items: center;

  svg {
    color: ${colors.PANTONE}BF;
    fill: ${colors.PANTONE}BF;
  }

  svg:first-child {
    width: 42px;
    height: 42px;
    margin: 0 0 0 32px;
  }

  svg:last-child {
    width: 24px;
    height: 24px;
    margin: 3px 32px 0 0;
  }

  @media ${mq.uptoTablet} and (orientation: landscape),
  ${mq.tablet} {
    svg:first-child {
      width: 50px;
      height: 50px;
    }
  }
`;

export const LinkTwoContainer = styled(LinkContainer)`
  &:hover {
    background: ${colors.WHITE}F2;
  }
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;

  @media ${mq.uptoTablet} and (orientation: landscape),
  ${mq.tablet} {
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
  }
`;

export const NavLinkTwo = styled(NavLink)`
  @media ${mq.uptoTablet} and (orientation: landscape),
  ${mq.tablet} {
    max-width: 400px;
  }
`;

export const LinkTwoSubContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1;
  background: transparent;

  &:hover {
    background: ${(props) => props.$background};
    > section > svg {
      color: ${colors.WHITE};
      fill: ${colors.WHITE};
    }

    ${StyledH4} {
      color: ${colors.WHITE};
    }
  }

  &:first-child {
    grid-row: 1;
  }

  &:last-child {
    grid-row: 2;
  }

  @media ${mq.uptoTablet} and (orientation: landscape),
  ${mq.tablet} {
    &:first-child {
      grid-column: 1;
      grid-row: 1;

      > ${NavLinkTwo} {
        margin: 0 0 0 auto;
      }
    }

    &:last-child {
      grid-column: 2;
      grid-row: 1;
      border-left: 1px ridge ${colors.PANTONE}33;

      > ${NavLinkTwo} {
        margin: 0 auto 0 0;
      }
    }
  }
`;

export const NavIcons = [
  {
    title: 'Résumé',
    Icon: BriefcaseIcon,
    background: colors.DAYLILY,
  },
  {
    title: 'React projects',
    Icon: ReactIcon,
    background: colors.AZURE,
  },
  {
    title: 'Filmmaking',
    Icon: FilmIcon,
    background: colors.MAGENTA,
  },
];

export const StyledCloseIcon = styled(CloseIcon)`
  position: fixed;
  width: 28px;
  height: 28px;
  top: 12px;
  right: 12px;
  opacity: 0.75;
  z-index: 1000;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  @media ${mq.tablet} {
    top: 24px;
    right: 24px;
  }
`;

export const NavIcons2 = [
  {
    title: 'Design works',
    Icon: BulbIcon,
    background: colors.APPLE,
  },
  {
    title: 'Arts & Photography',
    Icon: CameraIcon,
    background: colors.BLUSH,
  },
];

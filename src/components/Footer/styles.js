import styled from 'styled-components';
import mq from 'constants/media-queries';
import { StyledH3, StyledSubtext } from 'components/Typography';

export const IconContainer = styled.section`
  display: flex;
  width: 90%;
  height: 100px;
  margin: 0 auto;
  padding: 40px 0 0 0;
  justify-content: space-between;

  @media ${mq.uptoSmallPhone} {
    display: none;
  }

  @media ${mq.tablet} {
    width: 80%;
    height: 130px;
    padding: 60px 0 0 0;
  }

  @media ${mq.desktop} {
    height: 160px
    padding: 80px 0 0 0;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  width: 75%;
  height: auto;
  padding: 132px 12.5% 0 12.5%;
  flex-direction: column;
  text-align: center;
  background: ${(props) => props.$backgroundColor};

  ${StyledH3},
  ${StyledSubtext} {
    margin: 52px 0 0 0;
    color: ${(props) => props.$textColor};
  }

  ${StyledH3} {
    font-family: "El Messiri", san-serif;
    font-display: swap;
  }

  svg {
    width: 44px;
    padding: 0 4px;
    color: ${(props) => props.$textColor};
    transition: all 0.3s;
    cursor: pointer;

    &[data-selected=true] {
      width: 52px;
      padding: 0;
      color: ${(props) => props.$hoverColor};
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        width: 52px;
        padding: 0;
        color: ${(props) => props.$hoverColor};
      }
    }
  }

  @media ${mq.uptoTablet} {
    ${StyledH3} {
      font-size: 18px;
    }
  }

  @media ${mq.tablet} {
    width: 70%;
    padding: 132px 15% 0 15%;
  }

  @media ${mq.desktop} {
    width: 60%;
    padding: 132px 20% 0 20%;
  }
`;

export const FooterLine = styled.span`
  width: 100%;
  height: 3px;
  align-self: end;
  border-radius: 2px;
  background: ${(props) => props.$textColor};
`;

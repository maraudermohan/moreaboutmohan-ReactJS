import styled from 'styled-components';
import { colors } from 'constants/colors';
import mq from 'constants/media-queries';
import { StyledH3, StyledSubtext } from 'components/Typography';

export const IconContainer = styled.section`
  display: flex;
  width: 80%;
  height: 100px;
  margin: 0 auto;
  padding: 40px 0 0 0;
  justify-content: space-between;

  @media ${mq.uptoSmallPhone} {
    display: none;
  }

  @media ${mq.tablet} {
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
  margin: 32px auto 0 auto;
  width: 75%;
  height: auto;
  flex-direction: column;
  text-align: center;

  ${StyledH3},
  ${StyledSubtext} {
    margin: 52px 0 0 0;
    color: ${colors.WHITE};
  }

  svg {
    width: 44px;
    color: ${colors.WHITE};

    &:hover,
    &[data-selected=true] {
      width: 52px;
      color: ${colors.DAYLILY};
    }
  }

  @media ${mq.tablet} {
    width: 70%;
  }

  @media ${mq.desktop} {
    width: 60%;
  }
`;

export const FooterLine = styled.span`
  width: 100%;
  height: 3px;
  align-self: end;
  border-radius: 2px;
  background: ${colors.LATTE};
`;

import styled from 'styled-components';
import { StyledH4 } from 'components/Typography';
import { colors, theme } from 'constants/colors';
import mq from 'constants/media-queries';

export const HeaderContainer = styled.header`
  position: absolute;
  display: grid;
  grid-template-columns: 95px auto 20% 40px;
  grid-template-rows: auto 25px;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  z-index: 1;
  background: linear-gradient(180deg,${theme.BASE}CC 10%, ${colors.WHITE}00 90%),
              linear-gradient(170deg,${theme.BASE}66 10%, ${colors.WHITE}00 30%),
              linear-gradient(190deg,${theme.BASE}99 10%, ${colors.WHITE}00 30%);

  ${StyledH4} {
    display: none;
    justify-self: end;
    align-self: center;
    grid-column: 3;
    color: ${colors.LATTE};
    cursor: pointer;

    @media ${mq.phone} and (orientation: landscape),
    ${mq.tablet} {
      display: block;
    }
  }
`;

export const StyledSpan1 = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  top: 33px;
  left: 33px;
  border-radius: 50%;
  z-index: 3;
  transition: all 0.3s;
  background: ${colors.LATTE};
`;

export const StyledSpan2 = styled(StyledSpan1)`
  z-index: 2;
  background: ${colors.PANTONE};
`;

export const LogoContainer = styled.span`
  position: relative;
  margin: 15px 0 0 15px;
  width: 57px;
  height: 57px;
  border-radius: 50%;
  grid-column: 1;
  z-index: 1;
  transition: all 0.3s;
  background: ${colors.LATTE};
  cursor: pointer;

  img {
    position: relative;
    top: 6px;
    left: 6px;
    width: 45px;
    height: 45px;
    z-index: 4;
    transition: all 0.3s;
  }

  &:hover {
    width: 67px;
    height: 67px;
    margin: 13px 0 0 13px;
    background: ${colors.SUNGLOW};
    img {
      top: 13px;
      left: 13px;
      width: 41px;
      height: 41px; 
    }
    ${StyledSpan1} {
      width: 51px;
      height: 51px;
      top: 8px;
      left: 8px;
    }
    ${StyledSpan2} {
      width: 59px;
      height: 59px;
      top: 4px;
      left: 4px;
    }
  }

  @media ${mq.uptoTablet} {
    transform: scale(0.8);
  }

  @media ${mq.tablet} {
    margin: 20px 0 0 40px;

    &:hover {
      margin: 17px 0 0 37px;
    }
  }
`;

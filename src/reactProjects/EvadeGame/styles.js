import styled from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';

export const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  background: ${colors.PANTONE};

  header a {
    text-decoration: none;
  }

  .game-title {
    margin: 0 auto;
    padding: 80px 0 0 0;
    text-align: center;
    color: ${colors.LATTE};
  }

  .title-container {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

    .game-subtitle {
      display: inline;
      color: ${colors.LATTE};
    }

    > a {
      display: inline-block;
      width: 44px;
      height: 44px;
      margin: 0 44px 0 0;
      @media ${mq.uptoTablet} {
        margin: 0 12px 0 0;
      }
    }

    svg {
      width: 40px;
      height: 40px;
      margin: 0;
      color: ${colors.DAYLILY};
      transition: all 0.3s;
      cursor: pointer;
    }

    > a:hover svg {
      width: 44px;
      height: 44px;
      color: ${colors.LATTE};
    }

    .game-subtitle {
      margin: 0;
    }
  }
`;

export const AreaContainer = styled.section`
  position: relative;
  width: ${(props) => props.$length}px;
  height: ${(props) => props.$length}px;
  margin: 120px auto;
  border-radius: 5px;
  background: ${colors.LATTE};
  overflow: hidden;
  transition: all 0.5s;
`;

export const PlayerStyles = {
  position: 'absolute',
  width: '20px',
  height: '30px',
  color: colors.ABYSS,
  transition: 'all 0.2s',
};

export const VirusStyled = styled.span`
  position: absolute;
  width: 25px;
  height: 25px;
  transition: all 0.2s;

  svg:first-child {
    position: absolute;
    width: 19px;
    height: 19px;
    top: 3px;
    left: 3px;
    color: red;
  }

  svg:last-child {
    width: 25px;
    height: 25px;
    color: ${colors.PANTONE};
  }
`;

export const ScoreContainer = styled.div`
  .game__score-value {
    display: block;
    float: right;
    margin: 0;
    line-height: 40px;
    color: ${colors.APPLE};
  }
`;

export const ReadyGameContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: linear-gradient(0deg,${colors.APPLE}CC 10%, #60c23999 90%),
              linear-gradient(45deg,${colors.APPLE}66 10%, #60c23966 30%),
              linear-gradient(225deg,${colors.APPLE}99 10%, #60c239CC 30%);
`;

export const FooterLine = styled.span`
  width: 70%;
  height: 3px;
  margin: 0 auto 60px auto;
  align-self: end;
  border-radius: 2px;
  background: ${colors.LATTE};
`;

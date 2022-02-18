import React, {
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { StyledH2, StyledParagraph } from 'components/Typography';
import actions from '../actions';
import {
  AreaContainer,
  ReadyGameContainer,
  ScoreContainer,
} from '../styles';
import Player from './Player';
import Levels from './Levels';

const GameArea = ({
  orientation,
  areaLength,
  gameScore,
  isGameReady,
  initializeArea,
  readyGame,
}) => {
  useEffect(() => {
    const length = (orientation === 'landscape') ? window.innerHeight : window.innerWidth;
    const newAreaLength = Math.floor((length * 0.85) / 30) * 30;
    const newPlayerTop = Math.floor(newAreaLength / 60) * 30;
    const newPlayerLeft = Math.floor(newAreaLength / 40) * 20;
    let speed = 10;
    if (newAreaLength > 600) {
      speed = 30;
    } else if (newAreaLength > 300) {
      speed = 20;
    }
    initializeArea(newAreaLength, newPlayerTop, newPlayerLeft, speed);
  }, [orientation]);

  return (
    <AreaContainer
      $length={areaLength}
      className="evade-game__area"
    >
      <Player />
      {
        isGameReady
          ? (
            <>
              <Levels />
              <ScoreContainer>
                <StyledH2 className="game__score-value">{`${gameScore} \xa0 `}</StyledH2>
              </ScoreContainer>
            </>
          ) : (
            <ReadyGameContainer onClick={() => readyGame(true)}>
              {
                gameScore !== null
                  && <StyledParagraph>{`You scored ${gameScore}`}</StyledParagraph>
              }
              <StyledH2>Ready for new game?</StyledH2>
            </ReadyGameContainer>
          )
      }
    </AreaContainer>
  );
};

GameArea.propTypes = {
  orientation: PropTypes.string,
  areaLength: PropTypes.number,
  gameScore: PropTypes.number,
  isGameReady: PropTypes.bool,
  initializeArea: PropTypes.func,
  readyGame: PropTypes.func,
};

const mapStateToProps = (state) => ({
  areaLength: state.areaLength,
  gameScore: state.gameScore,
  isGameReady: state.isGameReady,
});

const mapDispatchToProps = {
  initializeArea: actions.initializeArea,
  readyGame: actions.readyGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameArea);

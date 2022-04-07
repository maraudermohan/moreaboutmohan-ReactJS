import React, {
  useEffect,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { WalkIcon } from 'images/icons';
import actions from '../actions';
import { PlayerStyles } from '../styles';

function Player({
  areaLength,
  playerTop,
  playerLeft,
  movePlayer,
  direction,
}) {
  const playerRef = useRef(null);

  const positionKeydownHandler = (event) => {
    let newDirection = direction;
    if (playerTop >= 10 && (event.code === 'KeyW' || event.code === 'ArrowUp')) {
      playerRef.current.oldTop -= 20;
    }
    if (playerTop <= (areaLength - 40) && (event.code === 'KeyS' || event.code === 'ArrowDown')) {
      playerRef.current.oldTop += 20;
    }
    if (playerLeft >= 10 && (event.code === 'KeyA' || event.code === 'ArrowLeft')) {
      playerRef.current.oldLeft -= 20;
      newDirection = 'left';
    }
    if (playerLeft <= (areaLength - 30) && (event.code === 'KeyD' || event.code === 'ArrowRight')) {
      playerRef.current.oldLeft += 20;
      newDirection = 'right';
    }
    movePlayer(areaLength, playerRef.current.oldTop, playerRef.current.oldLeft, newDirection);
  };

  useEffect(() => {
    window.addEventListener('keydown', positionKeydownHandler);

    return (() => {
      window.removeEventListener('keydown', positionKeydownHandler);
    });
  });

  useEffect(() => {
    playerRef.current.oldTop = playerTop;
    playerRef.current.oldLeft = playerLeft;
  }, [areaLength]);

  return (
    <WalkIcon
      ref={playerRef}
      className="evade-game__player"
      style={{
        ...PlayerStyles,
        top: playerTop,
        left: playerLeft,
        transform: `scaleX(${direction === 'right' ? 1 : -1})`,
      }}
    />
  );
}

Player.propTypes = {
  areaLength: PropTypes.number,
  playerTop: PropTypes.number,
  playerLeft: PropTypes.number,
  movePlayer: PropTypes.func,
  direction: PropTypes.string,
};

const mapStateToProps = (state) => ({
  areaLength: state.areaLength,
  playerTop: state.playerPos.top,
  playerLeft: state.playerPos.left,
  direction: state.playerPos.direction,
});

const mapDispatchToProps = {
  movePlayer: actions.movePlayer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);

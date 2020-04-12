import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { VirusIcon } from 'images/icons';
import actions from '../actions';
import { VirusStyled } from '../styles';

const Virus = ({
  id,
  currentTop,
  currentLeft,
  endTop,
  endLeft,
  playerTop,
  playerLeft,
  direction,
  speed,
  isGameReady,
  moveVirus,
  deleteVirus,
  readyGame,
}) => {
  const checkCollision = (virusTop, virusLeft) => {
    let topCollision = false;
    let leftCollision = false;
    if (((playerTop < virusTop) && (virusTop < playerTop + 30))
      || ((playerTop < virusTop + 25) && (virusTop + 25 < playerTop + 30))) {
      topCollision = true;
    }
    if (((virusLeft < playerLeft) && (playerLeft < virusLeft + 25))
      || ((virusLeft < playerLeft + 20) && (playerLeft + 20 < virusLeft + 25))) {
      leftCollision = true;
    }
    return (topCollision && leftCollision);
  };

  useEffect(() => {
    let top = currentTop;
    let left = currentLeft;
    let shouldDelete = false;
    if (direction === 'down') {
      if (checkCollision(top - speed, left)) {
        readyGame(false);
        return;
      }
      top += speed;
      shouldDelete = top >= endTop;
    } else if (direction === 'up') {
      if (checkCollision(top + speed, left)) {
        readyGame(false);
        return;
      }
      top -= speed;
      shouldDelete = top <= endTop;
    } else if (direction === 'right') {
      if (checkCollision(top, left - speed)) {
        readyGame(false);
        return;
      }
      left += speed;
      shouldDelete = left >= endLeft;
    } else if (direction === 'left') {
      if (checkCollision(top, left + speed)) {
        readyGame(false);
        return;
      }
      left -= speed;
      shouldDelete = left <= endLeft;
    }
    if (shouldDelete) {
      deleteVirus(id);
    } else {
      setTimeout(() => (
        moveVirus(
          id,
          {
            current: [top, left],
            end: [endTop, endLeft],
            direction,
          },
          isGameReady,
        )), 100);
    }
  });

  return (
    <VirusStyled
      className="evade-game__virus"
      style={{
        top: currentTop,
        left: currentLeft,
      }}
    >
      <VirusIcon />
      <VirusIcon />
    </VirusStyled>
  );
};

Virus.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currentTop: PropTypes.number,
  currentLeft: PropTypes.number,
  endTop: PropTypes.number,
  endLeft: PropTypes.number,
  playerTop: PropTypes.number,
  playerLeft: PropTypes.number,
  direction: PropTypes.string,
  speed: PropTypes.number,
  isGameReady: PropTypes.bool,
  moveVirus: PropTypes.func,
  deleteVirus: PropTypes.func,
  readyGame: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  currentTop: state.virusData[ownProps.id].current[0],
  currentLeft: state.virusData[ownProps.id].current[1],
  endTop: state.virusData[ownProps.id].end[0],
  endLeft: state.virusData[ownProps.id].end[1],
  playerTop: state.playerPos.top,
  playerLeft: state.playerPos.left,
  direction: state.virusData[ownProps.id].direction,
  speed: state.speed,
  isGameReady: state.isGameReady,
});

const mapDispatchToProps = {
  moveVirus: actions.moveVirus,
  deleteVirus: actions.deleteVirus,
  readyGame: actions.readyGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(Virus);

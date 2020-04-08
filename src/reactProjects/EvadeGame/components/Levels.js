import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../actions';
import VirusEmitter from './VirusEmitter';

const Levels = ({
  playerTop,
  playerLeft,
  virusData,
  virusStartEndPos,
  createVirus,
}) => {
  const emitVirus = () => {
    const randomIndex = Math.floor(Math.random() * 4);
    let newId = 0;
    while (Object.prototype.hasOwnProperty.call(virusData, newId)) {
      newId += 1;
    }
    createVirus(newId, virusStartEndPos[randomIndex]);
  };

  useEffect(() => {
    if (playerTop && playerLeft
      && Object.keys(virusData).length === 0) {
      emitVirus();
    }
  }, [
    virusData,
    playerTop,
    playerLeft,
  ]);

  return (
    <>
      {
        Object.keys(virusData).length
          && <VirusEmitter />
      }
    </>
  );
};

Levels.propTypes = {
  playerTop: PropTypes.number,
  playerLeft: PropTypes.number,
  virusData: PropTypes.objectOf(PropTypes.objectOf),
  virusStartEndPos: PropTypes.arrayOf(PropTypes.object),
  createVirus: PropTypes.func,
};

const mapStateToProps = (state) => ({
  playerTop: state.playerPos.top,
  playerLeft: state.playerPos.left,
  virusData: state.virusData,
  virusStartEndPos: state.virusStartEndPos,
});

const mapDispatchToProps = {
  createVirus: actions.createVirus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Levels);

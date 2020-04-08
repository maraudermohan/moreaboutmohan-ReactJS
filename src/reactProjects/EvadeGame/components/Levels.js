import React, {
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../actions';
import VirusEmitter from './VirusEmitter';

const Levels = ({
  areaLength,
  playerTop,
  playerLeft,
  virusData,
  createVirus,
}) => {
  const [startEndPos, setStartEndPos] = useState([]);

  useEffect(() => {
    setStartEndPos([
      {
        current: [0, playerLeft],
        end: [areaLength, playerLeft],
        direction: 'down',
      },
      {
        current: [playerTop, 0],
        end: [playerTop, areaLength],
        direction: 'right',
      },
      {
        current: [areaLength, playerLeft],
        end: [0, playerLeft],
        direction: 'up',
      },
      {
        current: [playerTop, areaLength],
        end: [playerTop, 0],
        direction: 'left',
      },
    ]);
  }, [
    areaLength,
    playerTop,
    playerLeft,
  ]);

  const emitVirus = () => {
    const randomIndex = Math.floor(Math.random() * 4);
    let newId = 0;
    while (Object.prototype.hasOwnProperty.call(virusData, newId)) {
      newId += 1;
    }
    createVirus(newId, startEndPos[randomIndex]);
  };

  useEffect(() => {
    if (virusData.length === 0) {
      emitVirus();
    }
  }, [virusData]);

  return (
    <VirusEmitter />
  );
};

Levels.propTypes = {
  areaLength: PropTypes.number,
  playerTop: PropTypes.number,
  playerLeft: PropTypes.number,
  virusData: PropTypes.objectOf(PropTypes.objectOf),
  createVirus: PropTypes.func,
};

const mapStateToProps = (state) => ({
  areaLength: state.areaLength,
  playerTop: state.playerPos.top,
  playerLeft: state.playerPos.left,
  virusData: state.virusData,
});

const mapDispatchToProps = {
  createVirus: actions.createVirus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Levels);

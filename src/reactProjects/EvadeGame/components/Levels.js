import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../actions';
import Virus from './Virus';

const Levels = ({
  virusData,
  virusStartEndPos,
  gameScore,
  isGameReady,
  createVirus,
}) => {
  const emitVirus = () => {
    const randomIndex = Math.floor(Math.random() * 4);
    let newId = Math.floor(Math.random() * 50);
    while (Object.prototype.hasOwnProperty.call(virusData, newId)) {
      newId += 1;
    }
    createVirus(newId, virusStartEndPos[randomIndex], isGameReady);
  };

  useEffect(() => {
    if (Object.keys(virusData).length === 0) {
      emitVirus();
    } else if (gameScore > 3 && Object.keys(virusData).length < 3) {
      emitVirus();
    }
  }, [
    Object.keys(virusData).length,
  ]);

  return (
    <>
      {
        Object.keys(virusData).map((id) => (
          <Virus
            key={id}
            id={id}
          />
        ))
      }
    </>
  );
};

Levels.propTypes = {
  virusData: PropTypes.objectOf(PropTypes.objectOf),
  virusStartEndPos: PropTypes.arrayOf(PropTypes.object),
  gameScore: PropTypes.number,
  isGameReady: PropTypes.bool,
  createVirus: PropTypes.func,
};

const mapStateToProps = (state) => ({
  virusData: state.virusData,
  virusStartEndPos: state.virusStartEndPos,
  gameScore: state.gameScore,
  isGameReady: state.isGameReady,
});

const mapDispatchToProps = {
  createVirus: actions.createVirus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Levels);

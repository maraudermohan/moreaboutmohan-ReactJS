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
  direction,
  speed,
  moveVirus,
  deleteVirus,
}) => {
  useEffect(() => {
    let top = currentTop;
    let left = currentLeft;
    let shouldDelete = false;
    if (direction === 'down') {
      top += speed;
      shouldDelete = top >= endTop;
    } else if (direction === 'up') {
      top -= speed;
      shouldDelete = top <= endTop;
    } else if (direction === 'right') {
      left += speed;
      shouldDelete = left >= endLeft;
    } else if (direction === 'left') {
      left -= speed;
      shouldDelete = left <= endLeft;
    }
    if (shouldDelete) {
      deleteVirus(id);
    } else {
      setTimeout(() => (
        moveVirus(id, {
          current: [top, left],
          end: [endTop, endLeft],
          direction,
        })
      ), 100);
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
  direction: PropTypes.string,
  moveVirus: PropTypes.func,
  deleteVirus: PropTypes.func,
  speed: PropTypes.number,
};

const mapStateToProps = (state, ownProps) => ({
  currentTop: state.virusData[ownProps.id].current[0],
  currentLeft: state.virusData[ownProps.id].current[1],
  endTop: state.virusData[ownProps.id].end[0],
  endLeft: state.virusData[ownProps.id].end[1],
  direction: state.virusData[ownProps.id].direction,
  speed: state.speed,
});

const mapDispatchToProps = {
  moveVirus: actions.moveVirus,
  deleteVirus: actions.deleteVirus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Virus);

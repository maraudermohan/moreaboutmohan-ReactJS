import React, {
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../actions';
import { AreaContainer } from '../styles';
import Player from './Player';
import Levels from './Levels';

const GameArea = ({
  orientation,
  areaLength,
  initializeArea,
}) => {
  // const [area, setArea] = useState(0);

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
      <Levels />
    </AreaContainer>
  );
};

GameArea.propTypes = {
  orientation: PropTypes.string,
  areaLength: PropTypes.number,
  initializeArea: PropTypes.func,
};

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    areaLength: state.areaLength,
  });
};

const mapDispatchToProps = {
  initializeArea: actions.initializeArea,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameArea);

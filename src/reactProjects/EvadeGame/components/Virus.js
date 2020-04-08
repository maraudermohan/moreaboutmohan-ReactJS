import React, {
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { VirusIcon } from 'images/icons';
import actions from '../actions';
import { VirusStyled } from '../styles';

const Virus = ({
  top,
  left,
}) => {
  const [pos, setPos] = useState({
    top,
    left,
  });

  useEffect(() => {
    setTimeout(() => {
      if (pos.top < 600) {
        setPos({
          top: pos.top + 45,
          left: pos.left,
        });
      }
    }, 100);
  });

  return (
    <VirusStyled
      className="evade-game__virus"
      style={{
        top: pos.top,
        left: pos.left,
      }}
    >
      <VirusIcon />
      <VirusIcon />
    </VirusStyled>
  );
};

Virus.propTypes = {
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Virus);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Virus from './Virus';

const VirusEmitter = ({
  virusData,
}) => (
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

VirusEmitter.propTypes = {
  virusData: PropTypes.objectOf(PropTypes.objectOf),
};

const mapStateToProps = (state) => ({
  virusData: state.virusData,
});

export default connect(mapStateToProps)(VirusEmitter);

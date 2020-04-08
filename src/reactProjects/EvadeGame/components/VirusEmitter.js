import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Virus from './Virus';

const VirusEmitter = ({
  virusData,
}) => {
  return (
    <>
      {
        virusData.map((data) => (
          <Virus
            key={data}
            data={data}
          />
        ))
      }
    </>
  );
};

VirusEmitter.propTypes = {
  virusData: PropTypes.objectOf(PropTypes.objectOf),
};

const mapStateToProps = (state) => ({
  virusData: state.virusData,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(VirusEmitter);

import React from 'react';
import PropTypes from 'prop-types';

import { StyledSubtext } from 'components/Typography';
import YearContainer from './styles';

const TimelineYear = ({
  children,
  alignment = 'left',
}) => (
  <YearContainer
    $alignment={alignment}
  >
    {
      alignment === 'right'
      && <span />
    }
    { !!children && <StyledSubtext>{children}</StyledSubtext> }
    {
      alignment === 'left'
      && <span />
    }
  </YearContainer>
);

TimelineYear.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string, PropTypes.array,
  ]),
  alignment: PropTypes.oneOf(['left', 'right']),
};

export default TimelineYear;

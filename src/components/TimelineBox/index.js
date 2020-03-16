import React from 'react';
import PropTypes from 'prop-types';

import { StyledH4 } from 'components/Typography';
import BoxContainer from './styles';

const TimelineBox = ({
  title,
  subTitle,
  color,
  height,
  alignment = 'right',
}) => (
  <BoxContainer
    $color={color}
    $height={height}
    $alignment={alignment}
  >
    {
      alignment === 'right'
      && <span />
    }
    <div>
      <StyledH4>{title}</StyledH4>
      <p>{subTitle}</p>
    </div>
    {
      alignment === 'left'
      && <span />
    }
  </BoxContainer>
);

TimelineBox.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  alignment: PropTypes.oneOf(['left', 'right']),
};

export default TimelineBox;

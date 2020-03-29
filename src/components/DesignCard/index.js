import React from 'react';
import PropTypes from 'prop-types';

import { StyledH2 } from 'components/Typography';
import DesignCardContainer from './styles';

const DesignCard = ({
  defaultImg,
  hoverImg,
  title,
  pdf,
  time,
  year,
  video,
  summaryHeading,
  summaryBody,
  clickHandler,
  isCurrent = false,
}) => (
  <DesignCardContainer
    $defaultImg={defaultImg}
    $hoverImg={hoverImg}
    className={`design-card  ${isCurrent ? 'selected' : ''}`}
    onClick={() => clickHandler({
      pdf,
      year,
      time,
      video,
      summaryHeading,
      summaryBody,
    })}
  >
    <span className="design-card__image" />
    <span className="design-card__overlay" />
    <StyledH2 className="design-card__title">{title}</StyledH2>
    <span className="design-card__triangle" />
  </DesignCardContainer>
);

DesignCard.propTypes = {
  defaultImg: PropTypes.string,
  hoverImg: PropTypes.string,
  title: PropTypes.string,
  pdf: PropTypes.string,
  time: PropTypes.string,
  year: PropTypes.string,
  video: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])),
  summaryHeading: PropTypes.string,
  summaryBody: PropTypes.arrayOf(PropTypes.string),
  clickHandler: PropTypes.func,
  isCurrent: PropTypes.bool,
};

export default DesignCard;

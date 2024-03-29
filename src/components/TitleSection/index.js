import React from 'react';
import PropTypes from 'prop-types';

import { StyledH1, StyledH3 } from 'components/Typography';
import TitleSectionContainer from './styles';

// Component to render the Page title
function TitleSection({
  heading = '',
  subHeading = '',
}) {
  return (
    <TitleSectionContainer className="page__title">
      <StyledH1>{heading}</StyledH1>
      <StyledH3>{subHeading}</StyledH3>
    </TitleSectionContainer>
  );
}

TitleSection.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default TitleSection;

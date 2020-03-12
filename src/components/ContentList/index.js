import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { StyledParagraph, StyledSubtext } from 'components/Typography';
import { AngleRightIcon } from 'images/icons/';
import { ContentListContainer, BoldParagraph } from './styles';

// Component that renders unordered list of content
// Alignment props sets the width to full or 50%
const ContentList = ({
  alignment = 'left',
  browserHeight = 0,
  data = [],
  heading = '',
  subHeading = '',
}) => (
  <ContentListContainer
    $alignment={alignment}
    $browserHeight={browserHeight}
  >
    <BoldParagraph>{heading}</BoldParagraph>
    <StyledSubtext>{subHeading}</StyledSubtext>
    {
      data.map((content) => (
        <Fragment key={content}>
          <AngleRightIcon width="18px" height="18px" />
          <StyledParagraph as="li">{content}</StyledParagraph>
        </Fragment>
      ))
    }
  </ContentListContainer>
);

ContentList.propTypes = {
  alignment: PropTypes.string,
  browserHeight: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.string),
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default ContentList;

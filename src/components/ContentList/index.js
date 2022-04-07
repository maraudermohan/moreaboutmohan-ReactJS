import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { StyledParagraph, StyledSubtext } from 'components/Typography';
import { AngleRightIcon } from 'images/icons/';
import { ContentListContainer, BoldParagraph } from './styles';

// Component that renders unordered list of content
// Alignment props sets the width to full or 50%
function ContentList({
  alignment = 'left',
  browserHeight = 0,
  className = '',
  data = [],
  heading = '',
  subHeading = '',
}) {
  return (
    <ContentListContainer
      $alignment={alignment}
      $browserHeight={browserHeight}
      className={className}
    >
      <BoldParagraph className="content-list__heading">{heading}</BoldParagraph>
      <StyledSubtext className="content-list__subheading">{subHeading}</StyledSubtext>
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
}

ContentList.propTypes = {
  alignment: PropTypes.oneOf(['left', 'right', 'full']),
  browserHeight: PropTypes.number,
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.string),
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default ContentList;

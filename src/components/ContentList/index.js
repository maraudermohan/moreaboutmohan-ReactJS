import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { StyledParagraph } from 'components/Typography';
import { AngleRightIcon } from 'images/icons/';
import ContentListContainer from './styles';

// Component that renders unordered list of content
// Alignment props sets the width to full or 50%
const ContentList = ({
  alignment = 'left',
  data = [],
}) => (
  <ContentListContainer
    $alignment={alignment}
  >
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
  data: PropTypes.arrayOf(PropTypes.string),
};

export default ContentList;

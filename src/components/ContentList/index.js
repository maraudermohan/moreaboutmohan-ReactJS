import React, { Fragment } from 'react';
import Proptypes from 'prop-types';

import { StyledParagraph } from 'components/Typography';
import { AngleRightIcon } from 'images/icons/';
import { ContentListContainer } from './styles';

const ContentList = ({
  data = [],
  alignment = 'full',
}) => {
  return (
    <ContentListContainer
      $alignment={alignment}
    >
      {
        data.map((content, index) => (
          <Fragment key={`${content}-${index}`}>
            <AngleRightIcon width="18px" height="18px" />
            <StyledParagraph as="li">{content}</StyledParagraph>
          </Fragment>
        ))
      }
    </ContentListContainer>
  );
};

ContentList.propTypes = {
  data: Proptypes.arrayOf(Proptypes.string),
};

export default ContentList;

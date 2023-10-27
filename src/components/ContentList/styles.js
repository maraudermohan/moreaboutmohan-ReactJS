import styled, { css } from 'styled-components';

import mq from 'constants/media-queries';
import { StyledParagraph, StyledSubtext } from 'components/Typography';

export const BoldParagraph = styled(StyledParagraph)`
  margin: 0;
  font-weight: 500;
`;

export const ContentListContainer = styled.ul`
  display: grid;
  grid-template-columns: 30px auto;
  grid-template-rows: auto;
  width: 80%;
  margin: 0 auto;
  padding: 0 0 15% 0;
  list-style: none;
  text-align: justify;

  svg {
    grid-column: 1;
    justify-self: center;
    padding: 3px 0 0 0;
  }

  ${StyledSubtext} {
    grid-row: 1;
    grid-column: 2;
    margin: 0 0 8px 0;
  }

  ${StyledParagraph} {
    grid-column: 2;
    padding: 0 0 1em 0;
  }

  ${StyledSubtext},
  ${StyledParagraph} {
    font-family: 'Sen', san-serif;
    font-display: swap;
  }

  @media ${mq.phone} and (orientation: landscape) {
    padding: 0 0 12px 0;
  }

  @media ${mq.uptoTablet} and (orientation: landscape) {
    ${StyledSubtext} {
      margin: 0 0 6px 0;
      font-size: 12px;
    }
  }

  @media ${mq.uptoSmallPhone} and (orientation: portrait) {
    padding: 0 0 10% 0;
  }

  @media ${mq.phone} and (orientation: portrait) {
    padding: 0 0 20% 0;
  }

  @media ${mq.tablet} {
    padding-bottom: ${(props) => (props.$browserHeight >= 600) && '60px'};
    padding-bottom: ${(props) => (props.$browserHeight >= 720) && '80px'};
    padding-bottom: ${(props) => (props.$browserHeight >= 800) && '100px'};
    padding-bottom: ${(props) => (props.$browserHeight >= 1024) && '150px'};
    padding-bottom: ${(props) => (props.$browserHeight >= 1200) && '200px'};
  }

  ${(props) => ((props.$alignment === 'full') && css`
    @media ${mq.desktop} {
      width: 840px;
    }
  `)}

  ${(props) => ((props.$alignment !== 'full') && css`
    @media ${mq.desktop} and (orientation: portrait) {
      width: 70%;
    }

    @media ${mq.desktop} {
      width: 500px;
      margin: ${props.$alignment === 'left'
      ? css`0 47% 0 auto;`
      : css`0 auto 0 47%;`}
    }
  `)}
`;

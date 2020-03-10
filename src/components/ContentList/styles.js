import styled, { css } from 'styled-components';

import mq from 'constants/media-queries';
import { StyledParagraph } from 'components/Typography';

const ContentListContainer = styled.ul`
  display: grid;
  grid-template-columns: 30px auto;
  grid-auto-rows: auto;
  width: 80%;
  margin: 0 auto;
  padding: 0 0 32px 0;
  list-style: none;
  text-align: justify;

  svg {
    grid-column: 1;
    justify-self: center;
    padding: 3px 0 0 0;
  }

  ${StyledParagraph} {
    grid-column: 2;
    line-height: 1.2em;
    padding: 0 0 1em 0;
  }

  @media ${mq.tablet} {
    padding: 0 0 44px 0;
  }

  @media ${mq.desktop} {
    padding: 0 0 64px 0;
  }

  ${(props) => ((props.$alignment === 'full') && css`
    @media ${mq.tablet} {
      width: 70%;
    }

    @media ${mq.desktop} {
      width: 840px;
    }
  `)}

  ${(props) => ((props.$alignment !== 'full') && css`
    @media ${mq.tablet} {
      width: 40%;
    }

    @media ${mq.desktop} {
      width: 420px;
    }

    @media ${mq.largeDevice} {
      width: 500px;
    }
  `)}

  ${(props) => ((props.$alignment === 'left') && css`
    margin: 0 50% 0 auto;
  `)}

  ${(props) => ((props.$alignment === 'right') && css`
    margin: 0 auto 0 50%;
  `)}
`;

export default ContentListContainer;

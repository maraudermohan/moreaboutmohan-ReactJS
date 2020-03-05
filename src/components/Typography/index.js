import styled from 'styled-components';
import mq from 'constants/media-queries';

export const StyledH1 = styled.h1`
  font-size: 36px;
  line-height: 1.25em;
  font-weight: 500;

  @media ${mq.tablet} {
    font-size: 42px;
    line-height: 1.125em;
  }

  @media ${mq.desktop} {
    font-size: 48px;
    line-height: 2em;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 28px;
  line-height: 1.25em;
  font-weight: 500;

  @media ${mq.tablet} {
    font-size: 32px;
    line-height: 1.125em;
  }

  @media ${mq.desktop} {
    font-size: 36px;
    line-height: 1.1em;
  }
`;

export const StyledH3 = styled.h3`
  font-size: 28px;
  line-height: 1.25em;
  font-weight: 400;

  @media ${mq.desktop} {
    font-size: 32px;
    line-height: 1.5em;
  }
`;

export const StyledH4 = styled.h4`
  font-size: 24px;
  line-height: 1.25em;
  font-weight: 400;

  @media ${mq.desktop} {
    font-size: 28px;
    line-height: 1.125em;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 18px;
  line-height: 1.25em;
  font-weight: 300;

  @media ${mq.desktop} {
    font-size: 22px;
    line-height: 1.125em;
  }
`;

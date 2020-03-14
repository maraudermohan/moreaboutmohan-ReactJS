import styled from 'styled-components';
import mq from 'constants/media-queries';

export const StyledH1 = styled.h1`
  font-size: 32px;
  line-height: 1.25em;
  font-weight: 500;

  @media ${mq.phone} {
    font-size: 36px;
  }

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
  font-size: 24px;
  line-height: 1.25em;
  font-weight: 400;

  @media ${mq.phone} {
    font-size: 28px;
  }

  @media ${mq.desktop} {
    font-size: 32px;
    line-height: 1.5em;
  }
`;

export const StyledH4 = styled.h4`
  font-size: 24px;
  line-height: 1.25em;
  font-weight: 400;
`;

export const StyledParagraph = styled.p`
  font-size: 18px;
  line-height: 1.25em;
  font-weight: 300;

  @media ${mq.phone} and (orientation: landscape) {
    font-size: 14px;
  }

  @media ${mq.uptoSmallPhone} and (orientation: portrait) {
    line-height: 1.2em;
  }

  @media (min-width: 361px) and ${mq.uptoPhone} and (orientation: portrait) {
    line-height: 1.4em;
  }

  @media ${mq.tablet} and (orientation: portrait) {
    font-size: 22px;
  }

  @media ${mq.desktop} {
    font-size: 22px;
    line-height: 1.125em;
  }

  @media ${mq.desktop} and (orientation: portrait),
  @media ${mq.desktop} and (orientation: landscape) {
    font-size: 24px;
    line-height: 1.2em;
  }
`;

export const StyledSubtext = styled.p`
  font-size: 14px;
  line-height: 1em;
  font-weight: 300;
`;

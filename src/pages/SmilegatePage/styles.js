import styled from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';

const SmilegatePageContainer = styled.main`
  background: ${colors.ABYSS};
  color: ${colors.LATTE};

  li {
    @media ${mq.uptoTablet} {
      font-size: 15px;
    }
  }

  footer {
    background: ${colors.ABYSS};
  }

  .smilegate-page__video1 {
    min-height: 200px;
    margin: 0 auto;
    position: relative;
    iframe {
      display: block;
      margin: 0 auto;
    }

    @media ${mq.uptoTablet} and (orientation: landscape) {
      min-height: 290px;
    }

    @media ${mq.tablet} {
      min-height: 360px;
    }
  }

  .smilegate-page__video2,
  .smilegate-page__video3 {
    display: block;
    margin: 0 auto;
  }

  .smilegate-page__summary1 {
    padding: 44px 0 24px 0;
  }

  .smilegate-page__summary2 {
    padding: 12px 0 48px 0;
  }

  .smilegate-page__image1 {
    display: block;
    margin: 0 auto 0 calc(50% - 540px);
    @media ${mq.uptoTablet},
    (max-width: 868px) and (orientation: landscape) {
      width: 300px;
      height: 232px;
      margin: 0 calc(50% - 150px);
    }
  }

  .smilegate-page__holder {
    margin: 0 0 64px 0;
    background: ${colors.ABYSS};
    position: relative;
    z-index: 2;
    height: auto;
    box-shadow: 4px 4px 7px ${colors.ABYSS}4D,
                -1px 8px 7px ${colors.PANTONE}4D;
  }

  .smilegate-page__summary4 {
    padding: 32px 0;
    color: ${colors.PANTONE};
  }

  .main__image-carousel {
    img:first-child {
      height: 180px;
      @media (orientation: landscape) {
        height: 152px;
      }
      @media ${mq.tablet} and (orientation: portrait) {
        height: 360px;
      }
      @media ${mq.desktop} and (orientation: landscape) {
        height: 303px;
      }
    }

    img:nth-child(2) {
      height: 227px;
      @media (orientation: landscape) {
        height: 191px;
      }
      @media ${mq.tablet} and (orientation: portrait) {
        height: 454px;
      }
      @media ${mq.desktop} and (orientation: landscape) {
        height: 383px;
      }
    }

    img:nth-child(3) {
      height: 427px;
      @media (orientation: landscape) {
        height: 360px;
      }
      @media ${mq.tablet} and (orientation: portrait) {
        width: 320px;
        height: 427px;
      }
      @media ${mq.desktop} and (orientation: landscape) {
        width: 320px;
        height: 427px;
      }
    }

    img:nth-child(4) {
      height: 184px;
      @media (orientation: landscape) {
        height: 155px;
      }
      @media ${mq.tablet} and (orientation: portrait) {
        height: 368px;
      }
      @media ${mq.desktop} and (orientation: landscape) {
        height: 310px;
      }
    }

    img:nth-child(5) {
      height: 174px;
      @media (orientation: landscape) {
        height: 147px;
      }
      @media ${mq.tablet} and (orientation: portrait) {
        height: 348px;
      }
      @media ${mq.desktop} and (orientation: landscape) {
        height: 293px;
      }
    }
  }

  img,
  iframe {
    border-radius: 5px;
  }
`;

export default SmilegatePageContainer;

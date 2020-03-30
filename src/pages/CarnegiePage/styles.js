import styled from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';

const CarnegiePageContainer = styled.main`
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

  .carnegie-page__summary1 {
    padding: 0 0 24px 0;
  }

  .carnegie-page__summary2 {
    padding: 12px 0 48px 0;
  }

  .carnegie-page__image1 {
    display: block;
    margin: 0 auto;
    @media ${mq.uptoTablet},
    (max-width: 868px) and (orientation: landscape) {
      width: 300px;
      height: 169px;
      margin: 0 calc(50% - 150px);
    }
  }

  .carnegie-page__video1,
  .carnegie-page__video2,
  .carnegie-page__video3 {
    display: block;
    margin: 0 auto;
    min-height: 200px;
    @media ${mq.uptoTablet} and (orientation: landscape) {
      min-height: 290px;
    }
    @media ${mq.tablet} {
      min-height: 360px;
    }
  }

  .carnegie-page__video3 {
    position: relative;
    z-index: 2;
  }

  .carnegie-page__holder1 {
    margin: 0 0 64px 0;
    padding: 36px 0 0 0;
    background: ${colors.LATTE};
    position: relative;
    z-index: 2;
    height: auto;
    box-shadow: 4px 4px 7px ${colors.ABYSS}4D,
                -1px 8px 7px ${colors.PANTONE}4D;
  }

  .carnegie-page__summary3 {
    padding: 36px 0;
    color: ${colors.PANTONE};
  }

  .carnegie-page__summary4 {
    padding: 32px 0 0 0;
  }

  .main__image-carousel,
  .main__placeholder,
  .main__content-summary {
    background: ${colors.LATTE};
    color: ${colors.PANTONE};
  }

  .main__image-carousel img {
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

  img,
  iframe {
    border-radius: 5px;
  }
`;

export default CarnegiePageContainer;

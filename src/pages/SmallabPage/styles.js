import styled from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';

const SmallabPageContainer = styled.main`
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

  .smallab-page__video1 {
    min-height: 200px;
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

  .smallab-page__video2,
  .smallab-page__video3,
  .smallab-page__video4 {
    display: block;
    margin: 0 auto;
  }

  .smallab-page__summary1 {
    padding: 44px 0 24px 0;
  }

  .smallab-page__summary2 {
    padding: 0 0 48px 0;
  }

  .smallab-page__image1 {
    display: block;
    margin: 0 auto 0 calc(50% - 540px);
    @media ${mq.uptoTablet},
    (max-width: 868px) and (orientation: landscape) {
      width: 300px;
      height: 225px;
      margin: 0 calc(50% - 150px);
    }
  }

  .main__image-carousel,
  .main__placeholder,
  .main__content-summary {
    background: ${colors.LATTE};
    color: ${colors.PANTONE};
  }

  .smallab-page__holder {
    margin: 120px 0 64px 0;
    background: ${colors.ABYSS};
    position: relative;
    z-index: 1;
    height: auto;
    box-shadow: 4px 4px 7px ${colors.ABYSS}4D,
                -1px 8px 7px ${colors.PANTONE}4D;
  }

  .smallab-page__summary5 {
    padding: 64px 0 32px 0;
  }

  .smallab-page__summary7 {
    padding: 32px 0 0 0;
    color: ${colors.PANTONE};
  }

  .smallab-page__summary9 {
    padding: 0;
  }

  img,
  iframe {
    border-radius: 5px;
  }
`;

export default SmallabPageContainer;

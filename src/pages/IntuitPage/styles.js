import styled from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';

const IntuitPageContainer = styled.main`
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

  .intuit-page__summary1 {
    padding: 0;
  }

  .intuit-page__summary3 {
    padding: 32px 0 0 0;
  }

  .intuit-page__image1,
  .intuit-page__image2,
  .intuit-page__image3 {
    @media ${mq.uptoTablet},
    (max-width: 868px) and (orientation: landscape) {
      width: 300px;
      height: 225px;
      margin: 0 calc(50% - 150px);
    }
  }

  .intuit-page__image4 {
    display: block;
    margin: 0 auto 0 calc(100% - 750px);
    padding: 24px 0 0 0;

    @media ${mq.uptoTablet},
    (max-width: 868px) and (orientation: landscape)  {
      margin: 0 auto;
      width: 300px;
      height: 188px;
      margin: 0 calc(50% - 150px);
    }
  }

  .intuit-page__image-holder {
    margin: 48px 0 0 0;
    background: ${colors.ABYSS};
    position: relative;
    z-index: 1;
    height: auto;
    box-shadow: 4px 4px 7px ${colors.ABYSS}4D,
                -1px 8px 7px ${colors.PANTONE}4D;
  }

  .intuit-page__transparent-scroller {
    .intuit-page__image2 {
      margin: 0 auto;
      padding: 0;
      @media ${mq.uptoDesktop} and (orientation: portrait) {
        padding: 48px 0 0 0;
      }
    }

    .intuit-page__summary4 {
      color: ${colors.PANTONE};
    }
  }
`;

export default IntuitPageContainer;

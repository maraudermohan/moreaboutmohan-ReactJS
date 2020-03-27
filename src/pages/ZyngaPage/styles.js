import styled from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';

const ZyngaPageContainer = styled.main`
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

  .zynga-page__summary1,
  .zynga-page__summary2 {
    padding: 0 0 32px 0;
  }

  .zynga-page__image1 {
    display: block;
    margin: 0 auto;
    padding: 0 0 44px 0;
    @media ${mq.uptoTablet},
    (max-width: 868px) and (orientation: landscape) {
      width: 300px;
      height: 225px;
      margin: 0 calc(50% - 150px);
    }
  }

  .zynga-page__image2 {
    display: block;
    margin: 0 auto;
    padding: 100px 0 0 0;
    @media ${mq.uptoTablet},
    (max-width: 868px) and (orientation: landscape) {
      width: 300px;
      height: 189px;
      margin: 0 calc(50% - 150px);
    }
  }

  .main__image-carousel,
  .main__placeholder,
  .main__content-summary {
    background: ${colors.LATTE};
    color: ${colors.PANTONE};
  }
`;

export default ZyngaPageContainer;

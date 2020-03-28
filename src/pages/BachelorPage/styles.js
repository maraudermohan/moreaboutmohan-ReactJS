import styled from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';

const BachelorPageContainer = styled.main`
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

  .bachelor-page__summary1 {
    padding: 0 0 32px 0;
  }

  .bachelor-page__summary2 {
    padding: 0 0 32px 0;
  }

  .bachelor-page__image1 {
    display: block;
    margin: 0 auto 0 calc(50% - 640px);
    padding: 0;
    @media ${mq.uptoTablet},
    (max-width: 868px) and (orientation: landscape) {
      width: 300px;
      height: 158px;
      margin: 0 calc(50% - 150px);
    }
  }

  .main__image-carousel,
  .main__placeholder,
  .main__content-summary {
    background: ${colors.LATTE};
    color: ${colors.PANTONE};
  }

  .main__image-carousel {
    img {
      height: 296px;
      @media (orientation: landscape) {
        height: 250px;
      }
      @media ${mq.tablet} and (orientation: portrait) {
        width: 500px;
        height: 463px;
      }
      @media ${mq.desktop} and (orientation: landscape) {
        width: 450px;
        height: 417px;
      }
    }
  }

  img {
    border-radius: 5px;
  }
`;

export default BachelorPageContainer;

import styled from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';

const CoolirisPageContainer = styled.main`
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

  .cooliris-page__holder {
    margin: 0 0 64px 0;
    background: ${colors.ABYSS};
    position: relative;
    z-index: 2;
    height: auto;
    box-shadow: 4px 4px 7px ${colors.ABYSS}4D,
                -1px 8px 7px ${colors.PANTONE}4D;
  }

  .cooliris-page__summary1 {
    padding: 0 0 32px 0;
  }

  .cooliris-page__image1 {
    display: block;
    margin: 0 auto;
    padding: 0 0 40px 0;
    @media ${mq.uptoTablet},
    (max-width: 868px) and (orientation: landscape) {
      width: 300px;
      height: 225px;
      margin: 0 calc(50% - 150px);
    }
  }

  .cooliris-page__image2 {
    display: block;
    margin: 0 auto;
    @media ${mq.uptoTablet},
    (max-width: 868px) and (orientation: landscape) {
      width: 300px;
      height: 188px;
      margin: 0 calc(50% - 150px);
    }
  }

  .cooliris-page__summary2 {
    padding: 24px 0 0 0;
    color: ${colors.PANTONE};
  }

  img {
    border-radius: 5px;
  }
`;

export default CoolirisPageContainer;

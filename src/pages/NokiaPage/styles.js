import styled from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';

const NokiaPageContainer = styled.main`
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

  .nokia-page__summary1 {
    padding: 0 0 32px 0;
  }

  .nokia-page__image1 {
    display: block;
    margin: 0 auto;
    @media ${mq.uptoTablet},
    (max-width: 868px) and (orientation: landscape) {
      width: 300px;
      height: 169px;
      margin: 0 calc(50% - 150px);
    }
  }

  img {
    border-radius: 5px;
  }
`;

export default NokiaPageContainer;

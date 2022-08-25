import styled from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';

const MegalodonPageContainer = styled.main`
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

  .megalodon-page__video1 {
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

  .megalodon-page__video2,
  .megalodon-page__video3 {
    display: block;
    margin: 0 auto;
  }

  .megalodon-page__summary1 {
    padding: 44px 0 24px 0;
  }

  .megalodon-page__summary2 {
    padding: 12px 0 48px 0;
  }

  .megalodon-page__image1 {
    display: block;
    margin: 0 auto 0 calc(50% - 540px);
    @media ${mq.uptoTablet},
    (max-width: 868px) and (orientation: landscape) {
      width: 300px;
      height: 200px;
      margin: 0 calc(50% - 150px);
    }
  }

  .megalodon-page__holder {
    margin: 0 0 64px 0;
    background: ${colors.ABYSS};
    position: relative;
    z-index: 2;
    height: auto;
    box-shadow: 4px 4px 7px ${colors.ABYSS}4D,
                -1px 8px 7px ${colors.PANTONE}4D;
  }

  .megalodon-page__summary4 {
    padding: 32px 0 0 0;
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
      height: 288px;
      @media (orientation: landscape) {
        height: 243px;
      }
      @media ${mq.tablet} and (orientation: portrait) {
        width: 500px;
        height: 450px;
      }
      @media ${mq.desktop} and (orientation: landscape) {
        width: 450px;
        height: 406px;
      }
    }

    img:nth-child(3) {
      height: 215px;
      @media (orientation: landscape) {
        height: 181px;
      }
      @media ${mq.tablet} and (orientation: portrait) {
        height: 430px;
      }
      @media ${mq.desktop} and (orientation: landscape) {
        height: 362px;
      }
    }

    img:nth-child(4) {
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

    img:nth-child(5) {
      height: 240px;
      @media (orientation: landscape) {
        height: 203px;
      }
      @media ${mq.tablet} and (orientation: portrait) {
        height: 481px;
      }
      @media ${mq.desktop} and (orientation: landscape) {
        height: 406px;
      }
    }

    img:last-child {
      height: 237px;
      @media (orientation: landscape) {
        height: 200px;
      }
      @media ${mq.tablet} and (orientation: portrait) {
        height: 474px;
      }
      @media ${mq.desktop} and (orientation: landscape) {
        height: 400px;
      }
    }
  }

  img,
  iframe {
    border-radius: 5px;
  }
`;

export default MegalodonPageContainer;

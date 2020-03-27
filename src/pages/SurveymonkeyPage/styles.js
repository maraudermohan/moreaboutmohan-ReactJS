import styled from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';

const SurveymonkeyPageContainer = styled.main`
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

  .surveymonkey-page__summary1 {
    padding: 32px 0;
  }

  .surveymonkey-page__image1 {
    display: block;
    margin: 0 auto;
    @media ${mq.uptoTablet},
    (max-width: 868px) and (orientation: landscape) {
      width: 300px;
      height: 150px;
      margin: 0 calc(50% - 150px);
    }
  }

  .surveymonkey-page__image2 {
    display: block;
    margin: 0 auto;
    @media ${mq.uptoTablet},
    (max-width: 868px) and (orientation: landscape) {
      width: 300px;
      height: 138px;
      margin: 0 calc(50% - 150px);
    }
  }

  .surveymonkey-page__image3 {
    display: block;
    margin: 32px auto 0 auto;
    @media ${mq.uptoTablet},
    (max-width: 868px) and (orientation: landscape) {
      width: 300px;
      height: 162px;
      margin: 0 calc(50% - 150px);
    }
  }

  .surveymonkey-page__image4 {
    display: block;
    margin: 0 auto;
    padding: 40px 0;
    @media ${mq.uptoTablet},
    (max-width: 868px) and (orientation: landscape) {
      width: 240px;
      height: 430px;
      margin: 0 calc(50% - 120px);
    }
  }

  .surveymonkey-page__content1 {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 1;
    background: ${colors.ABYSS};
    box-shadow: 4px 4px 7px ${colors.ABYSS}4D,
                -1px 8px 7px ${colors.PANTONE}4D;
  }

  .surveymonkey-page__transparent-scroller {
    .surveymonkey-page__image2 {
      margin: 0 auto;
      padding: 24px 0 0 0;
      @media ${mq.uptoDesktop} and (orientation: portrait) {
        padding: 48px 0 0 0;
      }
    }

    .surveymonkey-page__summary2 {
      color: ${colors.PANTONE};
    }
  }

  > .main__image-carousel:nth-child(13) img:first-of-type {
    @media (orientation: landscape) {
      height: 150px;
    }
    @media (orientation: portrait) {
      height: 167px;
    }
    @media ${mq.tablet} and (orientation: portrait) {
      height: 358px;
    }
    @media ${mq.desktop} and (orientation: landscape) {
      height: 302px;
    }
  }
`;

export default SurveymonkeyPageContainer;

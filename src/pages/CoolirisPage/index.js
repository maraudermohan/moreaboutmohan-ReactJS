import React, { lazy } from 'react';
import colors from 'constants/colors';
import {
  jumbotronProps,
  jobTitle,
  summary1,
  summary2,
  duration,
  imageProps1,
  imageProps2,
} from './cooliris-data';
import CoolirisPageContainer from './styles';

const Header = lazy(() => import('components/Header'));
const Footer = lazy(() => import('components/Footer'));
const Jumbotron = lazy(() => import('components/Jumbotron'));
const TitleSection = lazy(() => import('components/TitleSection'));
const TransparentScroller = lazy(() => import('components/TransparentScroller'));
const ContentList = lazy(() => import('components/ContentList'));
const LazyLoadImage = lazy(() => import('components/LazyLoadImage'));

// Cooliris work experience page
function CoolirisPage() {
  return (
    <CoolirisPageContainer className="cooliris-page">
      <Jumbotron
        data={jumbotronProps}
      />
      <TitleSection
        heading={jobTitle.title}
        subHeading={jobTitle.company}
        duration={jobTitle.duration}
      />
      <Header />
      <div className="cooliris-page__holder">
        <ContentList
          data={summary1}
          alignment="full"
          browserHeight={window.innerHeight}
          heading={duration.heading}
          subHeading={duration.subHeading}
          className="cooliris-page__summary1"
        />
        <LazyLoadImage
          imageUrl={imageProps2.imageUrl}
          imageAlt={imageProps2.imageAlt}
          width="720px"
          height="540px"
          className="cooliris-page__image1"
        />
      </div>
      <TransparentScroller
        className="cooliris-page__transparent-scroller"
        background={colors.LATTE}
      >
        <LazyLoadImage
          imageUrl={imageProps1.imageUrl}
          imageAlt={imageProps1.imageAlt}
          width="640px"
          height="400px"
          className="cooliris-page__image2"
        />
        <ContentList
          alignment="full"
          browserHeight={window.innerHeight}
          data={summary2}
          className="cooliris-page__summary2"
        />
      </TransparentScroller>
      <Footer />
    </CoolirisPageContainer>
  );
}

export default CoolirisPage;

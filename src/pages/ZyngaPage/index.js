import React, { lazy } from 'react';
import {
  jumbotronProps,
  jobTitle,
  summary1,
  summary2,
  summary3,
  duration,
  carouselProps1,
  imageProps1,
  imageProps2,
} from './zynga-data';
import ZyngaPageContainer from './styles';

const Header = lazy(() => import('components/Header'));
const Footer = lazy(() => import('components/Footer'));
const Jumbotron = lazy(() => import('components/Jumbotron'));
const TitleSection = lazy(() => import('components/TitleSection'));
const TextImageCarouselOnScroll = lazy(() => import('comboComponents/TextImageCarouselOnScroll'));
const ContentList = lazy(() => import('components/ContentList'));
const LazyLoadImage = lazy(() => import('components/LazyLoadImage'));

// Zynga work experience page
function ZyngaPage() {
  return (
    <ZyngaPageContainer className="zynga-page">
      <Jumbotron
        data={jumbotronProps}
      />
      <TitleSection
        heading={jobTitle.title}
        subHeading={jobTitle.company}
        duration={jobTitle.duration}
      />
      <Header />
      <ContentList
        data={summary1}
        alignment="full"
        browserHeight={window.innerHeight}
        heading={duration.heading}
        subHeading={duration.subHeading}
        className="zynga-page__summary1"
      />
      <LazyLoadImage
        imageUrl={imageProps1.imageUrl}
        imageAlt={imageProps1.imageAlt}
        width="720px"
        height="538px"
        className="zynga-page__image1"
      />
      <div style={{ width: '100%', height: '48px' }} />
      <TextImageCarouselOnScroll
        carouselData={carouselProps1}
        contentListData={summary2}
      />
      <div style={{ padding: '100px 0 24px 0' }}>
        <LazyLoadImage
          imageUrl={imageProps2.imageUrl}
          imageAlt={imageProps2.imageAlt}
          width="720px"
          height="451px"
          className="zynga-page__image2"
        />
      </div>
      <ContentList
        alignment="full"
        browserHeight={window.innerHeight}
        data={summary3}
        className="zynga-page__summary2"
      />
      <Footer />
    </ZyngaPageContainer>
  );
}

export default ZyngaPage;

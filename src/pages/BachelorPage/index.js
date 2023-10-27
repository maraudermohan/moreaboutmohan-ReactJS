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
} from './bachelor-data';
import BachelorPageContainer from './styles';

const Header = lazy(() => import('components/Header'));
const Footer = lazy(() => import('components/Footer'));
const Jumbotron = lazy(() => import('components/Jumbotron'));
const TitleSection = lazy(() => import('components/TitleSection'));
const ContentList = lazy(() => import('components/ContentList'));
const TextImageCarouselOnScroll = lazy(() => import('comboComponents/TextImageCarouselOnScroll'));
const LazyLoadImage = lazy(() => import('components/LazyLoadImage'));

// Bachelors in PSG Tech page
function BachelorPage() {
  return (
    <BachelorPageContainer className="bachelor-page">
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
        className="bachelor-page__summary1"
      />
      <LazyLoadImage
        imageUrl={imageProps1.imageUrl}
        imageAlt={imageProps1.imageAlt}
        width="640px"
        height="337px"
        className="bachelor-page__image1"
      />
      <ContentList
        alignment="right"
        browserHeight={window.innerHeight}
        data={summary2}
        className="bachelor-page__summary2"
      />
      <TextImageCarouselOnScroll
        carouselData={carouselProps1}
        contentListData={summary3}
      />
      <Footer />
    </BachelorPageContainer>
  );
}

export default BachelorPage;

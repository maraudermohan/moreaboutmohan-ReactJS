import React, { lazy } from 'react';
import {
  jumbotronProps,
  jobTitle,
  summary1,
  duration,
  imageProps1,
} from './nokia-data';
import NokiaPageContainer from './styles';

const Header = lazy(() => import('components/Header'));
const Footer = lazy(() => import('components/Footer'));
const Jumbotron = lazy(() => import('components/Jumbotron'));
const TitleSection = lazy(() => import('components/TitleSection'));
const ContentList = lazy(() => import('components/ContentList'));
const LazyLoadImage = lazy(() => import('components/LazyLoadImage'));

// Nokia work experience page
function NokiaPage() {
  return (
    <NokiaPageContainer className="nokia-page">
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
        className="nokia-page__summary1"
      />
      <LazyLoadImage
        imageUrl={imageProps1.imageUrl}
        imageAlt={imageProps1.imageAlt}
        width="540px"
        height="303px"
        className="nokia-page__image1"
      />
      <Footer />
    </NokiaPageContainer>
  );
}

export default NokiaPage;

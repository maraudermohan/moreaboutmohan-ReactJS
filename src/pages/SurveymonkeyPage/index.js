import React, { lazy } from 'react';
import colors from 'constants/colors';
import {
  jumbotronProps,
  jobTitle,
  summary1,
  summary2,
  summary3,
  summary4,
  duration,
  carouselProps1,
  carouselProps2,
  imageProps1,
  imageProps2,
  imageProps3,
  imageProps4,
} from './surveymonkey-data';
import SurveymonkeyPageContainer from './styles';

const Header = lazy(() => import('components/Header'));
const Footer = lazy(() => import('components/Footer'));
const Jumbotron = lazy(() => import('components/Jumbotron'));
const TitleSection = lazy(() => import('components/TitleSection'));
const TextImageCarouselOnScroll = lazy(() => import('comboComponents/TextImageCarouselOnScroll'));
const TransparentScroller = lazy(() => import('components/TransparentScroller'));
const ContentList = lazy(() => import('components/ContentList'));
const LazyLoadImage = lazy(() => import('components/LazyLoadImage'));

// SurveyMonkey work experience page
function SurveymonkeyPage() {
  return (
    <SurveymonkeyPageContainer className="surveymonkey-page">
      <Jumbotron
        data={jumbotronProps}
      />
      <TitleSection
        heading={jobTitle.title}
        subHeading={jobTitle.company}
        duration={jobTitle.duration}
      />
      <Header />
      <LazyLoadImage
        imageUrl={imageProps1.imageUrl}
        imageAlt={imageProps1.imageAlt}
        width="720px"
        height="360px"
        className="surveymonkey-page__image1"
      />
      <ContentList
        data={summary1}
        alignment="full"
        browserHeight={window.innerHeight}
        heading={duration.heading}
        subHeading={duration.subHeading}
        className="surveymonkey-page__summary1"
      />
      <TextImageCarouselOnScroll
        carouselData={carouselProps1}
        contentListData={summary3}
      />
      <div className="surveymonkey-page__content1">
        <LazyLoadImage
          imageUrl={imageProps3.imageUrl}
          imageAlt={imageProps3.imageAlt}
          width="650px"
          height="350px"
          className="surveymonkey-page__image3"
        />
        <LazyLoadImage
          imageUrl={imageProps4.imageUrl}
          imageAlt={imageProps4.imageAlt}
          width="300px"
          height="540px"
          className="surveymonkey-page__image4"
        />
      </div>
      <TransparentScroller
        className="surveymonkey-page__transparent-scroller"
        background={colors.LATTE}
      >
        <LazyLoadImage
          imageUrl={imageProps2.imageUrl}
          imageAlt={imageProps2.imageAlt}
          width="720px"
          height="324px"
          className="surveymonkey-page__image2"
        />
        <ContentList
          alignment="full"
          browserHeight={window.innerHeight}
          data={summary2}
          className="surveymonkey-page__summary2"
        />
      </TransparentScroller>
      <TextImageCarouselOnScroll
        carouselData={carouselProps2}
        contentListData={summary4}
      />
      <Footer />
    </SurveymonkeyPageContainer>
  );
}

export default SurveymonkeyPage;

import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Jumbotron from 'components/Jumbotron';
import TitleSection from 'components/TitleSection';
import LazyLoadImage from 'components/LazyLoadImage';
import TextImageCarouselOnScroll from 'comboComponents/TextImageCarouselOnScroll';
import TransparentScroller from 'components/TransparentScroller';
import ContentList from 'components/ContentList';
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

// SurveyMonkey work experience page
const SurveymonkeyPage = () => (
  <SurveymonkeyPageContainer className="intuit-page">
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

export default SurveymonkeyPage;

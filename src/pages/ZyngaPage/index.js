import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Jumbotron from 'components/Jumbotron';
import TitleSection from 'components/TitleSection';
import LazyLoadImage from 'components/LazyLoadImage';
import TextImageCarouselOnScroll from 'comboComponents/TextImageCarouselOnScroll';
import ContentList from 'components/ContentList';
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

// Zynga work experience page
const ZyngaPage = () => (
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
    <TextImageCarouselOnScroll
      carouselData={carouselProps1}
      contentListData={summary2}
    />
    <LazyLoadImage
      imageUrl={imageProps2.imageUrl}
      imageAlt={imageProps2.imageAlt}
      width="720px"
      height="451px"
      className="zynga-page__image2"
    />
    <ContentList
      alignment="full"
      browserHeight={window.innerHeight}
      data={summary3}
      className="zynga-page__summary2"
    />
    <Footer />
  </ZyngaPageContainer>
);

export default ZyngaPage;

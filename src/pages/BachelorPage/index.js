import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Jumbotron from 'components/Jumbotron';
import TitleSection from 'components/TitleSection';
import ContentList from 'components/ContentList';
import TextImageCarouselOnScroll from 'comboComponents/TextImageCarouselOnScroll';
import LazyLoadImage from 'components/LazyLoadImage';
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

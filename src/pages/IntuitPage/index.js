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
  imageProps2,
  imageProps1,
  imageProps3,
  imageProps4,
} from './intuit-data';
import IntuitPageContainer from './styles';

// Intuit work experience page
function IntuitPage() {
  return (
    <IntuitPageContainer className="intuit-page">
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
        alignment="right"
        browserHeight={window.innerHeight}
        heading={duration.heading}
        subHeading={duration.subHeading}
        className="intuit-page__summary1"
      />
      <LazyLoadImage
        imageUrl={imageProps1.imageUrl}
        imageAlt={imageProps1.imageAlt}
        width="720px"
        height="540px"
        className="intuit-page__image1"
      />
      <TextImageCarouselOnScroll
        carouselData={carouselProps1}
        contentListData={summary2}
      />
      <div className="intuit-page__image-holder">
        <LazyLoadImage
          imageUrl={imageProps3.imageUrl}
          imageAlt={imageProps3.imageAlt}
          width="640px"
          height="480px"
          className="intuit-page__image3"
        />
        <ContentList
          alignment="full"
          browserHeight={window.innerHeight}
          data={summary3}
          className="intuit-page__summary3"
        />
        <LazyLoadImage
          imageUrl={imageProps4.imageUrl}
          imageAlt={imageProps4.imageAlt}
          width="650px"
          height="406px"
          className="intuit-page__image4"
        />
      </div>
      <TransparentScroller
        className="intuit-page__transparent-scroller"
        background={colors.LATTE}
      >
        <LazyLoadImage
          imageUrl={imageProps2.imageUrl}
          imageAlt={imageProps2.imageAlt}
          width="652px"
          height="489px"
          className="intuit-page__image2"
        />
        <ContentList
          alignment="full"
          browserHeight={window.innerHeight}
          data={summary4}
          heading="Winner of 2 more Spotlight awards -"
          className="intuit-page__summary4"
        />
      </TransparentScroller>
      <Footer />
    </IntuitPageContainer>
  );
}

export default IntuitPage;

import React, { useContext } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Jumbotron from 'components/Jumbotron';
import TitleSection from 'components/TitleSection';
import { BrowserContext } from 'constants/contexts';
import LazyLoadImage from 'components/LazyLoadImage';
import YoutubeVideo from 'components/Video/youtube';
import Video from 'components/Video';
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
  summary5,
  duration,
  carouselProps1,
  imageProps1,
  video1,
  video2,
  video3,
} from './smilegate-data';
import SmilegatePageContainer from './styles';

// Smilegate work experience page
const SmilegatePage = () => {
  const { breakpoint } = useContext(BrowserContext);
  return (
    <SmilegatePageContainer className="smilegate-page">
      <Jumbotron
        data={jumbotronProps}
      />
      <TitleSection
        heading={jobTitle.title}
        subHeading={jobTitle.company}
        duration={jobTitle.duration}
      />
      <Header />
      <div className="smilegate-page__holder">
        <YoutubeVideo
          {...video1}
          height={`${breakpoint < 2 ? Math.round(0.8 * 0.56 * window.innerWidth) : '360'}`}
          width={`${breakpoint < 2 ? Math.round(0.8 * window.innerWidth) : '640'}`}
          autoplay={1}
          muted={false}
          className="smilegate-page__video1"
        />
        <ContentList
          data={summary1}
          alignment="full"
          browserHeight={window.innerHeight}
          heading={duration.heading}
          subHeading={duration.subHeading}
          className="smilegate-page__summary1"
        />
        <LazyLoadImage
          imageUrl={imageProps1.imageUrl}
          imageAlt={imageProps1.imageAlt}
          width="540px"
          height="304px"
          className="smilegate-page__image1"
        />
        <ContentList
          data={summary3}
          alignment="right"
          browserHeight={window.innerHeight}
          heading={summary2}
          className="smilegate-page__summary2"
        />
      </div>
      <TransparentScroller
        className="smilegate-page__transparent-scroller"
        background={colors.LATTE}
      >
        <Video
          {...video2}
          height={`${breakpoint < 2 ? Math.round(0.8 * 0.56 * window.innerWidth) : '360'}`}
          width={`${breakpoint < 2 ? Math.round(0.8 * window.innerWidth) : '640'}`}
          autoplay={0}
          muted
          className="smilegate-page__video2"
        />
        <ContentList
          alignment="full"
          browserHeight={window.innerHeight}
          data={summary4}
          className="smilegate-page__summary4"
        />
      </TransparentScroller>
      <TextImageCarouselOnScroll
        carouselData={carouselProps1}
        contentListData={summary5}
      />
      <Video
        {...video3}
        height={`${breakpoint < 2 ? Math.round(0.8 * 0.56 * window.innerWidth) : '360'}`}
        width={`${breakpoint < 2 ? Math.round(0.8 * window.innerWidth) : '640'}`}
        autoplay={0}
        muted
        className="smilegate-page__video3"
      />
      <Footer />
    </SmilegatePageContainer>
  );
};

export default SmilegatePage;

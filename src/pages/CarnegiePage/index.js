import React, { useContext } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Jumbotron from 'components/Jumbotron';
import TitleSection from 'components/TitleSection';
import { BrowserContext } from 'constants/contexts';
import LazyLoadImage from 'components/LazyLoadImage';
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
} from './carnegie-data';
import CarnegiePageContainer from './styles';

// Masters at Carnegie Mellon university page
function CarnegiePage() {
  const { breakpoint } = useContext(BrowserContext);
  return (
    <CarnegiePageContainer className="carnegie-page">
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
        className="carnegie-page__summary1"
      />
      <LazyLoadImage
        imageUrl={imageProps1.imageUrl}
        imageAlt={imageProps1.imageAlt}
        width="720px"
        height="404px"
        className="carnegie-page__image1"
      />
      <ContentList
        data={summary2}
        alignment="full"
        browserHeight={window.innerHeight}
        className="carnegie-page__summary2"
      />
      <div className="carnegie-page__holder1">
        <Video
          {...video1}
          height={`${breakpoint < 2 ? Math.round(0.8 * 0.56 * window.innerWidth) : '360'}`}
          width={`${breakpoint < 2 ? Math.round(0.8 * window.innerWidth) : '640'}`}
          autoplay={0}
          muted={1}
          className="carnegie-page__video1"
        />
        <ContentList
          alignment="full"
          browserHeight={window.innerHeight}
          data={summary3}
          heading="1. Shaft (kinect experience)"
          className="carnegie-page__summary3"
        />
      </div>
      <TransparentScroller
        className="carnegie-page__transparent-scroller"
        background={colors.ABYSS}
      >
        <Video
          {...video2}
          height={`${breakpoint < 2 ? Math.round(0.8 * 0.56 * window.innerWidth) : '360'}`}
          width={`${breakpoint < 2 ? Math.round(0.8 * window.innerWidth) : '640'}`}
          autoplay={0}
          muted={1}
          className="carnegie-page__video2"
        />
        <ContentList
          alignment="full"
          browserHeight={window.innerHeight}
          data={summary4}
          heading="2. Sailing cruise (HMD + controller experience)"
          className="carnegie-page__summary4"
        />
      </TransparentScroller>
      <TextImageCarouselOnScroll
        carouselData={carouselProps1}
        contentListData={summary5}
      />
      <div style={{ height: '400px', background: colors.LATTE }} />
      <div style={{ padding: '48px 0 0 0' }}>
        <Video
          {...video3}
          height={`${breakpoint < 2 ? Math.round(0.8 * 0.56 * window.innerWidth) : '360'}`}
          width={`${breakpoint < 2 ? Math.round(0.8 * window.innerWidth) : '640'}`}
          autoplay={0}
          muted={1}
          className="carnegie-page__video3"
        />
      </div>
      <Footer />
    </CarnegiePageContainer>
  );
}

export default CarnegiePage;

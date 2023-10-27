import React, { lazy, useContext } from 'react';
import { BrowserContext } from 'constants/contexts';
import colors from 'constants/colors';
import {
  jumbotronProps,
  jobTitle,
  summary1,
  summary2,
  summary3,
  summary4,
  summary5,
  summary6,
  summary7,
  summary8,
  summary9,
  duration,
  carouselProps1,
  imageProps1,
  video1,
  video2,
  video3,
  video4,
} from './smallab-data';
import SmallabPageContainer from './styles';

const Header = lazy(() => import('components/Header'));
const Footer = lazy(() => import('components/Footer'));
const Jumbotron = lazy(() => import('components/Jumbotron'));
const TitleSection = lazy(() => import('components/TitleSection'));
const YoutubeVideo = lazy(() => import('components/Video/youtube'));
const Video = lazy(() => import('components/Video'));
const TextImageCarouselOnScroll = lazy(() => import('comboComponents/TextImageCarouselOnScroll'));
const TransparentScroller = lazy(() => import('components/TransparentScroller'));
const ContentList = lazy(() => import('components/ContentList'));
const LazyLoadImage = lazy(() => import('components/LazyLoadImage'));

// Smallab work experience page
function SmallabPage() {
  const { breakpoint } = useContext(BrowserContext);
  return (
    <SmallabPageContainer className="smallab-page">
      <Jumbotron
        data={jumbotronProps}
      />
      <TitleSection
        heading={jobTitle.title}
        subHeading={jobTitle.company}
        duration={jobTitle.duration}
      />
      <Header />
      <YoutubeVideo
        {...video1}
        height={`${breakpoint < 2 ? Math.round(0.8 * 0.56 * window.innerWidth) : '360'}`}
        width={`${breakpoint < 2 ? Math.round(0.8 * window.innerWidth) : '640'}`}
        autoplay={1}
        muted={1}
        className="smallab-page__video1"
      />
      <ContentList
        data={summary1}
        alignment="full"
        browserHeight={window.innerHeight}
        heading={duration.heading}
        subHeading={duration.subHeading}
        className="smallab-page__summary1"
      />
      <LazyLoadImage
        imageUrl={imageProps1.imageUrl}
        imageAlt={imageProps1.imageAlt}
        width="540px"
        height="406px"
        className="smallab-page__image1"
      />
      <ContentList
        data={summary2}
        alignment="right"
        browserHeight={window.innerHeight}
        className="smallab-page__summary2"
      />
      <TextImageCarouselOnScroll
        carouselData={carouselProps1}
        contentListData={summary3}
      />
      <div className="smallab-page__holder">
        <Video
          {...video2}
          height={`${breakpoint < 2 ? Math.round(0.8 * 0.56 * window.innerWidth) : '360'}`}
          width={`${breakpoint < 2 ? Math.round(0.8 * window.innerWidth) : '640'}`}
          autoplay={0}
          muted={1}
          className="smallab-page__video2"
        />
        <ContentList
          alignment="full"
          browserHeight={window.innerHeight}
          data={summary5}
          heading={summary4}
          className="smallab-page__summary5"
        />
      </div>
      <TransparentScroller
        className="smallab-page__transparent-scroller"
        background={colors.LATTE}
      >
        <ContentList
          alignment="full"
          browserHeight={window.innerHeight}
          data={summary9}
          heading={summary8}
          className="smallab-page__summary7"
        />
        <Video
          {...video4}
          height={`${breakpoint < 2 ? Math.round(0.8 * 0.56 * window.innerWidth) : '360'}`}
          width={`${breakpoint < 2 ? Math.round(0.8 * window.innerWidth) : '640'}`}
          autoplay={0}
          muted={1}
          className="smallab-page__video3"
        />
      </TransparentScroller>
      <div style={{ padding: '44px 0 24px 0' }}>
        <Video
          {...video3}
          height={`${breakpoint < 2 ? Math.round(0.8 * 0.56 * window.innerWidth) : '360'}`}
          width={`${breakpoint < 2 ? Math.round(0.8 * window.innerWidth) : '640'}`}
          autoplay={0}
          muted={1}
          className="smallab-page__video4"
        />
      </div>
      <ContentList
        alignment="full"
        browserHeight={window.innerHeight}
        data={summary7}
        heading={summary6}
        className="smallab-page__summary9"
      />
      <Footer />
    </SmallabPageContainer>
  );
}

export default SmallabPage;

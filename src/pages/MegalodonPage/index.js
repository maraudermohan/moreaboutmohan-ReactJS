import React, { lazy, useContext } from 'react';
import { BrowserContext } from 'constants/contexts';
import colors from 'constants/colors';
import {
  jumbotronProps,
  jobTitle,
  summary1,
  summary3,
  summary4,
  summary5,
  duration,
  carouselProps1,
  imageProps1,
  video1,
  video2,
  video3,
} from './megalodon-data';
import MegalodonPageContainer from './styles';

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

// Megalodon work experience page
function MegalodonPage() {
  const { breakpoint } = useContext(BrowserContext);
  return (
    <MegalodonPageContainer className="megalodon-page">
      <Jumbotron
        data={jumbotronProps}
      />
      <TitleSection
        heading={jobTitle.title}
        subHeading={jobTitle.company}
        duration={jobTitle.duration}
      />
      <Header />
      <div className="megalodon-page__holder">
        <YoutubeVideo
          {...video1}
          height={`${breakpoint < 2 ? Math.round(0.8 * 0.56 * window.innerWidth) : '360'}`}
          width={`${breakpoint < 2 ? Math.round(0.8 * window.innerWidth) : '640'}`}
          autoplay={0}
          muted={1}
          className="megalodon-page__video1"
        />
        <ContentList
          data={summary1}
          alignment="full"
          browserHeight={window.innerHeight}
          heading={duration.heading}
          subHeading={duration.subHeading}
          className="megalodon-page__summary1"
        />
        <LazyLoadImage
          imageUrl={imageProps1.imageUrl}
          imageAlt={imageProps1.imageAlt}
          width="540px" // 540 360 300 200
          height="360px"
          className="megalodon-page__image1"
        />
        <ContentList
          data={summary3}
          alignment="right"
          browserHeight={window.innerHeight}
          className="megalodon-page__summary2"
        />
      </div>
      <TransparentScroller
        className="megalodon-page__transparent-scroller"
        background={colors.LATTE}
      >
        <Video
          {...video2}
          height={`${breakpoint < 2 ? Math.round(0.8 * 0.56 * window.innerWidth) : '360'}`}
          width={`${breakpoint < 2 ? Math.round(0.8 * window.innerWidth) : '640'}`}
          autoplay={0}
          muted={1}
          className="megalodon-page__video2"
        />
        <ContentList
          alignment="full"
          browserHeight={window.innerHeight}
          data={summary4}
          className="megalodon-page__summary4"
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
        muted={1}
        className="megalodon-page__video3"
      />
      <Footer />
    </MegalodonPageContainer>
  );
}

export default MegalodonPage;

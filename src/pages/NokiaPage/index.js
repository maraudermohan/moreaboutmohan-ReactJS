import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Jumbotron from 'components/Jumbotron';
import TitleSection from 'components/TitleSection';
import ContentList from 'components/ContentList';
import LazyLoadImage from 'components/LazyLoadImage';
import {
  jumbotronProps,
  jobTitle,
  summary1,
  duration,
  imageProps1,
} from './nokia-data';
import NokiaPageContainer from './styles';

// Nokia work experience page
const NokiaPage = () => (
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

export default NokiaPage;

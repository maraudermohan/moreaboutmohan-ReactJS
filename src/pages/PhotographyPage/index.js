import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import LazyLoadImage from 'components/LazyLoadImage';
import { StyledH1 } from 'components/Typography';
import colors from 'constants/colors';
import imageList from './data';
import {
  PhotographyPageContainer,
  ImageContainer,
  Gradient,
} from './styles';

// Page component for all my photography works and performances
const PhotographyPage = () => (
  <PhotographyPageContainer className="photography-page">
    <Header />
    <StyledH1>Arts & Photography</StyledH1>
    <Gradient>
      <ImageContainer>
        {
          imageList.map((image, index) => {
            if (index % 2 === 1) {
              return (
                <LazyLoadImage
                  key={image}
                  imageUrl={image}
                  imageAlt={image}
                  height="auto"
                />
              );
            }
            return null;
          })
        }
      </ImageContainer>
      <ImageContainer>
        {
          imageList.map((image, index) => {
            if (index % 2 === 0) {
              return (
                <LazyLoadImage
                  key={image}
                  imageUrl={image}
                  imageAlt={image}
                  height="auto"
                />
              );
            }
            return null;
          })
        }
      </ImageContainer>
    </Gradient>
    <Footer hoverColor={colors.BLUSH} />
  </PhotographyPageContainer>
);

export default PhotographyPage;

import React, { lazy } from 'react';
import Headx from 'headx';

import { StyledH1 } from 'components/Typography';
import colors from 'constants/colors';
import imageList from './data';
import {
  PhotographyPageContainer,
  ImageContainer,
  Gradient,
} from './styles';

const Header = lazy(() => import('components/Header'));
const Footer = lazy(() => import('components/Footer'));
const LazyLoadImage = lazy(() => import('components/LazyLoadImage'));

// Page component for all my photography works and performances
function PhotographyPage() {
  return (
    <PhotographyPageContainer className="photography-page">
      <Headx
        title="Photography - Mohan Subramanian"
      />
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
}

export default PhotographyPage;

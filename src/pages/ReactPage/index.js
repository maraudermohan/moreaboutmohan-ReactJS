import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Headx from 'headx';

import Header from 'components/Header';
import Footer from 'components/Footer';
import LazyLoadImage from 'components/LazyLoadImage';
import { StyledH1, StyledH3, StyledSubtext } from 'components/Typography';
import colors from 'constants/colors';
import {
  data,
  ReactPageContainer,
} from './styles';

// Page component that renders copy and links related to work experience
function ReactPage() {
  const browserWidth = window.innerWidth;

  useEffect(() => {}, [window.innerWidth, window.innerHeight]);

  return (
    <ReactPageContainer className="react-page">
      <Headx
        title="React projects - Mohan Subramanian"
      />
      <Header />
      <StyledH1 className="page__title">{'React \xa0 side-projects'}</StyledH1>
      {
        data.map(({
          imageUrl,
          imageAlt,
          title,
          subTitle,
          techInfo,
          href,
        }) => {
          const ProjectContainer = title === 'Intuit quickpark' ? 'a' : Link;
          return (
            <ProjectContainer
              to={href}
              href={href}
              key={title}
              className="react-page__link"
            >
              <LazyLoadImage
                imageUrl={imageUrl}
                imageAlt={imageAlt}
                width={`${0.85 * browserWidth}px`}
                height={`${0.425 * browserWidth}px`}
              />
              <div>
                <StyledH3 className="react-page__title">{title}</StyledH3>
                <StyledSubtext className="react-page__info">{techInfo}</StyledSubtext>
                <StyledSubtext className="react-page__subtitle">{subTitle}</StyledSubtext>
              </div>
            </ProjectContainer>
          );
        })
      }
      <Footer hoverColor={colors.AZURE} />
    </ReactPageContainer>
  );
}

export default ReactPage;

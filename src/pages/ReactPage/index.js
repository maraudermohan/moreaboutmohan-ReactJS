import React, { useEffect } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import LazyLoadImage from 'components/LazyLoadImage';
import { StyledH1, StyledH3, StyledSubtext } from 'components/Typography';
import colors from 'constants/colors';
import {
  data,
  ProjectContainer,
  ResumePageContainer,
} from './styles';

// Page component that renders copy and links related to work experience
const ReactPage = () => {
  const browserWidth = window.innerWidth;

  useEffect(() => {}, [window.innerWidth, window.innerHeight]);

  return (
    <ResumePageContainer className="resume-page">
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
        }) => (
          <ProjectContainer
            to={href}
            key={title}
            className="react__link"
          >
            <LazyLoadImage
              imageUrl={imageUrl}
              imageAlt={imageAlt}
              width={`${0.85 * browserWidth}px`}
              height={`${0.425 * browserWidth}px`}
            />
            <div>
              <StyledH3 className="react__title">{title}</StyledH3>
              <StyledSubtext className="react__info">{techInfo}</StyledSubtext>
              <StyledSubtext className="react__subtitle">{subTitle}</StyledSubtext>
            </div>
          </ProjectContainer>
        ))
      }
      <Footer hoverColor={colors.AZURE} />
    </ResumePageContainer>
  );
};

export default ReactPage;

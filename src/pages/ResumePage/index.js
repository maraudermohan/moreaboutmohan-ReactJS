import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import LazyLoadImage from 'components/LazyLoadImage';
import ResizeHOC from 'components/ResizeHOC';
import { StyledH1, StyledH3, StyledSubtext } from 'components/Typography';
import TimelineBox from 'components/TimelineBox';
import TimelineYear from 'components/TimelineYear';
import { DownloadIcon } from 'images/icons';
import {
  data,
  BoxSubcontainer,
  DownloadContainer,
  downloadImg,
  ResumePageContainer,
  Timeline,
} from './styles';

const ResumePage = () => {
  const browserWidth = window.innerWidth;

  return (
    <ResumePageContainer>
      <ResizeHOC>
        <Header />
        <StyledH1>Work Experience</StyledH1>
        <DownloadContainer href="/mohan_subramanian_resume.pdf">
          <LazyLoadImage
            imageUrl={downloadImg}
            imageAlt="Download resume"
            width={`${0.9 * browserWidth}px`}
            height="auto"
          />
          <span />
          <div>
            <DownloadIcon />
            <StyledH3>Resume</StyledH3>
          </div>
        </DownloadContainer>
        <StyledSubtext style={{ margin: '64px 0 8px 0' }}>Present</StyledSubtext>
        <div style={{ position: 'relative', width: '100%' }}>
          <TimelineYear />
          <TimelineBox {...data[0]} />
          <TimelineYear>2016</TimelineYear>
          <TimelineBox {...data[1]} />
          <TimelineYear>2014</TimelineYear>
          <TimelineBox {...data[2]} />
          <TimelineYear>2013</TimelineYear>
          <div style={{ position: 'relative' }}>
            <TimelineBox {...data[3]} />
            <BoxSubcontainer>
              <TimelineBox {...data[4]} />
              <TimelineBox {...data[5]} />
              <TimelineBox {...data[6]} />
              <TimelineBox {...data[7]} />
            </BoxSubcontainer>
          </div>
          <TimelineYear>2011</TimelineYear>
          <TimelineBox {...data[8]} />
          <TimelineYear>2009</TimelineYear>
          <TimelineBox {...data[9]} />
          <TimelineYear>2005</TimelineYear>
          <Timeline />
        </div>
      </ResizeHOC>
      <Footer />
    </ResumePageContainer>
  );
};

export default ResumePage;

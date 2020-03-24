import React, {
  useEffect,
  useContext,
  useRef,
  useState,
} from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import LazyLoadImage from 'components/LazyLoadImage';
import { StyledH1, StyledH3, StyledSubtext } from 'components/Typography';
import TimelineBox from 'components/TimelineBox';
import TimelineYear from 'components/TimelineYear';
import { BrowserContext, ScrollPositionContext } from 'constants/contexts';
import { DownloadIcon } from 'images/icons';
import colors from 'constants/colors';
import {
  data,
  BoxSubcontainer,
  DownloadContainer,
  downloadImg,
  Mask,
  ResumePageContainer,
  Timeline,
  TimelineContainer,
} from './styles';

// Page component that renders copy and links related to work experience
const ResumePage = () => {
  const browserWidth = window.innerWidth;
  const {
    breakpoint = 'lg',
  } = useContext(BrowserContext);
  const {
    bottomScroll,
  } = useContext(ScrollPositionContext);
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const maskRef = useRef(null);
  const [offsetObj, setOffsetObj] = useState({
    first: browserWidth,
    second: browserWidth,
    third: browserWidth,
    show: false,
  });
  const [animateMask, setAnimateMask] = useState(true);

  useEffect(() => {
    if (offsetObj.first !== containerRef1.current.offsetTop) {
      // CSS positions of each TimelineContainer
      const offset = offsetObj;
      offset.first = containerRef1.current.offsetTop;
      offset.second = offset.first + containerRef2.current.offsetTop;
      offset.third = offset.second + containerRef3.current.offsetTop;
      setOffsetObj(offset);
    }
    if (bottomScroll && bottomScroll > 1) {
      // Add fade-in animation to Timeline
      const offset = offsetObj;
      offset.show = true;
      setOffsetObj(offset);
    }
    const containerElem = containerRef1.current;
    // Styles for the mask-animation
    if (bottomScroll >= containerElem.offsetTop + containerElem.offsetHeight + 150) {
      maskRef.current.classList.remove('animate');
      maskRef.current.classList.remove('pre-animate');
      setAnimateMask(false);
    } else if (animateMask && bottomScroll < containerElem.offsetTop) {
      maskRef.current.classList.remove('animate');
      maskRef.current.classList.add('pre-animate');
    } else if (animateMask && bottomScroll >= containerElem.offsetTop) {
      maskRef.current.classList.remove('pre-animate');
      maskRef.current.classList.add('animate');
    }
  }, [breakpoint, bottomScroll]);

  return (
    <ResumePageContainer className="resume-page">
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
      <TimelineContainer ref={containerRef1} $show={offsetObj.show}>
        <TimelineYear offsetAhead={offsetObj.first} />
        <TimelineBox offsetAhead={offsetObj.first} {...data[0]} />
        <TimelineYear offsetAhead={offsetObj.first}>2016</TimelineYear>
        <TimelineBox offsetAhead={offsetObj.first} {...data[1]} />
        <TimelineYear offsetAhead={offsetObj.first}>2014</TimelineYear>
        <TimelineBox offsetAhead={offsetObj.first} {...data[2]} />
        <TimelineYear offsetAhead={offsetObj.first}>2013</TimelineYear>
        <TimelineContainer ref={containerRef2} $show={offsetObj.show}>
          <TimelineBox offsetAhead={offsetObj.second} {...data[3]} />
          <BoxSubcontainer ref={containerRef3}>
            <TimelineBox offsetAhead={offsetObj.third} {...data[4]} />
            <TimelineBox offsetAhead={offsetObj.third} {...data[5]} />
            <TimelineBox offsetAhead={offsetObj.third} {...data[6]} />
            <TimelineBox offsetAhead={offsetObj.third} {...data[7]} />
          </BoxSubcontainer>
        </TimelineContainer>
        <TimelineYear offsetAhead={offsetObj.first}>2011</TimelineYear>
        <TimelineBox offsetAhead={offsetObj.first} {...data[8]} />
        <TimelineYear offsetAhead={offsetObj.first}>2009</TimelineYear>
        <TimelineBox offsetAhead={offsetObj.first} {...data[9]} />
        <TimelineYear offsetAhead={offsetObj.first}>2005</TimelineYear>
        <Timeline />
      </TimelineContainer>
      <Mask ref={maskRef} $animateStartPosition={offsetObj.first} />
      <Footer hoverColor={colors.DAYLILY} />
    </ResumePageContainer>
  );
};

export default ResumePage;

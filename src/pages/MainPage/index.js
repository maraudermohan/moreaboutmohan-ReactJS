import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import Header from 'components/Header';
import { StyledH2, StyledH4 } from 'components/Typography';
import { BrowserContext } from 'constants/contexts';
import { email, github, linked } from 'images/icons';
import {
  backgroundData,
  backgroundDataIndex,
  MainPageContainer,
  IconContainer,
  ImageBgContainer,
  TextBox,
} from './styles';

// Page component that renders copy and links related to work experience
const MainPage = () => {
  const imageBgRef = useRef(null);
  const { breakpoint } = useContext(BrowserContext);
  const [mouseXY, setMouseXY] = useState({
    x: 0,
    y: 0,
  });
  const [browserParams, setBrowserParams] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const mouseMoveHandler = (e) => {
    setMouseXY({
      x: Math.round((-12 * (window.innerWidth - 2 * e.clientX)) / window.innerWidth),
      y: Math.round((-6 * (window.innerHeight - 2 * e.clientY)) / window.innerHeight),
    });
  };

  const iconClickhandler = (href) => {
    window.open(href);
  };

  useEffect(() => {
    setBrowserParams({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, [
    breakpoint,
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    let throttle = false;
    imageBgRef.current.addEventListener('mousemove', (e) => {
      if (!throttle) {
        mouseMoveHandler(e);
        throttle = true;
        setTimeout(() => { throttle = false; }, 150);
      }
    });
  }, []);

  return (
    <MainPageContainer
      ref={imageBgRef}
      className="main-page"
      $width={browserParams.width}
      $height={browserParams.height}
      style={{ backgroundImage: `url(${backgroundData[backgroundDataIndex]})` }}
    >
      {
        breakpoint > 2
        && (
          <StyledH2 className="main-page__title">Mohan Subramanian</StyledH2>
        )
      }
      <Header isMainPage={breakpoint > 2} />
      <ImageBgContainer />
      <TextBox
        className="main-page__text-box"
        $width={browserParams.width}
        style={{ transform: `translateX(${mouseXY.x}px) translateY(${mouseXY.y}px)` }}
      >
        <StyledH4>
          Senior Frontend Developer
          <br />
          with &lsquo;Game Designer&rsquo; skills
          <br />
          9+ years of experience
          <br />
          Fueled by passion & creativity
        </StyledH4>
      </TextBox>
      <IconContainer className="main-page__icon">
        {
          [email, github, linked].map(({
            Icon,
            href,
          }) => (
            <Icon
              key={`${Icon}-${href}`}
              onClick={() => { iconClickhandler(href); }}
            />
          ))
        }
      </IconContainer>
    </MainPageContainer>
  );
};

export default MainPage;

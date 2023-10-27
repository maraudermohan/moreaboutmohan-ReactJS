import React, {
  lazy,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import Headx from 'headx';
import { Link } from 'react-router-dom';

import { StyledH2, StyledH4 } from 'components/Typography';
import { BrowserContext } from 'constants/contexts';
import {
  email,
  github,
  linked,
  info,
} from 'images/icons';
import {
  backgroundData,
  backgroundDataIndex,
  MainPageContainer,
  IconContainer,
  ImageContainer,
  ImageBgContainer,
  TextBox,
} from './styles';

const Header = lazy(() => import('components/Header'));

// Page component that renders copy and links related to work experience
function MainPage({
  is404 = false,
}) {
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
      x: Math.round((-8 * (window.innerWidth - 2 * e.clientX)) / window.innerWidth),
      y: Math.round((-4 * (window.innerHeight - 2 * e.clientY)) / window.innerHeight),
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
    >
      <Headx
        title="Mohan Subramanian - Portfolio"
      />
      <ImageContainer
        style={{
          backgroundImage: `url(${backgroundData[backgroundDataIndex]})`,
          transform: `translateX(${-1 * mouseXY.x}px) translateY(${-1 * mouseXY.y}px)`,
        }}
      />
      <StyledH2 className="main-page__title">{`Mohan ${breakpoint > 3 ? 'Subramanian' : 'S'}`}</StyledH2>
      <Header isMainPage={breakpoint > 2} />
      <ImageBgContainer />
      <TextBox
        className="main-page__text-box"
        $width={browserParams.width}
        style={{ transform: `translateX(${mouseXY.x}px) translateY(${mouseXY.y}px)` }}
      >
        {
          is404
            ? (
              <StyledH4>
                <span>404</span>
                <br />
                Sorry, the page could not be found
                <br />
                <Link to="/" className="return__title">Return to Homepage</Link>
              </StyledH4>
            ) : (
              <StyledH4>
                Principal Frontend Engineer
                <br />
                with &lsquo;Game Designer&rsquo; skills
                <br />
                12+ years of experience
                <br />
                Fueled by passion & creativity
              </StyledH4>
            )
        }
      </TextBox>
      <IconContainer className="main-page__icon">
        {
          [email, github, linked, info].map(({
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
}

MainPage.propTypes = {
  is404: PropTypes.bool,
};

export default MainPage;

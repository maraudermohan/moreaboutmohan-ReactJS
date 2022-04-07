import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LazyLoadImage from 'components/LazyLoadImage';
import { BrowserContext, ScrollPositionContext } from 'constants/contexts';
import Nav from 'components/Nav';
import { HeaderIcon } from 'images/icons';
import {
  HeaderContainer,
  LogoContainer,
  StyledSpan1,
} from './styles';

// Header component that displays name and trigger for Nav component
function Header({
  isMainPage = false,
}) {
  const {
    breakpoint,
  } = useContext(BrowserContext);
  const {
    topScroll = 0,
  } = useContext(ScrollPositionContext);
  const [showNav, setShowNav] = useState(isMainPage);
  const [isScrolling, setIsScrolling] = useState(false);

  const clickHandler = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    setShowNav(isMainPage);
  }, [isMainPage]);

  useEffect(() => {
    if (topScroll <= 2) {
      setIsScrolling(false);
    } else {
      setIsScrolling(true);
    }
  }, [topScroll]);

  return (
    <>
      {
        !isMainPage
        && (
          <HeaderContainer className={isScrolling ? 'scrolling' : ''}>
            <LogoContainer
              $isNavOpen={showNav}
              onClick={clickHandler}
              className="header__logo"
            >
              <LazyLoadImage imageUrl={HeaderIcon} />
              <StyledSpan1 />
            </LogoContainer>
            <Link to="/" className="header__title">
              {`Mohan ${breakpoint > 3 ? 'Subramanian' : 'S'}`}
            </Link>
          </HeaderContainer>
        )
      }
      {
        showNav
          && (
            <Nav
              clickHandler={clickHandler}
            />
          )
      }
    </>
  );
}

Header.propTypes = {
  isMainPage: PropTypes.bool,
};

export default Header;

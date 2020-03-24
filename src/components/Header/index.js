import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import LazyLoadImage from 'components/LazyLoadImage';
import { BrowserContext } from 'constants/contexts';
import Nav from 'components/Nav';
import { HeaderIcon } from 'images/icons';
import { StyledH4 } from 'components/Typography';
import {
  HeaderContainer,
  LogoContainer,
  StyledSpan1,
} from './styles';

// Header component that displays name and trigger for Nav component
const Header = ({
  isMainPage = false,
}) => {
  const {
    breakpoint,
  } = useContext(BrowserContext);
  const [showNav, setShowNav] = useState(isMainPage);

  const clickHandler = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    setShowNav(isMainPage);
  }, [isMainPage]);

  return (
    <>
      {
        !isMainPage
        && (
          <HeaderContainer>
            <LogoContainer
              $isNavOpen={showNav}
              onClick={clickHandler}
              className="header__logo"
            >
              <LazyLoadImage imageUrl={HeaderIcon} />
              <StyledSpan1 />
            </LogoContainer>
            <StyledH4 className="header__title">
              {`Mohan ${breakpoint > 3 ? 'Subramanian' : 'S'}`}
            </StyledH4>
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
};

Header.propTypes = {
  isMainPage: PropTypes.bool,
};

export default Header;

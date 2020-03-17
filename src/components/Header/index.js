import React, {
  useContext,
  useState,
} from 'react';

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
const Header = () => {
  const {
    breakpoint,
  } = useContext(BrowserContext);
  const [showNav, setShowNav] = useState(false);

  const clickHandler = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <HeaderContainer>
        <LogoContainer
          $isNavOpen={showNav}
          onClick={clickHandler}
        >
          <LazyLoadImage imageUrl={HeaderIcon} />
          <StyledSpan1 />
        </LogoContainer>
        <StyledH4>
          {`Mohan ${breakpoint > 3 ? 'Subramanian' : 'S'}`}
        </StyledH4>
      </HeaderContainer>
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

export default Header;

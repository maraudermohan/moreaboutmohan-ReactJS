import React, { useState } from 'react';

import LazyLoadImage from 'components/LazyLoadImage';
import Nav from 'components/Nav';
import { HeaderIcon } from 'images/icons';
import { StyledH4 } from 'components/Typography';
import {
  HeaderContainer,
  LogoContainer,
  StyledSpan1,
  StyledSpan2,
} from './styles';

const Header = () => {
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
          <StyledSpan2 />
        </LogoContainer>
        <StyledH4>
          Mohan Subramanian
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

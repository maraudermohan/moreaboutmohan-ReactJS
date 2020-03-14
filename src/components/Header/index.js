import React from 'react';

import LazyLoadImage from 'components/LazyLoadImage';
import { HeaderIcon } from 'images/icons';
import { StyledH4 } from 'components/Typography';
import {
  HeaderContainer,
  LogoContainer,
  StyledSpan1,
  StyledSpan2,
} from './styles';

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <LazyLoadImage imageUrl={HeaderIcon} />
      <StyledSpan1 />
      <StyledSpan2 />
    </LogoContainer>
    <StyledH4>
      Mohan Subramanian
    </StyledH4>
  </HeaderContainer>
);

export default Header;

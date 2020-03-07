import styled from 'styled-components';

import { StyledImg } from 'components/LazyLoadImage/styles';

const ScrollCarouselContainer = styled.div`
  width: 100%;

  ${StyledImg} {
    display: block;
    margin: 300px 0 0 0;
    max-width: 540px;
  }
`;

export default ScrollCarouselContainer;

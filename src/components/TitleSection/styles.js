import styled from 'styled-components';
import colors from 'constants/colors';

import { StyledH1, StyledH3 } from 'components/Typography';

const TitleSectionContainer = styled.div`
  position: relative;
  display: flex;
  bottom: 150px;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  color: ${colors.LATTE};
  text-shadow: 4px 4px 7px ${colors.ABYSS},
              1px -1px 7px ${colors.ABYSS},
              -1px -1px 7px ${colors.PANTONE};

  ${StyledH1},
  ${StyledH3} {
    font-family: 'Acme', san-serif;
    color: ${colors.LATTE};
  }
`;

export default TitleSectionContainer;

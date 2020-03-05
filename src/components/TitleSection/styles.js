import styled from 'styled-components';
import { colors, theme } from 'constants/colors';

const TitleSectionContainer = styled.div`
  position: relative;
  display: flex;
  bottom: 150px;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  color: ${colors.WHITE};
  text-shadow: 4px 4px 7px ${theme.BASE},
              -1px -1px 7px ${colors.CYAN};
`;

export default TitleSectionContainer;

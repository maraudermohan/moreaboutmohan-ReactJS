import styled from 'styled-components';
import colors from 'constants/colors';

const MainContainer = styled.main`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  background: ${colors.LATTE};
`;

export const TextContainer = styled.div`
  width: 95%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 0;

  p {
    margin: 0;
  }

  li {
    padding: 5px 0;
  }
`;

export default MainContainer;

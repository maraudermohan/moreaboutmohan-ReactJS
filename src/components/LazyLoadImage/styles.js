import styled from 'styled-components';
import colors from 'constants/colors';

// Styled <img> and <div> elements
const StyledImg = styled.img`
  display: ${(props) => (props.hasLoaded ? 'block' : 'none')};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

const StyledDiv = styled.div`
  width: ${(props) => props.$height};
  height: ${(props) => props.$width};
  background: ${colors.white};
`;

export {
  StyledDiv,
  StyledImg,
};

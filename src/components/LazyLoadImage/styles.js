import styled from 'styled-components';
import { colors } from 'constants/colors';

// Styled <img> and <div> elements
const StyledImg = styled.img`
  opacity: ${(props) => (props.hasLoaded ? 1 : 0)};
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
`;

const StyledImgSubstitute = styled.div`
  width: ${(props) => props.$height};
  height: ${(props) => props.$width};
  background: ${colors.white};
`;

export {
  StyledImgSubstitute,
  StyledImg,
};

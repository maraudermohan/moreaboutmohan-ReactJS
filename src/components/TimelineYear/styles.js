import styled, { css } from 'styled-components';

import { StyledSubtext } from 'components/Typography';
import colors from 'constants/colors';

const YearContainer = styled.section`
  position: relative;
  line-height: 6px;
  opacity: 0;
  transition: all 0.3s;
  ${(props) => (props.$alignment === 'left' ? css`
      left: -100px; 
      margin-right: calc(50% - 3px);
      text-align: right;
      span {
        margin-left: 8px; 
      }
    ` : css`
      margin-left: 56%;
      text-align: left;
      span {
        margin-right: 8px; 
      }
    `)}

  &.animated {
    opacity: 1;
    ${(props) => (props.$alignment === 'left' ? css`
        left: 0;
      ` : css`
        margin-left: calc(50% - 3px);
      `)}
  }

  ${StyledSubtext} {
    display: inline-block;
    color: ${colors.LATTE};
  }

  span {
    display: inline-block;
    position: relative;
    top: -2px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${colors.LATTE};
  }
`;

export default YearContainer;

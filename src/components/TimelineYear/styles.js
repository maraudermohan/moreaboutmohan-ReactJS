import styled, { css } from 'styled-components';

import { StyledSubtext } from 'components/Typography';
import colors from 'constants/colors';

const YearContainer = styled.section`
  line-height: 6px;
  ${(props) => (props.$alignment === 'left' ? css`
      margin-right: calc(50% - 3px);
      text-align: right;
      span {
        margin-left: 8px; 
      }
    ` : '')}

  ${(props) => (props.$alignment === 'right' ? css`
      margin-left: calc(50% - 3px);
      text-align: left;
      span {
        margin-right: 8px; 
      }
    ` : '')}

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

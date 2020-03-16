import styled, { css } from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';
import { StyledH4 } from 'components/Typography';

const BoxContainer = styled.section`
  display: flex;
  align-items: center;
  width: 47%;
  height: ${(props) => (props.$height * 60)}px;
  padding: 4px 0;
  ${(props) => (props.$alignment === 'left' ? css`
    justify-content: flex-end;
    margin-right: 53%;
  ` : '')}

  ${(props) => (props.$alignment === 'right' ? css`
    justify-content: flex-start;
    margin-left: 53%;
  ` : '')}

  ${StyledH4} {
    color: ${colors.LATTE};
  }

  > div {
    ${(props) => (props.$alignment === 'left' ? css`
      padding-right: 12px;
    ` : '')}

    ${(props) => (props.$alignment === 'right' ? css`
      padding-left: 12px;
    ` : '')}
  }

  p {
    color: ${colors.LATTE};
    font-size: 18px;
  }

  > span {
    display: block;
    width: 24px;
    height: calc(100% - 4px);
    border-top: 2px solid ${colors.LATTE};
    border-bottom: 2px solid ${colors.LATTE};
    ${(props) => (props.$alignment === 'left' ? css`
      background: linear-gradient(90deg, transparent 50%, ${colors.LATTE} 50.1%);
    ` : '')}

    ${(props) => (props.$alignment === 'right' ? css`
      background: linear-gradient(90deg, ${colors.LATTE} 50%, transparent 50.1%);
    ` : '')}
  }

  @media ${mq.uptoTablet} {
    ${StyledH4} {
      font-size: 18px;
    }

    p {
      font-size: 15px;
    }

    > span {
      display: block;
      width: 18px;
    }
  }

  @media ${mq.desktop} {
    width: 400px;
    ${(props) => (props.$alignment === 'left' ? css`
      margin: 0 52% 0 calc(48% - 400px);
    ` : '')}

    ${(props) => (props.$alignment === 'right' ? css`
      margin: 0 calc(48% - 400px) 0 52%;
    ` : '')}

    > div {
      ${(props) => (props.$alignment === 'left' ? css`
        padding-right: 20%;
      ` : '')}

      ${(props) => (props.$alignment === 'right' ? css`
        padding-left: 20%;
      ` : '')}
    }
  }

  &:hover {
    > span {
      border-top: 2px solid ${(props) => props.$color};
      border-bottom: 2px solid ${(props) => props.$color};
      ${(props) => (props.$alignment === 'left' ? css`
        background: linear-gradient(90deg, transparent 50%, ${props.$color} 50.1%);
      ` : '')}
  
      ${(props) => (props.$alignment === 'right' ? css`
        background: linear-gradient(90deg, ${props.$color} 50%, transparent 50.1%);
      ` : '')}
    }

    ${StyledH4},
    p {
      color: ${(props) => props.$color};
    }

  }
`;

export default BoxContainer;

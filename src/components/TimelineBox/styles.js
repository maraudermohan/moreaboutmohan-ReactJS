import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import colors from 'constants/colors';
import mq from 'constants/media-queries';
import { StyledH4 } from 'components/Typography';

const BoxContainer = styled(Link)`
  display: flex;
  position: relative;
  align-items: center;
  width: 47%;
  height: ${(props) => (props.height * 60)}px;
  padding: 4px 0;
  transition: all 0.3s;
  opacity: 0;
  text-decoration: none;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      cursor: pointer;
    }
  }

  ${(props) => (props.alignment === 'left' ? css`
    justify-content: flex-end;
    left: -70px;
    margin-right: 53%;
  ` : css`
    justify-content: flex-start;
    margin-left: 59%;
  `)}

  &.animated {
    opacity: 1;
    ${(props) => (props.alignment === 'left' ? css`
      left: 0;
    ` : css`
      margin-left: 53%;
    `)}
  }

  ${StyledH4} {
    font-family: "Sen", san-serif;
    color: ${colors.LATTE};
  }

  > div {
    transition: all 0.3s;
    ${(props) => (props.alignment === 'left' ? css`
      padding-right: 12px;
    ` : css`
      padding-left: 12px;
    `)}
  }

  p {
    color: ${colors.LATTE};
    font-family: "Sen", san-serif;
    font-size: 18px;
    &:empty {
      display: none;
    }
  }

  > span {
    display: block;
    width: 24px;
    height: calc(100% - 4px);
    border-top: 2px solid ${colors.LATTE};
    border-bottom: 2px solid ${colors.LATTE};
    ${(props) => (props.alignment === 'left' ? css`
      background: linear-gradient(90deg, transparent 50%, ${colors.LATTE} 50.1%);
    ` : css`
      background: linear-gradient(90deg, ${colors.LATTE} 50%, transparent 50.1%);
    `)}
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
    ${(props) => (props.alignment === 'left' ? css`
      margin: 0 58% 0 calc(42% - 400px);
    ` : css`
      margin: 0 calc(42% - 400px) 0 58%;
    `)}

    &.animated {
      ${(props) => (props.alignment === 'left' ? css`
        margin: 0 52% 0 calc(48% - 400px);
      ` : css`
        margin: 0 calc(48% - 400px) 0 52%;
      `)}
    }

    > div {
      ${(props) => (props.alignment === 'left' ? css`
        padding-right: 20%;
      ` : css`
        padding-left: 20%;
      `)}
    }
  }

  @media (hover: hover) and (pointer: fine) {
    &.animated:hover {
      transform: scale(1.03);

      @media ${mq.desktop} {
        width: 350px;
        ${(props) => (props.alignment === 'left' ? css`
          margin: 0 52% 0 calc(48% - 350px);
        ` : '')}

        > div {
          ${(props) => (props.alignment === 'left' ? css`
            padding-right: 19%;
          ` : '')}
        }
      }

      > span {
        border-top: 2px solid ${(props) => props.color};
        border-bottom: 2px solid ${(props) => props.color};
        ${(props) => (props.alignment === 'left' ? css`
          background: linear-gradient(90deg, transparent 50%, ${props.color} 50.1%);
        ` : css`
          background: linear-gradient(90deg, ${props.color} 50%, transparent 50.1%);
        `)}
      }

      ${StyledH4},
      p {
        color: ${(props) => props.color};
      }
    }
  }
`;

export default BoxContainer;

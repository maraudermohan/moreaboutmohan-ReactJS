import styled, { keyframes } from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';

const MainToLeftXL = (width) => keyframes`
  0% {
    left: calc(50% - ${width / 2}px);
    transform: scale(1);
    z-index: 2;
  }
  25% {
    left: 12%;
    transform: scale(1.05);
    z-index: 3;
  }
  50% {
    left: 3%;
    transform: scale(0.9);
    z-index: 2;
  }
  75% {
    left: 7%;
    transform: scale(0.8);
    z-index: 1;
  }
  100% {
    left: 10%;
    transform: scale(0.8);
    z-index: 1;
  }
`;

const RightToMainXL = (width) => keyframes`
  0% {
    right: 10%;
    transform: scale(0.8);
    z-index: 1;
  }
  25% {
    right: 7%;
    transform: scale(0.8);
    z-index: 1;
  }
  50% {
    right: 3%;
    transform: scale(0.9);
    z-index: 2;
  }
  75% {
    right: 12%;
    transform: scale(1.05);
    z-index: 3;
  }
  100% {
    right: calc(50% - ${width / 2}px);
    transform: scale(1);
    z-index: 2;
  }
`;

const LeftToRightXL = (width) => keyframes`
  0% {
    left: 10%;
    right: auto;
    transform: scale(0.8);
    z-index: 1;
  }
  50% {
    left: calc(50% - ${width / 2}px);
    right: auto;
    transform: scale(0.8);
    z-index: 0;
  }
  100% {
    right: 10%;
    left: auto;
    transform: scale(0.8);
    z-index: 1;
  }
`;

const MainToLeftLG = (width) => keyframes`
  0% {
    left: calc(50% - ${width / 2}px);
    transform: scale(1);
    z-index: 2;
  }
  25% {
    left: 6%;
    transform: scale(1.05);
    z-index: 3;
  }
  50% {
    left: -12%;
    transform: scale(0.9);
    z-index: 2;
  }
  75% {
    left: -5%;
    transform: scale(0.8);
    z-index: 1;
  }
  100% {
    left: 0;
    transform: scale(0.8);
    z-index: 1;
  }
`;

const RightToMainLG = (width) => keyframes`
  0% {
    right: 0;
    transform: scale(0.8);
    z-index: 1;
  }
  25% {
    right: -5%;
    transform: scale(0.8);
    z-index: 1;
  }
  50% {
    right: -12%;
    transform: scale(0.9);
    z-index: 2;
  }
  75% {
    right: 6%;
    transform: scale(1.05);
    z-index: 3;
  }
  100% {
    right: calc(50% - ${width / 2}px);
    transform: scale(1);
    z-index: 2;
  }
`;

const LeftToRightLG = (width) => keyframes`
  0% {
    left: 0;
    right: auto;
    transform: scale(0.8);
    z-index: 1;
  }
  50% {
    left: calc(50% - ${width / 2}px);
    right: auto;
    transform: scale(0.8);
    z-index: 0;
  }
  100% {
    right: 0;
    left: auto;
    transform: scale(0.8);
    z-index: 1;
  }
`;

const MainToLeft = (width) => keyframes`
  0% {
    left: calc(50% - ${width / 2}px);
    transform: scale(1);
    z-index: 2;
  }
  50% {
    left: -${width * 0.3}px;
    transform: scale(0.9);
    z-index: 2;
  }
  100% {
    left: -${width * 0.8}px;
    transform: scale(0.9);
    z-index: 1;
  }
`;

const RightToMain = (width) => keyframes`
  0% {
    right: -${width * 0.8}px;
    left: auto;
    transform: scale(0.9);
    z-index: 1;
  }
  50% {
    right: -${width * 0.3}px;
    transform: scale(0.9);
    z-index: 2;
  }
  100% {
    right: calc(50% - ${width / 2}px);
    transform: scale(1);
    z-index: 2;
  }
`;

const LeftToRight = (width) => keyframes`
  0% {
    left: -${width * 0.8}px;
    right: auto;
    transform: scale(0.9);
    z-index: 1;
  }
  50% {
    left: calc(50% - ${width / 2}px);
    right: auto;
    transform: scale(0.8);
    z-index: 0;
  }
  100% {
    right: -${width * 0.8}px;
    left: auto;
    transform: scale(0.8);
    z-index: 1;
  }
`;

export const ShufflerContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: ${(props) => props.$height}px;
  padding: 50px 0;
  text-decoration: none;
  overflow: hidden;
  background: linear-gradient(180deg, ${colors.MAGENTA} 50%, ${colors.LATTE} 50.1%);
`;

export const MainVideoContainer = styled.div`
  display: flex;
  position: absolute;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  border: 1px solid  ${colors.LATTE}F2;
  border-radius: 7px;
  align-items: center;
  transition: all 0.3s;
  z-index: 1;
  overflow: hidden;
  background: ${colors.ABYSS};

  svg {
    width: 40px;
    height: 40px;
    margin: 0 32px; 
    color: ${colors.LATTE};
    fill: ${colors.LATTE};
    transition: all 0.3s;
  }

  @media (hover: hover) and (pointer: fine) {
    &.left:hover,
    &.right:hover {
      background: ${colors.LATTE};
      border-color: ${colors.MAGENTA};
      svg {
        width: 50px;
        height: 50px;
        margin: 0 24px;
        color: ${colors.MAGENTA};
        fill: ${colors.MAGENTA};
      }
    }
  }

  > section {
    width: 100%;
    height: 100%;
  }

  &.main {
    left: calc(50% - ${(props) => props.$width / 2}px);
    transform: scale(1);
    border: none;
    z-index: 2;
  }

  &.main.preload {
    left: 100%;
  }
  
  &.right.preload {
    right: -120%;
  }

  &.left.preload {
    left: -120%;
  }

  &.left {
    justify-content: flex-end;
    left: -${(props) => props.$width * 0.8}px;
    transform: scale(0.9);
    z-index: 1;
    cursor: pointer;
  }

  &.right {
    justify-content: flex-start;
    right: -${(props) => props.$width * 0.8}px;
    transform: scale(0.9);
    z-index: 1;
    cursor: pointer;
  }
  &.MainToLeft {
    > * {
      opacity: 0;
    }
    animation: ${(props) => MainToLeft(props.$width)} .75s linear both;
  }
  &.LeftToRight {
    > * {
      opacity: 0;
    }
    animation: ${(props) => LeftToRight(props.$width)} .75s linear both;
  }
  &.RightToMain {
    > * {
      opacity: 0;
    }
    animation: ${(props) => RightToMain(props.$width)} .75s linear both;
  }
  &.LeftToMain {
    > * {
      opacity: 0;
    }
    animation: ${(props) => MainToLeft(props.$width)} .75s linear reverse both;
  }
  &.RightToLeft {
    animation: ${(props) => LeftToRight(props.$width)} .75s linear reverse both;
  }
  &.MainToRight {
    > * {
      opacity: 0;
    }
    animation: ${(props) => RightToMain(props.$width)} .75s linear reverse both;
  }

  @media ${mq.desktop} {
    &.left {
      justify-content: flex-start;
      left: 0;
      transform: scale(0.8);
    }
    &.right {
      justify-content: flex-end;
      right: 0;
      transform: scale(0.8);
    }
    &.MainToLeft {
      animation: ${(props) => MainToLeftLG(props.$width)} 1.2s linear both;
    }
    &.LeftToRight {
      animation: ${(props) => LeftToRightLG(props.$width)} 1.2s linear both;
    }
    &.RightToMain {
      animation: ${(props) => RightToMainLG(props.$width)} 1.2s linear both;
    }
    &.LeftToMain {
      animation: ${(props) => MainToLeftLG(props.$width)} 1.2s linear reverse both;
    }
    &.RightToLeft {
      animation: ${(props) => LeftToRightLG(props.$width)} 1.2s linear reverse both;
    }
    &.MainToRight {
      animation: ${(props) => RightToMainLG(props.$width)} 1.2s linear reverse both;
    }
  }

  @media ${mq.largeDevice} {
    &.left {
      left: 10%;
    }
    &.right {
      right: 10%;
    }
    &.MainToLeft {
      animation: ${(props) => MainToLeftXL(props.$width)} 1.2s linear both;
    }
    &.LeftToRight {
      animation: ${(props) => LeftToRightXL(props.$width)} 1.2s linear both;
    }
    &.RightToMain {
      animation: ${(props) => RightToMainXL(props.$width)} 1.2s linear both;
    }
    &.LeftToMain {
      animation: ${(props) => MainToLeftXL(props.$width)} 1.2s linear reverse both;
    }
    &.RightToLeft {
      animation: ${(props) => LeftToRightXL(props.$width)} 1.2s linear reverse both;
    }
    &.MainToRight {
      animation: ${(props) => RightToMainXL(props.$width)} 1.2s linear reverse both;
    }
  }
`;

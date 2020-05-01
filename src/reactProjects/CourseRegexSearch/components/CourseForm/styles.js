import styled from 'styled-components';

import { theme, buttonTheme } from '../../constants/colors';
import mediaQuery from '../../constants/media-queries';

export const Form = styled.form`
  display: grid;
  margin: 0 auto;
  padding: 140px 0 40px 0;
  width: 90%;
  max-width: 600px;
  grid-template-columns: auto;
  grid-template-rows: 24px 50px 32px 50px;

  @media ${mediaQuery.tablet} {
    grid-template-columns: 400px 200px;
    grid-template-rows: 24px 50px 32px;
  }
`;

export const Label = styled.label`
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  font-size: 16px;
  line-height: 1.2px;
  color: black;
`;

export const InputString = styled.input`
  margin: 0;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  grid-column: 1;
  grid-row: 2;
  font-size: 16px;
  line-height: 1.2px;
  border: 2px solid ${theme.inputColor};
  border-radius: 4px;
  color: black;
  box-sizing: border-box;
  outline: none;
  &::placeholder {
    opacity: 0.5;
  }

  &.invalid {
    border: 2px solid ${theme.errorColor};
  }
`;

export const HintText = styled.p`
  margin: 4px 0 0 0;
  padding: 0;
  grid-column: 1;
  grid-row: 3;
  font-size: 14px;
  line-height: 1.2;
  color: red;
`;

export const SubmitButton = styled.button`
  width: 180px;
  height: 50px;
  grid-column: 1;
  grid-row: 4;
  justify-self: center;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  color: ${buttonTheme.defaultColor};
  border: 2px solid ${buttonTheme.defaultColor};
  background-color: transparent;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: ${buttonTheme.defaultColor};
  }

  &:disabled {
    color: white;
    border-color: ${buttonTheme.inactiveColor};
    background-color: ${buttonTheme.inactiveColor};
  }

  @media ${mediaQuery.tablet} {
    grid-column: 2;
    grid-row: 2;
    justify-self: right;
  }
`;

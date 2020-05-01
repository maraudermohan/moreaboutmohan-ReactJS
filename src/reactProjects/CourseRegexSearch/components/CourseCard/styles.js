import styled from 'styled-components';

import { theme } from '../../constants/colors';

export const Card = styled.section`
  margin: 0 auto;
  width: 90%;
  height: 270px;
  max-width: 600px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: -4px 4px 10px ${theme.inputColor}80,
    4px 4px 8px ${theme.inputColor}80;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0 20px;
  width: 100%;
  height: 72px;
  font-size: 24px;
  line-height: 72px;
  color: white;
  background-color: ${theme.primaryColor};
  box-sizing: border-box;
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 198px;
`;

export const Li = styled.li`
  display: flex;
  margin: 0;
  padding: 25px 0 0 0;
  list-style: none;
`;

export const CardValue = styled.p`
  margin: 0;
  padding: 0;
  width: auto;
  font-size: 16px;
  color: black;
`;

export const CardCategory = styled(CardValue)`
  width: 30%;
  min-width: 100px;
  padding: 0 0 0 20px;
  color: ${theme.categoryColor};
`;

export const HintText = styled.p`
  font-size: 16px;
  color: black;
  text-align: center;
`;

import React from 'react';
import { Provider } from 'react-redux';

import Header from 'components/Header';
import { StyledH1, StyledParagraph } from 'components/Typography';
import { BrowserContext } from 'constants/contexts';
import { github } from 'images/icons';
import configureStore from './store';
import GameArea from './components/GameArea';
import {
  StyledMain,
  FooterLine,
} from './styles';

const store = configureStore();

function EvadeGame() {
  return (
    <Provider store={store}>
      <StyledMain className="evade-game">
        <Header />
        <StyledH1 className="game-title">{'Evade \xa0 game'}</StyledH1>
        <div className="title-container">
          <a href="https://github.com/maraudermohan/"><github.Icon /></a>
          <StyledParagraph className="game-subtitle">
            React + Hooks + Redux. 2020.
          </StyledParagraph>
        </div>
        <BrowserContext.Consumer>
          {
            ({ orientation }) => (
              <GameArea orientation={orientation} />
            )
          }
        </BrowserContext.Consumer>
        <FooterLine />
      </StyledMain>
    </Provider>
  );
}

export default EvadeGame;

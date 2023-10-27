import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createTileLists } from '../actions';
import GameTiles from './GameTiles';

function GameArea({ resetGame }) {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.gameState);
  const imageSelected = useSelector((state) => state.imageSelected);

  useEffect(() => {
    // Calculate the best possible tile-width, tile-height
    // number of tiles, based on the given properties
    const {
      imageWidth,
      imageHeight,
      rowLength,
      colLength,
      tileWidth,
      tileHeight,
    } = imageSelected;
    const element = document.getElementsByClassName('game-area')[0];
    const tileCssList = {};
    const tileOrderList = {};
    let topCounter = 0;
    let leftCounter = 0;

    element.style.width = `${imageWidth}px`;
    element.style.height = `${imageHeight}px`;
    for (let counter = 1; counter < (rowLength * colLength); counter += 1) {
      tileCssList[counter] = {
        top: topCounter,
        left: leftCounter,
        topOffset: topCounter,
        leftOffset: leftCounter,
      };
      tileOrderList[counter] = counter;
      if ((counter % rowLength) === 0) {
        topCounter += tileHeight;
        leftCounter = 0;
      } else {
        leftCounter += tileWidth;
      }
    }
    tileOrderList[rowLength * colLength] = rowLength * colLength;
    dispatch(createTileLists(tileCssList, tileOrderList));
  }, []);

  return (
    <div className="well game-area not-ready flex-item">
      {
        gameState.areTilesCreated && (
          <GameTiles resetGame={resetGame} />
        )
      }
    </div>
  );
}

GameArea.propTypes = {
  resetGame: PropTypes.func,
};

export default GameArea;

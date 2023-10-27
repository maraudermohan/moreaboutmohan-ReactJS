import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { moveTile, toggleGameReady } from '../actions/index';

function GameTiles({ resetGame }) {
  const dispatch = useDispatch();
  const imageSelected = useSelector((state) => state.imageSelected);
  const gameState = useSelector((state) => state.gameState);
  const tileCssList = useSelector((state) => state.tileCssList);
  const tileOrderList = useSelector((state) => state.tileOrderList);
  const shuffleCounter = useSelector((state) => state.shuffleCounter);
  const moveCounter = useSelector((state) => state.moveCounter);
  const {
    url: imageUrl,
    imageWidth,
    imageHeight,
    tileWidth,
    tileHeight,
    rowLength,
    colLength,
  } = imageSelected;
  const [isEventAttached, setIsEventAttached] = useState(false);

  const gameConditionCheck = () => {
    const sortedList = Object.keys(tileOrderList)
      .filter((key) => (parseInt(key, 10) !== tileOrderList[key]));

    if (gameState?.areTilesCreated && !gameState?.isGameReady) {
      /* eslint-disable */
      return (
        <div className="game-banner shuffle flex-container">
          <h1 className="flex-items">
            Shuffling!
            <br />
            <br />
            Ready in {shuffleCounter}...
          </h1>
        </div>
      );
    } else if (gameState?.isGameReady && sortedList.length === 0 && moveCounter > 0) {
      return (
        <div className="game-banner win flex-container" onClick={resetGame}>
          <h1 className="flex-items">
            Puzzle solved!
            <br />
            <br />
            You Win.
          </h1>
        </div>
      );
    } else if (gameState?.isGameReady && moveCounter === 0 && sortedList.length > 0) {
      return (
        <div className="game-banner lose flex-container" onClick={resetGame}>
          <h1 className="flex-items">
            Moves up!
            <br />
            <br />
            You Lose.
          </h1>
        </div>
      );
      /* eslint-enable */
    }
    return <div />;
  };

  const moveLeftEvent = () => {
    const elem = document.getElementsByClassName('left')[0];
    const { key } = elem.dataset;
    let top = getComputedStyle(elem).getPropertyValue('top');
    let left = getComputedStyle(elem).getPropertyValue('left');

    top = parseInt(top, 10);
    left = parseInt(left, 10) - tileWidth;

    moveTile(key, top, left, rowLength * colLength);
  };

  const moveRightEvent = () => {
    const elem = document.getElementsByClassName('right')[0];
    const { key } = elem.dataset;
    let top = getComputedStyle(elem).getPropertyValue('top');
    let left = getComputedStyle(elem).getPropertyValue('left');

    top = parseInt(top, 10);
    left = parseInt(left, 10) + tileWidth;

    moveTile(key, top, left, rowLength * colLength);
  };

  const moveTopEvent = () => {
    const elem = document.getElementsByClassName('top')[0];
    const { key } = elem.dataset;
    let top = getComputedStyle(elem).getPropertyValue('top');
    let left = getComputedStyle(elem).getPropertyValue('left');

    left = parseInt(left, 10);
    top = parseInt(top, 10) - tileHeight;

    moveTile(key, top, left, rowLength * colLength);
  };

  const moveBottomEvent = () => {
    const elem = document.getElementsByClassName('bottom')[0];
    const { key } = elem.dataset;
    let top = getComputedStyle(elem).getPropertyValue('top');
    let left = getComputedStyle(elem).getPropertyValue('left');

    left = parseInt(left, 10);
    top = parseInt(top, 10) + tileHeight;

    moveTile(key, top, left, rowLength * colLength);
  };

  const shuffleTile = () => {
    const clickableTiles = [];
    const min = 0;
    let max = 1;
    let currentTile = () => {};

    if (document.getElementsByClassName('left')[0]) {
      clickableTiles.push(moveLeftEvent);
    }
    if (document.getElementsByClassName('right')[0]) {
      clickableTiles.push(moveRightEvent);
    }
    if (document.getElementsByClassName('top')[0]) {
      clickableTiles.push(moveTopEvent);
    }
    if (document.getElementsByClassName('bottom')[0]) {
      clickableTiles.push(moveBottomEvent);
    }
    max = clickableTiles.length;
    currentTile = clickableTiles[Math.floor(Math.random() * (max - min)) + min];
    currentTile();
  };

  const shuffleManager = () => {
    if (shuffleCounter > 0) {
      shuffleTile();
    } else if (shuffleCounter === 0) {
      document.getElementsByClassName('game-area')[0].classList.remove('not-ready');
      document.getElementsByClassName('game-area')[0].classList.add('ready');
      dispatch(toggleGameReady());
    }
  };

  const keyUpHandler = (e) => {
    if (moveCounter > 0) {
      if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
      if (e.keyCode === 39 && document.getElementsByClassName('game-tile left').length) {
        moveLeftEvent();
      } else if (e.keyCode === 37 && document.getElementsByClassName('game-tile right').length) {
        moveRightEvent();
      } else if (e.keyCode === 40 && document.getElementsByClassName('game-tile top').length) {
        moveTopEvent();
      } else if (e.keyCode === 38 && document.getElementsByClassName('game-tile bottom').length) {
        moveBottomEvent();
      }
    }
  };

  const removeClickKeyHandlers = () => {
    window.removeEventListener('keyup', keyUpHandler);
    if (document.getElementsByClassName('game-tile left').length) {
      document.getElementsByClassName('game-tile left')[0]
        .removeEventListener('click', moveLeftEvent);
    }
    if (document.getElementsByClassName('game-tile right').length) {
      document.getElementsByClassName('game-tile right')[0]
        .removeEventListener('click', moveRightEvent);
    }
    if (document.getElementsByClassName('game-tile top').length) {
      document.getElementsByClassName('game-tile top')[0]
        .removeEventListener('click', moveTopEvent);
    }
    if (document.getElementsByClassName('game-tile bottom').length) {
      document.getElementsByClassName('game-tile bottom')[0]
        .removeEventListener('click', moveBottomEvent);
    }
  };

  const renderTile = (key) => {
    const {
      top,
      left,
      topOffset,
      leftOffset,
    } = tileCssList[key];
    const styles = {
      top,
      left,
      width: tileWidth,
      height: tileHeight,
      backgroundPosition: `-${leftOffset}px -${topOffset}px`,
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: `${imageWidth}px ${imageHeight}px`,
    };
    const indexEmptyTile = tileOrderList[rowLength * colLength];
    const indexCurrentTile = tileOrderList[key];
    let className = 'game-tile';
    let onClick;
    if (indexCurrentTile === (indexEmptyTile - 1) && ((indexEmptyTile - 1) % rowLength)) {
      className += ' right';
      onClick = moveRightEvent;
    } else if (indexCurrentTile === (indexEmptyTile + 1) && (indexEmptyTile % rowLength)) {
      className += ' left';
      onClick = moveLeftEvent;
    } else if (indexCurrentTile === (Math.floor(indexEmptyTile / rowLength) + 1)
      * rowLength + (indexEmptyTile % rowLength)) {
      className += ' top';
      onClick = moveTopEvent;
    } else if (indexCurrentTile === (Math.floor(indexEmptyTile / rowLength) - 1)
      * rowLength + (indexEmptyTile % rowLength)) {
      className += ' bottom';
      onClick = moveBottomEvent;
    }
    /* eslint-disable */
    return <span key={key} data-key={key} className={className} style={styles} onClick={onClick} />;
    /* eslint-enable */
  };

  useEffect(() => {
    shuffleManager();
  }, []);

  useEffect(() => {
    if (!gameState?.isGameReady) {
      setTimeout(() => { shuffleManager(); }, 250);
    }

    /* eslint-disable */
    if (gameState?.isGameReady && moveCounter < 1 && isEventAttached) {
      removeClickKeyHandlers();
      setIsEventAttached(false);
    } else if (gameState?.isGameReady && moveCounter > 0 && !isEventAttached) {
      window.addEventListener('keyup', keyUpHandler);
      setIsEventAttached(true);
    }
    /* eslint-enable */
  });

  return (
    <div>
      { Object.keys(tileCssList).map(renderTile) }
      {
        gameConditionCheck()
      }
    </div>
  );
}

GameTiles.propTypes = {
  resetGame: PropTypes.func,
};

export default GameTiles;

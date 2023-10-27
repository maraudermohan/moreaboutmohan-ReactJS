import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from 'components/Header';
import Footer from 'components/Footer';
import { github } from 'images/icons';
import { StyledH1, StyledParagraph } from 'components/Typography';
import photo22 from 'images/photo22.webp';
import photo24 from 'images/photo24.webp';
import photo18 from 'images/photo18.webp';
import photo13 from 'images/photo13.webp';
import photo9 from 'images/photo9.webp';
import photo7 from 'images/photo7.webp';
import { logOut, selectImage } from '../actions';
import GameArea from './GameArea';

const imageList = [
  photo22,
  photo24,
  photo18,
  photo13,
  photo9,
  photo7,
];

function App() {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.gameState);
  const moveCounter = useSelector((state) => state.moveCounter);
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (gameState?.isGameReady) {
      document.getElementsByClassName('disappear')[0].style.display = 'none';
      document.getElementsByClassName('appear')[0].style.display = 'block';
      document.getElementsByClassName('appear')[1].style.display = 'block';
    }
  }, []);

  const resetGame = () => {
    // Resets the state values for a new game
    dispatch(logOut());
    document.getElementsByClassName('inputURL')[0].value = '';
    document.getElementsByClassName('disappear')[0].style.display = 'block';
    document.getElementsByClassName('appear')[0].style.display = 'none';
    document.getElementsByClassName('appear')[1].style.display = 'none';
  };

  const disableBtn = () => !(url.length > 0);

  const changeHandler = (event) => {
    setUrl(event.target.value);
  };

  const imageOptions = (value, index) => {
    // returns an array of spans-with-images as choices for the puzzle
    if (!gameState?.isImageSelected) {
      const position = { backgroundImage: `url(${value})` };
      return (
        /* eslint-disable */
        <span
          key={index}
          data-url={value}
          className="image-item"
          style={position}
          onClick={() => imageClickHandler(value)}
        />
        /* eslint-enable */
      );
    }
    return null;
  };

  const imageClickHandler = (imgUrl) => {
    // Once an image choice is picked, updates the state and renders the GameArea
    const img = new Image();
    img.onload = () => {
      // Calculate the number of tiles, tileHeight, tileWidth based on image selected
      const winWidth = window.innerWidth;
      const ratio = img.width / img.height;
      let width = 810;
      if (winWidth < 809) {
        width = winWidth > 639 ? 640 : 320;
      }
      const height = Math.floor(width / ratio);
      let rowLength = 0;
      let temp = 6 / ratio;

      if ((temp - Math.floor(temp)) < 0.4) {
        rowLength = 6;
      } else {
        temp = 7 / ratio;
        rowLength = 7;
      }
      const colLength = Math.floor(temp);
      const tileWidth = Math.floor(width / rowLength);
      const tileHeight = Math.floor(height / colLength);
      dispatch(selectImage({
        url: imgUrl,
        width,
        height,
        rowLength,
        colLength,
        tileWidth,
        tileHeight,
      }));
    };
    img.src = imgUrl;
    document.getElementsByClassName('disappear')[0].style.display = 'none';
    document.getElementsByClassName('reset-btn')[0].style.display = 'inline-block';
  };

  return (
    <main className="image-tile-page">
      <Header />
      <StyledH1 className="game-title">Image tile game</StyledH1>
      <StyledParagraph className="game-subtitle">
        React + Redux. Built in 2016
        <a href="https://github.com/maraudermohan/image_tile_game"><github.Icon /></a>
      </StyledParagraph>
      <div className="flex-container game-area-container">
        <div className="appContainer">
          <h4 style={{ color: '#F7F4E9', padding: '120px 0 0 0' }}>
            Solve the shuffled image in under 100 moves
          </h4>
          <div className="disappear">
            <p style={{ color: '#F7F4E9' }}>
              <br />
              Pick an image below or import one with url :
            </p>
            <input
              type="text"
              className="inputURL"
              placeholder="http://www.image.url"
              onChange={changeHandler}
            />
            <input
              type="submit"
              disabled={disableBtn()}
              value="Import"
              className="btn btn-primary"
              onClick={() => imageClickHandler(url)}
            />
            <h4 style={{ color: '#F7F4E9' }}>
              <br />
              OR
            </h4>
          </div>
          <div className="appear flex-container">
            <input
              type="submit"
              value="Back"
              className="btn btn-primary reset-btn"
              onClick={resetGame}
            />
            <p style={{ display: 'inline' }}>Click on the Red-highlighted tiles or use arrow keys to start solving.</p>
          </div>
          <div className="appear flex-container">
            <h1 className="moves-counter">{moveCounter}</h1>
            <p>moves left</p>
          </div>
          <div className="list-of-images">
            { imageList.map(imageOptions) }
          </div>
          {
            gameState?.isImageSelected && (
              <GameArea resetGame={resetGame} />
            )
          }
        </div>
      </div>
      <Footer hoverColor="#3399FF" backgroundColor="#051622" />
    </main>
  );
}

export default App;

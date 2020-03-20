import React from 'react';
import './App.css';

import ResizeHOC from 'components/ResizeHOC';
import ScrollHOC from 'components/ScrollHOC';
import FilmmakerPage from 'pages/FilmmakerPage';

function App() {
  return (
    <div className="App">
      <ScrollHOC>
        <ResizeHOC>
          <FilmmakerPage />
        </ResizeHOC>
      </ScrollHOC>
    </div>
  );
}

export default App;

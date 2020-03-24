import React from 'react';
import './App.css';

import ResizeHOC from 'components/ResizeHOC';
import ScrollHOC from 'components/ScrollHOC';
import MainPage from 'pages/MainPage';

function App() {
  return (
    <div className="App">
      <ScrollHOC>
        <ResizeHOC>
          <MainPage />
        </ResizeHOC>
      </ScrollHOC>
    </div>
  );
}

export default App;

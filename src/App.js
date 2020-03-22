import React from 'react';
import './App.css';

import ResizeHOC from 'components/ResizeHOC';
import ScrollHOC from 'components/ScrollHOC';
import PhotographyPage from 'pages/PhotographyPage';

function App() {
  return (
    <div className="App">
      <ScrollHOC>
        <ResizeHOC>
          <PhotographyPage />
        </ResizeHOC>
      </ScrollHOC>
    </div>
  );
}

export default App;

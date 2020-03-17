import React from 'react';
import './App.css';

import ResizeHOC from 'components/ResizeHOC';
import ScrollHOC from 'components/ScrollHOC';
import ResumePage from 'pages/ResumePage';

function App() {
  return (
    <div className="App">
      <ScrollHOC>
        <ResizeHOC>
          <ResumePage />
        </ResizeHOC>
      </ScrollHOC>
    </div>
  );
}

export default App;

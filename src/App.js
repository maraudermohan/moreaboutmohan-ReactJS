import React from 'react';
import './App.css';
import Jumbotron from 'components/Jumbotron';
import { jumbotronProps } from 'pages/intuit';

function App() {
  return (
    <div className="App">
      <Jumbotron
        data={jumbotronProps}
      />
    </div>
  );
}

export default App;

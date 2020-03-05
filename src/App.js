import React from 'react';
import './App.css';
import Jumbotron from 'components/Jumbotron';
import TitleSection from 'components/TitleSection';
import { jumbotronProps, jobTitle, timeWorked } from 'pages/intuit';

function App() {
  return (
    <div className="App">
      <Jumbotron
        data={jumbotronProps}
      />
      <TitleSection
        heading={jobTitle.title}
        subHeading={jobTitle.company}
      />
    </div>
  );
}

export default App;

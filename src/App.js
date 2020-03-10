import React from 'react';
import './App.css';
import Jumbotron from 'components/Jumbotron';
import TitleSection from 'components/TitleSection';
import Footer from 'components/Footer';
import ScrollHOC from 'components/ScrollHOC';
import ScrollCarousel from 'components/ScrollCarousel';
import { jumbotronProps, jobTitle } from 'pages/intuit';

function App() {
  return (
    <div className="App">
      <Jumbotron
        data={jumbotronProps}
      />
      <TitleSection
        heading={jobTitle.title}
        subHeading={jobTitle.company}
        duration={jobTitle.duration}
      />
      <ScrollHOC>
        <ScrollCarousel />
      </ScrollHOC>
      <Footer />
    </div>
  );
}

export default App;

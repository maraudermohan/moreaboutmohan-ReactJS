import React from 'react';
import './App.css';
import Jumbotron from 'components/Jumbotron';
import TitleSection from 'components/TitleSection';
import Footer from 'components/Footer';
import ScrollHOC from 'components/ScrollHOC';
import TextImageCarouselOnScroll from 'comboComponents/TextImageCarouselOnScroll';
import { jumbotronProps, jobTitle } from 'pages/intuit';
import TransparentScroller from 'components/TransparentScroller';

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
        <TextImageCarouselOnScroll />
        <TransparentScroller />
      </ScrollHOC>
      <Footer />
    </div>
  );
}

export default App;

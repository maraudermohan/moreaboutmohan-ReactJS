import React from 'react';
import './App.css';
import Jumbotron from 'components/Jumbotron';
import TitleSection from 'components/TitleSection';
import ContentList from 'components/ContentList';
import Footer from 'components/Footer';
import ScrollCarousel from 'components/ScrollCarousel';
import { jumbotronProps, jobTitle, summary } from 'pages/intuit';

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
      <ContentList data={summary} alignment="right" />
      <ScrollCarousel />
      <Footer />
    </div>
  );
}

export default App;

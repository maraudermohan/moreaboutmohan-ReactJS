import React from 'react';
import './App.css';
import Jumbotron from 'components/Jumbotron';
import TitleSection from 'components/TitleSection';
import Footer from 'components/Footer';
import ResizeHOC from 'components/ResizeHOC';
import ScrollHOC from 'components/ScrollHOC';
import TextImageCarouselOnScroll from 'comboComponents/TextImageCarouselOnScroll';
import {
  jumbotronProps,
  jobTitle,
  summary2,
  summary3,
  summary4,
} from 'pages/intuit';
import TransparentScroller from 'components/TransparentScroller';
import ContentList from 'components/ContentList';
import Header from 'components/Header';

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
      <ResizeHOC>
        <Header />
      </ResizeHOC>
      <main>
        <ScrollHOC>
          <TextImageCarouselOnScroll />
          <div
            style={{
              background: 'green',
              position: 'relative',
              zIndex: '1',
              height: '800px',
            }}
          >
            <ContentList data={summary2} />
          </div>
          <TransparentScroller background="red">
            <ContentList data={summary3} />
          </TransparentScroller>
          <div
            style={{
              background: 'green',
              position: 'relative',
              zIndex: '1',
              height: '800px',
            }}
          >
            <ContentList data={summary4} />
          </div>
        </ScrollHOC>
      </main>
      <Footer />
    </div>
  );
}

export default App;

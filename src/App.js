import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import ResizeHOC from 'components/ResizeHOC';
import ScrollHOC from 'components/ScrollHOC';
import MainPage from 'pages/MainPage';
import ResumePage from 'pages/ResumePage';
import FilmmakerPage from 'pages/FilmmakerPage';
import PhotographyPage from 'pages/PhotographyPage';
import IntuitPage from 'pages/IntuitPage';
import SurveymonkeyPage from 'pages/SurveymonkeyPage';

function App() {
  return (
    <div className="App">
      <ScrollHOC>
        <ResizeHOC>
          <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/resume" component={ResumePage} exact />
            <Route path="/filmmaker" component={FilmmakerPage} exact />
            <Route path="/photography" component={PhotographyPage} exact />
            <Route path="/resume/intuit" component={IntuitPage} />
            <Route path="/resume/surveymonkey" component={SurveymonkeyPage} />
            <Route component={() => <MainPage is404 />} />
          </Switch>
        </ResizeHOC>
      </ScrollHOC>
    </div>
  );
}

export default App;

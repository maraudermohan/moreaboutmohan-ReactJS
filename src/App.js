import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import ResizeHOC from 'components/ResizeHOC';
import ScrollHOC from 'components/ScrollHOC';
import MainPage from 'pages/MainPage';

const ResumePage = lazy(() => import('pages/ResumePage'));
const ReactPage = lazy(() => import('pages/ReactPage'));
const FilmmakerPage = lazy(() => import('pages/FilmmakerPage'));
const PhotographyPage = lazy(() => import('pages/PhotographyPage'));
const DesignsPage = lazy(() => import('pages/DesignsPage'));
const IntuitPage = lazy(() => import('pages/IntuitPage'));
const SurveymonkeyPage = lazy(() => import('pages/SurveymonkeyPage'));
const ZyngaPage = lazy(() => import('pages/ZyngaPage'));
const SmallabPage = lazy(() => import('pages/SmallabPage'));
const SmilegatePage = lazy(() => import('pages/SmilegatePage'));
const CoolirisPage = lazy(() => import('pages/CoolirisPage'));
const MegalodonPage = lazy(() => import('pages/MegalodonPage'));
const NokiaPage = lazy(() => import('pages/NokiaPage'));
const BachelorPage = lazy(() => import('pages/BachelorPage'));
const CarnegiePage = lazy(() => import('pages/CarnegiePage'));
const InfiniteScroll = lazy(() => import('reactProjects/InfiniteScroll'));
const Imagetile = lazy(() => import('reactProjects/Imagetile'));
const CoursesCalendar = lazy(() => import('reactProjects/CoursesCalendar'));
const EvadeGame = lazy(() => import('reactProjects/EvadeGame'));
const CourseRegexSearch = lazy(() => import('reactProjects/CourseRegexSearch'));

function App() {
  return (
    <Suspense fallback={<MainPage />} className="App">
      <ScrollHOC>
        <ResizeHOC>
          <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/resume" component={ResumePage} exact />
            <Route path="/react" component={ReactPage} exact />
            <Route path="/filmmaker" component={FilmmakerPage} exact />
            <Route path="/photography" component={PhotographyPage} exact />
            <Route path="/design" component={DesignsPage} exact />
            <Route path="/resume/intuit" component={IntuitPage} />
            <Route path="/resume/surveymonkey" component={SurveymonkeyPage} />
            <Route path="/resume/zynga" component={ZyngaPage} />
            <Route path="/resume/smallab" component={SmallabPage} />
            <Route path="/resume/smilegate" component={SmilegatePage} />
            <Route path="/resume/cooliris" component={CoolirisPage} />
            <Route path="/resume/megalodon" component={MegalodonPage} />
            <Route path="/resume/nokia" component={NokiaPage} />
            <Route path="/resume/bachelor" component={BachelorPage} />
            <Route path="/resume/carnegie" component={CarnegiePage} />
            <Route path="/infinite" component={InfiniteScroll} exact />
            <Route path="/imagetile" component={Imagetile} exact />
            <Route path="/courses" component={CoursesCalendar} />
            <Route path="/evade" component={EvadeGame} exact />
            <Route path="/regexsearch" component={CourseRegexSearch} exact />
            <Route component={() => <MainPage is404 />} />
          </Switch>
        </ResizeHOC>
      </ScrollHOC>
    </Suspense>
  );
}

export default App;

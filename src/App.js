import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const ResizeHOC = lazy(() => import('components/ResizeHOC'));
const ScrollHOC = lazy(() => import('components/ScrollHOC'));
const MainPage = lazy(() => import('pages/MainPage'));

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
          <Routes>
            <Route path="/" element={<MainPage />} exact />
            <Route path="/resume" element={<ResumePage />} exact />
            <Route path="/react" element={<ReactPage />} exact />
            <Route path="/filmmaker" element={<FilmmakerPage />} exact />
            <Route path="/photography" element={<PhotographyPage />} exact />
            <Route path="/design" element={<DesignsPage />} exact />
            <Route path="/resume/intuit" element={<IntuitPage />} />
            <Route path="/resume/surveymonkey" element={<SurveymonkeyPage />} />
            <Route path="/resume/zynga" element={<ZyngaPage />} />
            <Route path="/resume/smallab" element={<SmallabPage />} />
            <Route path="/resume/smilegate" element={<SmilegatePage />} />
            <Route path="/resume/cooliris" element={<CoolirisPage />} />
            <Route path="/resume/megalodon" element={<MegalodonPage />} />
            <Route path="/resume/nokia" element={<NokiaPage />} />
            <Route path="/resume/bachelor" element={<BachelorPage />} />
            <Route path="/resume/carnegie" element={<CarnegiePage />} />
            <Route path="/infinite" element={<InfiniteScroll />} exact />
            <Route path="/imagetile" element={<Imagetile />} exact />
            <Route path="/courses" element={<CoursesCalendar />} />
            <Route path="/evade" element={<EvadeGame />} exact />
            <Route path="/regexsearch" element={<CourseRegexSearch />} exact />
            <Route path="*" element={<MainPage is404 />} />
          </Routes>
        </ResizeHOC>
      </ScrollHOC>
    </Suspense>
  );
}

export default App;

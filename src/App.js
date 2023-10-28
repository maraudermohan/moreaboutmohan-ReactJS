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
            <Route path="/">
              <Route index element={<MainPage />} />
              <Route path="react" element={<ReactPage />} />
              <Route path="filmmaker" element={<FilmmakerPage />} />
              <Route path="photography" element={<PhotographyPage />} />
              <Route path="design" element={<DesignsPage />} />
              <Route path="resume">
                <Route index element={<ResumePage />} />
                <Route path="intuit" element={<IntuitPage />} />
                <Route path="surveymonkey" element={<SurveymonkeyPage />} />
                <Route path="zynga" element={<ZyngaPage />} />
                <Route path="smallab" element={<SmallabPage />} />
                <Route path="smilegate" element={<SmilegatePage />} />
                <Route path="cooliris" element={<CoolirisPage />} />
                <Route path="megalodon" element={<MegalodonPage />} />
                <Route path="nokia" element={<NokiaPage />} />
                <Route path="bachelor" element={<BachelorPage />} />
                <Route path="carnegie" element={<CarnegiePage />} />
              </Route>
              <Route path="infinite" element={<InfiniteScroll />} />
              <Route path="imagetile" element={<Imagetile />} />
              <Route path="courses" element={<CoursesCalendar />} />
              <Route path="evade" element={<EvadeGame />} />
              <Route path="regexsearch" element={<CourseRegexSearch />} />
              <Route path="*" element={<MainPage is404 />} />
            </Route>
          </Routes>
        </ResizeHOC>
      </ScrollHOC>
    </Suspense>
  );
}

export default App;

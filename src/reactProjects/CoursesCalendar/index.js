import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import configureStore from './store/configureStore';
import 'reactProjects/bootstrap.min.css';
import './styles/courses-calendar.css';

const Header = lazy(() => import('components/Header'));
const CoursesMain = lazy(() => import('./components/CoursesMain'));
const CalendarMain = lazy(() => import('./components/CalendarMain'));

const store = configureStore();

function CoursesCalendar() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div />} className="page__courses-calendar">
        <main className="courses-calendar-page">
          <Header />
          <Routes>
            <Route path="/courses" component={CoursesMain} exact />
            <Route path="/courses/calendar" component={CalendarMain} />
          </Routes>
        </main>
      </Suspense>
    </Provider>
  );
}
export default CoursesCalendar;

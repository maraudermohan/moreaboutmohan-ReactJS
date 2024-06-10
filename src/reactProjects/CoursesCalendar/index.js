import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import configureStore from './store/configureStore';
import 'reactProjects/bootstrap.min.css';
import './styles/courses-calendar.css';

const CoursesMain = lazy(() => import('./components/CoursesMain'));
const CalendarMain = lazy(() => import('./components/CalendarMain'));

const store = configureStore();

function CoursesCalendar() {
  const [searchParams] = useSearchParams();

  return (
    <Provider store={store}>
      <Suspense fallback={<div />} className="page__courses-calendar">
        <main className="courses-calendar-page">
          {
            searchParams.get('tab') === 'calendar'
              ? (<CalendarMain />)
              : (<CoursesMain />)
          }
        </main>
      </Suspense>
    </Provider>
  );
}
export default CoursesCalendar;

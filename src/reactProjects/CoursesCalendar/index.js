import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import configureStore from './store/configureStore';
import Header from './components/Header';
import CoursesMain from './components/CoursesMain';
import CalendarMain from './components/CalendarMain';
import 'reactProjects/bootstrap.min.css';
import './styles/courses-calendar.css';

const store = configureStore();

const CoursesCalendar = () => (
  <Provider store={store}>
    <main>
      <Header />
      <Switch>
        <Route path="/courses" component={CoursesMain} exact />
        <Route path="/courses/calendar" component={CalendarMain} exact />
      </Switch>
    </main>
  </Provider>
);

export default CoursesCalendar;

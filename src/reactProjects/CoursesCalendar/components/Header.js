import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { github } from 'images/icons';

// Presentational component for dynamically changing links without resetting the REDUX store
const Header = () => {
  const { pathname = '' } = useLocation();
  return (
    <header className="flex-container">
      <nav>
        <Link to="/courses" className={pathname === '/courses' ? 'active' : ''}>Courses</Link>
        <Link to="/courses/calendar" className={pathname === '/courses/calendar' ? 'active' : ''}>Calendar</Link>
      </nav>
      <a href="https://github.com/maraudermohan/calendar-data"><github.Icon /></a>
    </header>
  );
};

export default Header;

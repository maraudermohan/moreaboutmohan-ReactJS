import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { github } from 'images/icons';

// Presentational component for dynamically changing links without resetting the REDUX store
function Header() {
  const [searchParams] = useSearchParams();

  return (
    <header className="flex-container">
      <nav>
        <Link to="/courses?tab=main" className={searchParams.get('tab') !== 'calendar' ? 'active' : ''}>Courses</Link>
        <Link to="/courses?tab=calendar" className={searchParams.get('tab') === 'calendar' ? 'active' : ''}>Calendar</Link>
      </nav>
      <a href="https://github.com/maraudermohan/calendar-data"><github.Icon /></a>
    </header>
  );
}

export default Header;

import React from 'react';
import {
  screen,
  render,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import CourseCard from './index';

describe('Course card component', () => {
  afterEach(() => cleanup);
  test('test if error text renders for empty coursedata', () => {
    render(<CourseCard filteredCourse={null} />);

    expect(screen.getByTestId('course-card-error')).toBeTruthy();
  });
  test('test if card renders successful for meaningful coursedata', () => {
    const coursedata = {
      department: 'CS',
      courseNumber: 111,
      semester: 'Summer',
      year: 2020,
    };
    render(<CourseCard filteredCourse={coursedata} />);

    expect(screen.queryByTestId('course-card-error')).toBeNull();
    expect(screen.getByTestId('course-card-success')).toBeTruthy();
  });
});

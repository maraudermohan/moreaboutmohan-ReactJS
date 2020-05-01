import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import CourseCard from './index';

describe('Course card component', () => {
  afterEach(() => cleanup);
  test('test if error text renders for empty coursedata', () => {
    const { queryByTestId } = render(<CourseCard filteredCourse={null} />);

    expect(queryByTestId('course-card-error')).toBeTruthy();
  });
  test('test if card renders successful for meaningful coursedata', () => {
    const coursedata = {
      department: 'CS',
      courseNumber: 111,
      semester: 'Summer',
      year: 2020,
    };
    const { getByTestId, queryByTestId } = render(<CourseCard filteredCourse={coursedata} />);

    expect(queryByTestId('course-card-error')).toBeNull();
    expect(getByTestId('course-card-success')).toBeTruthy();
  });
});

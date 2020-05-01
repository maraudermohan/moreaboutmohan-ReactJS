import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Main from './index';

describe('Course card component', () => {
  afterEach(() => cleanup);

  test('test if input string in CourseForm, renders error in CourseCard', () => {
    const { getByTestId } = render(<Main />);

    fireEvent.change(getByTestId('course-form-input'), {
      target: {
        value: 'Literature111 W19',
      },
    });
    fireEvent.click(getByTestId('course-form-button'));
    expect(getByTestId('course-card-error')).toBeTruthy();
  });

  test('test if correct string in CourseForm, renders the CourseCard', () => {
    const { getByTestId } = render(<Main />);

    fireEvent.change(getByTestId('course-form-input'), {
      target: {
        value: 'Math:200 Winter2016',
      },
    });
    fireEvent.click(getByTestId('course-form-button'));
    expect(getByTestId('course-card-success')).toBeTruthy();
  });
});

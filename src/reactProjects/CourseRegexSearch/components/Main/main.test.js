import React from 'react';
import {
  screen,
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import Main from './index';

describe('Course card component', () => {
  afterEach(() => cleanup);

  test('test if input string in CourseForm, renders error in CourseCard', () => {
    render(<Main />);

    fireEvent.change(screen.getByTestId('course-form-input'), {
      target: {
        value: 'Literature111 W19',
      },
    });
    fireEvent.click(screen.getByTestId('course-form-button'));
    expect(screen.getByTestId('course-card-error')).toBeTruthy();
  });

  test('test if correct string in CourseForm, renders the CourseCard', () => {
    render(<Main />);

    fireEvent.change(screen.getByTestId('course-form-input'), {
      target: {
        value: 'Math:200 Winter2016',
      },
    });
    fireEvent.click(screen.getByTestId('course-form-button'));
    expect(screen.getByTestId('course-card-success')).toBeTruthy();
  });
});

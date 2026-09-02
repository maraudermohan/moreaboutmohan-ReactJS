import React, { Suspense } from 'react';
import {
  screen,
  render,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import Main from './index';

// Main lazy-loads CourseForm/CourseCard. In the real app, App.js provides an
// ancestor <Suspense> boundary, but in isolation Main needs its own for the
// lazy children to resolve.
function renderMain() {
  return render(
    <Suspense fallback={null}>
      <Main />
    </Suspense>,
  );
}

describe('Course card component', () => {
  test('test if invalid string in CourseForm, renders error in CourseForm', async () => {
    renderMain();

    // Missing a semester/year segment, so this can never match COURSE_REGEX_FULL.
    fireEvent.change(await screen.findByTestId('course-form-input'), {
      target: {
        value: 'Literature111',
      },
    });
    fireEvent.click(screen.getByTestId('course-form-button'));
    expect(await screen.findByTestId('course-form-error')).toBeTruthy();
  });

  test('test if correct string in CourseForm, renders the CourseCard', async () => {
    renderMain();

    fireEvent.change(await screen.findByTestId('course-form-input'), {
      target: {
        value: 'Math:200 Winter2016',
      },
    });
    fireEvent.click(screen.getByTestId('course-form-button'));
    expect(await screen.findByTestId('course-card-success')).toBeTruthy();
  });
});

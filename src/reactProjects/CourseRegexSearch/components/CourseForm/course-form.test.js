import React from 'react';
import {
  screen,
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import { COURSE_REGEX_FULL } from './regex-data';
import CourseForm from './index';

describe('Regex Tests', () => {
  afterEach(() => cleanup);
  const testCourseRegexFull = (str) => COURSE_REGEX_FULL.test(str);

  test('Test if all valid strings pass COURSE_REGEX_FULL', () => {
    expect(testCourseRegexFull('CS-111 Fall 20')).toBeTruthy();
    expect(testCourseRegexFull('CS 111 10Winter')).toBeTruthy();
    expect(testCourseRegexFull('CS:111 Summer 2016')).toBeTruthy();
    expect(testCourseRegexFull('Phy-100 2010spring')).toBeTruthy();
    expect(testCourseRegexFull('Chem:111 00s')).toBeTruthy();
    expect(testCourseRegexFull('Chem:111 2000 su')).toBeTruthy();
    expect(testCourseRegexFull('Bio 500 00f')).toBeTruthy();
    expect(testCourseRegexFull('math300 2020 w')).toBeTruthy();
  });
  test('Test if all invalid strings fail COURSE_REGEX_FULL', () => {
    expect(testCourseRegexFull('hello world')).toBeFalsy();
    expect(testCourseRegexFull('CS--111 Fall 20')).toBeFalsy();
    expect(testCourseRegexFull('CS :-111 10  Winter')).toBeFalsy();
    expect(testCourseRegexFull('111CS Summer 2016')).toBeFalsy();
    expect(testCourseRegexFull('P1y-1a00 2010sprig')).toBeFalsy();
    expect(testCourseRegexFull('Chem:111 1999s')).toBeFalsy();
    expect(testCourseRegexFull('fall2018 CS111')).toBeFalsy();
    expect(testCourseRegexFull('Bio  500  00 f')).toBeFalsy();
    expect(testCourseRegexFull('math300')).toBeFalsy();
  });
});

describe('Course form component', () => {
  afterEach(() => cleanup);
  test('test if button disabled by default', () => {
    render(<CourseForm />);
    expect(screen.getByTestId('course-form-button')).toBeDisabled();
  });

  test('test if button enables on input change', () => {
    render(<CourseForm />);
    fireEvent.change(screen.getByTestId('course-form-input'), {
      target: {
        value: 'sometext',
      },
    });

    expect(screen.getByTestId('course-form-button')).not.toBeDisabled();
  });

  test('test if error text hides and shows correctly', () => {
    render(<CourseForm />);

    expect(screen.queryByTestId('course-form-error')).toBeFalsy();
    fireEvent.change(screen.getByTestId('course-form-input'), {
      target: {
        value: 'hello world',
      },
    });
    fireEvent.click(screen.getByTestId('course-form-button'));
    expect(screen.getByTestId('course-form-error')).toBeTruthy();

    fireEvent.change(screen.getByTestId('course-form-input'), {
      target: {
        value: 'CS111 Winter18',
      },
    });
    fireEvent.click(screen.getByTestId('course-form-button'));
    expect(screen.queryByTestId('course-form-error')).toBeFalsy();
  });
});

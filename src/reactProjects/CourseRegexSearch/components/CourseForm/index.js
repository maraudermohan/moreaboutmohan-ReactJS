import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  COURSE_REGEX_FULL,
  SEMESTER_REGEX,
  YEAR_REGEX,
} from './regex-data';
import {
  Form,
  HintText,
  InputString,
  Label,
  SubmitButton,
} from './styles';

const CourseForm = ({ setCourseSubmittedOnMain = () => {} }) => {
  const [inputValue, setInputValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const extractGroupsFromRegex = (
    department,
    courseNumber,
    semesterAndYear,
  ) => {
    const referenceSemesters = {
      f: 'fall',
      w: 'winter',
      s: 'spring',
      su: 'summer',
    };
    const semester = semesterAndYear.match(SEMESTER_REGEX)[0].toLowerCase();
    const expandedSemester = referenceSemesters[semester]
      ? referenceSemesters[semester]
      : semester; // If abberviated, check referenceSemesters, else use full text
    const year = +semesterAndYear.match(YEAR_REGEX)[0]; //
    const dataFinal = {
      department, // 1st capturing group from full regex
      courseNumber: +courseNumber, // Converting 2nd capturing group to int
      year: year < 100 ? year + 2000 : year, // Normalizing year to full 4 digits
      semester:
        expandedSemester.charAt(0).toUpperCase()
        + expandedSemester.substring(1), // Normalizing semester
    };
    setCourseSubmittedOnMain(dataFinal);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    if (COURSE_REGEX_FULL.test(inputValue)) {
      // Destructing to avoid running match multiple times
      const [,
        department,
        courseNumber,
        semesterAndYear,
        ..._rest
      ] = inputValue.match(COURSE_REGEX_FULL);
      extractGroupsFromRegex(department, courseNumber, semesterAndYear, _rest);
      return;
    }
    setIsInvalid(true);
  };

  const handleInputChange = (event) => {
    setIsInvalid(false);
    setInputValue(event.target.value);
    setCourseSubmittedOnMain(null);
  };

  const hintInputValidation = () => {
    if (inputValue.length > 0) {
      return COURSE_REGEX_FULL.test(inputValue);
    }
    return true;
  };

  return (
    <Form onSubmit={(event) => handleFormSubmission(event)}>
      <Label htmlFor="course-search">Course</Label>
      <InputString
        type="text"
        placeholder="Enter course"
        value={inputValue}
        className={hintInputValidation() ? '' : 'invalid'}
        onChange={handleInputChange}
        data-testid="course-form-input"
      />
      {isInvalid && (
        <HintText data-testid="course-form-error">
          Error: Could not parse course
        </HintText>
      )}
      <SubmitButton
        type="submit"
        disabled={inputValue.length === 0 || isInvalid}
        data-testid="course-form-button"
      >
        Submit
      </SubmitButton>
    </Form>
  );
};

CourseForm.propTypes = {
  setCourseSubmittedOnMain: PropTypes.func,
};

export default CourseForm;

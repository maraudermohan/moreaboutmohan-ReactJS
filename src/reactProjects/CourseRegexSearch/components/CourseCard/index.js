import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  Title,
  Ul,
  Li,
  CardCategory,
  CardValue,
  HintText,
} from './styles';

function CourseCard({ filteredCourse }) {
  if (filteredCourse === null || typeof filteredCourse === 'undefined') {
    return (
      <HintText data-testid="course-card-error">
        Sorry, no matching course was found.
      </HintText>
    );
  }

  const {
    department = 'CS',
    courseNumber = 111,
    semester = 'Summer',
    year = 2020,
  } = filteredCourse;

  return (
    <Card data-testid="course-card-success">
      <Title>{`${department} ${courseNumber}`}</Title>
      <Ul>
        <Li>
          <CardCategory>Department</CardCategory>
          <CardValue>{department}</CardValue>
        </Li>
        <Li>
          <CardCategory>Course</CardCategory>
          <CardValue>{courseNumber}</CardValue>
        </Li>
        <Li>
          <CardCategory>Year</CardCategory>
          <CardValue>{year}</CardValue>
        </Li>
        <Li>
          <CardCategory>Semester</CardCategory>
          <CardValue>{semester}</CardValue>
        </Li>
      </Ul>
    </Card>
  );
}

CourseCard.propTypes = {
  filteredCourse: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
};

export default CourseCard;

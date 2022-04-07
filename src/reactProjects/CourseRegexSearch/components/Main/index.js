import React, { useState } from 'react';

import CourseForm from '../CourseForm';
import CourseCard from '../CourseCard';
import MainContainer, { TextContainer } from './styles';

function Main() {
  const [courseSubmittedOnMain, setCourseSubmittedOnMain] = useState(null);

  return (
    <MainContainer
      $width={window.innerWidth}
      $height={window.innerHeight}
    >
      <CourseForm setCourseSubmittedOnMain={setCourseSubmittedOnMain} />
      {
        courseSubmittedOnMain !== null
          ? (
            <CourseCard filteredCourse={courseSubmittedOnMain} />
          ) : (
            <TextContainer>
              <p>Valid format is &quot;CourseName:CourseNumber (space) Semester Year&quot;</p>
              <ul>
                <li>Course name & number can be separated by - or : or single space</li>
                <li>
                  Semester can be either the full word or starting letter of
                  - (f)all, (w)inter, (sp)ring, (s)ummer
                </li>
                <li>Year should be after 2000 in either YY or YYYY format</li>
                <li>Both orders are valid - semester year or year semester</li>
                <li>
                  Examples -
                  <br />
                  <br />
                  Biology111 Fall20
                  <br />
                  <br />
                  Maths:203 2019 summer
                  <br />
                  <br />
                  Chemistry-450 2010w
                </li>
              </ul>
            </TextContainer>
          )
      }
    </MainContainer>
  );
}

export default Main;

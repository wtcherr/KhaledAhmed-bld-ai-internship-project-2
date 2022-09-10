import React from "react";
import { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import "./CourseWrapper.css";
function CoursesWrapper(props) {
  const [courses, setCourses] = useState();
  useEffect(() => {
    setCourses(props.courses);
  }, [props.courses]);
  let CourseCards = [];
  if (courses === undefined || Object.entries(courses).length === 0) {
  } else {
    CourseCards = courses.map((course) => (
      <CourseCard course={course} key={course.id} />
    ));
  }
  return <div className="courses-wrapper">{CourseCards}</div>;
}

export default CoursesWrapper;

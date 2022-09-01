import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import "./CourseWrapper.css";
const CoursesWrapper = (props) => {
  const Courses = props.Courses;
  const CourseCards = Courses.map((course) => (
    <CourseCard {...course} key={course.id.toString()} />
  ));

  return <div className="courses-wrapper">{CourseCards}</div>;
};

export default CoursesWrapper;

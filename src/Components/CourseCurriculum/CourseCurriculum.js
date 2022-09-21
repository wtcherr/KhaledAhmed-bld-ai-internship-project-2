import React from "react";
import Accordion from "../Accordion/Accordion";
import "./CourseCurriculum.css";
export default function CourseCurriculum(course) {
  let accordions = course.lectures.map((lecture) => (
    <Accordion lecture={lecture} key={lecture.id} />
  ));
  return (
    <>
      <h2>Course content</h2>
      <p className="simple-text">{course.totallength}</p>
      <div className="course-curriculum">{accordions}</div>
    </>
  );
}

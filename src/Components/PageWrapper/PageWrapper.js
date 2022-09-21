import React from "react";
import CoursesSection from "../CoursesSection/CoursesSection";
import "./PageWrapper.css";
function PageWrapper(props) {
  return (
    <div className="page-wrapper">
      <h1>A board selection of courses</h1>
      <p>
        Choose from 185,000 online video courses with new addition published
        every month
      </p>
      <CoursesSection courses={props.courses} />
    </div>
  );
}

export default PageWrapper;

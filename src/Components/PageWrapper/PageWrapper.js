import React from "react";
import CoursesWrapper from "../CourseWrapper/CourseWrapper";
import "./PageWrapper.css";

const PageWrapper = (props) => {
  return (
    <div className="secondary-border-color courses">
      <h2>Expand your career opportunities with Python</h2>
      <p className="page-paragraph">
        Take one of Udemy's range of python courses and learn how to code using
        this incredibly useful language. its simple syntax and readability makes
        Python perfect for Flask, Django, data science, and machine learning.
        You'll learn how to build everything from games to sites to apps. Choose
        from a range of courses that will appeal to...
      </p>
      <button className="explore-btn bold secondary-border-color margin-bottom-28">
        Explore Python
      </button>
      <CoursesWrapper Courses={props.Courses} />
    </div>
  );
};

export default PageWrapper;

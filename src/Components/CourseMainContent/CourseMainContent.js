import React from "react";
import Ratings from "../Rating/Ratings";
import ThousandsSeparator from "../ThousandsSeparator/ThousandsSeparator";
import "./CourseMainContent.css";
import Skeleton from "@mui/material/Skeleton";
function CourseMainContent(course) {
  let loading = Object.entries(course).length === 0;
  return (
    <div className="main-content-container">
      <div className="main-content">
        <h1>{loading ? <Skeleton height={100} /> : course.title}</h1>
        <div className="description">
          {loading ? <Skeleton height={50} /> : course.description}
        </div>
        <div className="flex-horizontal gap">
          {loading ? (
            <Skeleton height={10} width={100} />
          ) : (
            <Ratings>{course.rating}</Ratings>
          )}
          {loading ? (
            <Skeleton height={10} width={100} />
          ) : (
            <a href="#" className="link simple-text">
              (<ThousandsSeparator>{course.totalreviews}</ThousandsSeparator>{" "}
              ratings)
            </a>
          )}
          {loading ? (
            <Skeleton width={100} />
          ) : (
            <div className="simple-text">
              <ThousandsSeparator>{course.enrollments}</ThousandsSeparator>{" "}
              students
            </div>
          )}
        </div>
        {loading ? (
          <Skeleton width={200} />
        ) : (
          <div className="flex-horizontal gap simple-text">
            Created By <Instructors instructors={course.instructors} />
          </div>
        )}
        {loading ? (
          <Skeleton width={300} />
        ) : (
          <div className="flex-horizontal gap simple-text">
            Last updated {course.lastupdated}
            <i className="fa-solid fa-globe"></i>
            English
            <i className="fa-solid fa-closed-captioning"></i>
            English
          </div>
        )}
      </div>
    </div>
  );
}
const ExtLink = ({ content }) => {
  return <div className="link">{content}</div>;
};
const Instructors = ({ instructors }) => {
  return instructors.map((instructor) => (
    <ExtLink content={instructor.name} key={instructor.id} />
  ));
};
export default CourseMainContent;

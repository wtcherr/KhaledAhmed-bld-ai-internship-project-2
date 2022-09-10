import React from "react";
import "./CoursePageHeader.css";
import ThousandsSeparator from "../ThousandsSeparator/ThousandsSeparator";
import Ratings from "../Rating/Ratings";
import Skeleton from "@mui/material/Skeleton";

function CoursePageHeader(course) {
  const loading = Object.entries(course).length === 0;
  return (
    <div className="course-header">
      {loading ? <Skeleton /> : <h4>{course.title}</h4>}
      {loading ? (
        <Skeleton />
      ) : (
        <div className="flex-horizontal gap">
          <Ratings>{course.rating}</Ratings>
          <a href="#" className="link simple-text">
            (<ThousandsSeparator>{course.totalreviews}</ThousandsSeparator>{" "}
            ratings)
          </a>
          <div className="simple-text">
            <ThousandsSeparator>{course.enrollments}</ThousandsSeparator>{" "}
            students
          </div>
        </div>
      )}
    </div>
  );
}
export default CoursePageHeader;

import React, { useState } from "react";
import "./CourseCard.css";
import Ratings from "../Rating/Ratings";
import { Link } from "react-router-dom";
import ThousandsSeparator from "../ThousandsSeparator/ThousandsSeparator";
import { Skeleton } from "@mui/material";
import { useEffect } from "react";
function CourseCard(props) {
  const [course, setCourse] = useState({});
  useEffect(() => {
    setCourse(props.course);
  }, [props.course]);
  let loading = course === undefined || Object.entries(course).length === 0;
  return (
    <div className="course-card">
      <Link to={"course/" + (loading ? "" : course.id)}>
        {loading ? (
          <Skeleton width={220} height={210} />
        ) : (
          <img src={course.img} alt="" />
        )}
        {loading ? (
          <>
            <Skeleton width={220} sx={{ mt: -4 }} />
            <Skeleton width={110} />
          </>
        ) : (
          <h4 className="margin-bottom-8">{course.title}</h4>
        )}
        <h5 className="flex-horizontal gap">
          {loading ? (
            <>
              <Skeleton width={50} />
              <Skeleton width={50} />
            </>
          ) : (
            <Instructors instructors={course.instructors} />
          )}
        </h5>
        <div className="flex-horizontal gap">
          {loading ? (
            <Skeleton width={90} />
          ) : (
            <Ratings>{course.rating}</Ratings>
          )}
          {loading ? (
            <Skeleton width={30} />
          ) : (
            <div className="simple-text secondary-font-color">
              (<ThousandsSeparator>{course.totalreviews}</ThousandsSeparator>)
            </div>
          )}
        </div>
        {loading ? (
          <Skeleton width={70} />
        ) : (
          <h4 className="price">E£{course.price}</h4>
        )}
      </Link>
    </div>
  );
}

const ExtLink = ({ content }) => {
  return <div className="secondary-font-color margin-bottom-8">{content}</div>;
};
const Instructors = ({ instructors }) => {
  let InstructorsNodes = [];
  for (let i = 0; i < instructors.length; i++) {
    InstructorsNodes.push(
      <ExtLink
        content={
          instructors[i].name + (i !== instructors.length - 1 ? "," : "")
        }
        key={instructors[i].id}
      />
    );
  }
  return InstructorsNodes;
};
export default CourseCard;

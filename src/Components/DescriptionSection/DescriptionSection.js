import { Skeleton } from "@mui/material";
import React from "react";
import "./DescriptionSection.css";
import ShowMore from "../ShowMore/ShowMore";

export default function DescriptionSection(course) {
  let loading = Object.entries(course).length === 0;
  let requirements = [];
  let descriptions = [];
  if (!loading) {
    requirements = course.requirements.map((req) => (
      <li key={req.id}>{req.text}</li>
    ));
    descriptions = course.descriptions.map((desc) => (
      <p key={desc.id}>{desc.text}</p>
    ));
  } else {
    requirements = [1, 2, 3].map((id) => <Skeleton width={200} key={id} />);
    descriptions = [1, 2, 3].map((id) => (
      <Skeleton width={300} height={60} key={id} />
    ));
  }
  return (
    <div className="requirements-description">
      <div className="requirements">
        <h2>Requirements</h2>
        <ul className="simple-text" style={{ marginLeft: 15 }}>
          {requirements}
        </ul>
      </div>
      <div className="description">
        <h2>Description</h2>
        <ShowMore>
          <div className="simple-text">{descriptions}</div>
        </ShowMore>
      </div>
    </div>
  );
}

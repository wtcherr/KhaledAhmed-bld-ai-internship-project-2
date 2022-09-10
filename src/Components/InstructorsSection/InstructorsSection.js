import React from "react";
import InstructorCard from "../InstructorCard/InstructorCard";
import { Skeleton } from "@mui/material";
import "./InstructorsSection.css";
export default function InstructorsSection(course) {
  let loading = Object.entries(course).length === 0;
  if (loading) return <Skeleton height={200} width={400} />;
  let instrcutorsCards = course.instructors.map((instructor) => (
    <InstructorCard instructor={instructor} key={instructor.id} />
  ));
  return (
    <div className="instructors-section">
      <h2>Instructors</h2>
      {instrcutorsCards}
    </div>
  );
}

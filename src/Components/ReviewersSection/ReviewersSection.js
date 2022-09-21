import { Skeleton } from "@mui/material";
import React from "react";
import ReviewerCard from "../ReviewerCard/ReviewerCard";
import StudentFeedback from "../StudentFeedback/StudentFeedback";
export default function ReviewersSection(course) {
  let loading = Object.entries(course).length === 0;
  let reviewers = [];
  if (loading)
    reviewers = [1, 2, 3, 4].map((id) => (
      <Skeleton width={300} height={100} key={id} />
    ));
  else {
    reviewers = course.reviewers.map((reviewer) => (
      <ReviewerCard reviewer={reviewer} key={reviewer.id} />
    ));
  }
  return (
    <div className="reviewers-section">
      <h2>Student Feedback</h2>
      <StudentFeedback {...course} />
      <h2>Reviews</h2>
      {reviewers}
    </div>
  );
}

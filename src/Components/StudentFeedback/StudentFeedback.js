import React from "react";
import "./StudentFeedback.css";
import { Typography } from "@mui/material";
import { Rating } from "@mui/material";
import { Feedback, StarBorder } from "@mui/icons-material";
export default function StudentFeedback(course) {
  const loading = course === undefined || Object.entries(course).length === 0;
  let feedbacks = [];
  if (loading) {
    feedbacks = [5, 4, 3, 2, 1].map((val) => (
      <Feedback value={val} percent={val} key={val} />
    ));
  } else {
    feedbacks = course.feedbacks.map((feedback) => (
      <FeedbackBar
        value={feedback.value}
        percent={feedback.percentage}
        key={feedback.value}
      />
    ));
  }
  return (
    <div className="student-feedback">
      <div className="total-feedback">
        <Typography variant="h2" className="rating-color" fontWeight={1000}>
          4.4
        </Typography>
        <Rating
          name="read-only"
          value={4.4}
          precision={0.5}
          readOnly
          size="small"
          sx={{ color: "#e59819" }}
          emptyIcon={
            <StarBorder style={{ color: "#e59819" }} fontSize="inherit" />
          }
        />
        <div className="simple-text rating-color bold">Course Rating</div>
      </div>
      <div className="feedback-bars">{feedbacks}</div>
    </div>
  );
}
const FeedbackBar = ({ value, percent }) => {
  return (
    <div className="feedback-bar">
      <Bar percent={percent} />
      <Rating
        name="read-only"
        value={value}
        precision={0.5}
        readOnly
        sx={{ color: "#e59819" }}
        emptyIcon={
          <StarBorder style={{ color: "#e59819" }} fontSize="inherit" />
        }
      />
      <div className="simple-text percent-text">{percent + "%"}</div>
    </div>
  );
};
const Bar = ({ percent }) => {
  return (
    <div className="bar-empty">
      <div className="bar-filled" style={{ width: percent + "%" }}></div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import "./WhatToLearnSection.css";
import CheckIcon from "@mui/icons-material/Check";
import { Skeleton } from "@mui/material";
export default function WhatToLearnSection(course) {
  const loading = Object.entries(course).length === 0;
  let learnitems = [];
  if (loading) {
    learnitems = [1, 2, 3].map((id) => <LearnItem key={id} />);
  } else {
    learnitems = course.learnitems.map((item) => (
      <LearnItem content={item.text} key={item.id} />
    ));
  }
  return (
    <div className="what-to-learn">
      <div className="learn-content">
        <h2>What you'll learn</h2>
        <div className="learn-items">{learnitems}</div>
      </div>
    </div>
  );
}
const LearnItem = ({ content }) => {
  const [item, setItem] = useState({});
  useEffect(() => {
    setItem(content);
  }, [content]);
  const loading = item === undefined || Object.entries(item).length === 0;
  return (
    <div className="learn-item">
      <CheckIcon sx={{ width: 15, height: 15 }} />
      <div className="simple-text">
        {loading ? <Skeleton width={200} /> : content}
      </div>
    </div>
  );
};

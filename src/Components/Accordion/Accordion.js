import React, { useState } from "react";
import "./Accordion.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function Accordion(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const lecture = props.lecture;
  const handleClick = () => {
    setIsExpanded((expanded) => {
      return !expanded;
    });
  };
  return (
    <div className="accordion-panel">
      <button className="accordion-toggler" onClick={handleClick}>
        {isExpanded ? (
          <KeyboardArrowUpIcon sx={{ ml: 2, mt: 1.5, mb: 1.5, mr: 2 }} />
        ) : (
          <KeyboardArrowDownIcon sx={{ ml: 2, mt: 1.5, mb: 1.5, mr: 2 }} />
        )}
        <h3>{lecture.title}</h3>
        <div className="lecture-stamp">{lecture.totalDuration}</div>
      </button>
      <div
        className="lessons"
        style={{ display: isExpanded ? "block" : "none" }}
      >
        <Lessons lessons={lecture.lessons} />
      </div>
      <div className="accordion-content"></div>
    </div>
  );
}
const Lessons = ({ lessons }) => {
  return lessons.map((lesson) => (
    <Lesson name={lesson.name} duration={lesson.duration} key={lesson.id} />
  ));
};
const Lesson = (props) => {
  return (
    <div className="lesson">
      <PlayCircleIcon sx={{ ml: 2, mt: 1, mb: 1, mr: 2 }} fontSize={"small"} />
      <h4>{props.name}</h4>
      <div className="lesson-stamp">{props.duration}</div>
    </div>
  );
};

import React, { useState } from "react";
import "./ShowMore.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function ShowMore(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const clickHandler = () => {
    setIsExpanded((expanded) => !expanded);
  };
  const ShowMoreLessBtn = () => {
    return (
      <button onClick={clickHandler} className="show-more-less-btn">
        {isExpanded ? "Show Less" : "Show More"}
        {isExpanded ? (
          <KeyboardArrowUpIcon sx={{ width: 15 }} />
        ) : (
          <KeyboardArrowDownIcon sx={{ width: 15 }} />
        )}
      </button>
    );
  };
  return (
    <div className="show-more">
      <div
        className={
          "show-more-text " + (isExpanded ? "expanded" : "not-expanded")
        }
      >
        {props.children}
      </div>
      <ShowMoreLessBtn />
    </div>
  );
}

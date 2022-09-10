import React from "react";
import useScroll from "../Hooks/useScroll";
import "./ShortcutNavigation.css";
function ShortcutNavigation(props) {
  const docked = useScroll(400);
  return (
    <div
      className={
        "shortcuts-tab " +
        (docked ? "docked-shortcuts" : "not-docked-shortcuts")
      }
    >
      <ShortcutBtn content={"Overview"} />
      <ShortcutBtn content={"Curriculum"} />
      <ShortcutBtn content={"Instructor"} />
      <ShortcutBtn content={"Reviews"} />
    </div>
  );
}
const ShortcutBtn = ({ content }) => {
  return <div className="shortcut-btn">{content}</div>;
};
export default ShortcutNavigation;

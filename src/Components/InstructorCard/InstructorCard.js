import React from "react";
import "./InstructorCard.css";
import { Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PeopleIcon from "@mui/icons-material/People";
import { PlayCircle } from "@mui/icons-material";
import ThousandsSeparator from "../ThousandsSeparator/ThousandsSeparator";
import ShowMore from "../ShowMore/ShowMore";
export default function InstructorCard({ instructor }) {
  return (
    <div className="instructor-card">
      <a href="#">
        <h3> {instructor.name}</h3>
      </a>
      <div className="instructor-job">{instructor.job}</div>
      <div className="instructor-img-stats">
        <Avatar
          alt="instructor avatar"
          src={instructor.img}
          sx={{ width: 110, height: 110, zIndex: "0" }}
        />
        <div className="stats">
          <div className="stat">
            <StarIcon sx={{ width: 15, height: 15 }} />
            <span className="simple-text">
              {instructor.rating} Instructor Rating
            </span>
          </div>
          <div className="stat">
            <WorkspacePremiumIcon sx={{ width: 15 }} />
            <span className="simple-text">
              <ThousandsSeparator>{instructor.reviews}</ThousandsSeparator>{" "}
              Reviews
            </span>
          </div>
          <div className="stat">
            <PeopleIcon sx={{ width: 15 }} />
            <span className="simple-text">
              <ThousandsSeparator>{instructor.students}</ThousandsSeparator>
              Students
            </span>
          </div>
          <div className="stat">
            <PlayCircle sx={{ width: 15 }} />
            <span className="simple-text">{instructor.courses} Courses</span>
          </div>
        </div>
      </div>
      <ShowMore>
        <div className="simple-text instructor-description-text">
          {instructor.description}
        </div>
      </ShowMore>
    </div>
  );
}

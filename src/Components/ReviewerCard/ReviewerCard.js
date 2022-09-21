import React from "react";
import "./ReviewerCard.css";
import { Avatar } from "@mui/material";
import { Rating } from "@mui/material";
import { StarBorder } from "@mui/icons-material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { IconButton } from "@mui/material";
import { useState } from "react";
export default function ReviewerCard({ reviewer }) {
  return (
    <div className="reviewer-card">
      <Avatar sx={{ bgcolor: "#1c1d1f", fontSize: 16, fontWeight: 700 }}>
        {reviewer.initials}
      </Avatar>
      <div className="review-details">
        <h4>{reviewer.name}</h4>
        <div className="rating-time">
          <Rating
            name="read-only"
            value={reviewer.rating}
            precision={0.5}
            readOnly
            sx={{ color: "#e59819" }}
            emptyIcon={
              <StarBorder style={{ color: "#e59819" }} fontSize="inherit" />
            }
          />
          <div className="simple-text time-ago">{reviewer.timeago}</div>
        </div>
        <div className="simple-text review-text">{reviewer.review}</div>
        <small className="review-text">Was this review helpful?</small>
        <br />
        <LikeDisLike />
      </div>
    </div>
  );
}
const LikeDisLike = () => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const handleLiked = () => {
    setLiked((liked) => !liked);
    setDisliked(false);
  };
  const handleDisLiked = () => {
    setDisliked((disliked) => !disliked);
    setLiked(false);
  };
  const toggledOnColors = {
    bgcolor: "black",
    color: "white",
    border: "1px solid black",
    width: 40,
    height: 40,
  };
  const toggledOffColors = {
    bgcolor: "white",
    color: "black",
    border: "1px solid black",
    width: 40,
    height: 40,
  };
  return (
    <div className="like-dislike">
      <IconButton onClick={handleLiked} sx={{ ml: -1 }}>
        <Avatar sx={liked ? toggledOnColors : toggledOffColors}>
          <ThumbUpOffAltIcon />
        </Avatar>
      </IconButton>
      <IconButton onClick={handleDisLiked} sx={{ ml: -1 }}>
        <Avatar sx={disliked ? toggledOnColors : toggledOffColors}>
          <ThumbDownOffAltIcon />
        </Avatar>
      </IconButton>
      <small>Report</small>
    </div>
  );
};

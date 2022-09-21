import React from "react";
import "./Ratings.css";
import { Rating } from "@mui/material";
import { StarBorder } from "@mui/icons-material";

function Ratings(props) {
  const rating = props.children;

  return (
    <div className="rating rating-color flex-horizontal gap">
      <h4>{rating.toString()}</h4>
      <Rating
        name="read-only"
        value={rating}
        precision={0.5}
        readOnly
        size="small"
        sx={{ color: "#e59819" }}
        emptyIcon={
          <StarBorder style={{ color: "#e59819" }} fontSize="inherit" />
        }
      />
    </div>
  );
}

export default Ratings;

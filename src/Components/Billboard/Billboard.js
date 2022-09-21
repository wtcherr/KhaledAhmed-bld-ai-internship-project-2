import React from "react";
import "./Billboard.css";

function Billboard() {
  return (
    <div className="billboard">
      <img
        src="https://img-b.udemycdn.com/notices/web_banner/slide_1_image_udlite/db24b94e-d190-4d5a-b1dd-958f702cc8f5.jpg"
        alt="women"
      />
      <div className="billboard-content">
        <h1>Learning that gets you</h1>
        <p>Skills for your present (and your future). Get started with us.</p>
      </div>
    </div>
  );
}
export default Billboard;

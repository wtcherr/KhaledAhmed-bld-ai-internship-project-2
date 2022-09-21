import React from "react";
import OpaqueButton from "../Buttons/OpaqueButton/OpaqueButton";
import TranslucentButton from "../Buttons/TranslucentButton/TranslucentButton";
import useScroll from "../Hooks/useScroll";
import "./CourseBanner.css";
import Skeleton from "@mui/material/Skeleton";

export default function CourseBanner(course) {
  const docked = useScroll(400);
  const loading = Object.entries(course).length === 0;
  return (
    <div
      className={
        "course-banner " + (docked ? "docked-banner" : "not-docked-banner")
      }
    >
      {!docked &&
        (loading ? (
          <Skeleton height={300} sx={{ mt: 0 }} />
        ) : (
          <div className="course-img">
            <img src={course.img} alt="course img" />
          </div>
        ))}
      <div className="banner-content">
        <h1>{loading ? <Skeleton /> : "€" + course.price}</h1>
        <OpaqueButton>Add to cart</OpaqueButton>
        <TranslucentButton>Buy now</TranslucentButton>
        <div className="simple-text flex-horizontal">
          30-Day Money-Back Guarantee
        </div>
        <Includes />
        <div className="link-btns">
          <LinkBtn>Share</LinkBtn>
          <LinkBtn>Gift this course</LinkBtn>
          <LinkBtn>Apply Coupon</LinkBtn>
        </div>
      </div>
      <Training />
    </div>
  );
}
const Includes = () => {
  return (
    <div className="includes">
      <div className="bold">This course includes:</div>
      <IncludeItem>
        <i className="fa-brands fa-youtube"></i> 14 hours on-demand video
      </IncludeItem>
      <IncludeItem>
        <i className="fa-solid fa-sheet-plastic"></i> 1 article
      </IncludeItem>
      <IncludeItem>
        <i className="fa-solid fa-download"></i>3 downloadable resources
      </IncludeItem>
      <IncludeItem>
        <i className="fa-solid fa-infinity"></i> Full lifetime acess
      </IncludeItem>
      <IncludeItem>
        <i className="fa-solid fa-mobile"></i> Acess on mobile and TV
      </IncludeItem>
      <IncludeItem>
        <i className="fa-solid fa-trophy"></i> Certificate of completion
      </IncludeItem>
    </div>
  );
};
const LinkBtn = (props) => {
  return <div className="link-btn">{props.children}</div>;
};
const IncludeItem = (props) => {
  return (
    <div className="simple-text flex-horizontal gap">{props.children}</div>
  );
};
const Training = () => {
  return (
    <div className="training-content">
      <h3>Training 5 or more people?</h3>
      <div className="simple-text">
        Get your team access to 17,000+ top Udemy courses anytime, anywhere.
      </div>
      <TranslucentButton>Try Udemy Business</TranslucentButton>
    </div>
  );
};

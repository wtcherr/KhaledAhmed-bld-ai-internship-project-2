import React from "react";
import "./CourseCard.css";

const CourseCard = ({ id, title, link, img, instructor, rating, price }) => {
  return (
    <div className="course-card">
      <img src={img} alt="" />
      <a href={link} className="primary-font-color">
        <h4 className="margin-bottom-8">{title}</h4>
      </a>
      <h5 className="secondary-font-color margin-bottom-8">{instructor}</h5>
      <Rating rating={rating} />
      <h4 className="price">E£{price}</h4>
    </div>
  );
};

const Rating = ({ rating }) => {
  const stars = [...Array(Math.floor(rating))].map((e, i) => (
    <FullStar key={i} />
  ));
  let halfStar = Math.round(rating - Math.floor(rating)) > 0;

  return (
    <div className="rating rating-color flex-horizontal">
      <h4>{rating.toString()}</h4>
      {stars}
      {halfStar && <HalfStar />}
    </div>
  );
};

const FullStar = () => <i className="fa-solid fa-star" />;
const HalfStar = () => <i className="fa-solid fa-star-half-stroke" />;

export default CourseCard;

import React from "react";
import "./App.css";

const CoursesList = [
  {
    id: 1,
    title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
    link: "https://www.udemy.com/course/100-days-of-code/",
    img: "https://img-b.udemycdn.com/course/240x135/2776760_f176_10.jpg",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    price: 229.99,
  },

  {
    id: 2,
    title: "The Complete 2022 Web Development Bootcamp",
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    img: "https://img-b.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    price: 269.99,
  },
  {
    id: 3,
    title: "Python for Data Science and Machine Learning Bootcamp",
    link: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
    img: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg",
    instructor: "Jose Portilla",
    rating: 1.5,
    price: 229.99,
  },
  {
    id: 4,
    title: "Complete Python Developer in 2022: Zero to Mastery",
    link: "https://www.udemy.com/course/complete-python-developer-zero-to-mastery/",
    img: "https://img-b.udemycdn.com/course/240x135/2473048_8255_5.jpg",
    instructor: "Andrei Neagoie, Zero To Mastery",
    rating: 4.7,
    price: 269.99,
  },
  {
    id: 5,
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    img: "https://img-b.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
    instructor:
      "Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller",
    rating: 4.6,
    price: 229.99,
  },
];

function App() {
  return (
    <>
      <PageWrapper />
    </>
  );
}
const PageWrapper = () => {
  return (
    <div className="secondary-border-color courses">
      <h2>Expand your career opportunities with Python</h2>
      <p className="page-paragraph">
        Take one of Udemy's range of python courses and learn how to code using
        this incredibly useful language. its simple syntax and readability makes
        Python perfect for Flask, Django, data science, and machine learning.
        You'll learn how to build everything from games to sites to apps. Choose
        from a range of courses that will appeal to...
      </p>
      <button className="explore-btn bold secondary-border-color margin-bottom-28">
        Explore Python
      </button>
      <CoursesWrapper />
    </div>
  );
};

const CoursesWrapper = () => {
  const CourseCards = CoursesList.map((course) => (
    <CourseCard {...course} key={course.id.toString()} />
  ));
  return <div className="courses-wrapper">{CourseCards}</div>;
};
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

export default App;

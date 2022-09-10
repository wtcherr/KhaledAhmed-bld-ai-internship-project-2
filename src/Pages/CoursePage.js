import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import CourseBanner from "../Components/CourseBanner/CourseBanner";
import CourseMainContent from "../Components/CourseMainContent/CourseMainContent";
import CoursePageHeader from "../Components/CoursePageHeader/CoursePageHeader";
import ShortcutNavigation from "../Components/ShortcutNavigation/ShortcutNavigation";
import "./CoursePage.css";
import { CoursesContext } from "../App";
import { useParams } from "react-router-dom";
import LandingPageBody from "../Components/LandingPageBody/LandingPageBody";
function CoursePage() {
  const getCourseById = (courseId, courses) => {
    return courses.find((course) => course.id === courseId);
  };

  const courses = useContext(CoursesContext);
  const [course, setCourse] = useState({});
  const { courseId } = useParams();
  useEffect(() => {
    let curCourse = getCourseById(courseId, courses);
    setCourse(curCourse);
  }, [courses]);
  const loading = course === undefined || Object.entries(course).length === 0;
  if (!loading) document.title = course.title + " | Udemy";
  return (
    <div className="header">
      <CoursePageHeader {...course} />
      <CourseMainContent {...course} />
      <ShortcutNavigation />
      <CourseBanner {...course} />
      <LandingPageBody {...course} />
    </div>
  );
}

export default CoursePage;

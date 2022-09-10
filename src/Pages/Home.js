import React, { useContext, useState } from "react";
import Billboard from "../Components/Billboard/Billboard";
import PageWrapper from "../Components/PageWrapper/PageWrapper";
import { useSearchParams } from "react-router-dom";
import { CoursesContext } from "../App";
import { useEffect } from "react";
function Home() {
  const [courses, setCourses] = useState();
  const [filteredCourses, setFilteredCourses] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const coursesList = useContext(CoursesContext);
  const loading = courses === undefined || Object.entries(courses).length === 0;

  useEffect(() => {
    setCourses(coursesList);
    const filtername = searchParams.get("name");
    if (filtername !== null && filtername !== undefined && !loading) {
      const regex = RegExp(filtername.toLowerCase());
      setFilteredCourses(
        courses.filter((course) => regex.test(course.title.toLowerCase()))
      );
    } else {
      setFilteredCourses(courses);
    }
  });

  return (
    <>
      <Billboard />
      <PageWrapper courses={filteredCourses} />
    </>
  );
}
export default Home;

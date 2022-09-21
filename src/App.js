import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import CoursePage from "./Pages/CoursePage";
export const CoursesContext = React.createContext();
function App() {
  const [courses, setCourses] = useState([]);
  const server_link = "https://api.npoint.io/3875695f0514545d24a1";
  useEffect(() => {
    //TODO this is a temp link
    fetch(server_link)
      .then((response) => response.json())
      .then((json) => {
        setCourses(json.courses);
      })
      .catch((error) => console.log("Error: ", error));
  }, []);
  return (
    <CoursesContext.Provider value={courses}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="course">
          <Route path=":courseId" element={<CoursePage />} />
        </Route>
      </Routes>
    </CoursesContext.Provider>
  );
}
export default App;

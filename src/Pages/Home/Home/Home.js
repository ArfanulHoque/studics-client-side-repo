import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesCart from "../../Shared/CoursesCart/CoursesCart/CoursesCart";

const Home = () => {
  const allCourses = useLoaderData();
  return (
    <div>
      <h2>Studics Courses Home: {allCourses.length}</h2>
      {allCourses.map((courses) => (
        <CoursesCart key={courses.id} courses={courses}></CoursesCart>
      ))}
    </div>
  );
};

export default Home;

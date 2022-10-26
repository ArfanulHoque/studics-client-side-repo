import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesCart from "../../Shared/CoursesCart/CoursesCart/CoursesCart";

const Home = () => {
  const allCourses = useLoaderData();
  return (
    <div>
      <h2>Studics Courses</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {allCourses.map((courses) => (
          <CoursesCart key={courses._id} courses={courses}></CoursesCart>
        ))}
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesCart from "../../Shared/CoursesCart/CoursesCart/CoursesCart";

const Courses = () => {
  const coursesCategory = useLoaderData();
  return (
    <div>
      <h2>Course</h2>
      {coursesCategory.get((courses) => (
        <CoursesCart key={courses.id} CoursesCart={courses}></CoursesCart>
      ))}
    </div>
  );
};

export default Courses;

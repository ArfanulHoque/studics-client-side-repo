import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesCart from "../../Shared/CoursesCart/CoursesCart/CoursesCart";

const Courses = () => {
  const coursesCategory = useLoaderData();
  console.log(coursesCategory);
  return (
    <div>
      <h2>Course</h2>
      <CoursesCart courses={coursesCategory}></CoursesCart>
    </div>
  );
};

export default Courses;

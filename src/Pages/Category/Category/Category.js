import React from "react";
import { useLoaderData } from "react-router-dom";
import CartDetails from "../../CartDetails/CartDetails/CartDetails";
import CoursesCart from "../../Shared/CoursesCart/CoursesCart/CoursesCart";

const Category = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div>
      {courses.map((course) => (
        <CartDetails key={course._id} course={course}></CartDetails>
      ))}
    </div>
  );
};

export default Category;

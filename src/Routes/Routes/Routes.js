import { createBrowserRouter } from "react-router-dom";
import Error from "../../Error/Error";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://studics-website-server.vercel.app/courses"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://studics-website-server.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/courses/:id",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(
            `https://studics-website-server.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courseDetails/:id",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(
            `https://studics-website-server.vercel.app/courses/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

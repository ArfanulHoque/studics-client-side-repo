import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AiFillCaretRight } from "react-icons/ai";

const LeftSideNav = () => {
  const { providerLogin } = useContext(AuthContext);
  const { providerLoginWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  const handleGithubSignIn = () => {
    providerLoginWithGithub(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://studics-website-server.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <div>
      <h2>COURSES</h2>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none fw-bold fs-6"
            >
              <AiFillCaretRight></AiFillCaretRight>
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;

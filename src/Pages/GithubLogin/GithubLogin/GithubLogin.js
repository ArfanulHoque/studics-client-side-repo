import React from "react";

import { useContext } from "react";
import Button from "react-bootstrap/Button";

import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

import { FaGithub } from "react-icons/fa";

import { GithubAuthProvider } from "firebase/auth";

const GithubLogin = () => {
  const { providerLoginWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const githubProvider = new GithubAuthProvider();

  const handleGithubSignIn = () => {
    providerLoginWithGithub(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Button onClick={handleGithubSignIn} variant="outline-dark">
        <FaGithub></FaGithub> Login With Github
      </Button>
    </div>
  );
};

export default GithubLogin;

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const GoogleLogin = () => {
  const { providerLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Button
        onClick={handleGoogleSignIn}
        className="mb-3"
        variant="outline-primary"
      >
        <FaGoogle></FaGoogle> Login With Google
      </Button>
    </div>
  );
};

export default GoogleLogin;

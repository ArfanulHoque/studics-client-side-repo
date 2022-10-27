import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import GithubLogin from "../../GithubLogin/GithubLogin/GithubLogin";
import GoogleLogin from "../../GoogleLogin/GoogleLogin/GoogleLogin";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="p-4">
        <h2>Register</h2>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Full Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>PhotoURL</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-danger fw-bold">{error}</Form.Text>
      </Form>
      <div className="text-center">
        <GoogleLogin></GoogleLogin>
        <GithubLogin></GithubLogin>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Register = () => {
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
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <Form onSubmit={handleSubmit}>
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
      <Form.Text className="text-danger">show error</Form.Text>
    </Form>
  );
};

export default Register;
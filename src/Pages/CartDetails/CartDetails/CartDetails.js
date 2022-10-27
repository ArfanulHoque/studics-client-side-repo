import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CartDetails = ({ course }) => {
  console.log(course);
  const { image, title, description, author } = course;

  return (
    <Card>
      <Button className="w-25 " variant="primary">
        Download pdf
      </Button>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Get Premium Access</Button>
      </Card.Body>
    </Card>
  );
};

export default CartDetails;

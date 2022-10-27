import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CartDetails = ({ course }) => {
  const { image, title, description, author, img, name } = course;

  return (
    <Card>
      <Button className="w-25 mb-2" variant="primary">
        Download pdf
      </Button>
      <Card.Img className="w-75px" variant="top" src={image} />
      <Card.Img className="w-30px" variant="top" src={img} />
      <Card.Text>{name}</Card.Text>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Get Premium Access</Button>
      </Card.Body>
    </Card>
  );
};

export default CartDetails;

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CoursesCart = ({ courses }) => {
  const { title, description, image, _id } = courses;

  return (
    <div className="d-flex row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <Card className="mb-5  " style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/courses/${_id}`}>
            <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CoursesCart;

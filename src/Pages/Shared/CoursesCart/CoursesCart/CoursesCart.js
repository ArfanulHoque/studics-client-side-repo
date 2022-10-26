import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CoursesCart = ({ courses }) => {
  const { title, description, image, id } = courses;

  return (
    <div className="d-flex row-cols-1 row-cols-md-3 g-4">
      <Card className="mb-5  " style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description.length > 100 ? (
              <p>
                {description.slice(0, 100) + "..."}
                <Link to={`/courses/${id}`}>Read More</Link>
              </p>
            ) : (
              <p>{description}</p>
            )}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CoursesCart;

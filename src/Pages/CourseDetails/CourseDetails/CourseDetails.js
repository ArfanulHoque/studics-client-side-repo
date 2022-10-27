import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CourseDetails = (courses) => {
  console.log(courses);
  const { title, description, image } = courses;
  return (
    <Card className="text-center">
      <Card.Img>{image}</Card.Img>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Get Premium</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default CourseDetails;

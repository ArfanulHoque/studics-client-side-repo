import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CartDetails = ({ course }) => {
  const { image, title, description, author, img, name } = course;

  return (
    <Card>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <Button className="w-25 mb-4" onClick={toPdf}>
            Generate Pdf
          </Button>
        )}
      </Pdf>
      <div ref={ref}>
        <Card.Img className="w-75px" variant="top" src={image} />
        <Card.Img className="w-30px" variant="top" src={img} />
        <Card.Text>{name}</Card.Text>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to="/premium">
            <Button variant="primary">Get Premium Access</Button>
          </Link>
        </Card.Body>
      </div>
    </Card>
  );
};

export default CartDetails;

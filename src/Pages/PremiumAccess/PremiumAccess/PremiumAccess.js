import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";
import logo from "../../../images/logo.png";

const PremiumAccess = () => {
  return (
    <div className="text-center">
      <Card style={{ width: "18rem" }}>
        <Image variant="top" src={logo}></Image>
        <Card.Body>
          <Card.Title>Author: Md.Erfan</Card.Title>
          <Card.Text>For Any Course: $499</Card.Text>
          <Card.Text>
            Congratulations! You'll be happy to know that you've come to the
            right place. Alison has helped hundreds of thousands of people
            around the world successfully embark on their first career journey.
            Starting your work life from scratch can seem like a daunting task,
            but Alison has all the resources necessary to make sure that you
            succeed both in starting your career path and ending up in the right
            place!
          </Card.Text>
          <Button variant="primary">Enjoy Learning</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PremiumAccess;

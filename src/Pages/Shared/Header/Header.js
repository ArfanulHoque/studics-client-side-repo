import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/src/images/logo.png">
          <img
            src="/src/images/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Button variant="light">
              <Link to="/">Home</Link>
            </Button>
            <Button variant="light">
              <Link to="/">Courses</Link>
            </Button>

            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <Button variant="light">
              <Link to="/blog">Blog</Link>
            </Button>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

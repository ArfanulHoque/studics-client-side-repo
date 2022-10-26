import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Button from "react-bootstrap/Button";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="">
          <img
            src="/src/images/logo.png"
            width=""
            height=""
            className="d-inline-block  align-top"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-decoration-none">
            <Button variant="light">
              <Link className=" text-decoration-none fw-bold" to="/">
                Home
              </Link>
            </Button>
            <Button variant="light">
              <Link className="text-decoration-none fw-bold" to="/">
                Courses
              </Link>
            </Button>

            <Button variant="light">
              <Link className="text-decoration-none fw-bold" to="/faq">
                FAQ
              </Link>
            </Button>
            <Button variant="light">
              <Link className="text-decoration-none fw-bold" to="/blog">
                Blog
              </Link>
            </Button>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
          <div>
            <BsMoonFill></BsMoonFill>
          </div>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

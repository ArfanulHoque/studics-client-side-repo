import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Button from "react-bootstrap/Button";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { FaUser, IconName } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { Image } from "react-bootstrap";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="">
          <img
            src={logo}
            width="30px"
            height="30px"
            className="d-inline-block  align-top"
            alt=""
          />
          <span className="fw-bold text-info">Studics</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-decoration-none">
            <Button variant="light">
              <NavLink className=" text-decoration-none fw-bold" to="/">
                Home
              </NavLink>
            </Button>
            <Button variant="light">
              <NavLink className="text-decoration-none fw-bold" to="/">
                Courses
              </NavLink>
            </Button>

            <Button variant="light">
              <NavLink className="text-decoration-none fw-bold" to="/faq">
                FAQ
              </NavLink>
            </Button>
            <Button variant="light">
              <NavLink className="text-decoration-none fw-bold" to="/blog">
                Blog
              </NavLink>
            </Button>
            <div>
              {toggle === true ? (
                <Button onClick={handleToggle} variant="primary" size="sm">
                  Light Mode
                </Button>
              ) : (
                <Button onClick={handleToggle} variant="secondary" size="sm">
                  Dark Mode
                </Button>
              )}
            </div>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <Button onClick={handleLogOut} variant="light">
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    className="text-decoration-none fw-bold mx-2"
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link className="text-decoration-none fw-bold" to="/register">
                    Register
                  </Link>
                </>
              )}
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ? (
                <div className="HeaderImg">
                  <img
                    className="HeaderImg mx-2"
                    style={{ height: "30px", borderRadius: "100%" }}
                    src={user?.photoURL}
                    alt=""
                  />
                  <div class="sub-menu">
                    <p>
                      <b>{user?.displayName}</b>
                    </p>
                  </div>
                </div>
              ) : (
                <FaUser></FaUser>
              )}
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

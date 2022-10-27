import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Row className="bg-dark mt-5 mx-auto p-3 align-items-center ">
      <Col lg-4>
        <h2 className="text-info fw-bold">Studics</h2>
        <p className="text-white">
          We are giving our student the best and suitable services for building
          their bright future
        </p>
      </Col>
      <Col lg-4 className="text-white">
        <h4>Contact</h4>
        <p>
          <FaFacebook></FaFacebook> Facebook
        </p>
        <p>
          <FaTwitter></FaTwitter> Twitter
        </p>
        <p>
          <FaWhatsapp></FaWhatsapp> Whats'app
        </p>
        <p>
          <FaInstagram></FaInstagram> Instagram
        </p>
        <p>
          <FaTwitch></FaTwitch> Twitch
        </p>
      </Col>
      <Col lg-4 className="text-white">
        <h4>Support</h4>
        <p>Support Career</p>
        <p>24h Services</p>
        <p>Quick Chat</p>
      </Col>
      <p className="text-danger text-center">
        <small>Copyright@ All Right Reserved Studics </small>
      </p>
    </Row>
  );
};

export default Footer;

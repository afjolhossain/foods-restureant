import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo2.png";

const Header = () => {
  return (
    <div>
      <Navbar style={{ width: "100%" }} bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img style={{ width: 100 }} src={logo} alt="" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import loginFrom from "../../../Images/login-img.png";

const Login = () => {
  return (
    <div id="login">
      <Row style={{ backgroundColor: "navy" }}>
        <Col style={{ marginTop: 20 }}>
          <img className="mx-auto" src={loginFrom} alt="" />
        </Col>
        <Col style={{ height: 620 }}>
          <h1 style={{ color: "white" }}>Please Login</h1>
          <Form style={{ padding: 20, color: "white" }}>
            <Form.Group style={{ marginTop: 20 }} controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="w-50 mx-auto m-3 bg-success text-white bg-opacity-75"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="w-50 mx-auto m-3 bg-success text-white bg-opacity-75"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;

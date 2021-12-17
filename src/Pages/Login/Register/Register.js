import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import registerImage from "../../../Images/images.png";

const Register = () => {
  return (
    <div id="register">
      <Row style={{ backgroundColor: "indigo", color: "white" }}>
        <Col>
          <img
            style={{ with: 450, height: 450, marginTop: 20 }}
            src={registerImage}
            alt=""
          />
        </Col>

        <Col style={{ height: 620 }}>
          <h1 style={{ color: "white", marginTop: 20 }}>Please Register</h1>
          <Form style={{ padding: 20 }}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                className="w-50 mx-auto m-3 bg-success text-white bg-opacity-75"
                type="text"
                placeholder="Your Name"
              />
            </Form.Group>

            <Form.Group style={{ marginTop: 20 }} controlId="formBasicEmail">
              <Form.Control
                className="w-50 mx-auto bg-success text-white bg-opacity-75 "
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                className="w-50 mx-auto m-3 bg-success text-white bg-opacity-75"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;

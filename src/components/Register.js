import React from 'react';
import { Container, Form } from 'react-bootstrap';

const Register = () => {
  return (
    <Container className="justify-content-center d-flex">
      <Form className="mt-5">
        <div className="mt-4 mb-5">
          <h1>Registration</h1>
        </div>
        <Form.Label className="mt-4">Enter Your Email</Form.Label>
        <Form.Control 
          className="mt-2"
          title="email"
          name="email"
          placeholder="Enter your Email"
          required
        />
        <Form.Label className="mt-4">Enter Your Password</Form.Label>
        <Form.Control 
          className="mt-2"
          title="password"
          type="password"
          name="password"
          placeholder="Enter your Password"
          required
        />
        <Form.Label className="mt-4">Confirm Your Password</Form.Label>
        <Form.Control 
          className="mt-2"
          title="confirm"
          type="password"
          name="confirm"
          placeholder="Confirm your Password"
          required
        />
        <button className="btn btn-success mt-5">Submit</button>
      </Form>
    </Container>
  );
}

export default Register;
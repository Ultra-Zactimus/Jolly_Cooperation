import React from 'react';
import { Container, Form } from 'react-bootstrap';

const Signin = () => {
  return (
    <Container className="justify-content-center d-flex">
      <Form className="mt-5">
        <div className="mt-5">
          <h1>Sign In</h1>
        </div>
        <Form.Label className="mt-4">Email</Form.Label>
        <Form.Control 
          className="mt-2"
          title="email"
          name="email"
          placeholder="Enter your Email"
          required
        />
        <Form.Label className="mt-4">Password</Form.Label>
        <Form.Control 
          className="mt-2"
          title="password"
          type="password"
          name="password"
          placeholder="Enter your Password"
          required
        />
        <button className="mt-5 btn btn-success">Sign In</button>
      </Form>
    </Container>
  );
}

export default Signin;
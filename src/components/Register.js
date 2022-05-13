import React from 'react';
import { Container, Form } from 'react-bootstrap';

const Register = () => {
  return (
    <Container>
      <div className="mt-4 justify-content-center d-flex">
        <h1>Registration</h1>
      </div>
      <Form className="mt-5">
        <Form.Label>Create a Username</Form.Label>
        <Form.Control 
          className="w-50 mt-2"
          title="username"
          name="username"
          placeholder="please enter a user name -- ex. BobGaming3434"
          required
        />
        <Form.Label className="mt-4">Enter Your Email</Form.Label>
        <Form.Control 
          className="w-50 mt-2"
          title="email"
          name="email"
          placeholder="please enter your email -- ex. example@example.com"
          required
        />
        <Form.Label className="mt-4">Enter Your Password</Form.Label>
        <Form.Control 
          className="w-50 mt-2"
          title="password"
          type="password"
          name="password"
          placeholder="please enter your password"
          required
        />
        <Form.Label className="mt-4">Confirm Your Password</Form.Label>
        <Form.Control 
          className="w-50 mt-2"
          title="confirm"
          type="password"
          name="confirm"
          placeholder="please confirm your password"
          required
        />
        <button className="btn btn-success mt-5">Submit</button>
      </Form>
    </Container>
  );
}

export default Register;
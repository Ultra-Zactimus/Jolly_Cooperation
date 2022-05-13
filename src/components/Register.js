import React from 'react';
import { Form } from 'react-bootstrap';

const Register = () => {
  return (
    <>
      <div>
        <h1>Registration</h1>
      </div>
      <Form>
        <Form.Label>Create a Username</Form.Label>
        <Form.Control 
          title="username"
          name="username"
          placeholder="please enter a user name -- ex. BobGaming3434"
          required
        />
        <Form.Label>Enter Your Email</Form.Label>
        <Form.Control 
          title="email"
          name="email"
          placeholder="please enter your email -- ex. example@example.com"
          required
        />
        <Form.Label>Enter Your Password</Form.Label>
        <Form.Control 
          title="password"
          type="password"
          name="password"
          placeholder="please enter your password"
          required
        />
        <Form.Label>Confirm Your Password</Form.Label>
        <Form.Control 
          title="confirm"
          type="password"
          name="confirm"
          placeholder="please confirm your password"
          required
        />
      </Form>
    </>
  );
}

export default Register;
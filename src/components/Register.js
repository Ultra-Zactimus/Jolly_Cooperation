import React from 'react';
import firebase from "firebase/compat/app";
import { Container, Form, Button } from 'react-bootstrap';

const Register = () => {

  function handleRegistration(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function () { console.log("Successfully Signed Up!"); })
    .catch(function (error) { console.log(error.message); });
  }

  return (
    <Container className="justify-content-center d-flex">
      <Form 
        className="mt-5"
        onSubmit={handleRegistration}>

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

        <Button 
          className="btn btn-success mt-5">
            Submit
        </Button>

      </Form>
    </Container>
  );
}

export default Register;
import React from 'react';
import { Container, Form } from 'react-bootstrap';

const PostMessage = () => {
  return (
    <Container className="justify-content-center d-flex border border-dark rounded mt-5 mb-5 pl-5 pr-5">
      <Form>
        <h3 className="mt-5">Post a New Message</h3>
        <Form.Label className="mt-5">Topic Title</Form.Label>
        <Form.Control 
          className="mt-2"
        />
        <Form.Label className="mt-5">Topic Description</Form.Label>
        <Form.Control 
          className="mt-2"
        />
        <Form.Label className="mt-5">Your Message</Form.Label>
        <Form.Control 
          className="mt-2 from-control-lg"
          as="textarea"
        />
        <Form.Label className="mt-5">Your Gamer Tags</Form.Label>
        <Form.Control 
          className="mt-2"
        />
        <button className="btn btn-success mt-5 mb-5">Post Message</button>
      </Form>
    </Container>
  );
}

export default PostMessage;
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const PostMessage = () => {


  return (
    <Container 
      className="justify-content-center d-flex border border-dark rounded mt-5 mb-5 pl-5 pr-5">
      <Form onSubmit={addMessageToFirestore}>
        <h3 className="mt-5">Post a New Message</h3>

        <Form.Label className="mt-5">Platform</Form.Label>
        <Form.Control 
          className="mt-2"
          name="platform"
          placeholder="Platform You Play This Game On"
        />

        <Form.Label className="mt-5">Topic Title</Form.Label>
        <Form.Control 
          className="mt-2"
          name="title"
          placeholder="Title of Your Post"
        />

        <Form.Label className="mt-5">Topic Description</Form.Label>
        <Form.Control 
          className="mt-2"
          name="description"
          placeholder="Brief Description of Topic"
        />

        <Form.Label className="mt-5">Your Message</Form.Label>
        <Form.Control 
          className="mt-2 from-control-lg"
          as="textarea"
          name="message"
          placeholder="Type Your Message Here"
        />

        <Form.Label className="mt-5">Your Gamer Tags</Form.Label>
        <Form.Control 
          className="mt-2"
          name="tags"
          placeholder="Your Gamer Tags"
        />

        <Button 
          className="btn btn-success mt-5 mb-5 shadow-sm"
          type="submit"
        >Post Message</Button>
      </Form>
    </Container>
  );
}

export default PostMessage;
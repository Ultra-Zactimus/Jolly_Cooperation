import React from 'react';
import { useFirestore } from 'react-redux-firebase';
import firebase from "firebase/compat/app";
import { Container, Form, Button } from 'react-bootstrap';

const PostMessage = () => {

  const firestore = useFirestore();

  const addMessageToFirestore = (event) => {

    event.preventDefault();
    console.log("event: ", event);
    console.log("event targ1: ", event.target.title.value);

    const user = firebase.auth().currentUser;
    
    return firestore.collection('messages').add(
      {
        platform: event.target.platform.value,
        title: event.target.title.value,
        description: event.target.description.value,
        message: event.target.message.value,
        tags: event.target.tags.value,
        userEmail: user.uid,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
    
  }

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
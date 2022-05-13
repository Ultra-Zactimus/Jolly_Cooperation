import React from 'react';
import { useFirestore } from 'react-redux-firebase';
import firebase from "firebase/compat/app";
import { Container, Form } from 'react-bootstrap';

const PostMessage = () => {

  const firestore = useFirestore();

  const addSurveyToFirestore = (event) => {

    event.preventDefault();
    const user = firebase.auth().currentUser;
    
    return firestore.collection('messages').add(
      {
        title: event.target.title.value,
        q1: event.target.q1.value,
        q2: event.target.q2.value,
        q3: event.target.q3.value,
        q4: event.target.q4.value,
        q5: event.target.q5.value,
        userEmail: user.uid,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
    
  }

  return (
    <Container className="justify-content-center d-flex border border-dark rounded mt-5 mb-5 pl-5 pr-5">
      <Form>
        <h3 className="mt-5">Post a New Message</h3>
        <Form.Label className="mt-5">Platform</Form.Label>
        <Form.Control 
          className="mt-2"
        />
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
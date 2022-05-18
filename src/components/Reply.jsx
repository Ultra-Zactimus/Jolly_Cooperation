import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { auth, db } from '../lib/init-firebase';
import { addDoc, setDoc, collection, getDocs, query, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const Reply = () => {

  let navigate = useNavigate();

  const [formData, setFormData] = useState(
    {
      author: "",
      message: "",
      tags: "",
      createdAt: Timestamp.now().toDate()
    });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const q = query(collection(db, "messages"));
    const querySnapshot = await getDocs(q);
    const queryData = querySnapshot.docs.map((detail) => ({
      ...detail.data(),
      id: detail.id
    }));
    console.log(queryData);
    queryData.map(async (v) => {
      await addDoc(collection(db, `messages/${v.id}/replies`, formData.message), {
        author: auth.currentUser.displayName,
        authorId: auth.currentUser.uid,
        message: formData.message,
        tags: formData.tags,
        createdAt: Timestamp.now().toDate()
      })
  });
}

  return (
    <Container
      className="justify-content-center d-flex border border-dark rounded mt-5 mb-5 pl-5 pr-5">
      <Form onSubmit={handleSubmit}>
        <h3 className="mt-5">Reply to Post</h3>

        <Form.Label className="mt-5">
          <strong>Your Message</strong>
        </Form.Label>
        <Form.Control
          className="mt-2"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          as="textarea"
          required
          onChange={(e) => handleChange(e)}
        />

        <Form.Label className="mt-5">
          <strong>Your Gamer Tags</strong>
        </Form.Label>
        <Form.Control
          className="mt-2"
          name="tags"
          placeholder="Your Gamer Tags"
          value={formData.tags}
          required
          onChange={(e) => handleChange(e)}
        />

        <Button className="btn btn-light mt-5 mb-5" 
          type="submit">Submit Reply</Button>

      </Form>
    </Container>
  )
}

export default Reply;
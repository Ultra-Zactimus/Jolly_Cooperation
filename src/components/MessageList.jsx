import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../lib/init-firebase';
import Message from './Message';


const MessageList = () => {
  const [messageList, setMessageList] = useState([]);
  const messagesCollectionRef = collection(db, "messages");

  useEffect(() => {
    const getMessages = async () => {
      const data = await getDocs(messagesCollectionRef);
      setMessageList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getMessages();
  });

  return (
    <Container>
      <Row>
        {
        messageList.map((message) => {
          return (
            <React.Fragment key={message.id}>
              <Message messageData={message}/>
            </React.Fragment>
          );
        })}
      </Row>
    </Container>
  );
}

export default MessageList;
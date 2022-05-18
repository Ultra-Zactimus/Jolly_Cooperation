import React from 'react';
import { Container, Row } from 'react-bootstrap';


const Message = ({ messageData }) => {

  console.log(messageData);
  return (
    <Container>
      <Row>
        <div className="col-12 col-xl-9">
          <h3 className="h4 mb-0 p-4 rounded-top ">Games</h3>
          <table className="table table-striped table-bordered table-responsive table-dark">
            <thead>
              <tr>
                <th scope="col" className="forum-col">
                  <h4>Title</h4>
                </th>
                <th scope="col">Game</th>
                <th scope="col">Platform</th>
                <th scope="col">MulitplayerType</th>
                <th scope="col">Replies</th>
                <th scope="col">Author</th>
              </tr>
            </thead>
            <tbody>

              <tr key={messageData.id}>
                <td>
                  <h5 className="mb-0 h5">
                    <a href="/message">{messageData.title}</a>
                  </h5>
                </td>
                <td>
                  <div>{messageData.game}</div>
                </td>
                <td>
                  <div>{messageData.platform}</div>
                </td>
                <td>
                  <div>{messageData.multiplayerType}</div>
                </td>
                <td>
                  <div>0</div>
                </td>
                <td>
                  <div>{messageData.author}</div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </Row>
    </Container>
  );
}

export default Message;
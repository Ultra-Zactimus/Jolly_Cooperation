import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Message = ({messageData}) => {

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/reply")
  }

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
                <th scope="col">Message</th>
                <th scope="col">Tags</th>
                <th scope="col">Author</th>
                <th scope="col">Reply</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>
                  <h5 className="mb-0 h5">
                    {messageData.title}
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
                  <div>{messageData.topic}</div>
                </td>
                <td>
                  <div>{messageData.tags}</div>
                </td>
                <td>
                  <div>{messageData.author}</div>
                </td>
                <td>
                  <div>
                  <p><span onClick={handleClick}>Click To Reply</span></p>
                  </div>
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
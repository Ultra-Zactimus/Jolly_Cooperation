import React from 'react';
import { Container, Row } from 'react-bootstrap';

const MessageList = () => {

  

  return (
    <Container>
      <Row>
        <div className="col-12 col-xl-9">
          <h3 className="h4 mb-0 p-4 rounded-top ">Posts</h3>
          <table className="table table-striped table-bordered table-responsive table-dark">
            <thead>
              <tr>
                <th scope="col" className="forum-col">
                  <h4>Message Title</h4>
                </th>
                <th scope="col">Replies</th>
                <th scope="col">Date</th>
                <th scope="col" className="last-post-col">Posted By</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="#">I need help on ...</a></h5>
                  <p>lorem ipsum lorem ipsum</p>
                </td>
                <td>
                  <div>12</div>
                </td>
                <td>
                  02-12-2023
                </td>
                <td>
                  <div><a href="#">username</a></div>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="#">I need help on ...</a></h5>
                  <p>lorem ipsum lorem ipsum</p>
                </td>
                <td>
                  <div>12</div>
                </td>
                <td>
                  02-12-2023
                </td>
                <td>
                  <div><a href="#">username</a></div>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="#">I need help on ...</a></h5>
                  <p>lorem ipsum lorem ipsum</p>
                </td>
                <td>
                  <div>12</div>
                </td>
                <td>
                  02-12-2023
                </td>
                <td>
                  <div><a href="#">username</a></div>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="#">I need help on ...</a></h5>
                  <p>lorem ipsum lorem ipsum</p>
                </td>
                <td>
                  <div>12</div>
                </td>
                <td>
                  02-12-2023
                </td>
                <td>
                  <div><a href="#">username</a></div>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="#">I need help on ...</a></h5>
                  <p>lorem ipsum lorem ipsum</p>
                </td>
                <td>
                  <div>12</div>
                </td>
                <td>
                  02-12-2023
                </td>
                <td>
                  <div><a href="#">username</a></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Row>
    </Container>
  );
}

export default MessageList;
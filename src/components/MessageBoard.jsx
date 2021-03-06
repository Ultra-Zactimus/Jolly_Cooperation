import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Navigate } from 'react-router';


const MessageBoard = () => {

  return (
    <Container>
      <Row>
        <div className="col-12 col-xl-9">
          <h3 className="h4 mb-0 p-4 rounded-top ">Jolly Cooperation Forums</h3>
          <table className="table table-striped table-bordered table-responsive table-dark">
            <thead>
              <tr>
                <th scope="col" className="forum-col">
                  <h4><strong>Multiplayer</strong></h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="/message-list">Co-Op</a></h5>
                  <p className="mb-0">Forum for players to meet other players for co-op play</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="/message-list">PVP</a></h5>
                  <p className="mb-0">Forum for players to meet other players for competitive play</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table table-striped table-bordered table-responsive table-dark">
            <thead>
              <tr>
                <th scope="col" className="forum-col">
                  <h4><strong>Guides</strong></h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="#">Walkthroughs</a></h5>
                  <p className="mb-0">Guides made by players to help players</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="#">Questions</a></h5>
                  <p className="mb-0">Ask the community a question about a game</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table table-striped table-bordered table-responsive table-dark">
            <thead>
              <tr>
                <th scope="col" className="forum-col">
                  <h4><strong>General Discussion</strong></h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="#">Game News</a></h5>
                  <p className="mb-0">dicussions on the latest gaming news</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="#">Polls</a></h5>
                  <p className="mb-0">participate in game related polls with other players</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table table-striped table-bordered table-responsive table-dark">
            <thead>
              <tr>
                <th scope="col" className="forum-col">
                  <h4><strong>Help</strong></h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="#">Troubleshooting</a></h5>
                  <p className="mb-0">troubleshoot technical problems</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h5 className="mb-0 h5"><a href="#">FAQ</a></h5>
                  <p className="mb-0">check our frequently asked questions</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Row>
    </Container>
  );
}

export default MessageBoard;
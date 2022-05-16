import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = ({ isAuth }) => {
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="d-flex justify-content-start mx-4">
            <img 
              src={require("../images/bros.png")} 
              alt="sun"
            />
          </div>
          <Navbar.Brand
            href="#message-board"
            className="mr-5">Jolly Cooperation</Navbar.Brand>
          {/* <Navbar.Collapse>
            <Nav className="me-auto ml-auto container-fluid justify-content-end">
              <NavDropdown
                title='User'
                id='basic-nav-dropdown'>
                <NavDropdown.Item
                  className="text-dark"
                >Login</NavDropdown.Item>
                <NavDropdown.Item
                  className="text-dark"
                >Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse> */}
          {!isAuth 
            ? 
            <button 
              className="btn btn-success me-2"
              onClick={navigate("/login")}>Login</button> 
            : 
            <button 
              className="btn btn-success me-2"
              onClick={navigate("/login")}>Logout</button>}
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand 
      href="#message-board"
      className="mr-5">
      Jolly Cooperation
    </Navbar.Brand>
    <Navbar.Collapse>
      <Nav className="me-auto ml-auto container-fluid justify-content-end">
        <NavDropdown
          title='User' 
          id='basic-nav-dropdown'>
          <NavDropdown.Item>
            Profile
          </NavDropdown.Item>
          <NavDropdown.Item>
            Messages
          </NavDropdown.Item>
          <NavDropdown.Item>
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <button className="btn btn-success me-2">Register</button>
    <button className="btn btn-success ms-2">Login</button>
    </Container>
  </Navbar>
    </>
  );
}

export default Header;
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="/img/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt="Logo"
          />
          Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Productos</Nav.Link>
          </Nav>
          <CartWidget count={3} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

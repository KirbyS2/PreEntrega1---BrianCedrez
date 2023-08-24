import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { CardWidget } from '../CardWidget/cardWidget';



export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Witcherry</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Buzoss">Buzos</Nav.Link>
                <Nav.Link href="#Remeras">Remeras</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#CardWidget">1<CardWidget/></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
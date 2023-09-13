import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { CardWidget } from '../CardWidget/cardWidget';
import { Link, NavLink } from 'react-router-dom'


export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Link to='/'> Witcherry </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink to={`/category/buzos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'} > _Buzos </NavLink>
                <NavLink to={`/category/remeras`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'} > _Remeras </NavLink>
              </Nav>
              <Nav>
                <Nav.Link href="#CardWidget">1<CardWidget/></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
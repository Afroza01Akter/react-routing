import React from "react";
import { Navbar, Container, Nav} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <NavLink id="active" to="/">{`{Codev.}`}</NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto">
      
    </Nav>
    <Nav>
    <NavLink activeClassName="active_class" to="/">Home</NavLink>
    <NavLink className="nl" to="/course">Courses</NavLink>
    <NavLink className="nl" to="/about">About Us</NavLink>
    <NavLink className="nl" to="/contact">Contact Us</NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    
        </>
    )

}

export default Menu;
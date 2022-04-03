import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container className="text-uppercase">
          <LinkContainer to="/">
            <Navbar.Brand href="#" className="fs-2">I-Shop</Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={{ marginLeft: "auto" }}>
              <LinkContainer className="fs-5" to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>
                  Cart
                </Nav.Link>
              </LinkContainer>

              <LinkContainer className="fs-5" to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i>
                  Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import React from "react";

export function NavigationBar({ count }) {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>About</Nav.Link>
            <NavDropdown title='Shop' id='basic-nav-dropdown'>
              <NavDropdown.Item href=''>All Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href=''>Popular Products</NavDropdown.Item>
              <NavDropdown.Item href=''>New Arrivals</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Button variant='outline-dark'>
            {" "}
            <span className='px-2'>🛒 Cart</span>{" "}
            <Badge bg='secondary'>{count}</Badge>{" "}
          </Button>
          {/* <Dropdown>
                <Dropdown.Toggle variant='outline-dark' id='dropdown-basic'>
                  <span className="px-3">🛒 Cart</span>
                    <span><Badge bg='secondary'>0</Badge></span>
                </Dropdown.Toggle>
  
                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>Special Item</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>Sale Item</Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>Popular Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

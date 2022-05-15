import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/img/logo.crm.png";

export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px" className="nav-img" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/dashboard" className="nav-list">
            Dashboard
          </Nav.Link>
          <Nav.Link href="/tickets" className="nav-list">
            Tickets
          </Nav.Link>
          <Nav.Link href="/logout" className="nav-list">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

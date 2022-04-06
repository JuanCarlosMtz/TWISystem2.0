import React, { Component } from "react";
import TWIBlack from "../logos/twiBlack.png";
import UserIcon from "../icons/userIconBlack.png";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavBarU extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to={"/homea"}>
              <img
                src={TWIBlack}
                width="120"
                height="45"
                className="d-inline-block align-top"
                alt="TWIRed logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to={"/rankinga"}>
                  Ranking
                </Nav.Link>
                <Nav.Link as={Link} to={"/analytics"}>
                  Analíticos
                </Nav.Link>
                <Nav.Link as={Link} to={"/viewdocuments"}>
                  Revisar
                </Nav.Link>
                <Nav.Link as={Link} to={"/alterquizzes"}>
                  Quizzes
                </Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                <img
                  src={UserIcon}
                  width="45"
                  height="45"
                  className="d-inline-block align-top"
                  alt="UserBlack logo"
                />
                <NavDropdown title="Administrador" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/"}>
                    Cerrar Sesión
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

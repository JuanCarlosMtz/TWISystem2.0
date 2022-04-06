import React, { Component } from 'react';
import TWIRed from '../logos/twiRed.png';
import UserIcon from '../icons/userIconGray.png';
import './NavBarU.css'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
 

export default class NavBarU extends Component {
    render() {
        return (
                <div>
                <Navbar variant="dark" bg="dark" expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to={"/home"} className="logotwi"><img src={TWIRed} width="120" height="45" className="d-inline-block align-top" alt="TWIRed logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="togglebutton" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={Link} to={"/game"}>Juego</Nav.Link>
                                <Nav.Link as={Link} to={"/ranking"}>Ranking</Nav.Link>
                                <Nav.Link as={Link} to={"/closet"}>Clóset</Nav.Link>
                                <Nav.Link as={Link} to={"/contents"}>Contenidos</Nav.Link>
                                <Nav.Link as={Link} to={"/store"}>Tienda</Nav.Link>
                                <Nav.Link as={Link} to={"/abouttwi"}>Sobre TWI</Nav.Link>
                            </Nav>
                            <Nav className="ms-auto">
                                <img src={UserIcon} width="45" height="45" className="d-inline-block align-top" alt="UserGray logo" />
                                <NavDropdown title="Supervisor" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to={"/"}>Cerrar Sesión</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </div>
        )
    }
};
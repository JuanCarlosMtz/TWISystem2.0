import React from 'react';
import NavBarA from '../components/NavBarA';
import './ViewDocuments.css';
import Tables from '../components/DeliveredTables.js';
import { Row, Col, Container, Tab, Nav } from "react-bootstrap";

function ViewDocuments () {
    return (
            <div>
                <NavBarA />
                <h1 className="headE">Revisar entregables por supervisor</h1>
                <Container>
                <div className="containerTabE">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <Row>
                    <Col sm={3} className="tabs">
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">[Usuario1]</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">[Usuario2]</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">[Usuario3]</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">[Usuario4]</Nav.Link>
                                </Nav.Item>
                            </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Tables />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Tables />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Tables />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <Tables />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
                </div>
                </Container>
            </div>
        );
}

export default ViewDocuments;
import React, { Component } from 'react';
import NavBarU from '../components/NavBarU';
import './Ranking.css';
import { Row, Col, Container, Tab, Nav, } from 'react-bootstrap';
import Content from '../components/RankingContent.js';
import FooterU from '../components/FooterU.js';

export default class Ranking extends Component {
    render() {
        return (
            <div>
                <NavBarU />
                <h1 className="head">Mejores puntuaciones en [Planta]</h1>
                <Container>
                <div className="containerTab">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <Row>
                    <Col sm={3} className="tabs">
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Monterrey</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">General</Nav.Link>
                                </Nav.Item>
                            </Nav>
                    </Col>
                    <Col sm={1}>
                    </Col> 
                    <Col sm={7}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Content />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Content />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
                </div>
                </Container>
                <FooterU />
            </div>
        )
    }
}
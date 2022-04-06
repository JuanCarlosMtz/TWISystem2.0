import React, { Component } from 'react';
import NavBarU from '../components/NavBarU';
import ji from '../icons/ji.png';
import jm from '../icons/jm.png';
import jr from '../icons/jr.png';
import './Contents.css'
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap'


export default class Contents extends Component {
    render() {
        return (
            <div>
                <NavBarU />
                <Container className="content">
                    <Row>
                        <Col sm={4}>
                                <img src={ji} width="100" height="100" className="d-inline-block align-top" alt="ji logo" />
                                <h2 className="colElement">Job Instructions</h2>
                                <Accordion defaultActiveKey={['0']} alwaysOpen className="colElement">
                                    <Accordion.Item eventKey="0" className="item">
                                        <Accordion.Header>Aprender sobre Job Instructions</Accordion.Header>
                                        <Accordion.Body>JI
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                        </Col>
                        <Col sm={4}>
                                <img src={jm} width="100" height="100" className="d-inline-block align-top" alt="jm logo" />
                                <h2 className="colElement">Job Methods</h2>
                                <Accordion defaultActiveKey={['0']} alwaysOpen className="colElement">
                                    <Accordion.Item eventKey="0" className="item">
                                        <Accordion.Header>Aprender sobre Job Methods</Accordion.Header>
                                        <Accordion.Body>JM
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                        </Col>
                        <Col sm={4}>
                                <img src={jr} width="100" height="100" className="d-inline-block align-top" alt="jr logo" />
                                <h2 className="colElement">Job Relations</h2>
                                <Accordion defaultActiveKey={['0']} alwaysOpen className="colElement"> 
                                    <Accordion.Item eventKey="0" className="item">
                                        <Accordion.Header>Aprender sobre Job Relations</Accordion.Header>
                                        <Accordion.Body>JR
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
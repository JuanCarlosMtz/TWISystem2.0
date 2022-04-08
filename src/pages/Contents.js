import React from 'react';
import NavBarU from '../components/NavBarU';
import ji from '../icons/ji.png';
import jm from '../icons/jm.png';
import jr from '../icons/jr.png';
import './Contents.css'
import { Container, Row, Col, Accordion, Button, Form } from 'react-bootstrap'

function Contents () {
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
                                        <Accordion.Body>
                                        <Button  variant="dark" className="botonCursos"> Curso 1  </Button>
                                        <Button  variant="dark" className="botonCursos"> Curso 2  </Button>
                                        <Button  variant="dark" className="botonCursos"> Curso 3  </Button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className="colElement">
                                <Button  variant="dark" className="subir"> ↑ Subir entregable JI ↑  </Button>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Control type="file" />
                                </Form.Group>
                                </div>
                        </Col>
                        <Col sm={4}>
                                <img src={jm} width="100" height="100" className="d-inline-block align-top" alt="jm logo" />
                                <h2 className="colElement">Job Methods</h2>
                                <Accordion defaultActiveKey={['0']} alwaysOpen className="colElement">
                                    <Accordion.Item eventKey="0" className="item">
                                        <Accordion.Header>Aprender sobre Job Methods</Accordion.Header>
                                        <Accordion.Body>
                                            <Button  variant="dark" className="botonCursos"> Curso 1  </Button>
                                            <Button  variant="dark" className="botonCursos"> Curso 2  </Button>
                                            <Button  variant="dark" className="botonCursos"> Curso 3  </Button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className="colElement">
                                <Button  variant="dark" className="subir"> ↑ Subir entregable JM ↑  </Button>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Control type="file" />
                                </Form.Group>
                                </div>
                        </Col>
                        <Col sm={4}>
                                <img src={jr} width="100" height="100" className="d-inline-block align-top" alt="jr logo" />
                                <h2 className="colElement">Job Relations</h2>
                                <Accordion defaultActiveKey={['0']} alwaysOpen className="colElement"> 
                                    <Accordion.Item eventKey="0" className="item">
                                        <Accordion.Header>Aprender sobre Job Relations</Accordion.Header>
                                        <Accordion.Body>
                                            <Button  variant="dark" className="botonCursos"> Curso 1  </Button>
                                            <Button  variant="dark" className="botonCursos"> Curso 2  </Button>
                                            <Button  variant="dark" className="botonCursos"> Curso 3  </Button>
                                            </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className="colElement">
                                <Button  variant="dark" className="subir"> ↑ Subir entregable JR ↑  </Button>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Control type="file" />
                                </Form.Group>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
}

export default Contents;
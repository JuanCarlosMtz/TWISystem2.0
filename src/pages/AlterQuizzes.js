import React from 'react';
import NavBarA from '../components/NavBarA';
import ji from '../icons/ji.png';
import jm from '../icons/jm.png';
import jr from '../icons/jr.png';
import './AlterQuizzes.css'
import { Container, Row, Col, Accordion, Button, Form } from 'react-bootstrap'

function AlterQuizzes () {
    return (
        <div>
            <NavBarA />
            <h1 className="headA">Modificar Quizzes</h1>
            <Container className="content">
                <Row>
                    <Col sm={4}>
                        <div  className="columnaA">
                            <img src={ji} width="100" height="100" className="d-inline-block align-top" alt="ji logo" />
                            <h2 className="colElementA">Job Instructions</h2>
                            <Accordion defaultActiveKey={['0']} alwaysOpen className="colElementA">
                                <Accordion.Item eventKey="0" className="itemA">
                                    <Accordion.Header>Agregar preguntas por Quiz</Accordion.Header>
                                    <Accordion.Body>
                                    <Button  variant="dark" className="botonCursosA"> Quiz 1  </Button>
                                    <Button  variant="dark" className="botonCursosA"> Quiz 2  </Button>
                                    <Button  variant="dark" className="botonCursosA"> Quiz 3  </Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div  className="columnaA">
                            <img src={jm} width="100" height="100" className="d-inline-block align-top" alt="jm logo" />
                            <h2 className="colElementA">Job Methods</h2>
                            <Accordion defaultActiveKey={['0']} alwaysOpen className="colElementA">
                                <Accordion.Item eventKey="0" className="itemA">
                                    <Accordion.Header>Agregar preguntas por Quiz</Accordion.Header>
                                    <Accordion.Body>
                                        <Button  variant="dark" className="botonCursosA"> Quiz 1  </Button>
                                        <Button  variant="dark" className="botonCursosA"> Quiz 2  </Button>
                                        <Button  variant="dark" className="botonCursosA"> Quiz 3  </Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div  className="columnaA">
                            <img src={jr} width="100" height="100" className="d-inline-block align-top" alt="jr logo" />
                            <h2 className="colElementA">Job Relations</h2>
                            <Accordion defaultActiveKey={['0']} alwaysOpen className="colElementA"> 
                                <Accordion.Item eventKey="0" className="itemA">
                                    <Accordion.Header>Agregar preguntas por Quiz</Accordion.Header>
                                    <Accordion.Body>
                                        <Button  variant="dark" className="botonCursos"> Quiz 1  </Button>
                                        <Button  variant="dark" className="botonCursos"> Quiz 2  </Button>
                                        <Button  variant="dark" className="botonCursos"> Quiz 3  </Button>
                                        </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AlterQuizzes;
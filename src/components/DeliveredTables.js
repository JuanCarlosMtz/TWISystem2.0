import React from 'react';
import './DeliveredTables.css';
import { Row, Col, Table, Accordion, Button } from "react-bootstrap";
import ji from '../icons/ji.png';
import jm from '../icons/jm.png';
import jr from '../icons/jr.png';

function DeliveredTables () {
  return (
    <div>
      <Row className="fila">
        <Col sm={2}>
          <img src={ji} width="100" height="100" className="d-inline-block align-top" alt="ji logo" />
        </Col>
        <Col sm={10}>
          <Accordion className="acordeon">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Revisar entregables sobre Job Instructions</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Entregable</th>
                      <th>Enlace</th>
                      <th>Calificación</th>
                      <th>Calificar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>mapeo.xlsx</td>
                      <td>95</td>
                      <td><Button  variant="dark" className="botonEntregables"> Calificado</Button></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>matriz.xlsx</td>
                      <td>No asignada</td>
                      <td><Button  variant="dark" className="botonEntregables"> Calificar</Button></td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <Row className="fila">
        <Col sm={2}>
          <img src={jm} width="100" height="100" className="d-inline-block align-top" alt="jm logo" />
        </Col>
        <Col sm={10}>
          <Accordion className="acordeon">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Revisar entregables sobre Job Methods</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Entregable</th>
                      <th>Enlace</th>
                      <th>Calificación</th>
                      <th>Calificar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>icard.xlsx</td>
                      <td>97</td>
                      <td><Button  variant="dark" className="botonEntregables"> Calificado</Button></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>proyecto.pptx</td>
                      <td>No asignada</td>
                      <td><Button  variant="dark" className="botonEntregables"> Calificar</Button></td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <Row className="fila">
        <Col sm={2}>
          <img src={jr} width="100" height="100" className="d-inline-block align-top" alt="jr logo" />
        </Col>
        <Col sm={10}>
          <Accordion className="acordeon">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Revisar entregables sobre Job Relations</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Entregable</th>
                      <th>Enlace</th>
                      <th>Calificación</th>
                      <th>Calificar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>formato.xlsx</td>
                      <td>90</td>
                      <td><Button  variant="dark" className="botonEntregables"> Calificado</Button></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>encuesta.txt</td>
                      <td>No asignada</td>
                      <td><Button  variant="dark" className="botonEntregables"> Calificar</Button></td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </div>
  );
};

export default DeliveredTables;
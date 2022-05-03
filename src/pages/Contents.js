import React from 'react';
import NavBarU from '../components/NavBarU';
import ji from '../icons/ji.png';
import jm from '../icons/jm.png';
import jr from '../icons/jr.png';
import './Contents.css'
import { Container, Row, Col, Accordion, Button, Form, Offcanvas, Table } from 'react-bootstrap'
import Cookies from 'universal-cookie';

function Contents () {

  const cookies = new Cookies();

  const [data, setData] = React.useState([{"id":"id"},{"nombre":"nombre"},{"apellido":"apellido"},{"planta":"planta"},{"email":"email"},{"contrasenia":"contrasenia"},{"id_s":"id_s"},{"p_jm":0},{"p_ji":0},{"p_jr":0},{"balance":0},{"operarios_c":0},{"total_operarios":0},{"mejoras_i":0},{"total_pts":0}])
  const [error, setError] = React.useState("")
  const [loading, setLoading] = React.useState(true)

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [operarios, setOperarios] = React.useState();
  const [totalOperarios, setTotalOperarios] = React.useState();
  const [mejoras, setMejoras] = React.useState();

  const [minsParoAntes, setMinsParoAntes] = React.useState();
  const [minsParoDespues, setMinsParoDespues] = React.useState();
  const [envasesAntes, setEnvasesAntes] = React.useState();
  const [envasesDespues, setEnvasesDespues] = React.useState();
  const [minsCambioAntes, setMinsCambioAntes] = React.useState();
  const [minsCambioDespues, setMinsCambioDespues] = React.useState();

  const id = cookies.get('id');
  const user = cookies.get('email');
  const pwd = cookies.get('contrasenia');

  React.useEffect(() => {
    const url = `http://localhost:3001/supervisors/${user}/${pwd}`;
    fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((json) => {
      setData(json);
      setError("")
    })
    .catch((err) => {
      setError(err)
      setData(null)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  function updateOperators()
  {
    let item={id_: id, operarios_: operarios, totalOperarios_: totalOperarios}
    console.warn("item", item)
    fetch(`http://localhost:3001/supervisors/update_operators/${user}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify(item)
    })
    .then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
      })
      window.location.reload();
    })  
  }

  function updateImprovements()
  {
    let item={id_: id, mejoras_: mejoras}
    console.warn("item", item)
    fetch(`http://localhost:3001/supervisors/update_improvements/${user}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify(item)
    })
    .then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
      })
      window.location.reload();
    })   
  }

  function updateProcess()
  {
    let item={id_: id, minsParo_: minsParoAntes, minsParoDespues_: minsParoDespues, envases_: envasesAntes, envasesDespues_: envasesDespues, minsCambio_: minsCambioAntes, minsCambioDespues_: minsCambioDespues}
    console.warn("item", item)
    fetch(`http://localhost:3001/supervisors/update_progress/${user}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
        body: JSON.stringify(item)
    })
    .then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
      })
      window.location.reload();
    }) 
  }

  return (
    <div>
      <NavBarU />
      {loading && "Cargando información"}
      {error && <div> {`Error al cargar la información ${error}`} </div>}
      <Container className="content">
        <Row>
          <Col sm={4}>
            <img src={ji} width="100" height="100" className="d-inline-block align-top" alt="ji logo" />
            <h2 className="colElement">Job Instructions</h2>
            <Accordion defaultActiveKey={['0']} alwaysOpen className="colElement">
              <Accordion.Item eventKey="0" className="item">
                <Accordion.Header>Entregables Job Instructions</Accordion.Header>
                <Accordion.Body>
                  <Button onClick={handleShow} variant="dark" className="botonCursos"> Entregable 1  </Button>
                  <Button onClick={handleShow} variant="dark" className="botonCursos"> Entregable 2  </Button>
                  <Button onClick={handleShow} variant="dark" className="botonCursos"> Entregable 3  </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col sm={4}>
            <img src={jm} width="100" height="100" className="d-inline-block align-top" alt="jm logo" />
            <h2 className="colElement">Job Methods</h2>
            <Accordion defaultActiveKey={['0']} alwaysOpen className="colElement">
              <Accordion.Item eventKey="0" className="item">
                <Accordion.Header>Entregables sobre Job Methods</Accordion.Header>
                <Accordion.Body>
                  <Button onClick={handleShow} variant="dark" className="botonCursos"> Entregable 1  </Button>
                  <Button onClick={handleShow} variant="dark" className="botonCursos"> Entregable 2  </Button>
                  <Button onClick={handleShow} variant="dark" className="botonCursos"> Entregable 3  </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col sm={4}>
            <img src={jr} width="100" height="100" className="d-inline-block align-top" alt="jr logo" />
            <h2 className="colElement">Job Relations</h2>
            <Accordion defaultActiveKey={['0']} alwaysOpen className="colElement"> 
              <Accordion.Item eventKey="0" className="item">
                <Accordion.Header>Entregables Job Relations</Accordion.Header>
                <Accordion.Body>
                  <Button onClick={handleShow} variant="dark" className="botonCursos"> Entregable 1  </Button>
                  <Button onClick={handleShow} variant="dark" className="botonCursos"> Entregable 2  </Button>
                  <Button onClick={handleShow} variant="dark" className="botonCursos"> Entregable 3  </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Accordion className="updateItem">
              <Accordion.Item eventKey="4" className="item">
                <Accordion.Header>Actualizar operarios capacitados</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label></Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Operarios capacitados"
                        value={operarios}
                        onChange={(e) => {setOperarios(e.target.value)}} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label></Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Total de operarios a capacitar"
                        value={totalOperarios}
                        onChange={(e) => {setTotalOperarios(e.target.value)}} />
                    </Form.Group>
                    <Button className="botonCursos" onClick={updateOperators} variant="dark">
                      Actualizar
                    </Button>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="updateItem"> 
              <Accordion.Item eventKey="5" className="item">
                <Accordion.Header>Actualizar mejoras implementadas</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label></Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Mejoras implementadas"
                        value={mejoras}
                        onChange={(e) => {setMejoras(e.target.value)}} />
                    </Form.Group>
                    <Button className="botonCursos" onClick={updateImprovements} variant="dark">
                      Actualizar
                    </Button>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col sm={8}>
            <Accordion className="updateItemR"> 
              <Accordion.Item eventKey="6" className="item">
                <Accordion.Header>Actualizar indicadores de progreso</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Row>
                      <h4>Minutos de paro (mins/mes)</h4>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Medición sin TWI"
                            value={minsParoAntes}
                            onChange={(e) => {setMinsParoAntes(e.target.value)}} />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Medición con TWI"
                            value={minsParoDespues}
                            onChange={(e) => {setMinsParoDespues(e.target.value)}} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <h4>Envases desechados (tarimas/mes)</h4>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Medición sin TWI"
                            value={envasesAntes}
                            onChange={(e) => {setEnvasesAntes(e.target.value)}} />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Medición con TWI"
                            value={envasesDespues}
                            onChange={(e) => {setEnvasesDespues(e.target.value)}} />
                        </Form.Group>
                      </Col>
                    </Row> 
                    <Row>
                      <h4>Minutos por cambio de formato (mins/mes)</h4>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Medición sin TWI"
                            value={minsCambioAntes}
                            onChange={(e) => {setMinsCambioAntes(e.target.value)}} />
                        </Form.Group> 
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Medición con TWI"
                            value={minsCambioDespues}
                            onChange={(e) => {setMinsCambioDespues(e.target.value)}} />
                        </Form.Group> 
                      </Col>
                    </Row>   
                    <Button className="botonCursos" onClick={updateProcess} variant="dark">
                      Actualizar
                    </Button>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="updateItemR"> 
              <Accordion.Item eventKey="7" className="item">
                <Accordion.Header>Datos actuales</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover variant="light" className="tabla">
                    <thead>
                      <tr>
                        <th>Indicador</th>
                        <th>Valor actual</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Operarios capacitados</td>
                        <td>{data[0].operarios_c}</td>
                      </tr>
                      <tr>
                        <td>Total de operarios</td>
                        <td>{data[0].total_operarios}</td>
                      </tr>
                      <tr>
                        <td>Mejoras implementadas</td>
                        <td>{data[0].mejoras_i}</td>
                      </tr>
                      <tr>
                        <td>Minutos de paro sin TWI</td>
                        <td>{data[0].minutos_de_paro}</td>
                      </tr>
                      <tr>
                        <td>Minutos de paro con TWI</td>
                        <td>{data[0].minutos_de_paro_despues}</td>
                      </tr>
                      <tr>
                        <td>Envases desechados sin TWI</td>
                        <td>{data[0].envases_desechados}</td>
                      </tr>
                      <tr>
                        <td>Envases desechados con TWI</td>
                        <td>{data[0].envases_desechados_despues}</td>
                      </tr>
                      <tr>
                        <td>Minutos por cambio sin TWI</td>
                        <td>{data[0].minutos_por_cambio}</td>
                      </tr>
                      <tr>
                        <td>Minutos por cambio con TWI</td>
                        <td>{data[0].minutos_por_cambio_despues}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion> 
          </Col>


          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Realizar entregables</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <button>Cargar archivo</button>
            </Offcanvas.Body>
          </Offcanvas>
        </Row>
      </Container>
    </div>
  );
};

export default Contents;
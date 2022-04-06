import React, { Component } from 'react';
import NavBarU from '../components/NavBarU';
import './Home.css';
import User from '../img/stickMan.png';
import bronze from '../icons/bronzeMedal.png';
import silver from '../icons/silverMedal.png';
import gold from '../icons/goldMedal.png';
import empty from '../icons/emptyMedal.png';
import money from '../icons/money.png';
import score from '../icons/scoreBoard.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink }  from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBarU />
                <Container className="content">
                    <Row>
                        <Col sm={6}>
                            <div className="Stick">
                                <h1>[Usuario]</h1>
                                <img className="user" ClassName="img-fluid" className="mx-auto" src={User} />
                            </div>         
                        </Col>
                        <Col sm={6}>
                            <div className="estadoUsuario">
                            <Row>
                                <div className="column">
                                    <img className="bronze" ClassName="img-fluid" className="mx-auto" src={bronze} />
                                </div>
                                <div className="column">
                                    <img className="empty" ClassName="img-fluid" className="mx-auto" src={empty} />
                                </div>
                                <div className="column">
                                    <img className="empty" ClassName="img-fluid" className="mx-auto" src={empty} />
                                </div>
                            </Row>
                            <Row>
                                <div className="column2">
                                    <img ClassName="img-fluid" className="mx-auto" src={money} />
                                </div>
                                <div className="columnMoney">
                                    <h3>Balance</h3>
                                </div>
                            </Row>
                            <Row>
                                <div className="column2">
                                    <img className="score" ClassName="img-fluid" className="mx-auto" src={score} />
                                </div>
                                <div className="columnScore">
                                    <h3>Puntuación</h3>
                                </div>
                            </Row>
                            <div className="botones">
                            <Row>
                                <Button variant="dark" className="boton"><NavLink to="/game" className="NavLog">Jugar</NavLink></Button>{' '}
                                <Button variant="dark" className="boton"><NavLink to="/contents" className="NavLog">Contenidos</NavLink></Button>{' '} 
                                <Button variant="dark" className="boton"><NavLink to="/ranking" className="NavLog">Ranking</NavLink></Button>{' '}
                            </Row>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
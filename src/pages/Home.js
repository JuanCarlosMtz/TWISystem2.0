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
import Footer from '../components/Footer.js';
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>


export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBarU />
                <Container className="content">
                    <Row>
                    <Col sm={3}>
                            <div className="estadoUsuario">
                            <Row>
                                <div class="skills">
                                <div class="skill" >
                                    <div class="skill-name">JI</div>
                                    <div class="skill-bar">
                                    <div class="skill-per" per="0"></div>
                                    </div>
                                </div>

                                <div class="skill" >
                                    <div class="skill-name">JM</div>
                                    <div class="skill-bar">
                                    <div class="skill-per" per="0"></div>
                                    </div>
                                </div>

                                <div class="skill" >
                                    <div class="skill-name">JR</div>
                                    <div class="skill-bar">
                                    <div class="skill-per" per="0"></div>
                                    </div>
                                </div>
                            </div>
                            <script src="skill.js"></script>
                            </Row>
                            <Row>
                                <div className="column2">
                                    <img ClassName="img-fluid" className="mx-auto" src={money} />
                                </div>
                                <div className="columnMoney">
                                    <h3>$$$</h3>
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
                            </div>
                        </Col>
                    <Col sm={1}>
                    <Row>
                        <div className="column4">
                            <img ClassName="img-fluid" className="mx-auto" src={bronze} />
                        </div>
                    </Row>
                        </Col>
                    <Col sm={4}>
                        <div className="Stick">
                            <h1>[Usuario]</h1>
                            <img className="user" ClassName="img-fluid" className="mx-auto" src={User} />
                        </div>         
                        </Col>
                    <Col sm={4}>
                        <div className="botones">
                            <Row>
                                <div className="column3">
                                    <Button variant="dark" className="boton" ><NavLink to="/game" className="NavLog">Jugar</NavLink></Button>{' '}
                                </div>
                            </Row>
                            <Row>
                                <div className="column3">
                                    <Button variant="dark" className="boton" ><NavLink to="/contents" className="NavLog">Documentos</NavLink></Button>{' '} 
                                </div>
                            </Row>
                            <Row>
                                <div className="column3">
                                    <Button variant="dark" className="boton" ><NavLink to="/ranking" className="NavLog">Ranking</NavLink></Button>{' '}
                                </div>
                            </Row>
                        </div>
                    </Col>
                        
                    </Row>
                
                </Container>
                
            </div>
        )
        
    }
    
    
}

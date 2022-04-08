import React, { Component } from 'react';
import NavBarA from '../components/NavBarA';
import './HomeA.css';
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

export default class HomeA extends Component {
    render() {
        return (
            <div>
                <NavBarA />
                <Container className="content">
                    <Row>
                    <Col sm={8}>
                        <div className="StickA">
                            <h1>[Admin]</h1>
                            <img className="user" ClassName="img-fluid" className="mx-auto" src={User} />
                        </div>         
                        </Col>
                    <Col sm={4}>
                        <div className="botones">
                            <Row>
                                <div className="column3">
                                    <Button variant="dark" className="boton" ><NavLink to="/alterquizzes" className="NavLog">Modificación</NavLink></Button>{' '}
                                </div>
                            </Row>
                            <Row>
                                <div className="column3">
                                    <Button variant="dark" className="boton" ><NavLink to="/analytics" className="NavLog">Dashboard</NavLink></Button>{' '} 
                                </div>
                            </Row>
                            <Row>
                                <div className="column3">
                                    <Button variant="dark" className="boton" ><NavLink to="/viewdocuments" className="NavLog">Entregables</NavLink></Button>{' '}
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
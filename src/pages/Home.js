import React, { Component } from "react";
import NavBarU from "../components/NavBarU";
import "./Home.css";
import User from "../img/stickMan.png";
import bronze from "../icons/bronzeMedal.png";
import silver from "../icons/silverMedal.png";
import gold from "../icons/goldMedal.png";
import empty from "../icons/emptyMedal.png";
import money from "../icons/money.png";
import score from "../icons/scoreBoard.png";

import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer.js";
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>;

export default class Home extends Component {
  render() {
    return (
      <div>
          <NavBarU />
        <Container className="content">
          <Row>
            <Col sm={4} className="stats">
              <Row>
                <Col>
                <Row>
                  <Col sm={10}>
                  <div class="skill">
                      <div class="skill-name">JI</div>
                      <div class="skill-bar">
                        <div class="skill-per" per="0"></div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={2} className="columnMedal">
                  <img src={bronze} width="50" height="50" className="d-inline-block align-top" alt="b medal" />
                  </Col>

                </Row>
                <Row>
                <Col sm={10}>
                <div class="skill">
                      <div class="skill-name">JM</div>
                      <div class="skill-bar">
                        <div class="skill-per" per="0"></div>
                      </div>
                    </div>
                </Col>
                <Col sm={2} className="columnMedal">
                  <img src={bronze} width="50" height="50" className="d-inline-block align-top" alt="b medal" />
                </Col>
                  
                </Row>
                <Row>
                <Col sm={10}>
                <div class="skill">
                      <div class="skill-name">JR</div>
                      <div class="skill-bar">
                        <div class="skill-per" per="0"></div>
                      </div>
                    </div>
                </Col>
                <Col sm={2} className="columnMedal">
                  <img src={bronze} width="50" height="50" className="d-inline-block align-top" alt="b medal" />
                </Col>
                </Row>
                </Col>
              </Row>
                <Row>
                  <div className="columnMoney">
                    <img className="money" ClassName="img-fluid" className="mx-auto" src={money} />
                    
                    </div>
                    <div className="columnMoney">
                    <h3>$</h3>
                    </div>
                </Row>
                <Row>
                  <div className="columnScore">
                    <img className="score" ClassName="img-fluid" className="mx-auto" src={score} />
                  </div>
                  <div className="columnScore">
                    <h3>Pts</h3>
                    </div>
                </Row>
              </Col>
              <Col sm={4}>
              <div className="Stick">
                <h1>[Usuario]</h1>
                <img
                  className="user"
                  className="img-fluid"
                  className="mx-auto"
                  src={User}
                />
              </div>
              </Col>
              <Col sm={4} className="botones">
              <Row>
                    <Button variant="dark" className="boton">
                      <NavLink to="/game" className="NavLog">
                        Jugar
                      </NavLink>
                    </Button>{" "}
                </Row>
                <Row>
                    <Button variant="dark" className="boton">
                      <NavLink to="/contents" className="NavLog">
                        Entregables
                      </NavLink>
                    </Button>{" "}
                </Row>
                <Row>
                    <Button variant="dark" className="boton">
                      <NavLink to="/ranking" className="NavLog">
                        Ranking
                      </NavLink>
                    </Button>{" "}
                </Row>
              </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

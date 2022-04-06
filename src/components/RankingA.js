import React, { Component } from "react";
import NavBarA from "../components/NavBarA";
import "./RankingA.css";
import { Row, Col, Container, Tab, Nav } from "react-bootstrap";
import Content from "../components/RankingAContent.js";
import Footer from "../components/Footer.js";

export default class RankingA extends Component {
  render() {
    return (
      <div>
        <NavBarA />
        <h1 className="head">Supervisores con mejor puntuación por planta</h1>
        <Container>
          <div className="containerTab">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
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
        <Footer />
      </div>
    );
  }
}

import React, { Component } from "react";
import NavBarA from "../components/NavBarA";
import "./RankingA.css";
import { Row, Col, Container } from "react-bootstrap";
import Content from "../components/RankingAContent.js";

export default class RankingA extends Component {
  render() {
    return (
      <div>
        <NavBarA />
        <Container>
          <div className="containerTabA">
              <Row>
                <Col sm={12}>
                  <Content />
                </Col>
              </Row>
          </div>
        </Container>
      </div>
    );
  }
}

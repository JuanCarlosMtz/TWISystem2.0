import React, { Component } from "react";
import "./Ranking.css";
import { Row, Col, Container} from "react-bootstrap";
import Content from "../components/RankingUContent.js";
import NavBarU from "../components/NavBarU";

export default class RankingA extends Component {
  render() {
    return (
      <div>
        <NavBarU />
        <Container>
          <div className="containerTab">
            <Row>
              <div>
                <Col sm={12}>
                  <Content />
                </Col>
              </div>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

import React from "react";
import "./RankingAContent.css";
import User from "../img/stickMan.png";
import pos1 from "../img/tier1.png";
import pos2 from "../img/tier2.png";
import pos3 from "../img/tier3.png";
import { Row, Col, Table } from "react-bootstrap";
import { useState, useEffect } from "react";

function RankingAContent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/ranking`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Ranking</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <Row className="avatares mx-auto">
        <Col sm={4}>
          <Row>
            <h4>[Usuario2]</h4>
            <div className="user2">
              <img ClassName="img-fluid" className="mx-auto" src={User} />
            </div>
          </Row>
          <Row>
            <div className="pos2">
              <img ClassName="img-fluid" className="mx-auto" src={pos2} />
            </div>
          </Row>
        </Col>
        <Col sm={4}>
          <Row>
            <h4>[Usuario1]</h4>
            <div className="user1">
              <img ClassName="img-fluid" className="mx-auto" src={User} />
            </div>
          </Row>
          <Row>
            <div className="pos1">
              <img ClassName="img-fluid" className="mx-auto" src={pos1} />
            </div>
          </Row>
        </Col>
        <Col sm={4}>
          <Row>
            <h4>[Usuario3]</h4>
            <div className="user3">
              <img ClassName="img-fluid" className="mx-auto" src={User} />
            </div>
          </Row>
          <Row>
            <div className="pos3">
              <img ClassName="img-fluid" className="mx-auto" src={pos3} />
            </div>
          </Row>
        </Col>
      </Row>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Puntaje</th>
          </tr>
        </thead>
        {data &&
          data.ranking.map(({ idranking, nombre, apellido, puntaje }) => (
            <tbody>
              <tr>
                <td>{idranking}</td>
                <td>{nombre}</td>
                <td>{apellido}</td>
                <td>{puntaje}</td>
              </tr>
            </tbody>
          ))}
      </Table>
    </div>
  );
}

export default RankingAContent;

import React, { Component } from 'react';
import './RankingAContent.css';
import User from '../img/stickMan.png';
import pos1 from '../img/tier1.png';
import pos2 from '../img/tier2.png';
import pos3 from '../img/tier3.png';
import { Row, Col, Table } from 'react-bootstrap';

export default class RankingAContent extends Component {
    render() {
        return (
            <div>
                <Row className="avatares">
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
                        <Row>
                            <div className="tabla">
                                <Table responsive striped bordered hover variant="light">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>  
                                    </tbody>
                                </Table>
                            </div>
                        </Row>
            </div>
        )
    }
}
import React, { Component } from 'react';
import './Footer.css';
import Card from 'react-bootstrap/Card'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div class="copy">
                <Card>
                    <Card.Header>
                         © 2022 Copyright: 4D
                    </Card.Header>
                </Card>
                </div>
            </div>
        )
    }
}
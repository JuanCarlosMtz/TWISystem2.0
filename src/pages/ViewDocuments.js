import React, { Component } from 'react';
import NavBarA from '../components/NavBarA';
import Footer from '../components/Footer.js';

export default class ViewDocuments extends Component {
    render() {
        return (
            <div>
                <NavBarA />
                <h1>ViewDocuments</h1>
                <Footer />
            </div>
        )
    }
}
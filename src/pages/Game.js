import React, { Component } from 'react';
import NavBarU from '../components/NavBarU';
import './Game.css';
import Carousel from 'react-bootstrap/Carousel'
import map from '../img/screen1.jpeg';
import game1 from '../img/game1.jpeg';
import game12 from '../img/game12.jpeg';
import game2 from '../img/game21.jpeg';
import game21 from '../img/game21.jpeg';

export default class Game extends Component {
    render() {
        return (
            <div>
                <NavBarU />
                <div className="game" >
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={map} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={game1} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={game12} alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={game2} alt="Fourth slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={game21} alt="Fifth slide" />
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
        )
    }
}
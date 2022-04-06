import React, { Component } from 'react';
import Logo from '../logos/Escuela Tecnica.png';
import './LogPage.css';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { NavLink }  from 'react-router-dom';

export default class LogPage extends Component {
    render() {
        return (
            <div>
                <div className="mx-auto">
                    <div className="contentlogpage">
                        <div className="divimg">
                            <img className="logoArca" ClassName="img-fluid" className="mx-auto" src={Logo} alt="" />
                        </div>
                        <Form>
                            <FloatingLabel controlId="floatingInput" label="Usuario" className="mb-3">
                                    <Form.Control type="email" placeholder="Ingresar usuario" />
                                </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Contraseña">
                                <Form.Control type="password" placeholder="Ingresar contraseña" />
                            </FloatingLabel>
                            <Button variant="dark" className="mx-auto" className="ButtonLog"><NavLink to="/Home" className="NavLog">Ingresar U</NavLink></Button>
                            <Button variant="dark" className="mx-auto" className="ButtonLog"><NavLink to="/HomeA" className="NavLog">Ingresar A</NavLink></Button>
                        </Form>
                    </div>
                </div>
            </div>
            
        )
    }
}

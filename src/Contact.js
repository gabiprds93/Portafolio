import React, { Component } from 'react';
import {Grid, Row, Col, FormGroup, FormControl, Button, Image, OverlayTrigger, Tooltip} from 'react-bootstrap';
import cv from './assets/documents/GabrielaParedes-CV.pdf';

const Contact = () =>
{
    return (
        <div className="contact">
            <Row>
                <Col xs={11} xsOffset={1} md={10} mdOffset={1}>
                    <h3 className="">Contáctame</h3>
                </Col>
            </Row>
            <Row>
                <Col xs={12} xsOffset={0} md={10} mdOffset={1}>
                    <h3 className=""></h3>
                </Col>
            </Row>
            <Row>
                <Col xs={1} xsOffset={1} md={1} mdOffset={0}>
                    <hr className="lineVertical-message"/>
                </Col>
                <Col xs={11} xsOffset={1} md={4} mdOffset={0}>
                    <form>
                        <FormGroup
                            controlId="formBasicText"
                            validationState=""
                            >
                            <FormControl
                                type="text"
                                placeholder="Nombre"
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup
                            controlId="formBasicText"
                            validationState=""
                            >
                            <FormControl
                                type="text"
                                placeholder="Email"
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup
                            controlId="formBasicText"
                            validationState=""
                            >
                            <FormControl
                                className="textareaMessage"
                                componentClass="textarea"
                                placeholder="Mensaje"
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <Button type="submit">
                            Enviar
                        </Button>
                    </form>
                </Col>
                <Col xs={1} xsOffset={1} md={1} mdOffset={0}>
                    <hr className="lineVertical-contact"/>
                </Col>
                <Col xs={11} xsOffset={1} md={6} mdOffset={0}>
                    <Row>
                        <Col xs={12} xsOffset={0} md={12} mdOffset={0}>
                            {/* <p> */}
                                <Row className="infoContact">
                                    <Col xs={12} xsOffset={0} md={2} mdOffset={0} className="text-right">
                                        <i className="fa fa-mobile fa-3x" aria-hidden="true"></i>   
                                    </Col>
                                    <Col xs={12} xsOffset={0} md={10} mdOffset={0} className="text-left">
                                        <span>958-791-279</span>
                                    </Col>      
                                </Row> 
                            {/* </p> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} xsOffset={0} md={12} mdOffset={0}>
                            {/* <p> */}
                                <Row className="infoContact">
                                    <Col xs={12} xsOffset={0} md={2} mdOffset={0} className="text-right">
                                        <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                                    </Col>
                                    <Col xs={12} xsOffset={0} md={10} mdOffset={0} className="text-left">
                                        <span>gabrielaparedesp1993@gmail.com</span>
                                    </Col>      
                                </Row> 
                            {/* </p> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} xsOffset={0} md={12} mdOffset={0}>
                            {/* <p> */}
                                <a href="https://goo.gl/maps/sX4ZCp8u7HS2">
                                    <Row className="infoContact">
                                        <Col xs={12} xsOffset={0} md={2} mdOffset={0} className="text-right">
                                            <i className="fa fa-map-marker fa-3x" aria-hidden="true"></i>
                                        </Col>
                                        <Col xs={12} xsOffset={0} md={10} mdOffset={0} className="text-left">
                                            <span>Av. La Unión 307 Urb. San Martín - Socabaya - Arequipa</span> 
                                        </Col>      
                                    </Row>                                                                              
                                </a>                               
                            {/* </p> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} xsOffset={0} md={12} mdOffset={0}>
                            {/* <p> */}
                                <a href="https://www.linkedin.com/in/gabriela-paredes-paredes/">
                                    <Row className="infoContact">
                                        <Col xs={12} xsOffset={0} md={2} mdOffset={0} className="text-right">
                                            <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                                        </Col>
                                        <Col xs={12} xsOffset={0} md={10} mdOffset={0} className="text-left">
                                            <span className="">www.linkedin.com/in/gabriela-paredes-paredes</span>                
                                        </Col>  
                                    </Row>
                                </a>
                            {/* </p> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} xsOffset={0} md={12} mdOffset={0}>
                            {/* <p> */}
                                <a href={cv} download="GabrielaParedes-CV">
                                    <Row className="infoContact">
                                        <Col xs={12} xsOffset={0} md={2} mdOffset={0} className="text-right">
                                            <i className="fa fa-download fa-3x" aria-hidden="true"></i>
                                        </Col>
                                        <Col xs={12} xsOffset={0} md={10} mdOffset={0} className="text-left">
                                            <span>Descargar mi CV</span>
                                        </Col>  
                                    </Row>
                                </a>                                
                            {/* </p> */}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )        
}

export default Contact;
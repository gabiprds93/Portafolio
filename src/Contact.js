import React, { Component } from 'react';
import {Grid, Row, Col, FormGroup, FormControl, Button, Image, OverlayTrigger, Tooltip} from 'react-bootstrap';
import cv from './assets/documents/GabrielaParedes-CV.pdf';

const Contact = () =>
{
    return (
        <Col xs={12} sm={12} md={12} className="contact">
            <Row>
                <Col xs={12} xsOffset={0} sm={12} smOffset={0} md={12} mdOffset={0}>
                    <h3 className="">Contáctame</h3>
                </Col>
            </Row>
            <Row>
                <Col xs={12} xsOffset={0} md={10} mdOffset={1}>
                    <h3 className=""></h3>
                </Col>
            </Row>
            <Row>
                <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3}>
                    <p className="text-justify">Hola de nuevo y gracias por llegar hasta aquí. 
                        Si te gusto mi trabajo te dejo los datos para poder contactarnos. Hasta pronto.</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} xsOffset={0} md={10} mdOffset={1}>
                    <h3 className=""></h3>
                </Col>
            </Row>
            <Row>
                {/* <Col xs={1} xsOffset={1} md={1} mdOffset={0}>
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
                </Col> */}
                <Col xs={1} xsOffset={0} sm={1} smOffset={0} md={1} mdOffset={0}>
                    <hr className="lineVertical-contact"/>
                </Col>
                <Col xs={10} xsOffset={0} sm={10} smOffset={0} md={10} mdOffset={0}>
                    <Row>
                        <Col xs={12} xsOffset={0} sm={12} smOffset={0} md={12} mdOffset={0}>
                            {/* <p> */}
                                <Row className="infoContact">
                                    <Col xsHidden={true} sm={2} smOffset={0} md={2} mdOffset={0} className="text-right">
                                        <i className="fa fa-mobile fa-3x" aria-hidden="true"></i>   
                                    </Col>
                                    <Col xs={2} xsOffset={0} smHidden={true} mdHidden={true} lgHidden={true} className="text-right">
                                        <i className="fa fa-mobile fa-2x" aria-hidden="true"></i>   
                                    </Col>
                                    <Col xs={10} xsOffset={0} sm={10} smOffset={0} md={10} mdOffset={0} className="text-left">
                                        <span>958-791-279</span>
                                    </Col>      
                                </Row> 
                            {/* </p> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} xsOffset={0} sm={12} smOffset={0} md={12} mdOffset={0}>
                            {/* <p> */}
                                <Row className="infoContact">
                                    <Col xsHidden={true} sm={2} smOffset={0} md={2} mdOffset={0} className="text-right">
                                        <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                                    </Col>
                                    <Col xs={2} xsOffset={0} smHidden={true} mdHidden={true} lgHidden={true} className="text-right">
                                        <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
                                    </Col>
                                    <Col xsHidden={true} sm={10} smOffset={0} md={10} mdOffset={0} className="text-left">
                                        <span>gabrielaparedesp1993@gmail.com</span>
                                    </Col> 
                                    <Col xs={10} xsOffset={0} smHidden={true} mdHidden={true} lgHidden={true} className="text-left">
                                        <span>gabrielaparedesp1993<br/>@gmail.com</span>
                                    </Col>      
                                </Row> 
                            {/* </p> */}
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col xs={12} xsOffset={0} sm={12} smOffset={0} md={12} mdOffset={0}>
                            <p>
                                <a href="https://goo.gl/maps/sX4ZCp8u7HS2">
                                    <Row className="infoContact">
                                        <Col xsHidden={true} sm={2} smOffset={0} md={2} mdOffset={0} className="text-right">
                                            <i className="fa fa-map-marker fa-3x" aria-hidden="true"></i>
                                        </Col>
                                        <Col xs={2} xsOffset={0} smHidden={true} mdHidden={true} lgHidden={true} className="text-right">
                                            <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                                        </Col>
                                        <Col xs={10} xsOffset={0} sm={10} smOffset={0} md={10} mdOffset={0} className="text-left">
                                            <span>Av. La Unión 307 Urb. San Martín - Socabaya - Arequipa</span> 
                                        </Col>      
                                    </Row>                                                                              
                                </a>                               
                            </p>
                        </Col>
                    </Row> */}
                    <Row>
                        <Col xs={12} xsOffset={0} sm={12} smOffset={0} md={12} mdOffset={0}>
                            {/* <p> */}
                                <a href="https://www.linkedin.com/in/gabriela-paredes-paredes/" target="_blank">
                                    <Row className="infoContact">
                                        <Col xsHidden={true} sm={2} smOffset={0} md={2} mdOffset={0} className="text-right">
                                            <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                                        </Col>
                                        <Col xs={2} xsOffset={0} smHidden={true} mdHidden={true} lgHidden={true} className="text-right">
                                            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                                        </Col>
                                        <Col xs={10} xsOffset={0} sm={10} smOffset={0} md={10} mdOffset={0} className="text-left">
                                            <span className="">gabriela-paredes-paredes</span>                
                                        </Col>  
                                    </Row>
                                </a>
                            {/* </p> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} xsOffset={0} sm={12} smOffset={0} md={12} mdOffset={0}>
                            {/* <p> */}
                                <a href={cv} download="GabrielaParedes-CV">
                                    <Row className="infoContact">
                                        <Col xsHidden={true} sm={2} smOffset={0} md={2} mdOffset={0} className="text-right">
                                            <i className="fa fa-download fa-3x" aria-hidden="true"></i>
                                        </Col><Col xs={2} xsOffset={0} smHidden={true} mdHidden={true} lgHidden={true} className="text-right">
                                            <i className="fa fa-download fa-2x" aria-hidden="true"></i>
                                        </Col>
                                        <Col xs={10} xsOffset={0} sm={10} smOffset={0} md={10} mdOffset={0} className="text-left">
                                            <span>Descargar mi CV</span>
                                        </Col>  
                                    </Row>
                                </a>                                
                            {/* </p> */}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xsHidden={true} xsOffset={0} md={12} mdOffset={0}>
                    <h3 className=""></h3>
                </Col>
            </Row>
        </Col>    
    )        
}

export default Contact;
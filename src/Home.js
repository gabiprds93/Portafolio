import React, { Component } from 'react';
import {Grid, Row, Col, Carousel, Navbar, Nav, NavItem, Media, ProgressBar, Image, OverlayTrigger, Tooltip} from 'react-bootstrap';

const Home = () =>
{
    return (
        // <Row className="home">
            <Col xs={12} sm={12} md={12} className="home">
                <Row className="content">
                    {/* <Col xs={12} xsOffset={1} md={11} mdOffset={0} className="text-right">
                        <h1>Gabriela Paredes</h1>
                    </Col> */}
                    <Col xs={12} xsOffset={0} md={11} mdOffset={0} className="text-center typing">
                        <h3 id="typed">I am Front-End Developer Junior</h3>
                    </Col>
                </Row>                    
            </Col>
            // {/* <Col xs={6} md={6} className="home_image-2">
            // </Col> */}
        // {/* </Row> */}
    )        
}

export default Home;
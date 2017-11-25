import React, { Component } from 'react';
import {Grid, Row, Col, Carousel, Navbar, Nav, NavItem, Media, ProgressBar, Image, OverlayTrigger, Tooltip} from 'react-bootstrap';

const Home = () =>
{
    return (
        <Grid className="home">
            <Row className="home_image">
                <Col xs={12} md={12} className="home_image-1">
                    <Row className="content">
                        {/* <Col xs={12} xsOffset={1} md={11} mdOffset={0} className="text-right">
                            <h1>Gabriela Paredes</h1>
                        </Col> */}
                        <Col xs={12} xsOffset={1} md={11} mdOffset={0} className="text-right typing">
                            <h3 id="typed"></h3>
                        </Col>
                    </Row>                    
                </Col>
                {/* <Col xs={6} md={6} className="home_image-2">
                </Col> */}
            </Row>
        </Grid>
    )        
}

export default Home;
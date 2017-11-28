import React, { Component } from 'react';
import {Grid, Row, Col, Carousel, Navbar, Nav, NavItem, Media, ProgressBar, Image, OverlayTrigger, Tooltip} from 'react-bootstrap';

const Skills = () => 
{
  return (
    <Col xs={12} sm={12} md={12} className="skills">
    <Row>
      <Col xs={10} xsOffset={1} md={10} mdOffset={1}>
        <h3 className="">Mis Habilidades</h3>
      </Col>
    </Row>
    <Row>
      <Col xs={12} xsOffset={0} md={10} mdOffset={0}>
        <h1 className=""></h1>
      </Col>
    </Row>
    <Row>
      <Col xs={10} xsOffset={1} sm={5} smOffset={1} md={5} mdOffset={1} className="text-center">
        <Row>
          <Col xs={12} xsOffset={0} sm={11} smOffset={1} md={11} mdOffset={1}>
            <Row>
              <Col xs={12} xsOffset={0} sm={12} smOffset={0} md={12} mdOffset={0}>
                <h4>Habilidades Técnicas</h4>
              </Col>
            </Row>
            <Row>
              <Col xs={12} xsOffset={0} md={10} mdOffset={0}>
                <h1 className=""></h1>
              </Col>
            </Row>              
            <Row>
              <Col xs={4} xsOffset={0} sm={4} smOffset={0} md={4} mdOffset={0}>
                <i class="devicon-html5-plain"></i>   
              </Col>
              <Col xs={4} xsOffset={0} sm={4} smOffset={0} md={4} mdOffset={0}>
                <i class="devicon-css3-plain"></i>   
              </Col>
              <Col xs={4} xsOffset={0} sm={4} smOffset={0} md={4} mdOffset={0}>
                <i class="devicon-javascript-plain"></i>   
              </Col>
              {/* <Col xs={3} xsOffset={0} md={1} mdOffset={0}>
                HTML 5    
              </Col> */}
            </Row>
            <Row>
              <Col xs={12} xsOffset={0} md={10} mdOffset={1}>
                <h1 className=""></h1>
              </Col>
            </Row>
            {/*<Row>
              <Col xs={6} xsOffset={1} md={6} mdOffset={1}>
                <i class="devicon-css3-plain"></i>   
              </Col>
              {/* <Col xs={3} xsOffset={0} md={3} mdOffset={0}>
                CSS 3    
              </Col>
            </Row> */}
            {/* <Row>
              <Col xs={6} xsOffset={1} md={6} mdOffset={1}>
                <i class="devicon-javascript-plain"></i>   
              </Col>
              {/* <Col xs={3} xsOffset={0} md={3} mdOffset={0}>
                CSS 3    
              </Col>
            </Row> */}
            <Row>
              <Col xs={4} xsOffset={0} sm={4} smOffset={0} md={4} mdOffset={0}>
                <i class="devicon-jquery-plain"></i>   
              </Col>
              <Col xs={4} xsOffset={0} sm={4} smOffset={0} md={4} mdOffset={0}>
                <i class="devicon-bootstrap-plain"></i>   
              </Col>
              <Col xs={4} xsOffset={0} sm={4} smOffset={0} md={4} mdOffset={0}>
                <i class="devicon-react-original"></i>   
              </Col>
              {/* <Col xs={3} xsOffset={0} md={3} mdOffset={0}>
                JavaScript    
              </Col> */}
            </Row>
            <Row>
              <Col xs={12} xsOffset={0} md={12} mdOffset={0}>
                <h1 className=""></h1>
              </Col>
            </Row>
            {/* <Row>
              <Col xs={6} xsOffset={1} md={6} mdOffset={1}>
                <i class="devicon-bootstrap-plain"></i>   
              </Col>
              {/* <Col xs={3} xsOffset={0} md={3} mdOffset={0}>
                jQuery    
              </Col>
            </Row> */}
            {/* <Row>
              <Col xs={6} xsOffset={1} md={6} mdOffset={1}>
                <i class="devicon-react-original"></i>   
              </Col>
              {/* <Col xs={3} xsOffset={0} md={3} mdOffset={0}>
                Bootstrap    
              </Col>
            </Row> */}
            <Row>
              <Col xs={4} xsOffset={4} sm={4} smOffset={4} md={4} mdOffset={4}>
                <i class="devicon-sass-original"></i>   
              </Col>
              {/* <Col xs={3} xsOffset={0} md={3} mdOffset={0}>
                React    
              </Col> */}
            </Row>        
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10}>
            <h1 className=""></h1>
          </Col>
        </Row> 
      </Col>        
      <Col xs={12} xsOffset={0} sm={5} smOffset={0} md={5} mdOffset={0} className="text-center">
        <Row>
          <Col xs={10} xsOffset={1} sm={11} smOffset={0} md={11} mdOffset={1}>
            <Row>
              <Col xs={12} xsOffset={0} sm={12} smOffset={0} md={12} mdOffset={0}>
                <h4>Herramientas</h4>
              </Col>
            </Row>
            <Row>
              <Col xs={12} xsOffset={0} md={10} mdOffset={0}>
                <h1 className=""></h1>
              </Col>
            </Row>              
            <Row>
              <Col xs={4} xsOffset={0} sm={4} smOffset={0} md={4} mdOffset={0}>
                <i class="devicon-git-plain"></i>   
              </Col>
              <Col xs={4} xsOffset={0} sm={4} smOffset={0} md={4} mdOffset={0}>
                <i class="devicon-visualstudio-plain"></i>  
              </Col>
              <Col xs={4} xsOffset={0} sm={4} smOffset={0} md={4} mdOffset={0}>
                <i class="devicon-github-plain"></i>   
              </Col>
            </Row>
            <Row>
              <Col xs={12} xsOffset={0} md={10} mdOffset={1}>
                <h1 className=""></h1>
              </Col>
            </Row>
            {/* <Row>
              <Col xs={12} xsOffset={0} md={12} mdOffset={0}>
                <h4 className="">Habilidades Blandas</h4>
              </Col>
            </Row>
            <Row>
              <Col xs={6} xsOffset={1} md={4} mdOffset={4}>
                <i class="devicon-sass-original"></i>   
              </Col>
            </Row>         */}
          </Col>
        </Row>
      </Col>        
    </Row>
    </Col>    
  );
}

export default Skills;
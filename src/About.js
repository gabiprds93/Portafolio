import React, { Component } from 'react';
import {Grid, Row, Col, Carousel, Navbar, Nav, NavItem, Media, ProgressBar, Image, OverlayTrigger, Tooltip} from 'react-bootstrap';
import imageProfile from './assets/images/imageProfile-compressor.jpg';
import xsImageProfile from './assets/images/profile-compressor.jpg';
import top5 from "./assets/images/5_mejores-compressor.png";
import bestSquad from './assets/images/mejor_squad-compressor.png';
import unicorn from './assets/images/unicornio-compressor.png';

const About = () => 
{
  return (
    <Col xs={12} sm={12} md={12} className="about">
      <Row>
        <Col xs={12} xsOffset={0} md={12} mdOffset={0} className="text-center">
          <h3 className="">Acerca de mí</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} xsOffset={0} md={10} mdOffset={1}>
          <h3 className=""></h3>
        </Col>
      </Row>
      <Row>
        <Col xs={1} xsOffset={0} md={1} mdOffset={0}>
          <hr id="aboutLineVerticalImg"/>
        </Col>
        <Col xs={11} xsOffset={1} sm={9} smOffset={0} md={8} mdOffset={0}>
          <Row className="about_me">
            <Col xsHidden={true} smHidden={true} md={4} mdOffset={0} className="about_me-image">
              <Image width="100%" src={imageProfile} title="ImageProfile" alt="Image" thumbnail />
            </Col>
            <Col xs={6} sm={5} mdHidden={true} lgHidden={true} className="about_image">
              <Image width="100%" height="auto" src={xsImageProfile} alt="Image" thumbnail />
            </Col>        
            {/* <Col xs={8} xsOffset={1} sm={8} smOffset={0} md={8} mdOffset={0} className="text-justify">   */}
              <p className="about_me-text text-justify">¡Hola! Mi nombre es Gabriela y soy egresada de Laboratoria Arequipa. 
                También soy Bachiller en Ingeniería de Sistemas de la Universidad Católica de Santa María.
                Me encanta el mundo de la tecnología, estar inmersa en él me ha enseñado a ser autodidacta y
                a estar en constante aprendizaje. 
                 {/* y a aprender a salir de mi zona de confort como cuando tienes  ya que me ayudó a crecer. */}
              </p>
            {/* </Col>   */}
          </Row>
          <Row>
            <Col xs={12} xsOffset={0} md={10} mdOffset={1}>
              <h3 className=""></h3>
            </Col>
          </Row>        
          <Row>
            <Col xs={12} sm={5} md={4} className="text-center">
              <p>
                Reconocimientos obtenidos en Laboratoria:
              </p>
            </Col>
            <Col xs={3} xsOffset={1} sm={2} smOffset={0} md={2} mdOffset={0}>
              <Image width="100%" height="auto" src={bestSquad} title="Mejor Squad" alt="Mejor Squad" />
            </Col>
            <Col xs={3} xsOffset={1} sm={2} smOffset={0} md={2} mdOffset={0}>
              <Image width="100%" height="auto" src={unicorn} title="Unicornio" alt="Unicornio" />
            </Col>
            <Col xs={3} xsOffset={1} sm={2} smOffset={0} md={2} mdOffset={0}>
              <Image width="100%" height="auto" src={top5} title="5 Mejores" alt="5 Mejores" />
            </Col>
          </Row>
          {/* <Row>
            <Col xs={12} smHidden={true} mdHidden={true} lgHidden={true}>
              <h3 className=""></h3>
            </Col>
          </Row>   */}
          <Row>
            <Col xs={12} smHidden={true} mdHidden={true} lgHidden={true}>
              <hr className="divider"/>
            </Col>
          </Row>            
        </Col>
        <Col xsHidden={true} sm={1} smOffset={0} md={1} mdOffset={0}>
          <hr id="aboutLineVerticalSocial"/>
        </Col>
        <Col xs={11} xsOffset={1} smHidden={true} mdHidden={true} lgHidden={true} className="text-center">
          <Row>
            <Col xs={3} xsOffset={1}>
              <p>
                <a href="https://www.linkedin.com/in/gabriela-paredes-paredes/" target="_blank">
                  <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                </a>
              </p>
            </Col>
          {/* </Row> */}
          {/* <Row> */}
            <Col xs={3} xsOffset={1}>
              <p>
                <a href="https://www.facebook.com/gabriela.a.paredes.paredes" target="_blank">
                  <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                </a>
              </p>
            </Col>
          {/* </Row> */}
          {/* <Row> */}
            <Col xs={3} xsOffset={1}>
              <p>
                <a href="https://github.com/gabiprds93" target="_blank">
                  <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                </a>
              </p>
            </Col>
          {/* </Row> */}
          {/* <Row> */}
            {/* <Col xs={3} xsOffset={0} md={3} mdOffset={0}>
              <p>
                <i className="fa fa-skype fa-2x" aria-hidden="true"></i>
              </p>
            </Col> */}
          </Row>
        </Col>
        <Col xsHidden={true} sm={1} smOffset={0} md={2} mdOffset={0}>
          <Row>
            <Col xs={2} xsOffset={0} md={3} mdOffset={0}>
              <p>
                <a href="https://www.linkedin.com/in/gabriela-paredes-paredes/" target="_blank">
                  <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                </a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={4} xsOffset={0} sm={3} smOffset={0} md={3} mdOffset={0}>
              <p>
                <a href="https://www.facebook.com/gabriela.a.paredes.paredes" target="_blank">
                  <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                </a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <p>
                <a href="https://github.com/gabiprds93" target="_blank">
                  <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                </a>
              </p>
            </Col>
          </Row>
          {/* <Row>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <p>

                <i className="fa fa-skype fa-2x" aria-hidden="true"></i>
              </p>
            </Col>
          </Row> */}
        </Col>    
      </Row>
      <Row className="empty">
        <Col xsHidden={true} xsOffset={0} md={10} mdOffset={1}>
          <h3 className=""></h3>
        </Col>
      </Row>
    </Col>
  );
}

export default About;
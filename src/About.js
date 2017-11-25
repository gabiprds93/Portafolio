import React, { Component } from 'react';
import {Grid, Row, Col, Carousel, Navbar, Nav, NavItem, Media, ProgressBar, Image, OverlayTrigger, Tooltip} from 'react-bootstrap';
import imageProfile from './assets/imageProfile.jpg';
import xsImageProfile from './assets/profile.jpg';
import top5 from "./assets/images/5_mejores.png";
import bestSquad from './assets/images/mejor_squad.png';
import unicorn from './assets/images/unicornio.png';

const About = () => 
{
  return (
    <div className="about">
      <Row>
        <Col xs={11} xsOffset={1} md={10} mdOffset={1}>
          <h3 className="">Acerca de mí</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} xsOffset={0} md={10} mdOffset={1}>
          <h3 className=""></h3>
        </Col>
      </Row>
      <Row>
        <Col xs={1} xsOffset={1} md={1} mdOffset={0}>
          <hr id="aboutLineVerticalImg"/>
        </Col>
        <Col xs={8} xsOffset={1} xsHidden={true} md={3} mdOffset={0} className="">
          <Image width="100%" height="auto" src={imageProfile} title="ImageProfile" alt="Image" thumbnail />
        </Col>
        <Col xs={8} xsOffset={0} mdHidden={true} smHidden={true} lgHidden={true}>
          <Image width="100%" height="auto" src={xsImageProfile} alt="Image" thumbnail />
        </Col>        
        <Col xs={8} xsOffset={1} md={5} mdOffset={0} className="text-justify">  
          <p>¡Hola! Mi nombre es Gabriela y estudio Front-End Developer en Laboratoria. También soy Bachiller en Ingeniería de Sistemas de la Universidad Católica de Santa María.
            Me encanta el mundo de la tecnologia, estar inmersa en este mundo me ha enseñado a que no hay que esperar a que alguien nos lo enseñe todo,
            sino que una misma puede aprender por su cuenta las cosas que quiere profundizar. Es bueno salir de nuestra zona de confort por que eso nos ayuda a crecer.
          </p>
          <br/>
          <p>
            Reconocimientos obtenidos en Laboratoria:
          </p>
          <Row>
            <Col xs={1} xsOffset={1} md={3} mdOffset={0}>
              <Image width="100%" height="auto" src={bestSquad} alt="Image" />
            </Col>
            <Col xs={1} xsOffset={1} md={3} mdOffset={0}>
              <Image width="100%" height="auto" src={unicorn} alt="Image" />
            </Col>
            <Col xs={1} xsOffset={1} md={3} mdOffset={0}>
              <Image width="100%" height="auto" src={top5} alt="Image" />
            </Col>
          </Row>            
        </Col>
        <Col xs={1} xsOffset={1} md={1} mdOffset={0}>
          <hr id="aboutLineVerticalSocial"/>
        </Col>
        <Col xs={12} xsOffset={0} md={2} mdOffset={0}>
          <Row>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <p>
                <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <p>
                <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <p>
                <i className="fa fa-github fa-2x" aria-hidden="true"></i>
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <p>
                <i className="fa fa-skype fa-2x" aria-hidden="true"></i>
              </p>
            </Col>
          </Row>
        </Col>    
      </Row>
    </div>
  );
}

export default About;
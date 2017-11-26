import React, { Component } from 'react';
import {Grid, Row, Col, Carousel, Navbar, Nav, NavItem, Media, ProgressBar, Image, OverlayTrigger, Tooltip, Button} from 'react-bootstrap';
import laberinto from './assets/laberinto.JPG';
import laberinto1 from './assets/laberinto2.PNG';
import ajedrez from './assets/ajedrez.JPG';
import ajedrez2 from './assets/ajedrez2.PNG';
import asientos from './assets/asientos.JPG';
import asientos2 from './assets/asientos2.PNG';
import koala from './assets/koala.JPG';
import trivia from './assets/trivia.JPG';
import panda from './assets/panda.JPG';

const Work = () => 
{
  return (
    <div className="work">
      <Row>
        <Col xs={11} xsOffset={1} md={10} mdOffset={1}>
          <h3 className="">Mis Trabajos</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} xsOffset={0} md={10} mdOffset={1}>
          <h3 className=""></h3>
        </Col>
      </Row>
      <Row>
        <Col xs={11} xsOffset={1} md={6} mdOffset={0}>
          <Col xs={11} xsOffset={1} md={12} mdOffset={0}>
          <Carousel>
            <Carousel.Item>
              <a href="https://gabiprds93.github.io/Laberinto/">
                <img title="Laberinto" alt="Laberinto" responsive src={laberinto1}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <h3 className="">Laberinto</h3>
                <a href="https://gabiprds93.github.io/Laberinto/" className="btn">
                  Demo
                </a>
                <a href="https://github.com/gabiprds93/Laberinto/" className="btn">
                  Repositorio
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://gabiprds93.github.io/Tablero-Ajedrez/">
                <img title="Ajedrez" alt="Ajedrez" src={ajedrez2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <h3>Tablero de Ajedrez</h3>
                <a href="https://gabiprds93.github.io/Tablero-Ajedrez/" className="btn">
                  Demo
                </a>
                <a href="https://github.com/gabiprds93/Tablero-Ajedrez/" className="btn">
                  Repositorio
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://gabiprds93.github.io/Reserva-Asientos/">
                <img title="Reserva Asientos" alt="Reserva Asientos" src={asientos2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <h3>Reserva de Asientos</h3>
                <a href="https://gabiprds93.github.io/Reserva-Asientos/" className="btn">
                  Demo
                </a>
                <a href="https://github.com/gabiprds93/Reserva-Asientos/" className="btn">
                  Repositorio
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Col>        
        </Col>
        <Col xs={11} xsOffset={1} md={6} mdOffset={0}>
          <Col xs={11} xsOffset={1} md={11} mdOffset={0}>
          
          <Row>
            <Col xs={11} xsOffset={1} md={4} mdOffset={0}>
              <Image width="100%" src={laberinto} title="Laberinto" alt="Laberinto" rounded />
            </Col>
            <Col xs={11} xsOffset={1} md={4} mdOffset={0}>
              <Image src={ajedrez} title="Ajedrez" alt="Ajedrez" thumbnail />
            </Col>
            <Col xs={11} xsOffset={1} md={4} mdOffset={0}>
              <Image src={asientos} title="Reserva Asientos" alt="Reserva Asientos" thumbnail />
            </Col>
          </Row>
          <Row>
            <Col xs={12} xsOffset={0} md={10} mdOffset={1}>
              <h3 className=""></h3>
            </Col>
          </Row>
          <Row>
            <Col xs={11} xsOffset={1} md={4} mdOffset={0}>
              <Image width="100%" height="auto" src={koala} title="Koala" alt="Koala" thumbnail />
            </Col>
            <Col xs={11} xsOffset={1} md={4} mdOffset={0}>
              <Image width="100%" height="auto" src={trivia} title="Trivia" alt="Trivia" thumbnail />
            </Col>
            <Col xs={11} xsOffset={1} md={4} mdOffset={0}>
              <Image width="100%" height="auto" src={panda} title="Panda" alt="Panda" thumbnail />
            </Col>
          </Row>
          </Col>                      
        </Col>
      </Row>
    </div>
  );
}

export default Work;
import React, { Component } from 'react';
import {Grid, Row, Col, Carousel, Navbar, Nav, NavItem, Media, ProgressBar, Image, OverlayTrigger, Tooltip, Button} from 'react-bootstrap';
import laberinto from './assets/laberinto.JPG';
import laberinto1 from './assets/laberinto2.PNG';
import ajedrez from './assets/ajedrez.JPG';
import asientos from './assets/asientos.JPG';

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
        <Col xs={11} xsOffset={1} md={5} mdOffset={1}>
          <Carousel>
            <Carousel.Item>
              <a href="https://gabiprds93.github.io/Laberinto/"><img  alt="Laberinto" responsive src={laberinto1}/></a>
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
            <Carousel.Item className="text-center">
              <a href="https://gabiprds93.github.io/Tablero-Ajedrez/"><img width="50%"  alt="Ajedrez" src={ajedrez}/></a>
              <Carousel.Caption>
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
                <img width={300} height={300} alt="Reserva Asientos" src={asientos}/>
              </a>
              <Carousel.Caption>
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
      </Row>
    </div>
  );
}

export default Work;
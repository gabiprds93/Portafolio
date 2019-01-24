import React, { Component } from 'react';
import {Grid, Row, Col, Carousel, Navbar, Nav, NavItem, Media, ProgressBar, Image, OverlayTrigger, Tooltip, Button} from 'react-bootstrap';
import laberinto from './assets/images/laberinto-compressor.jpg';
import laberinto1 from './assets/images/laberinto2-compressor.png';
import ajedrez from './assets/images/ajedrez-compressor.jpg';
import ajedrez2 from './assets/images/ajedrez2-compressor.png';
import asientos from './assets/images/asientos-compressor.jpg';
import asientos2 from './assets/images/asientos2-compressor.png';
import koala from './assets/images/koala-compressor.jpg';
import koala2 from './assets/images/koala2-compressor.png';
import trivia from './assets/images/trivia-compressor.jpg';
import trivia2 from './assets/images/trivia2-compressor.png';
import panda from './assets/images/panda-compressor.jpg';
import panda2 from './assets/images/panda2-compressor.png';
import tls2 from './assets/images/tls2.png';
import ppj2 from './assets/images/ppj2.png';
import cpj2 from './assets/images/cpj2.png';
import ciup2 from './assets/images/ciup2.png';

const Work = () => 
{
  return (
    <Col xs={12} sm={12} md={12} className="work">
      <Row>
        <Col xs={12} xsOffset={0} md={12} mdOffset={0} className="text-center">
          <h3 className="">Mis Trabajos</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} xsOffset={0} md={10} mdOffset={1}>
          <h3 className=""></h3>
        </Col>
      </Row>
      <Row className="containerWork">
        <Col xs={12} xsOffset={0} smHidden={true} mdHidden={true} lgHidden={true}>
          <Col xs={12} xsOffset={0} sm={12} smOffset={0} md={12} mdOffset={0} className="text-center">
            <h4>Recientes</h4>
          </Col>
          <Col xs={12} xsOffset={0} sm={12} smOffset={0} md={12} mdOffset={0}>
          <Carousel>
            {/* <Carousel.Item>
              <a href="https://gabiprds93.github.io/Laberinto/" target="_blank">
                <img title="Laberinto" alt="Laberinto" responsive src={laberinto1}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="https://gabiprds93.github.io/Laberinto/" target="_blank" className="btn">
                  Demo
                </a>
                <a href="https://github.com/gabiprds93/Laberinto/" target="_blank" className="btn">
                  Repositorio
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://gabiprds93.github.io/Tablero-Ajedrez/" target="_blank">
                <img title="Ajedrez" alt="Ajedrez" src={ajedrez2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="https://gabiprds93.github.io/Tablero-Ajedrez/" target="_blank" className="btn">
                  Demo
                </a>
                <a href="https://github.com/gabiprds93/Tablero-Ajedrez/" target="_blank" className="btn">
                  Repositorio
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://gabiprds93.github.io/Reserva-Asientos/" target="_blank">
                <img title="Reserva Asientos" alt="Reserva Asientos" src={asientos2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="https://gabiprds93.github.io/Reserva-Asientos/" target="_blank" className="btn">
                  Demo
                </a>
                <a href="https://github.com/gabiprds93/Reserva-Asientos/" target="_blank" className="btn">
                  Repositorio
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://gabiprds93.github.io/save-the-koala-vol2/" target="_blank">
                <img title="Reserva Asientos" alt="Reserva Asientos" src={koala2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="https://gabiprds93.github.io/save-the-koala-vol2/" target="_blank" className="btn">
                  Demo
                </a>
                <a href="https://github.com/gabiprds93/save-the-koala-vol2" target="_blank" className="btn">
                  Repositorio
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://gabiprds93.github.io/Trivia-Redux/" target="_blank">
                <img title="Reserva Asientos" alt="Reserva Asientos" src={trivia2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="https://gabiprds93.github.io/Trivia-Redux/" target="_blank" className="btn">
                  Demo
                </a>
                <a href="https://github.com/gabiprds93/Trivia-Redux" target="_blank" className="btn">
                  Repositorio
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://gabiprds93.github.io/Pandas/" target="_blank">
                <img title="Pandas" alt="Pandas" src={panda2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="https://gabiprds93.github.io/Pandas/" target="_blank" className="btn">
                  Demo
                </a>
                <a href="https://github.com/gabiprds93/Pandas" target="_blank" className="btn">
                  Repositorio
                </a>
              </Carousel.Caption>
            </Carousel.Item> */}
            <Carousel.Item>
              <a href="http://eurekaad.pe/test/tls/web" target="_blank">
                <img title="tls2" alt="tls2" src={tls2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="http://eurekaad.pe/test/tls/web" target="_blank" className="btn">
                  Sitio web
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://www.clinicapj.org.pe/" target="_blank">
                <img title="cpj2" alt="cpj2" src={cpj2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="https://www.clinicapj.org.pe/" target="_blank" className="btn">
                  Sitio web
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://www.policlinicoperuanojapones.org/" target="_blank">
                <img title="ppj2" alt="ppj2" src={ppj2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="https://www.policlinicoperuanojapones.org/" target="_blank" className="btn">
                  Sitio web
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="http://www.up.edu.pe/idiomas/" target="_blank">
                <img title="ciup2" alt="ciup2" src={ciup2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="http://www.up.edu.pe/idiomas/" target="_blank" className="btn">
                  Sitio web
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Col>        
        </Col>
        <Col xs={12} xsOffset={0} sm={5} smOffset={0} md={6} mdOffset={0}>
          <Col xsHidden={true} smHidden={true} md={12} mdOffset={0}>
            <Row>
              <Col sm={4} smOffset={0} md={4} mdOffset={0} className="work_images">
                <Image width="100%" src={laberinto} title="Laberinto" alt="Laberinto" rounded />
                <div className="caption">
                  <div className="blur"></div>
                  <div className="caption-text">
                    {/* <h4 className="">Laberinto</h4> */}
                    <a href="https://gabiprds93.github.io/Laberinto/" target="_blank" className="btn">
                      Demo
                    </a>
                    <a href="https://github.com/gabiprds93/Laberinto/" target="_blank" className="btn">
                      Repositorio
                    </a>
                  </div>
                </div>
              </Col>
              <Col sm={4} smOffset={0} md={4} mdOffset={0} className="work_images">
                <Image width="100%"src={ajedrez} title="Ajedrez" alt="Ajedrez" rounded />
                <div className="caption">
                  <div className="blur"></div>
                  <div className="caption-text">
                    <a href="https://gabiprds93.github.io/Tablero-Ajedrez/" target="_blank" className="btn">
                      Demo
                    </a>
                    <a href="https://github.com/gabiprds93/Tablero-Ajedrez/" target="_blank" className="btn">
                      Repositorio
                    </a>
                  </div>
                </div>
              </Col>
              <Col sm={4} smOffset={0} md={4} mdOffset={0} className="work_images">
                <Image width="100%" src={asientos} title="Reserva Asientos" alt="Reserva Asientos" rounded />
                <div className="caption">
                  <div className="blur"></div>
                  <div className="caption-text">
                    <a href="https://gabiprds93.github.io/Reserva-Asientos/" target="_blank" className="btn">
                      Demo
                    </a>
                    <a href="https://github.com/gabiprds93/Reserva-Asientos/" target="_blank" className="btn">
                      Repositorio
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12} smOffset={0} md={12} mdOffset={0}>
                <h3 className=""></h3>
              </Col>
            </Row>
            <Row>
              <Col sm={4} smOffset={0} md={4} mdOffset={0} className="work_images">
                <Image width="100%" height="auto" src={koala} title="Koala" alt="Koala" rounded />
                <div className="caption">
                  <div className="blur"></div>
                  <div className="caption-text">
                    <a href="https://gabiprds93.github.io/save-the-koala-vol2/" target="_blank" className="btn">
                      Demo
                    </a>
                    <a href="https://github.com/gabiprds93/save-the-koala-vol2" target="_blank" className="btn">
                      Repositorio
                    </a>
                  </div>
                </div>
              </Col>
              <Col sm={4} smOffset={0} md={4} mdOffset={0} className="work_images">
                <Image width="100%" height="auto" src={trivia} title="Trivia" alt="Trivia" rounded />
                <div className="caption">
                  <div className="blur"></div>
                  <div className="caption-text">
                    <a href="https://gabiprds93.github.io/Trivia-Redux/" target="_blank" className="btn">
                      Demo
                    </a>
                    <a href="https://github.com/gabiprds93/Trivia-Redux" target="_blank" className="btn">
                      Repositorio
                    </a>
                  </div>
                </div>
              </Col>
              <Col sm={4} smOffset={0} md={4} mdOffset={0} className="work_images">
                <Image width="100%" height="auto" src={panda} title="Panda" alt="Panda" rounded />
                <div className="caption">
                  <div className="blur"></div>
                  <div className="caption-text">
                    <a href="https://gabiprds93.github.io/Pandas/" target="_blank" className="btn">
                      Demo
                    </a>
                    <a href="https://github.com/gabiprds93/Pandas" target="_blank" className="btn">
                      Repositorio
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
            {/* <Row>
              <Col sm={12} smOffset={0} md={12} mdOffset={0}>
                <h3 className=""></h3>
              </Col>
            </Row> */}
          </Col>
          <Col xs={12} sm={12} mdHidden={true} lgHidden={true}>
            <Row>
              <Col xs={12} xsOffset={0} smHidden={true}>
                <h3 className=""></h3>
              </Col>
            </Row>
            <Row>
              <Col xs={6} xsOffset={0} sm={6} smOffset={0} className="work_images">
                <Image width="100%" src={laberinto} title="Laberinto" alt="Laberinto" rounded />
                <div className="caption">
                  <div className="blur"></div>
                  <div className="caption-text">
                    <a href="https://gabiprds93.github.io/Laberinto/" target="_blank" className="btn">
                      Demo
                    </a>
                    <a href="https://github.com/gabiprds93/Laberinto/" target="_blank" className="btn">
                      Repositorio
                    </a>
                  </div>
                </div>
              </Col>
              <Col xs={6} xsOffset={0} sm={6} smOffset={0} className="work_images">
                <Image width="100%"src={ajedrez} title="Ajedrez" alt="Ajedrez" rounded />
                <div className="caption">
                  <div className="blur"></div>
                  <div className="caption-text">
                    <a href="https://gabiprds93.github.io/Tablero-Ajedrez/" target="_blank" className="btn">
                      Demo
                    </a>
                    <a href="https://github.com/gabiprds93/Tablero-Ajedrez/" target="_blank" className="btn">
                      Repositorio
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} xsOffset={0}>
                <h3 className=""></h3>
              </Col>
            </Row>
            <Row>
              <Col xs={6} xsOffset={0} sm={6} smOffset={0} className="work_images">
                <Image width="100%" src={asientos} title="Reserva Asientos" alt="Reserva Asientos" rounded />
                <div className="caption">
                  <div className="blur"></div>
                  <div className="caption-text">
                    <a href="https://gabiprds93.github.io/Reserva-Asientos/" target="_blank" className="btn">
                      Demo
                    </a>
                    <a href="https://github.com/gabiprds93/Reserva-Asientos/" target="_blank" className="btn">
                      Repositorio
                    </a>
                  </div>
                </div>
              </Col>
              <Col xs={6} xsOffset={0} sm={6} smOffset={0} className="work_images">
                <Image width="100%" height="auto" src={koala} title="Koala" alt="Koala" rounded />
                <div className="caption">
                  <div className="blur"></div>
                  <div className="caption-text">
                    <a href="https://gabiprds93.github.io/save-the-koala-vol2/" target="_blank" className="btn">
                      Demo
                    </a>
                    <a href="https://github.com/gabiprds93/save-the-koala-vol2" target="_blank" className="btn">
                      Repositorio
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} xsOffset={0}>
                <h3 className=""></h3>
              </Col>
            </Row>
            <Row>
              <Col xs={6} xsOffset={0} sm={6} smOffset={0} className="work_images">
                <Image width="100%" height="auto" src={trivia} title="Trivia" alt="Trivia" rounded />
                <div className="caption">
                  <div className="blur"></div>
                  <div className="caption-text">
                    <a href="https://gabiprds93.github.io/Trivia-Redux/" target="_blank" className="btn">
                      Demo
                    </a>
                    <a href="https://github.com/gabiprds93/Trivia-Redux" target="_blank" className="btn">
                      Repositorio
                    </a>
                  </div>
                </div>
              </Col>
              <Col xs={6} xsOffset={0} sm={6} smOffset={0} className="work_images">
                <Image width="100%" height="auto" src={panda} title="Panda" alt="Panda" rounded />
                <div className="caption">
                  <div className="blur"></div>
                  <div className="caption-text">
                    <a href="https://gabiprds93.github.io/Pandas/" target="_blank" className="btn">
                      Demo
                    </a>
                    <a href="https://github.com/gabiprds93/Pandas" target="_blank" className="btn">
                      Repositorio
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>                      
        </Col>
        <Col xsHidden={true} sm={7} smOffset={0} md={6} mdOffset={0}>
          <Col xs={12} xsOffset={0} sm={12} smOffset={0} md={12} mdOffset={0} className="text-center">
            <h4>Recientes</h4>
          </Col>
          <Col xs={12} xsOffset={0} sm={12} smOffset={0} md={12} mdOffset={0}>
          <Carousel>
            {/* <Carousel.Item>
              <a href="https://gabiprds93.github.io/Laberinto/" target="_blank">
                <img title="Laberinto" alt="Laberinto" responsive src={laberinto1}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="https://gabiprds93.github.io/Laberinto/" target="_blank" className="btn">
                  Demo
                </a>
                <a href="https://github.com/gabiprds93/Laberinto/" target="_blank" className="btn">
                  Repositorio
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://gabiprds93.github.io/Tablero-Ajedrez/" target="_blank">
                <img title="Ajedrez" alt="Ajedrez" src={ajedrez2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="https://gabiprds93.github.io/Tablero-Ajedrez/" target="_blank" className="btn">
                  Demo
                </a>
                <a href="https://github.com/gabiprds93/Tablero-Ajedrez/" target="_blank" className="btn">
                  Repositorio
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://gabiprds93.github.io/Reserva-Asientos/" target="_blank">
                <img title="Reserva Asientos" alt="Reserva Asientos" src={asientos2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="https://gabiprds93.github.io/Reserva-Asientos/" target="_blank" className="btn">
                  Demo
                </a>
                <a href="https://github.com/gabiprds93/Reserva-Asientos/" target="_blank" className="btn">
                  Repositorio
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://gabiprds93.github.io/save-the-koala-vol2/" target="_blank">
                <img title="Reserva Asientos" alt="Reserva Asientos" src={koala2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="https://gabiprds93.github.io/save-the-koala-vol2/" target="_blank" className="btn">
                  Demo
                </a>
                <a href="https://github.com/gabiprds93/save-the-koala-vol2" target="_blank" className="btn">
                  Repositorio
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://gabiprds93.github.io/Trivia-Redux/" target="_blank">
                <img title="Reserva Asientos" alt="Reserva Asientos" src={trivia2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="https://gabiprds93.github.io/Trivia-Redux/" target="_blank" className="btn">
                  Demo
                </a>
                <a href="https://github.com/gabiprds93/Trivia-Redux" target="_blank" className="btn">
                  Repositorio
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://gabiprds93.github.io/Pandas/" target="_blank">
                <img title="Pandas" alt="Pandas" src={panda2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="https://gabiprds93.github.io/Pandas/" target="_blank" className="btn">
                  Demo
                </a>
                <a href="https://github.com/gabiprds93/Pandas" target="_blank" className="btn">
                  Repositorio
                </a>
              </Carousel.Caption>
            </Carousel.Item> */}
            <Carousel.Item>
              <a href="http://eurekaad.pe/test/tls/web" target="_blank">
                <img title="tls2" alt="tls2" src={tls2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="http://eurekaad.pe/test/tls/web" target="_blank" className="btn">
                  Sitio web
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://www.clinicapj.org.pe/" target="_blank">
                <img title="cpj2" alt="cpj2" src={cpj2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="https://www.clinicapj.org.pe/" target="_blank" className="btn">
                  Sitio web
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://www.policlinicoperuanojapones.org/" target="_blank">
                <img title="ppj2" alt="ppj2" src={ppj2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="https://www.policlinicoperuanojapones.org/" target="_blank" className="btn">
                  Sitio web
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="http://www.up.edu.pe/idiomas/" target="_blank">
                <img title="ciup2" alt="ciup2" src={ciup2}/>
              </a>
              <Carousel.Caption className="carouselContent">
                <a href="http://www.up.edu.pe/idiomas/" target="_blank" className="btn">
                  Sitio web
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Col>        
        </Col>
      </Row>
      <Row>
        <Col xsHidden={true} xsOffset={0} md={10} mdOffset={1}>
          <h3 className=""></h3>
        </Col>
      </Row>
    </Col>    
  );
}

export default Work;
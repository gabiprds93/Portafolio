import React, { Component } from 'react';
import {Grid, Row, Col, Carousel, Navbar, Nav, NavItem, Media, ProgressBar, Image, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {HashRouter, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import test from './sass/test.css';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import {connect} from 'redux-zero/react';
import {navSelect} from './actions';
import logo from './assets/images/logo1.png';

const App = ({activeKey}) => 
{
  const tooltipHome = (
    <Tooltip id="tooltip"><strong>Home</strong></Tooltip>
  );
  const tooltipAbout = (
    <Tooltip id="tooltip"><strong>About</strong></Tooltip>
  );
  const tooltipSkills = (
    <Tooltip id="tooltip"><strong>Skills</strong></Tooltip>
  );
  const tooltipWork = (
    <Tooltip id="tooltip"><strong>Work</strong></Tooltip>
  );
  const tooltipContact = (
    <Tooltip id="tooltip"><strong>Contact me</strong></Tooltip>
  );
  const OldSchoolMenuLink = ({ label, tooltip, to, activeOnlyWhenExact }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
      <li className={match ? 'active' : ''}>
        <NavLink to={to}>
          <OverlayTrigger placement="top" overlay={tooltip}><i className={"fa fa-" + label + " fa-2x"} aria-hidden="false" aria="home"></i></OverlayTrigger>
        </NavLink>
      </li>
    )}/>
  );
  return (
    <HashRouter>
      <Grid fluid={true}>
        <Row>
          <Col xs={12} xsOffset={0} sm={10} smOffset={1} md={10} mdOffset={1} className="text-right logo">
            <Image src={logo} alt="Image" />
          </Col>
        </Row>
        <Row className="rowContainer">
          <Col xs={12} xsOffset={0} sm={10} smOffset={1} md={10} mdOffset={1} className="colContainer">
            <Switch>
              <Route exact path="/" component={Home}/>              
              <Route exact path="/about" component={About}/>
              <Route path="/skills" component={Skills}/> 
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />              
            </Switch>
            {/* <Row> */}
              <Col xs={12} xsOffset={0} md={12} mdOffset={0} className="pills">
                <ul className="nav nav-pills">
                  <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="home" tooltip={tooltipHome}/>
                  <OldSchoolMenuLink to="/about" label="user" tooltip={tooltipAbout}/>
                  <OldSchoolMenuLink to="/skills" label="file-text" tooltip={tooltipSkills}/>
                  <OldSchoolMenuLink to="/work" label="folder" tooltip={tooltipWork}/>                  
                  <OldSchoolMenuLink to="/contact" label="envelope" tooltip={tooltipContact}/>
                </ul>
                {/* <Nav bsStyle="pills" activeKey={activeKey} onSelect={navSelect}>
                  <NavItem eventKey={0}>
                    <NavLink to={"/"}>
                      <OverlayTrigger placement="bottom" overlay={tooltipHome}><i className="fa fa-home fa-2x" aria-hidden="false" aria="home"></i></OverlayTrigger>
                    </NavLink>
                  </NavItem>  
                  <NavItem eventKey={1}>
                    <NavLink to={"/about"}>
                      <OverlayTrigger placement="bottom" overlay={tooltipAbout}><i className="fa fa-user fa-2x" aria-hidden="true"></i></OverlayTrigger>
                    </NavLink>
                  </NavItem>
                  <NavItem eventKey={2}>
                    <NavLink to={"/skills"}>
                      <OverlayTrigger placement="bottom" overlay={tooltipSkills}><i className="fa fa-file-text fa-2x" aria-hidden="true"></i></OverlayTrigger>
                    </NavLink>
                  </NavItem>
                  <NavItem eventKey={3}>
                    <NavLink to={"/work"}>
                      <OverlayTrigger placement="bottom" overlay={tooltipWork}><i className="fa fa-folder fa-2x" aria-hidden="true"></i></OverlayTrigger>
                    </NavLink>
                  </NavItem>
                  <NavItem eventKey={4}>
                    <NavLink to={"/contact"}>
                      <OverlayTrigger placement="bottom" overlay={tooltipContact}><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></OverlayTrigger>
                    </NavLink>
                  </NavItem>
                </Nav> */}
              </Col>
            {/* </Row>               */}
          </Col>
        </Row>
      </Grid>
    </HashRouter>
  );
}

const mapToProps = ({activeKey}) => ({activeKey}) 
export default connect(mapToProps)(App);
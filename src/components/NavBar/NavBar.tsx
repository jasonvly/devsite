import React from 'react';
import './NavBar.css';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
// import '../../documents/jason-resume.pdf';

// const fileLocation = '../../documents/jason-resume.pdf';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="md" fixed="top" variant="dark">
                <Container>

                <IndexLinkContainer to="/">
                    <Navbar.Brand>jasonly.dev</Navbar.Brand>
                </IndexLinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" defaultActiveKey="/about">

                        <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/experience">
                                <Nav.Link>Experience</Nav.Link>
                        </LinkContainer>
        
                        <LinkContainer to="/projects">
                                <Nav.Link>Projects</Nav.Link>
                        </LinkContainer>

                        <Nav.Item>
                                <Nav.Link href="" download target="_blank">Resume</Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Navbar.Collapse>
                </Container>

        </Navbar>

    );
}

export default NavBar;
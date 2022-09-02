import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.css'
import './Header.css'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            {/* <h1 className="text-center">This is in header</h1> */}
            <Container>
                <LinkContainer  to="/">
                    <Navbar.Brand>
                        Airlines
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <LinkContainer  to="/">
                            <Nav.Link >
                                Airlines
                            </Nav.Link>
                        </LinkContainer>
                        {/* <Nav.Link >
                            <Link to={`/details/${airline.id}`}>{airline.name}</Link>
                        </Nav.Link>  */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import './Navbar.css';
import './NavbarReal.css';
import logo_utfsm from '../../imagenes/Logo_UTFSM.png'
import Container from 'react-bootstrap/Container';

function NavigBar() {
    return (
        <div>
            <Container className="ContainerAdmisionUSM" fluid>
                        <Nav>
                            <Nav.Item>
                                <Nav.Link className="navLinkAdmisionUSM" href="/">
                                    <Image src={logo_utfsm} rounded width="113" height="100" className="align-left" />
                                    {" "}Admisión USM
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
            </Container>
            
            {/* <Navbar>
                <Navbar.Brand href="/Home">
                    <Image src={logo_utfsm} rounded width="14%" height="14%" className="align-left" />
                    Admision USM
                </Navbar.Brand>
            </Navbar> */}
            <Container className="Container2daNavbar">
            <Nav justify>
            <Nav.Item>
                <Nav.Link className="navLinkColor" href="/vidauniversitaria">Vida Universitaria</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navLinkColor" href="/becasybeneficios">Becas y Beneficios</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navLinkColor" href="/carreras">Carreras y Aranceles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navLinkColor" href="/comunidadusm">Comunidad USM</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navLinkColor" href="/contacto">Contacto</Nav.Link>
            </Nav.Item>
            </Nav>
            </Container>
            
        </div>
        
    )
}

export default NavigBar




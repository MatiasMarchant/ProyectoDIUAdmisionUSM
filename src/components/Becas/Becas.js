import React from 'react'
import { Accordion, Badge, Card, Container } from 'react-bootstrap';
import "./Becas.css";
import "../../App.css";
import BecaPuntajeNacional from "./BecaPuntajeNacional.js";
import BecaPPI from "./BecaPPI.js";
import BecaPAMeritoRC from "./BecaPA_MeritoRC.js";
import BecaPAMeritoEC from "./BecaPA_MeritoEC.js";
import BecaPAMeritoED from "./BecaPA_MeritoED.js";

function Becas() {
    return (
        <div>
            <Container className="ContainerBecas">
                <p className="LetraHeader">Becas y Beneficios</p>
                <Accordion className="AccordionBecas">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="HeaderAccordion">
                            Beca Puntaje Nacional <Badge variant="info">Pregrado</Badge>{' '}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <BecaPuntajeNacional/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="HeaderAccordion">
                            Beca Programa Preliminar Ingeniería (PPI) <Badge variant="info">Pregrado</Badge>{' '} 
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <BecaPPI/>
                            </Card.Body>
                        </Accordion.Collapse>
                        
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2" className="HeaderAccordion">
                        Beca de primer año al Mérito Académico para estudiantes nuevos Vía Admisión Regular Centralizada <Badge variant="info">Pregrado</Badge>{' '} 
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <BecaPAMeritoRC/>
                            </Card.Body>
                        </Accordion.Collapse>
                        
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3" className="HeaderAccordion">
                        Beca de primer año al mérito académico para estudiantes nuevos Vía Admisión Especial Centralizada <Badge variant="info">Pregrado</Badge>{' '} 
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                <BecaPAMeritoEC/>
                            </Card.Body>
                        </Accordion.Collapse>
                        
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4" className="HeaderAccordion">
                        Beca de primer año al Mérito Académico para estudiantes nuevos Vía Admisión Especial Directa <Badge variant="info">Pregrado</Badge>{' '} 
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>
                                <BecaPAMeritoED/>
                            </Card.Body>
                        </Accordion.Collapse>
                        
                    </Card>
                </Accordion>
            </Container>
        </div>
    )
}

export default Becas

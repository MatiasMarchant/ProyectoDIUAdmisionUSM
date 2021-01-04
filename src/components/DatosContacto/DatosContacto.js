import React from 'react'
import { Card, CardGroup, Container, } from 'react-bootstrap';
import "./DatosContacto.css";
import "../../App.css";

function DatosContacto() {
    return (
        <div>
            <Container className="ContainerDatosContacto">
            <p className="LetraHeader">Contacto</p>
            <Card className="text-center">
                <Card.Header className="ContactoHeader">¿Dónde nos puedes encontrar?</Card.Header>
                <Card.Body>
                <CardGroup className="text-left">
                    <Card border="light">
                        <Card.Body>
                        <Card.Title className="font-weight-bold">Campus Casa Central Valparaíso</Card.Title>
                        <Card.Text>
                            Avda. España 1680, Valparaíso
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light">
                        <Card.Body>
                        <Card.Title className="font-weight-bold">Campus San Joaquín</Card.Title>
                        <Card.Text>
                            Avda. Vicuña Mackenna 3939, San Joaquín, Santiago
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light">
                        <Card.Body>
                        <Card.Title className="font-weight-bold">Campus Vitacura</Card.Title>
                        <Card.Text>
                            Avda. Santa María 6400, Vitacura, Santiago
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <CardGroup className="text-left">
                    <Card border="light">
                        <Card.Body>
                        <Card.Title className="font-weight-bold">Sede Viña del Mar</Card.Title>
                        <Card.Text>
                            Avda. Federico Santa María 6090, Viña del Mar
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light">
                        <Card.Body>
                        <Card.Title className="font-weight-bold">Sede Concepción</Card.Title>
                        <Card.Text>
                            Arteaga Alemparte 943, Hualpén, Concepción
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light">
                        <Card.Body>
                        <Card.Title className="font-weight-bold">Sigue nuestras redes</Card.Title>
                        <Card.Text>
                            <Card.Link href="https://www.facebook.com/usantamaria">
                                Facebook
                            </Card.Link>
                            <Card.Link href="https://twitter.com/usantamaria">
                                Twitter
                            </Card.Link>
                            <Card.Link href="https://www.youtube.com/channel/UCr5rEvayXIC0YnJxDAWuWtQ">
                                Youtube
                            </Card.Link>
                            <Card.Link href="https://instagram.com/usantamaria/">
                                Instagram
                            </Card.Link>
                            <Card.Link href="https://www.linkedin.com/school/usantamaria/">
                                Linkedin
                            </Card.Link>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                </Card.Body>
            </Card>
            </Container>
        </div>
    )
}

export default DatosContacto
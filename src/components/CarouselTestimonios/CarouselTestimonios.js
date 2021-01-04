import React from 'react'
import { Col, Container, Image, Row, Table } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselTestimonios.css';
//import Logo_UTFSM from '../../imagenes/Logo_UTFSM.png';
import TestimonioUser1 from '../../imagenes/Testimonio_user_1_273x361.png'
import TestimonioUser2 from '../../imagenes/Testimonio_user_2.png'
import TestimonioUser3 from '../../imagenes/Testimonio_user_3.png'
import CarouselBecasyBeneficios from '../../imagenes/carouselbecasybeneficios.jpg';
import CarouselCarreras from '../../imagenes/carouselcarrerasyaranceles.jpg';

function CarouselTestimonios() {
    return (
        <div>
            <p></p>
            <Container fluid>
                <Row>
                    <Col xs={7}>
                        <Carousel>
                            <Carousel.Item>
                                <Image src={CarouselBecasyBeneficios}></Image>
                                <Carousel.Caption>
                                    <a href="/becasybeneficios"><h3 className="LinkCarousel">Becas y Beneficios</h3></a>
                                    <p className="pCarousel">Conoce todo sobre las becas a las que puedes postular!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={CarouselCarreras} width="712" height="350"></Image>
                                <Carousel.Caption>
                                    <a href="/carreras"><h3 className="LinkCarousel">Carreras y Aranceles</h3></a>
                                    <p className="pCarousel">Buscas decidir qué carrera estudiar? Entra <a href="/carreras">aquí</a>!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th colSpan="2" className="HeadTabla">Testimonios de nuestros estudiantes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width="100"><Image src={TestimonioUser1} width="100%" heigth = "100%"></Image></td>
                                <td>
                                    <div className="Interlineado">
                                        <h4 className="NombreTestimonio">Pablo Sánchez</h4>
                                        <h9 className="DatosTestimonio">Ingeniería Civil Informática, 25 años</h9>
                                    </div>
                                    <br></br>
                                    <p className="TextoTestimonio">Uno de los recuerdos que guardo con más cariño ha sido el trato que recibí por parte de todo el equipo docente.</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="100"><Image src={TestimonioUser2} width="100%" heigth = "100%"></Image></td>
                                <td>
                                    <div className="Interlineado">
                                        <h4 className="NombreTestimonio">Ignacia Ramirez</h4>
                                        <h9 className="DatosTestimonio">Ingeniería Civil Química, 19 años</h9>
                                    </div>
                                    <br></br>
                                    <p className="TextoTestimonio">Entré el año 2020 a la USM y estoy orgullosa de haber tomado esa decición, conocí a muchas personas con las que comparto diariamente y eso me hace muy feliz.</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="100"><Image src={TestimonioUser3} width="100%" heigth = "100%"></Image></td>
                                <td>
                                    <div className="Interlineado">
                                        <h4 className="NombreTestimonio">Nicolás González</h4>
                                        <h9 className="DatosTestimonio">Ingeniería Civil Matemática, 22 años</h9>
                                    </div>
                                    <br></br>
                                    <p className="TextoTestimonio">La universidad no es sólo para venir estudiar, sino que también para conocerse a uno mismo y hacer lo que le apasiona, por ejemplo a mi me apasiona jugar en la Nintendo Switch.</p>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CarouselTestimonios

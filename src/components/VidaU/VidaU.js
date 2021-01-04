import React from 'react'
import { Card, CardGroup, Container } from 'react-bootstrap';
import "./VidaU.css";
import "../../App.css";
import USMrree from '../../imagenes/USMrree.jpg';
import USMcoro from '../../imagenes/USMcoro.jpg';
import USMdefider from '../../imagenes/USMdefider.jpg';

function VidaU() {
    return (
        <div>
            <Container className="ContainerVidaU">
            <p className="LetraHeader">Vida Universitaria</p>
            <Card.Text>
                Nuestra misión no solo es formar profesionales de excelencia, sino que además, 
                entregar una formación integral que contribuya al enriquecimiento del espíritu humano, 
                para que estos sean concientes del rol protagónico que deben tener en su entorno sociocultural 
                para contribuir al mejoramiento de la sociedad manteniendo vivo el espíritu que motivo a nuestro benefactor.
            </Card.Text>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={USMrree} />
                    <Card.Body>
                    <Card.Title>Relaciones Estudiantiles</Card.Title>
                    <Card.Text>
                        La Dirección de Relaciones Estudiantiles contribuye a la formación integral 
                        de la comunidad estudiantil de todos los Campus y Sedes de la UTFSM. 
                        Está a cargo de proveer apoyo psicosocial, asistencial y de fomento, 
                        con el objetivo de favorecer la formación de profesionales durante su vida universitaria, 
                        especialmente atendiendo al legado testamentario de nuestro fundador.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href="https://www.rree.usm.cl/">
                            Sitio Web de Relaciones Estudiantiles
                        </Card.Link>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={USMcoro} />
                    <Card.Body>
                    <Card.Title>Iniciativas Artísticas</Card.Title>
                    <Card.Text>
                        Contamos con diversas iniciativas artísticas que fomentan la música y el arte en general, 
                        como el Coro de alumnos USM en cada campus o la Orquesta Estudiantil USM, 
                        incluso un grupo de Tuna USM y mucho más.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href="https://www.usm.cl/vida-universitaria/iniciativas-artisticas">
                            Conócelos aquí
                        </Card.Link>
                    </Card.Footer>
                    {/*
                    <Card.Footer>
                        <Card.Link href="https://www.usm.cl/vida-universitaria/iniciativas-artisticas/#coro-usm-santiago">
                            Coro USM Campus San Joaquín
                        </Card.Link>
                    </Card.Footer>
                    <Card.Footer>
                        <Card.Link href="https://www.usm.cl/vida-universitaria/iniciativas-artisticas/#orquesta-estudiantil">
                            Orquesta Estudiantil USM
                        </Card.Link>
                    </Card.Footer>
                    <Card.Footer>
                        <Card.Link href="https://www.usm.cl/vida-universitaria/iniciativas-artisticas/#tuna">
                            Tuna USM
                        </Card.Link>
                    </Card.Footer>
                    */}
                </Card>
                <Card>
                    <Card.Img variant="top" src={USMdefider} />
                    <Card.Body>
                    <Card.Title>Deportes</Card.Title>
                    <Card.Text>
                        Contribuimos en la formación de personas por medio de asignaturas de actividad física 
                        propias del plan de estudio de cada carrera, como también, en actividades recreativas, 
                        de extensión y deportivas de representación universitaria, aportando al desarrollo de 
                        las competencias transversales y al sello institucional vida saludable.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href="https://defider.usm.cl/">
                            Sitio Web Departamento de Educación Física, Deportes y Recreación (DEFIDER)
                        </Card.Link>
                    </Card.Footer>
                </Card>
            </CardGroup>
            </Container>
            <br>
            </br>
            &nbsp;
            &nbsp;
        </div>
    )
}

export default VidaU

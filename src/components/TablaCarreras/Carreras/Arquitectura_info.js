import React from 'react'
import { Container } from 'react-bootstrap';
// Accordion, Badge,
import "./estilos_carreras_info.css";

function Arquitectura_info() {
    return (
        <div className="general">
           <Container> 
            <p className="LetraTituloCarrera">Arquitectura</p>
            <div>
                              
                <table class="infoC">
                    <thead>
                    <tr>
                        <td class="infoCarrera parrafo">
                            <th >
                            <p className="LetraSubTituloCarrera">Formación</p>
                            <p>
                                El arquitecto de la USM dominará y aplicará conocimientos 
                                científico-tecnológicos avanzados para el diseño, evaluación
                                y desarrollo del hábitat construido, promoviendo con ello el
                                mejoramiento de la calidad de vida de las personas. Instalará,
                                como tema central de su discurso, la preocupación por la 
                                intervención sustentable sobre el medio ambiente, el 
                                emprendimiento y la investigación disciplinar. Construirá un 
                                activo diálogo interdisciplinar vinculando de modo indisoluble,
                                la creatividad e innovación arquitectónica con las ciencias de
                                la ingeniería y la gestión de los recursos. 
                            </p>
                            </th>
                        </td>
                        <td class="infoCarrera lista">
                            <th>
                                <div class="list-group">
                                    <li class="list-group-item"><strong>Título Profesional: </strong> Arquitecto</li>
                                    <li class="list-group-item"><strong>Grado Académico: </strong> Licenciado en Arquitectura</li>
                                    <li class="list-group-item"><strong>Duración de los estudios: </strong> 5,5 años (11 semestres académicos)</li>
                                    <li class="list-group-item"><strong>Régimen: </strong> Diurno</li>
                                    <li class="list-group-item"><strong>Lugar: </strong> Campus Casa Central Valparaíso / Campus  San Joaquín</li>
                                    <a href="http://www.arq.utfsm.cl/" class="list-group-item list-group-item-action link" target="_blank" rel="noreferrer">Conoce el sitio del Departamento de Arquitectura <i class="fas fa-external-link-alt"></i></a>
                                </div>
                            </th>
                        </td>
                    </tr>
                    </thead>
                </table>
            </div>
            <div>
                <p className="LetraSubTituloCarrera">Plan de Estudios</p>

                <div class="responsive-table">
                <table class="table table-blue mb-5" cellspacing="0">
                    <tbody><tr>
                        <td><strong>1º Semestre</strong></td>
                        <td><ul>
                            <li>Taller de Introducción a la Arquitectura</li>
                            <li>Matemática I</li>
                            <li>Introducción a la Física</li>
                            <li>Educación Física I</li>
                        </ul></td>
                        <td><strong>2º Semestre</strong></td>
                        <td><ul>
                            <li>Taller de Introducción a la Arquitectura</li>
                            <li>Matemática II</li>
                            <li>Física Básica para Arquitectos</li>
                            <li>Educación Física II</li>
                        </ul></td>
                    </tr>
                    <tr>
                        <td><strong>3º Semestre</strong></td>
                        <td><ul>
                            <li>Taller Espacio Urbano</li>
                            <li>Matemática III</li>
                            <li>Teoría e Historia de la Ciudad</li>
                            <li>Geometría Arquitectónica</li>
                            <li>Conceptos de Estructuras</li>
                            <li>Deporte</li>
                        </ul></td>
                        <td><strong>4º Semestre</strong></td>
                        <td><ul>
                            <li>Taller Espacio Intermedio y Clima</li>
                            <li>Teoría Historia de la Arquitectura Vernácula</li>
                            <li>Cultura Urbana Contemporánea</li>
                            <li>Métodos Computacionales en Arquitectura</li>
                            <li>Tecnologías Sustentables</li>
                            <li>Análisis Aproximado</li>
                        </ul></td>
                    </tr>
                    <tr>
                        <td><strong>5º Semestre</strong></td>
                        <td><ul>
                            <li>Taller Modelación del Espacio</li>
                            <li>Teoría Historia de la Representación en Arquitectura</li>
                            <li>Estrategias de Intervención Territorial</li>
                            <li>Taller de Métodos Computacionales en Arquitectura</li>
                            <li>Sistemas Constructivos Básicos</li>
                            <li>Suelos y Fundaciones</li>
                        </ul></td>
                        <td><strong>6º Semestre</strong></td>
                        <td><ul>
                            <li>Taller Espacio y Tectónica</li>
                            <li>Teoría Historia de la Construcción</li>
                            <li>Pre-Práctica Administración y Programación de Obra</li>
                            <li>Estructuras Sismorresistentes</li>
                            <li>Economía I</li>
                            <li>Inglés I</li>
                        </ul></td>
                    </tr>
                    <tr>
                        <td><strong>7º Semestre</strong></td>
                        <td><ul>
                            <li>Taller Avanzado I</li>
                            <li>Optativa I</li>
                            <li>Instalaciones Sanitarias, Eléctricas y Clima</li>
                            <li>Marketing e Investigación de Mercado</li>
                            <li>Inglés II</li>

                        </ul></td>
                        <td><strong>8º Semestre</strong></td>
                        <td><ul>
                            <li>Taller Avanzado II</li>
                            <li>Optativa II</li>
                            <li>Hormigón Armado</li>
                            <li>Evaluación de Proyectos Inmobiliarios</li>
                            <li>Inglés III</li>
                        </ul></td>
                    </tr>
                    <tr>
                        <td><strong>9º Semestre</strong></td>
                        <td><ul>
                            <li>Taller Avanzado III</li>
                            <li>Optativa III</li>
                            <li>Gestión Territorial</li>
                            <li>Sistemas Constructivos Complejos</li>
                            <li>Estructuras de Acero</li>

                        </ul></td>
                        <td><strong>10º Semestre</strong></td>
                        <td><ul>
                            <li>Inicio Proceso de Titulación (*)</li>
                        </ul></td>
                        </tr><tr>
                        <td><strong>11º Semestre</strong></td>
                        <td><ul>
                            <li>Término Proceso de Titulación (*)</li>
                        </ul></td>
                        </tr></tbody>
                </table>
                </div>
            </div>

            <p>
                (*) El alumno podrá optar a las siguientes modalidades de Titulación correspondiente a dos semestres académicos: 
            </p>
            <p> 
                Proyecto de Arquitectura, Proyecto Urbano, Tesis, (i+d) Investigación y Desarrollo, Experimental o Práctica Proyectual.
            </p>
            <p>      
                Además, el Departamento ofrece:
            </p>
            <p>   1. Magíster en Rehabilitación Arquitectónica Sostenible. Áreas de especialización:
                a. Patrimonio
                b. Sostenibilidad
                c. Curso Práctico en Metodologías BIM
                Campus Casa Central Valparaíso, jornada diurna
            </p>

            </Container>
        </div>
    )
}

export default Arquitectura_info
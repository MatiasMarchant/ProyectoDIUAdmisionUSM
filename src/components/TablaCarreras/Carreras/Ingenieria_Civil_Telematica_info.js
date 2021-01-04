import React from 'react'
import { Container } from 'react-bootstrap';
// Accordion, Badge,
import "./estilos_carreras_info.css";

function Ingenieria_Civil_Telematica_info() {
    return (
        <div className="general">
           <Container> 
            <p className="LetraTituloCarrera">Ingeniería Civil Telemática</p>
            <div>
                              
                <table class="infoC">
                    <thead>
                    <tr>
                        <td class="infoCarrera parrafo">
                            <th >
                            <p className="LetraSubTituloCarrera">Formación</p>
                            <p>
                            El desarrollo del país demanda el diseño, la evaluación y la construcción de obras de 
                            infraestructura y estructuras que contribuyan a la calidad de vida de las personas. Para 
                            ello se requiere de profesionales técnicamente capacitados, que integren equipos y se 
                            comuniquen en forma efectiva, con una actitud ética profesional y conscientes del impacto 
                            que su labor tiene en la sociedad, aspectos intrínsecos en la formación que ofrece la carrera. 
                            El Ingeniero Civil de la USM, con su formación generalista y de excelencia técnica, puede 
                            desempeñarse y desarrollarse en sus distintas etapas profesionales y asumir roles técnicos y 
                            directivos, en las diversas subdisciplinas y áreas afines.
                            </p>
                            </th>
                        </td>
                        <td class="infoCarrera lista">
                            <th>
                            <div class="list-group">
                                <li class="list-group-item"><strong>Título Profesional: </strong> Ingeniero Civil Telemático.</li>
                                <li class="list-group-item"><strong>Grado Académico: </strong> Bachiller en Ciencias de la Ingeniería y Licenciado en Ciencias de la Ingeniería Telemática.</li>
                                <li class="list-group-item"><strong>Duración de los estudios: </strong> 6 años (12 semestres académicos)</li>
                                <li class="list-group-item"><strong>Régimen: </strong> Diurno</li>
                                <li class="list-group-item"><strong>Lugar: </strong> Campus  San Joaquín, Campus Casa Central Valparaíso.</li>
                                <a href="https://telematica.usm.cl/" class="list-group-item list-group-item-action link"  target="_blank" rel="noreferrer">Conoce el sitio  de Ingeniería Civil Telemática<i class="fas fa-external-link-alt"></i></a>
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
                    <li>Matemática I</li>
                    <li>Introducción a la Física</li>
                    <li>Iniciación a la Programación</li>
                    <li>Introducción a la Ingeniería</li>
                    <li>Educación Física I</li>
                    <li>Humanístico I</li>
                    </ul></td>
                    <td><strong>2º Semestre</strong></td>
                    <td><ul>
                    <li>Matemática II</li>
                    <li>Física General I</li>
                    <li>Seminario de Programación</li>
                    <li>Educación Física II</li>
                    <li>Expresión Oral y Escrita</li>
                    <li>Humanístico II</li>
                    </ul></td>
                </tr>
                <tr>
                    <td><strong>3º Semestre</strong></td>
                    <td><ul>
                    <li>Matemática III</li>
                    <li>Física General II</li>
                    <li>Estructura de Datos y Algoritmos</li>
                    <li>Redes de Computadores</li>
                    <li>Deportes</li>
                    <li>Inglés Nivel I</li>
                    </ul></td>
                    <td><strong>4º Semestre</strong></td>
                    <td><ul>
                    <li>Probabilidades y Procesos Aleatorios</li>
                    <li>Electrónica Digital</li>
                    <li>Laboratorio de Electrónica Digital</li>
                    <li>Bases de Datos</li>
                    <li>Química y Sociedad</li>
                    <li>Inglés Nivel II</li>
                    </ul></td>
                </tr>
                <tr>
                    <td><strong>5º Semestre</strong></td>
                    <td><ul>
                    <li>Física General III</li>
                    <li>Fundamentos de Transmisión de Señales</li>
                    <li>Diseño y Programación Orientada a Objetos</li>
                    <li>Análisis y Diseño de Software</li>
                    <li>Laboratorio de Redes de Computadores</li>
                    <li>Inglés Nivel III</li>
                    </ul></td>
                    <td><strong>6º Semestre</strong></td>
                    <td><ul>
                    <li>Matemática IV</li>
                    <li>Sistemas de Telecomunicaciones</li>
                    <li>Laboratorio de Comunicaciones</li>
                    <li>Ingeniería de Software</li>
                    <li>Teoría de Sistemas Operativos</li>
                    <li>Inglés Nivel IV</li>
                    </ul></td>
                </tr>
                <tr>
                    <td><strong>7º Semestre</strong></td>
                    <td><ul>
                    <li>Análisis Numérico</li>
                    <li>Sistemas Digitales</li>
                    <li>Laboratorio de Sistemas Digitales</li>
                    <li>Pensamiento de Diseño en Ingeniería</li>
                    <li>Disponibilidad y Rendimiento de Sistemas TIC</li>
                    <li>Inglés Nivel V</li>
                    </ul></td>
                    <td><strong>8º Semestre</strong></td>
                    <td><ul>
                    <li>Física General IV</li>
                    <li>Teoría de Comunicaciones Digitales</li>
                    <li>Criptografía y Seguridad de la Información</li>
                    <li>Administración de Servicios y Redes de Computadores</li>
                    <li>Diseño de Aplicaciones Web y Móviles</li>
                    <li>Inglés Nivel VI</li>
                    </ul></td>
                </tr>
                <tr>
                    <td><strong>9º Semestre</strong></td>
                    <td><ul>
                    <li>Redes de Acceso y Comunicaciones Ópticas</li>
                    <li>Minería de Datos</li>
                    <li>Gestión de Investigación de Operaciones</li>
                    <li>Simulación de Redes</li>
                    <li>Seguridad en Redes de Computadores</li>
                    <li>Redes Inalámbricas</li>
                    </ul></td>
                    <td><strong>10º Semestre</strong></td>
                    <td><ul>
                    <li>Redes de Sensores</li>
                    <li>Planificación y Dimensionamiento de Redes de Computadores</li>
                    <li>Procesamiento Digital de Imágenes</li>
                    <li>Redes Ópticas WDM</li>
                    <li>Economía I-A</li>
                    <li>Complementario I</li>
                    </ul></td>
                </tr>
                <tr>
                    <td><strong>11º Semestre</strong></td>
                    <td><ul>
                    <li>Memoria Multidisciplinaria: Transversal I</li>
                    <li>Complementario II</li>
                    <li>Complementario III</li>
                    <li>Memoria Multidisciplinaria: Innovación</li>
                    <li>Proyecto de Titulación</li>
                    </ul></td>
                    <td><strong>12º Semestre</strong></td>
                    <td><ul>
                    <li>Memoria Multidisciplinaria: Transversal II</li>
                    <li>Legislación Empresarial</li>
                    <li>Memoria Multidisciplinaria: Emprendimiento</li>
                    <li>Memoria de Titulación</li>
                    <li>Electivo</li>
                    </ul></td>
                </tr>
                </tbody></table>
                
                
                </div>
            </div>

            <p>
                Además, el Departamento ofrece:
            </p>
            <p> 
                1. Magíster en Ciencias de la Ingeniería Electrónica, con mención en Telemática.
                2. Convenios de intercambio internacionales y un convenio especial de doble titulación con ENST Brest, Bretagne y Francia.
            </p>


            </Container>
        </div>
    )
}

export default Ingenieria_Civil_Telematica_info
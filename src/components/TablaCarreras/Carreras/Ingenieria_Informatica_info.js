import React from 'react'
import { Container } from 'react-bootstrap';
// Accordion, Badge,
import "./estilos_carreras_info.css";

function Ingenieria_Informatica_info() {
    return (
        <div className="general">
           <Container> 
            <p className="LetraTituloCarrera">Ingeniería en Informática</p>
            <div>
                              
                <table class="infoC">
                    <thead>
                    <tr>
                        <td class="infoCarrera parrafo">
                            <th >
                            <p className="LetraSubTituloCarrera">Formación</p>
                            <p>
                            El Ingeniero en Informática con licenciatura de base tecnológica de la USM, es un profesional universitario
                            cuyas competencias lo facultan para aplicar un cuerpo distintivo de conocimientos científicos, computacionales,
                            matemáticos y de ingeniería a diversos problemas organizacionales, sociales, industriales. Este ingeniero está
                            facultado para el desarrollo de productos y servicios tecnológicos sobre plataformas heterogéneas. Adicionalmente 
                            posee conocimientos para aplicar soluciones de análisis de datos avanzado sobre distintos dominios del quehacer 
                            de organizaciones públicas o privadas del ámbito nacional e internacional, demostrando capacidad para integrar 
                            equipos multidisciplinarios y multiculturales, tomando en consideración las restricciones impuestas por la 
                            legislación, la ética, las finanzas y las personas.


                            </p>
                            </th>
                        </td>
                        <td class="infoCarrera lista">
                            <th>
                            <div class="list-group">
                                <li class="list-group-item"><strong>Título Profesional: </strong> Ingeniero Informático.</li>
                                <li class="list-group-item"><strong>Grado Académico: </strong> Licenciado en Ingeniería Informática.</li>
                                <li class="list-group-item"><strong>Duración de los estudios: </strong> 4 años (8 semestres académicos)</li>
                                <li class="list-group-item"><strong>Régimen: </strong> Diurno</li>
                                <li class="list-group-item"><strong>Lugar: </strong> Sede Viña del Mar y Sede Concepción</li>
                                <a href="https://www.inf.utfsm.cl/"  class="list-group-item list-group-item-action link"  target="_blank" rel="noreferrer">Conoce el sitio del Departamento de Informática <i class="fas fa-external-link-alt"></i></a>
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
                </tr>
                <tr>
                    <td><strong>1º Semestre</strong></td>
                    <td><ul>
                    <li>Fundamentos de la Matemática</li>
                    <li>Introducción a la Ingeniería</li>
                    <li>Programación</li>
                    <li>Educación Física I</li>
                    <li>Humanidades I: Competencias Claves para el Desarrollo Personal</li>
                    <li>Inglés I</li>
                    </ul></td>
                    <td><strong>2º Semestre</strong></td>
                    <td><ul>
                    <li>Introducción al Cálculo</li>
                    <li>Química y Sociedad</li>
                    <li>Ciencias de la Ingeniería I: Estructura de Datos</li>
                    <li>Educación Física II</li>
                    <li>Humanidades II: Competencias para el Desarrollo Profesional</li>
                    <li>Inglés II </li>
                    </ul></td>
                </tr>
                <tr>
                    <td><strong>3º Semestre</strong></td>
                    <td>
                    <ul>
                    <li>Matemática de Ingeniería</li>
                    <li>Introducción a la Física</li>
                    <li>Ciencias de la Ingeniería II: Lenguaje de Programación</li>
                    <li>Arquitectura y Organización de Computadores</li>
                    <li>Bases de Datos</li>
                    <li>Inglés III</li>
                    </ul>
                    </td>
                    <td><strong>4º Semestre</strong></td>
                    <td>
                    <ul>
                    <li>Administración de Empresas</li>
                    <li>Física Mecánica</li>
                    <li>Ciencias de la Ingeniería III: Análisis y Diseño de Software</li>
                    <li>Sistemas Operativos</li>
                    <li>Taller Lenguaje de Programación</li>
                    <li>Estadística</li>
                    </ul>
                </td>
                </tr>
                <tr>
                    <td><strong>5º Semestre</strong></td>
                    <td>
                    <ul>
                    <li>Introducción a las Finanzas</li>
                    <li>Gestión de la Innovación</li>
                    <li>Sistemas Integrados de Gestión</li>
                    <li>Redes de Computadores</li>
                    <li>Ingeniería de Software</li>
                    <li>Ciencias de Datos</li>
                    </ul>
                    </td>
                    <td><strong>6º Semestre</strong></td>
                    <td>
                    <ul>
                    <li>Responsabilidad Social empresarial y Ética Laboral</li>
                    <li>Gestión del Emprendimiento</li>
                    <li>Gestión de Proyectos</li>
                    <li>Taller de Administración de Sistemas</li>
                    <li>Inteligencia de Negocios*</li>
                    <li>Visualización*</li>
                    </ul>
                </td>
                </tr>
                <tr>
                    <td><strong>7º Semestre</strong></td>
                    <td>
                    <ul>
                    <li>Electivo I</li>
                    <li>Electivo II</li>
                    <li>Electivo III</li>
                    <li>Proyecto de Software I</li>
                    <li>Seminario de Titulo</li>
                    </ul>
                    </td>
                    <td><strong>8º Semestre</strong></td>
                    <td>
                    <ul>
                    <li>Electivo IV</li>
                    <li>Electivo V</li>
                    <li>Electivo VI</li>
                    <li>Proyecto de Software II</li>
                    <li>Proyecto de Titulo</li>
                    </ul>
                    </td>
                </tr>
                </tbody></table>
                
                
                </div>
            </div>


            </Container>
        </div>
    )
}

export default Ingenieria_Informatica_info
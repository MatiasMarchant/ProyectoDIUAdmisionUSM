import React from 'react'
import { Container } from 'react-bootstrap';
// Accordion, Badge,
import "./estilos_carreras_info.css";

function Ingenieria_Civil_Industrial_info() {
    return (
        <div className="general">
           <Container> 
            <p className="LetraTituloCarrera">Ingeniería Civil Industrial</p>
            <div>
                              
                <table class="infoC">
                    <thead>
                    <tr>
                        <td class="infoCarrera parrafo">
                            <th >
                            <p className="LetraSubTituloCarrera">Formación</p>
                            <p>
                                El Ingeniero Civil Industrial egresado de la Universidad Técnica Federico Santa María, 
                                es un profesional de excelencia con una formación científica integral, formado con altos 
                                estándares de calidad académica, que lo preparan para desempeñarse con éxito en los escenarios 
                                cambiantes, complejos e inciertos que caracterizan la actividad productiva, económica y social 
                                del mundo moderno. Sus altas capacidades técnicas, analíticas y de gestión, unidas al compromiso 
                                permanente con la calidad, con valores humanos universales, con el bien social y con el cuidado del 
                                medio ambiente, le posicionan como un profesional íntegro e idóneo, que se destaca por su eficacia 
                                profesional en los contextos nacionales e internacionales en los que participa.
                            </p>
                            </th>
                        </td>
                        <td class="infoCarrera lista">
                            <th>
                            <div class="list-group">
                                <li class="list-group-item"><strong>Título Profesional: </strong> Ingeniero Civil Industrial</li>
                                <li class="list-group-item"><strong>Grado Académico: </strong> Bachiller en Ciencias de la Ingeniería y Licenciado en Ciencias de la Ingeniería Industrial</li>
                                <li class="list-group-item"><strong>Duración de los estudios: </strong> 5 1/2 años (11 semestres académicos)</li>
                                <li class="list-group-item"><strong>Régimen: </strong> Diurno</li>
                                <li class="list-group-item"><strong>Lugar: </strong> Campus Casa Central Valparaíso y Campus  Vitacura</li>
                                <a href="http://www.industrias.usm.cl/" class="list-group-item list-group-item-action link"  target="_blank" rel="noreferrer">Conoce el sitio del Departamento de Industrias <i class="fas fa-external-link-alt"></i></a>
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
                        <li>Introducción a la Física</li>
                        <li>Programación</li>
                        <li>Matemática I</li>
                        <li>Educación Física I</li>
                        <li>Introducción a la Ingeniería</li>
                    </ul></td>
                    <td><strong>2º Semestre</strong></td>
                    <td><ul>
                        <li>Física General I</li>
                        <li>Humanístico I</li>
                        <li>Matemática II</li>
                        <li>Educación Física II</li>
                        <li>Química y Sociedad</li>
                    </ul></td>
                    </tr>
                    <tr>
                    <td><strong>3º Semestre</strong></td>
                    <td><ul>
                        <li>Física General II</li>
                        <li>Taller de Ingeniería Industrial I</li>
                        <li>Matemática III</li>
                        <li>Química de Procesos</li>
                        <li>Elementos de Mecánica y Resistencia de  Materiales</li>
                    </ul></td>
                    <td><strong>4º Semestre</strong></td>
                    <td><ul>
                        <li>Física General III</li>
                        <li>Humanístico II</li>
                        <li>Matemática IV</li>
                        <li>Taller de Ingeniería Industrial II</li>
                        <li>Electrotecnia Básica</li>
                        <li>Inglés I</li>
                    </ul></td>
                    </tr>
                    <tr>
                    <td><strong>5º Semestre</strong></td>
                    <td><ul>
                        <li>Administración de Empresas</li>
                        <li>Taller de Ingeniería Industrial III</li>
                        <li>Laboratorio de Procesos Industriales</li>
                        <li>Termodinámica</li>
                        <li>Microeconomía</li>
                        <li>Deportes</li>
                    </ul></td>
                    <td><strong>6º Semestre</strong></td>
                    <td><ul>
                        <li>Información y Control Financiero</li>
                        <li>Legislación Empresarial</li>
                        <li>Gestión Energética I</li>
                        <li>Macroeconomía</li>
                        <li>Gráfica en Ingeniería</li>
                        <li>Inglés II</li>
                    </ul></td>
                    </tr>
                    <tr>
                    <td><strong>7º Semestre</strong></td>
                    <td><ul>
                        <li>Física General IV</li>
                        <li>Probabilidad y Estadística Industrial</li>
                        <li>Gestión Energética II</li>
                        <li>Recursos Humanos</li>
                        <li>Ingeniería Económica</li>
                    </ul></td>
                    <td><strong>8º Semestre</strong></td>
                    <td><ul>
                        <li>Econometría</li>
                        <li>Organización Industrial</li>
                        <li>Gestión de Investigación de Operaciones</li>
                        <li>Sistemas Información para la Gestión</li>
                        <li>Ingeniería de Plantas Industriales</li>
                    </ul></td>
                    </tr>
                    <tr>
                    <td><strong>9º Semestre</strong></td>
                    <td><ul>
                        <li>Finanzas</li>
                        <li>Marketing</li>
                        <li>Gestión de Calidad Total</li>
                        <li>Asignatura de Especialización I</li>
                        <li>Gestión de Operaciones</li>
                        <li>Humanístico III</li>
                    </ul></td>
                    <td><strong>10º Semestre</strong></td>
                    <td><ul>
                        <li>Evaluación de Proyectos Generales</li>
                        <li>Asignatura de Especialización II</li>
                        <li>Gestión Estratégica</li>
                        <li>Humanístico IV</li>
                        <li>Gestión de Operaciones II</li>
                        <li>Taller de Título I</li>
                    </ul></td>
                    </tr>
                    <tr>
                    <td><strong>11º Semestre</strong></td>
                    <td><ul>
                        <li>Desarrollo y Control de Proyectos</li>
                        <li>Taller de Título II</li>
                        <li>Asignatura de Especialización III</li>
                        <li>Asignatura de Especialización IV</li>
                    </ul></td>
                    </tr>
                </tbody></table>
                
                
                </div>
            </div>

            <p>
                Además, el Departamento ofrece:
            </p>
            <p>      
                1. Magíster en Ciencias de la Ingeniería Industrial (MII), cursando 1 1/2 año más de este plan de 
                estudio se obtiene el grado (según avance curricular).
                2. Magíster en Gestión de Activos y Mantenimiento (MGA).
                3. Magíster en Innovación Tecnológica y Emprendimiento (MITE).
            </p>
            <p>  
                Postgrado y Educación Continua <a href="www.industrias.usm.cl/postgrado-y-educacion-continua/">www.industrias.usm.cl/postgrado-y-educacion-continua/</a>
            </p>



            </Container>
        </div>
    )
}

export default Ingenieria_Civil_Industrial_info
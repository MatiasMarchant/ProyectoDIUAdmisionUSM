import React from 'react'
import { Container } from 'react-bootstrap';
// Accordion, Badge,
import "./estilos_carreras_info.css";

function Ingenieria_Civil_Plan_Comun_info() {
    return (
        <div className="general">
           <Container> 
            <p className="LetraTituloCarrera">Ingeniería Civil Plan Común</p>
            <div>
                              
                <table class="infoC">
                    <thead>
                    <tr>
                        <td class="infoCarrera parrafo">
                            <th >
                            <p className="LetraSubTituloCarrera">Formación</p>
                            <p>
                                <h6>PROGRAMA</h6>
                                La Universidad Técnica Federico Santa María ofrece a los estudiantes que aún no han decidido 
                                un área de ingeniería para estudiar, la posibilidad de ingresar a Ingeniería Civil Plan Común. 
                                Este Programa permite familiarizarse con las distintas especialidades impartidas por la USM.
                            </p>
                            <p>
                                <h6>POSTULACIÓN</h6>
                                El proceso de postulación se inicia cuando los estudiantes aprueban las asignaturas del primer 
                                año del Programa. Continúa con la selección de una especialidad, de acuerdo a la oferta del campus 
                                donde esté matriculado (Campus Casa Central Valparaíso o Campus San Joaquín). Finalmente, la asignación 
                                de la especialidad se establece de acuerdo al rendimiento académico relativo al resto de los estudiantes 
                                de su generación.

                                Principal requisito de postuación a la especialidad: Aprobar el 100% de los créditos de las asignaturas 
                                correspondientes a los dos primeros semestres del Plan de estudios.
                            </p>
                            <p>
                                <h6>SELECCIÓN</h6>
                                Para el proceso de selección se emplea como parámetro único el rendimiento académico de los estudiantes 
                                en las asignaturas del primer año del Plan de estudios, el cual define la posición que el alumno tendrá 
                                en el ranking que permite el acceso a la especialidad. Este proceso es competitivo y considera exclusivamente 
                                los resultados académicos obtenidos en los dos primeros semestres del Programa de Ingeniería Civil Plan Común. 
                                A través de simula- ciones periódicas, cada estudiante puede analizar cuáles son sus posibilidades de acceder 
                                a la especialidad de su preferencia, de acuerdo a las calificaciones obtenidas en las asignaturas de primer año.

                                A través de simulaciones periódicas, cada estudiante puede analizar cuáles son sus posibilidades de acceder 
                                a la especialidad de su preferencia, de acuerdo a las calificaciones obtenidas en las asignaturas de primer año.
                            </p>
                            <p>
                                <h6>VACANTES</h6>
                                La cantidad total de vacantes disponibles para las especialidades es igual al número de alumnos matriculados 
                                que ingresa al Programa, asegurando a cada estudiante una vacante en alguna de las especialidades de la USM 
                                según campus de procedencia. La cantidad de vacantes para cada una de las especialidades se publican en la página 
                                web de admisión.
                            </p>
                            </th>
                        </td>
                        <td class="infoCarrera lista">
                            <th>
                            <div class="list-group">
                                <li class="list-group-item"><strong>Grado: </strong> Bachiller en Ciencias de la Ingeniería</li>
                                <li class="list-group-item"><strong>Duración de los estudios: </strong> 2 años (4 semestres académicos)</li>
                                <li class="list-group-item"><strong>Régimen: </strong> Diurno</li>
                                <li class="list-group-item"><strong>Lugar: </strong> Campus Casa Central Valparaíso y Campus  San Joaquín</li>
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
                        <td width="68"><strong>1º Semestre</strong></td>
                        <td width="329"><ul>
                        <li>Introducción a la Ingeniería</li>
                        <li>Programación</li>
                        <li>Introducción a la Física</li>
                        <li>Matemática I</li>
                        <li>Educación Física I</li>
                        </ul></td>
                        <td width="56"><strong>2º Semestre</strong></td>
                        <td width="631"><ul>
                        <li>Física General I </li>
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
                        <li>Matemática III</li>
                        <li>Humanístico II</li>
                        <li>Electivo Especialidad I</li>
                        <li>Electivo Especialidad II</li>
                        <li>Deportes</li>
                        <li>Electivo Idioma I</li>
                        </ul></td>
                        <td><strong>4º Semestre</strong></td>
                        <td><ul>
                        <li>Física General III</li>
                        <li>Electivo Especialidad III</li>
                        <li>Electivo Especialidad IV</li>
                        <li>Matemática IV </li>
                        <li>Electivo Idioma II</li>
                        <li>Humanístico III</li>
                        </ul></td>
                    </tr>
                </tbody></table>
                
                
                </div>
            </div>

            <p>
            Los estudiantes que ingresan a Plan Común durante el Proceso de Admisión 2021 podrán postular a las carreras que ofrece la 
            USM en sus respectivos Campus y Sedes. Las condiciones y los cupos serán informados oportunamente por la Dirección General de Docencia.
            
            </p>
            <p> 
                La postulación a otros programas impartidos por la Universidad, deberá realizarse a través de solicitud interna de cambio de carrera, 
                el que está sujeto a las exigencias y requisitos de cada Departamento.
            </p>    
   


            </Container>
        </div>
    )
}

export default Ingenieria_Civil_Plan_Comun_info
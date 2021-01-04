import React from 'react'
import { Container } from 'react-bootstrap';
// Accordion, Badge,
import "./estilos_carreras_info.css";

function Licenciatura_Astrofisica_info() {
    return (
        <div className="general">
           <Container> 
            <p className="LetraTituloCarrera">Licenciatura en Astrofísica</p>
            <div>
                              
                <table class="infoC">
                    <thead>
                    <tr>
                        <td class="infoCarrera parrafo">
                            <th >
                            <p className="LetraSubTituloCarrera">Formación</p>
                            <p>
                            El egresado de la Licenciatura en Astrofísica poseerá una sólida formación en física contemporánea,
                            matemáticas y astronomía. Podrá analizar grandes cantidades de datos provenientes de observaciones 
                            astronómicas (manejo de Big Data) haciendo uso de las teorías actuales. Además, será capaz de identificar
                            el funcionamiento básico y los posibles usos de las tecnologías e instrumentación astronómica de vanguardia. 
                            El egresado de Licenciatura en Astrofísica contará con una formación integral, la cual le permitirá 
                            desenvolverse en ambientes interdisciplinarios, siendo capaz de integrar equipos de trabajo en sus áreas
                            de desarrollo, pudiendo formar parte de instituciones de investigación nacionales e internacionales.
                            Además, el egresado podrá continuar estudios de postgrado en Astrofísica o Astronomía a nivel de Magister
                            o Doctorado en Chile o el extranjero. Finalmente, el Licenciado en Astrofísica poseerá las competencias
                            sello de la Universidad Técnica Federico Santa María, tales como: responsabilidad social y ética, resolución
                            de problemas, compromiso con la calidad, comunicación efectiva y vida saludable.


                            </p>
                            </th>
                        </td>
                        <td class="infoCarrera lista">
                            <th>
                            <div class="list-group">
                                <li class="list-group-item"><strong>Título Profesional: </strong> Licenciatura en Astrofísica.</li>
                                <li class="list-group-item"><strong>Grado Académico: </strong> Licenciado en Astrofísica.</li>
                                <li class="list-group-item"><strong>Duración de los estudios: </strong> 4 años (8 semestres académicos).</li>
                                <li class="list-group-item"><strong>Régimen: </strong> Diurno</li>
                                <li class="list-group-item"><strong>Lugar: </strong> Campus Casa Central Valparaíso / Campus  San Joaquín</li>
                                <a href="https://fisica.usm.cl/" class="list-group-item list-group-item-action link"  target="_blank" rel="noreferrer">Conoce el sitio del Departamento de Física <i class="fas fa-external-link-alt"></i></a>
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
                    <li>Física General I</li>
                    <li>Matemática I</li>
                    <li>Química y Sociedad</li>
                    <li>Introducción a la Astrofísica</li>
                    <li>Educación Física I</li>
                    </ul></td>
                    <td><strong>2º Semestre</strong></td>
                    <td><ul>
                    <li>Física General III</li>
                    <li>Matemática II</li>
                    <li>Programación</li>
                    <li>Instrumentación Científica</li>
                    <li>Educación Física II</li>
                    <li>Visión Trascendente del Quehacer Humano</li>
                    </ul></td>
                </tr>
                <tr>
                    <td><strong>3º Semestre</strong></td>
                    <td><ul>
                    <li>Física General II</li>
                    <li>Matemática III</li>
                    <li>Física Experimental</li>
                    <li>Visión Inmanente del Queahcer Humano</li>
                    <li>Deportes I</li>
                    <li>Inglés I</li>
                    </ul></td>
                    <td><strong>4º Semestre</strong></td>
                    <td><ul>
                    <li>Física General IV</li>
                    <li>Matemática IV</li>
                    <li>Probabilidad y Estadística</li>
                    <li>Mecánica Intermedia I</li>
                    <li>Inglés II</li>
                    </ul></td>
                </tr>
                <tr>
                    <td><strong>5º Semestre</strong></td>
                    <td><ul>
                    <li>Campos Electromagnéticos I</li>
                    <li>Termodinámica y Mecánica Estadística</li>
                    <li>Métodos de la Física Matemática</li>
                    <li>Medio Circumestelar y Sistemas Planetarios</li>
                    <li>Inglés III</li>
                    </ul></td>
                    <td><strong>6º Semestre</strong></td>
                    <td><ul>
                    <li>Campos Electromagnéticos II</li>
                    <li>Estructura Atómica y Nuclear I</li>
                    <li>Análisis Numérico</li>
                    <li>Estructura y Evolución Estelar</li>
                    <li>Inglés IV</li>
                    </ul></td>
                </tr>
                <tr>
                    <td><strong>7º Semestre</strong></td>
                    <td><ul>
                    <li>Astropartículas</li>
                    <li>Astronomía Computacional I</li>
                    <li>Astrofísica Extragaláctica</li>
                    <li>Optativo Avanzado I</li>
                    <li>El método científico</li>
                    </ul></td>
                    <td><strong>8º Semestre</strong></td>
                    <td><ul>
                    <li>Cosmología</li>
                    <li>Astronomía Computacional II</li>
                    <li>Seminario de Grado</li>
                    <li>Optativo Avanzado II</li>
                    <li>Optativo Avanzado III</li>
                    </ul></td>
                </tr>
                </tbody></table>
                
                
                </div>
            </div>

    

            </Container>
        </div>
    )
}

export default Licenciatura_Astrofisica_info
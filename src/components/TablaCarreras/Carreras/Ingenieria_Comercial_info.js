import React from 'react'
import { Container } from 'react-bootstrap';
// Accordion, Badge,
import "./estilos_carreras_info.css";

function Ingenieria_Comercial_info() {
    return (
        <div className="general">
           <Container> 
            <p className="LetraTituloCarrera">Ingeniería Comercial</p>
            <div>
                              
                <table class="infoC">
                    <thead>
                    <tr>
                        <td class="infoCarrera parrafo">
                            <th >
                            <p className="LetraSubTituloCarrera">Formación</p>
                            <p>
                            El Ingeniero Comercial de la USM tiene como misión liderar en organizaciones públicas o 
                            privadas, dirigiendo, planificando y gestionando sus recursos humanos; y administrando sus 
                            recursos materiales, financieros, comerciales y de operaciones. Todo bajo los enfoques de 
                            la mejora continua, el desarrollo sustentable y la responsabilidad social en la actual 
                            sociedad del conocimiento. Dentro de sus competencias está analizar y evaluar proyectos 
                            de inversión y desarrollo en un entorno económico globalizado. Además de articular aspectos 
                            de sustentabilidad, procesos de innovación, herramientas de gestión estratégica e iniciativas 
                            de emprendimiento en empresas u organizaciones.
                            </p>
                            </th>
                        </td>
                        <td class="infoCarrera lista">
                            <th>
                            <div class="list-group">
                                <li class="list-group-item"><strong>Título Profesional: </strong> Ingeniero Comercial.</li>
                                <li class="list-group-item"><strong>Grado Académico: </strong> Licenciado en Ciencias de la Administración.</li>
                                <li class="list-group-item"><strong>Duración de los estudios: </strong> 5 años (10 semestres académicos)</li>
                                <li class="list-group-item"><strong>Régimen: </strong> Diurno</li>
                                <li class="list-group-item"><strong>Lugar: </strong> Campus  Vitacura y Campus Casa Central Valparaíso</li>
                                <a href="https://comercial.usm.cl/" class="list-group-item list-group-item-action link"  target="_blank" rel="noreferrer">Conoce el sitio de Ingeniería Comercial <i class="fas fa-external-link-alt"></i></a>
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
                    </tr><tr>
                    <td><strong>1º Semestre</strong></td>
                    <td><ul>
                        <li>Taller de Creatividad y Comunicación Efectiva</li>
                        <li>Educación Física I</li>
                        <li>Programación y Tratamiento de Datos para la Gestión</li>
                        <li>Introducción a la Economía</li>
                        <li>Álgebra y Geometría</li>
                        <li>Administración de Empresas</li>
                    </ul></td>
                    <td><strong>2º Semestre</strong></td>
                    <td><ul>
                        <li>Taller de Emprendimiento y Gestión</li>
                        <li>Educación Física II</li>
                        <li>Introducción a la Ingeniería Sostenible</li>
                        <li>Pre-Cálculo</li>
                        <li>Álgebra Lineal</li>
                        <li>Legislación Empresarial</li>
                    </ul></td>
                    </tr>
                    <tr>
                    <td><strong>3º Semestre</strong></td>
                    <td><ul>
                        <li>Teoría Financiera</li>
                        <li>Contabilidad Financiera</li>
                        <li>Base de Datos para la Gestión</li>
                        <li>Cálculo Diferencial</li>
                        <li>Inglés I</li>
                        <li>Historia Económica</li>
                    </ul></td>
                    <td><strong>4º Semestre</strong></td>
                    <td><ul>
                        <li>Deportes</li>
                        <li>Contabilidad de Gestión</li>
                        <li>Microeconomía I</li>
                        <li>Cálculo Integral</li>
                        <li>Inglés II</li>
                        <li>Ciencias Sociales</li>
                        </ul></td>
                    </tr>
                    <tr>
                    <td><strong>5º Semestre</strong></td>
                    <td><ul>
                        <li>Taller de Evaluación Privada de Proyectos</li>
                        <li>Marketing Estratégico</li>
                        <li>Dirección Tributaria</li>
                        <li>Macroeconomía</li>
                        <li>Métodos Cuantitativos para los Negocios</li>
                        <li>Inglés III</li>
                    </ul></td>
                    <td><strong>6º Semestre</strong></td>
                    <td><ul>
                        <li>Taller de Evaluación Social de Proyectos</li>
                        <li>Gestión Estratégica I</li>
                        <li>Dirección Financiera</li>
                        <li>Microeconomía II</li>
                        <li>Econometría</li>
                        <li>Inglés IV</li>
                    </ul></td>
                    </tr>
                    <tr>
                    <td><strong>7º Semestre</strong></td>
                    <td><ul>
                        <li>Marketing Táctico</li>
                        <li>Finanzas Corporativas</li>
                        <li>Organización Industrial</li>
                        <li>Investigación de Operaciones</li>
                        <li>Inglés V</li>
                        <li>Dirección de Personas</li>
                    </ul></td>
                    <td><strong>8º Semestre</strong></td>
                    <td><ul>
                        <li>Creación de Empresas</li>
                        <li>Gestión Estratégica II</li>
                        <li>Sistemas de Información para la Gestión</li>
                        <li>Gestión de Operaciones</li>
                        <li>Inglés VI</li>
                        <li>Política e Instituciones</li>
                    </ul></td>
                    </tr>
                    <tr>
                    <td><strong>9º Semestre</strong></td>
                    <td><ul>
                        <li>Taller de Emprendimiento e Innovación</li>
                        <li>Electivo I</li>
                        <li>Electivo II</li>
                        <li>Entorno Legal de Empresa</li>
                        <li>Dirección y Liderazgo Organizacional</li>
                    </ul></td>
                    <td><strong>10º Semestre</strong></td>
                    <td><ul>
                        <li>Seminario de Título</li>
                        <li>Electivo III</li>
                    </ul></td>
                    </tr>
                </tbody></table>
                
                
                </div>
            </div>

            <p>
                Además, el Departamento ofrece:
            </p>
            <p> 
                1. MBA Magíster en Gestión Empresarial.
                www.mba.usm.cl

                Campus Vitacura y Sede Concepción, jornada ejecutiva.

                Acreditado por 5 años hasta 2022.

                Agencia Acredita AMBA
            </p>

            </Container>
        </div>
    )
}

export default Ingenieria_Comercial_info
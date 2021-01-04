import React from 'react'
import { Container } from 'react-bootstrap';
// Accordion, Badge,
import "./estilos_carreras_info.css";

function Ingenieria_Aviacion_Comercial_info() {
    return (
        <div className="general">
           <Container> 
            <p className="LetraTituloCarrera">Ingeniería en Aviación Comercial</p>
            <div>
                              
                <table class="infoC">
                    <thead>
                    <tr>
                        <td class="infoCarrera parrafo">
                            <th >
                            <p className="LetraSubTituloCarrera">Formación</p>
                            <p>
                            El Ingeniero en Aviación Comercial es un profesional especializado en el campo del transporte aéreo 
                            y la aviación civil, que ejerce su trabajo resguardando los procedimientos de calidad y seguridad 
                            aeroespacial. Posee una sólida formación en ciencias básicas y de Ingeniería que complementa con amplios 
                            conocimientos de administración, gestión, legislación, economía y finanzas. Una formación integral que 
                            le permite desempeñarse en el área administrativa de las empresas y organizaciones relacionadas al ámbito 
                            de la aviación, tanto a nivel nacional como internacional.
                            </p>
                            </th>
                        </td>
                        <td class="infoCarrera lista">
                            <th>
                            <div class="list-group">
                                <li class="list-group-item"><strong>Título Profesional: </strong> Ingeniero en Aviación Comercial.</li>
                                <li class="list-group-item"><strong>Grado Académico: </strong> Licenciado en Ingeniería en Aviación Comercial.</li>
                                <li class="list-group-item"><strong>Duración de los estudios: </strong> 5 años (10 semestres académicos)</li>
                                <li class="list-group-item"><strong>Régimen: </strong> Diurno</li>
                                <li class="list-group-item"><strong>Lugar: </strong> Campus  Vitacura</li>
                                <a href="http://www.aca.cl/" class="list-group-item list-group-item-action link"  target="_blank" rel="noreferrer">Conoce el sitio de Ciencias Aeronáuticas <i class="fas fa-external-link-alt"></i></a>
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
                        <li>Introducción a la Industria Aeronáutica</li>
                        <li>Programación</li>
                        <li>Introducción a la Física</li>
                        <li>Educación Física I</li>
                        <li>Matemática I</li>
                        <li>Inglés Básico I</li>
                    </ul></td>
                    <td><strong>2º Semestre</strong></td>
                    <td><ul>
                        <li>Física Básica I</li>
                        <li>Inglés Medio I</li>
                        <li>Matemática II</li>
                        <li>Educación Física II</li>
                        <li>Química y Sociedad</li>
                    </ul></td>
                    </tr>
                    <tr>
                    <td><strong>3º Semestre</strong></td>
                    <td><ul>
                        <li>Física Básica II</li>
                        <li>Inglés Medio II</li>
                        <li>Matemática III</li>
                        <li>Humanista I</li>
                        <li>Introducción a la ELO Aplicada</li>
                        <li>Deporte</li>
                        <li>Introducción a la Termodinámica</li>
                    </ul></td>
                    <td><strong>4º Semestre</strong></td>
                    <td><ul>
                        <li>Física Básica III</li>
                        <li>Aeronaves, Estructuras y Sistemas</li>
                        <li>Matemática IV</li>
                        <li>Humanista II</li>
                        <li>Administración de Empresas</li>
                        <li>Inglés Avanzado I</li>
                    </ul></td>
                    </tr>
                    <tr>
                    <td><strong>5º Semestre</strong></td>
                    <td><ul>
                        <li>Información y Control Financiero</li>
                        <li>Probabilidades y Estadísticas</li>
                        <li>Introducción a la Mecánica de fluidos y Calor</li>
                        <li>Inglés Avanzado II</li>
                        <li>Microeconomía</li>
                        <li>Humanista III</li>
                    </ul></td>
                    <td><strong>6º Semestre</strong></td>
                    <td><ul>
                        <li>Aerodinámica y Mecánica de Vuelo</li>
                        <li>Meteorología</li>
                        <li>Ingeniería Económica</li>
                        <li>Recursos Humanos</li>
                        <li>Investigación de Operaciones</li>
                        <li>Inglés Conversación</li>
                    </ul></td>
                    </tr>
                    <tr>
                    <td><strong>7º Semestre</strong></td>
                    <td><ul>
                        <li>Gestión y Operación de Aeropuertos</li>
                        <li>Propulsión</li>
                        <li>Macroeconomía</li>
                        <li>Legislación Aeronáutica</li>
                        <li>Marketing</li>
                        <li>Legislación Empresarial</li>
                    </ul></td>
                    <td><strong>8º Semestre</strong></td>
                    <td><ul>
                        <li>Comercio Internacional Aeronáutico</li>
                        <li>Gestión Operacional de Emp. Aeron.</li>
                        <li>Evaluación de Proyectos</li>
                        <li>Planificación y Diseño de Aeropuertos</li>
                        <li>Finanzas</li>
                    </ul></td>
                    </tr>
                    <tr>
                    <td><strong>9º Semestre</strong></td>
                    <td><ul>
                        <li>Gestión de Espacio Aéreo</li>
                        <li>Electivo ACA I</li>
                        <li>Gestión de Calidad de Servicios</li>
                        <li>Electivo Libre II</li>
                        <li>Electivo Libre I</li>
                        <li>Taller de Título</li>
                    </ul></td>
                    <td><strong>10º Semestre</strong></td>
                    <td><ul>
                        <li>Seguridad Operacional I</li>
                        <li>Memoria</li>
                        <li>Electivo ACA II</li>
                        <li>Gestión Estratégica</li>
                        <li>Gestión de Mantención de Flota</li>
                    </ul></td>
                    </tr>
                </tbody></table>
                
                
                </div>
            </div>


            </Container>
        </div>
    )
}

export default Ingenieria_Aviacion_Comercial_info
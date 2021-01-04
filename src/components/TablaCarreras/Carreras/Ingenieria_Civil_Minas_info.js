import React from 'react'
import { Container } from 'react-bootstrap';
// Accordion, Badge,
import "./estilos_carreras_info.css";

function Ingenieria_Civil_Minas_info() {
    return (
        <div className="general">
           <Container> 
            <p className="LetraTituloCarrera">Ingeniería Civil de Minas</p>
            <div>
                              
                <table class="infoC">
                    <thead>
                    <tr>
                        <td class="infoCarrera parrafo">
                            <th >
                            <p className="LetraSubTituloCarrera">Formación</p>
                            <p>
                                Los Ingenieros Civiles de Minas son especialistas en la interacción con la corteza terrestre para
                                la extracción de recursos minerales no renovables. En su labor deben resolver los problemas técnicos 
                                y de gestión sustentable que conlleva el negocio minero.

                                Pueden desarrollar su carrera en diversas áreas: en el desarrollo de proyectos (exploración, estudios 
                                preliminares, factibilidad, desarrollo y cierre de yacimientos); en la operación de una faena minera 
                                (extracción, procesamiento y comercialización); en el suministro de tecnologías, productos y servicios
                                especializados desde empresas proveedoras; como emprendedores en el mercado minero o en áreas académicas 
                                y de investigación para la innovación.
                            </p>
                            </th>
                        </td>
                        <td class="infoCarrera lista">
                            <th>
                            <div class="list-group">
                                <li class="list-group-item"><strong>Título Profesional: </strong> Ingeniero Civil de Minas</li>
                                <li class="list-group-item"><strong>Grado Académico: </strong> Licenciado en Ciencias de la Ingeniería de Minas</li>
                                <li class="list-group-item"><strong>Duración de los estudios: </strong> 5 1/2 años (11 semestres académicos)</li>
                                <li class="list-group-item"><strong>Régimen: </strong> Diurno</li>
                                <li class="list-group-item"><strong>Lugar: </strong> Campus  San Joaquín</li>
                                <a href="http://metalurgia.usm.cl/" class="list-group-item list-group-item-action link" target="_blank" rel="noreferrer">Conoce el sitio del Departamento de Ingeniería Metalúrgica y de Materiales <i class="fas fa-external-link-alt"></i></a>
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
						<li>Introducción a la Ingeniería de Minas</li>
						<li>Química y Sociedad</li>
						<li>Introducción a la Física</li>
						<li>Educación Física I</li>
						<li>Matemática I</li>
						</ul></td>
						<td><strong>2º Semestre</strong></td>
						<td><ul>
						<li>Física General I</li>
						<li>Trabajo en Equipo</li>
						<li>Matemática II</li>
						<li>Educación Física II</li>
						<li>Programación</li>
						</ul></td>
					</tr>
					<tr>
						<td><strong>3º Semestre</strong></td>
						<td><ul>
						<li>Física General II</li>
						<li>Industria Minera</li>
						<li>Matemática III</li>
						<li>Química Básica</li>
						<li>Ciencia Ambiental</li>
						<li>Deportes</li>
						</ul></td>
						<td><strong>4º Semestre</strong></td>
						<td><ul>
						<li>Física General III</li>
						<li>Materiales para la Industria Minera</li>
						<li>Matemática IV</li>
						<li>Gráfica en Ingeniería</li>
						<li>Geología</li>
						</ul></td>
					</tr>
					<tr>
						<td><strong>5º Semestre</strong></td>
						<td><ul>
						<li>Física General IV</li>
						<li>Geología Estructural</li>
						<li>Geomática</li>
						<li>Inglés para la Ingeniería I</li>
						<li>Procesamiento de Minerales I</li>
						<li>Resistencia de Materiales</li>
						</ul></td>
						<td><strong>6º Semestre</strong></td>
						<td><ul>
						<li>Geoestadística y Análisis Espacial</li>
						<li>Procesamientos de Minerales II</li>
						<li>Perforación y Tronadura</li>
						<li>Fluidodinámica en Minería</li>
						<li>Mecánica de Rocas</li>
						</ul></td>
					</tr>
					<tr>
						<td><strong>7º Semestre</strong></td>
						<td><ul>
						<li>Ingeniería de Rocas</li>
						<li>Economía 1-A</li>
						<li>Minería de Superficie</li>
						<li>Ingeniería de Medios Granulares</li>
						<li>Procesamiento de Minerales III</li>
						<li>Inglés para Ingeniería II</li>
						</ul></td>
						<td><strong>8º Semestre</strong></td>
						<td><ul>
						<li>Administración General</li>
						<li>Minería Subterránea</li>
						<li>Geología Económica</li>
						<li>Procesamientos de Minerales IV</li>
						<li>Electivo I</li>
						</ul></td>
					</tr>
					<tr>
						<td><strong>9º Semestre</strong></td>
						<td><ul>
						<li>Información y Control Financiero</li>
						<li>Automatización y Robótica</li>
						<li>Modelación y Simulación</li>
						<li>Electivo II</li>
						<li>Evaluación de Yacimientos y Planificación Minera</li>
						<li>Humanístico I</li>
						</ul></td>
						<td><strong>10º Semestre</strong></td>
						<td><ul>
						<li>Legislación Minera y Laboral</li>
						<li>Negocio Minero Sustentable</li>
						<li>Taller de Gestión de Proyectos</li>
						<li>Electivo III</li>
						<li>Seguridad Industrial &amp; Ventilación</li>
						<li>Humanístico II</li>
						</ul></td>
					</tr>
					<tr>
						<td><strong>11º Semestre</strong></td>
						<td><ul>
						<li>Proyecto Final de Ingeniería de Minas
						(Trabajo de Titulación)</li>
						</ul></td>
					</tr>
				</tbody></table>
                </div>
            </div>


            </Container>
        </div>
    )
}

export default Ingenieria_Civil_Minas_info
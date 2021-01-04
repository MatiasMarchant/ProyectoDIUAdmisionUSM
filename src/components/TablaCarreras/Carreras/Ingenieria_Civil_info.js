import React from 'react'
import { Container } from 'react-bootstrap';
// Accordion, Badge,
import "./estilos_carreras_info.css";

function Ingenieria_Civil_info() {
    return (
        <div className="general">
           <Container> 
            <p className="LetraTituloCarrera">Ingeniería Civil</p>
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
                                <li class="list-group-item"><strong>Título Profesional: </strong> Ingeniero Civil</li>
                                <li class="list-group-item"><strong>Grado Académico: </strong> Bachiller en Ciencias de la Ingeniería y Licenciado en Ciencias de la Ingeniería Civil</li>
                                <li class="list-group-item"><strong>Duración de los estudios: </strong> 6 años (12 semestres académicos)</li>
                                <li class="list-group-item"><strong>Régimen: </strong> Diurno</li>
                                <li class="list-group-item"><strong>Lugar: </strong> Campus Casa Central Valparaíso, Campus  San Joaquín</li>
                                <a href="http://obrasciviles.usm.cl/" class="list-group-item list-group-item-action link" target="_blank" rel="noreferrer">Conoce el sitio del Departamento de Obras Civiles <i class="fas fa-external-link-alt"></i></a>
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
							<li>Introducción a la Ingeniería</li>
							<li>Programación</li>
							<li>Introducción a la Física</li>
							<li>Educación Física I</li>
							<li>Matemática I</li>
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
							<li>Dibujo en Ingeniería Civil</li>
							<li>Matemática III</li>
							<li>Humanístico II *</li>
							<li>Estática de Estructuras</li>
							<li>Deporte</li>
						</ul></td>
						<td><strong>4º Semestre</strong></td>
						<td><ul>
							<li>Física General III</li>
							<li>Topografía</li>
							<li>Matemática IV</li>
							<li>Humanístico III *</li>
							<li>Mecánica de Materiales</li>
						</ul></td>
					</tr>
					<tr>
						<td><strong>5º Semestre</strong></td>
						<td><ul>
							<li>Análisis Numérico</li>
							<li>Mecánica Racional</li>
							<li>Geología</li>
							<li>Tecnología de Materiales</li>
							<li>Humanístico IV *</li>
						</ul></td>
						<td><strong>6º Semestre</strong></td>
						<td><ul>
							<li>Fundamentos de Ingeniería de Construcción y Administración</li>
							<li>Fundamentos de Análisis Estructural</li>
							<li>Mecánica de Fluidos</li>
							<li>Probabilidad y Estadística para la Ingeniería Civil</li>
							<li>Humanístico V</li>
						</ul></td>
					</tr>
					<tr>
						<td><strong>7º Semestre</strong></td>
						<td><ul>
							<li>Análisis Estructural</li>
							<li>Economía I-A</li>
							<li>Fundamentos de Investigación de Operaciones</li>
							<li>Hidráulica Teórica y Laboratorio</li>
							<li>Optativo de Formación Transversal</li>
						</ul></td>
						<td><strong>8º Semestre</strong></td>
						<td><ul>
							<li>Dinámica de Estructuras</li>
							<li>Ingeniería de Transportes</li>
							<li>Planificación y Control de Proyectos</li>
							<li>Mecánica de Suelos I</li>
							<li>Hidrología</li>
						</ul></td>
					</tr>
					<tr>
						<td><strong>9º Semestre</strong></td>
						<td><ul>
							<li>Hormigón Armado</li>
							<li>Mecánica de Suelos II</li>
							<li>Hidráulica Aplicada</li>
							<li>Diseño Geométrico y Capacidad Vial</li>
							<li>Gestión de Calidad Total en la Cadena de Suministros</li>
						</ul></td>
						<td><strong>10º Semestre</strong></td>
						<td><ul>
							<li>Diseño en Acero</li>
							<li>Ingeniería Sanitaria</li>
							<li>Optativo de Especialidad I</li>
							<li>Máquinas y Sistemas Hidráulicos</li>
							<li>Diseño Estructural de Pavimentos</li>
						</ul></td>
					</tr>
					<tr>
						<td><strong>11º Semestre</strong></td>
						<td><ul>
							<li>Ingeniería del Medio Ambiente</li>
							<li>Optativo de Especialidad II</li>
							<li>Ingeniería Sísmica</li>
							<li>Evaluación de proyectos</li>
							<li>Taller de Titulación I</li>
						</ul></td>
						<td><strong>12º Semestre</strong></td>
						<td><ul>
							<li>Proyecto de Ingeniería Civil</li>
							<li>Taller de Titulación II</li>
						</ul></td>
					</tr>
				</tbody></table>
                
                </div>
            </div>

            <p>
                Esta asignatura (*) podrá ser de Formación General o Inglés, de acuerdo al resultado de la prueba de diagnóstico que se realiza en primer año.
            </p>
            <p> 
                Todo estudiante debe realizar una práctica industrial de 4 semanas de duración y una práctica profesional de 12 semanas, desarrollada en uno o dos períodos. Las prácticas deberán realizarse antes del semestre 12 del plan.            </p>
            <p>      
                Además, el Departamento ofrece:
            </p>
            <p>  
            1. Programa de Magíster en Ciencias de la Ingeniería Civil.

            Áreas de especialización:

            a. Ingeniería en estructuras
            b. Ingeniería vial
            c.Ingeniería hidráulica-marítima
            Acreditado por 5 años, hasta marzo de 2020. Campus Casa Central Valparaíso. Jornada diurna, modalidad presencial Agencia Acredita CI.

            2. Programa Profesional. Magíster en Gestión del Agua (Master of Water Management). Para más información: watermanagement.usm.cl
            </p>



            </Container>
        </div>
    )
}

export default Ingenieria_Civil_info
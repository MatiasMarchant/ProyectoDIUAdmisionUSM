import React from 'react'
import { Container } from 'react-bootstrap';
// Accordion, Badge,
import "./estilos_carreras_info.css";

function Ingenieria_Civil_Electronica_info() {
    return (
        <div className="general">
           <Container> 
            <p className="LetraTituloCarrera">Ingeniería Civil Electrónica</p>
            <div>
                              
                <table class="infoC">
                    <thead>
                    <tr>
                        <td class="infoCarrera parrafo">
                            <th >
                            <p className="LetraSubTituloCarrera">Formación</p>
                            <p>
                                El Ingeniero Civil Electrónico USM destaca por su preparación científica y tecnológica 
                                acompañada de una formación en gestión y humanidades, con un programa de 7 semestres de
                                instrucción básica y 5 de especialización desde curricular flexible, combinando mención 
                                principal, complementaria, y ramos de libre elección. Puede especializarse en análisis, 
                                diseño e implementación de: Computadores, Control e Instrumentación, Electrónica Industrial 
                                o Telecomunicaciones. Además, puede complementarse con una especialidad no elegida, o Informática,
                                Gestión, Física o Matemática, entre otras ramas del saber. Esta flexibilidad permite al estudiante
                                acomodar su vocación y aportar soluciones de vanguardia en todos los sectores de la industria, 
                                contribuyendo desde la innovación hasta los servicios en Chile y el mundo.
                            </p>
                            </th>
                        </td>
                        <td class="infoCarrera lista">
                            <th>
                            <div class="list-group">
                                <li class="list-group-item"><strong>Título Profesional: </strong> Ingeniero Civil Electrónico</li>
                                <li class="list-group-item"><strong>Grado Académico: </strong> Bachiller en Ciencias de la Ingeniería y Licenciado en Ciencias de la Ingeniería Electrónica</li>
                                <li class="list-group-item"><strong>Duración de los estudios: </strong> 6 años (12 semestres académicos)</li>
                                <li class="list-group-item"><strong>Régimen: </strong> Diurno</li>
                                <li class="list-group-item"><strong>Lugar: </strong> Campus Casa Central Valparaíso</li>
                                <a href="http://www.electronica.usm.cl/" class="list-group-item list-group-item-action link" target="_blank" rel="noreferrer">Conoce el sitio del Departamento de Ingeniería Electrónica <i class="fas fa-external-link-alt"></i></a>
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
							<li>Educación Física I</li>
							<li>Introducción a la Física</li>
							<li>Introducción a la Ingeniería</li>
							<li>Matemática I</li>
							<li>Química y Sociedad</li>
						</ul></td>
						<td><strong>2º Semestre</strong></td>
						<td><ul>
							<li>Educación Física II</li>
							<li>Física General I</li>
							<li>Humanístico I</li>
							<li>Matemática II</li>
							<li>Programación</li>
							<li>Test de Diagnóstico Inglés</li>
						</ul></td>
					</tr>
					<tr>
						<td><strong>3º Semestre</strong></td>
						<td><ul>
							<li>Deportes</li>
							<li>Física General II</li>
							<li>Humanístico II</li>
							<li>Humanístico III</li>
							<li>Matemática III</li>
							<li>Teoría de Redes Eléctricas I</li>
						</ul></td>
						<td><strong>4º Semestre</strong></td>
						<td><ul>
							<li>Análisis de Sistemas Lineales</li>
							<li>Electrónica A</li>
							<li>Física General III</li>
							<li>Laboratorio de Electrónica A</li>
							<li>Teoría de Redes Eléctricas II</li>
						</ul></td>
					</tr>
					<tr>
						<td><strong>5º Semestre</strong></td>
						<td><ul>
							<li>Electrónica B</li>
							<li>Inglés I</li>
							<li>Laboratorio de Sistemas Digitales</li>
							<li>Laboratorio de Electrónica B</li>
							<li>Matemática IV</li>
							<li>Sistemas Digitales</li>
						</ul></td>
						<td><strong>6º Semestre</strong></td>
						<td><ul>
							<li>Control Automático I</li>
							<li>Estructuras de Computadores</li>
							<li>Laboratorio de Control Automático</li>
							<li>Laboratorio de Estructuras de Computadores</li>
							<li>Sistemas Electromecánicos</li>
						</ul></td>
					</tr>
					<tr>
						<td><strong>7º Semestre</strong></td>
						<td><ul>
							<li>Campos Electromagnéticos</li>
							<li>Inglés II</li>
							<li>Laboratorio de Comunicaciones</li>
							<li>Probabiilidad y Procesos Aleatorios</li>
							<li>Sistemas de Telecomunicaciones I</li>
							<li>1ª Asignatura de Libre Elección</li>
						</ul></td>
						<td><strong>8º Semestre</strong></td>
						<td><ul>
							<li>Administración General</li>
							<li>Física General IV</li>
							<li>Gestión de Investigación de Operaciones</li>
							<li>1ª Asignatura de la Mención</li>
							<li>2ª Asignatura de la Mención</li>
						</ul></td>
					</tr>
					<tr>
						<td><strong>9º Semestre</strong></td>
						<td><ul>
							<li>Análisis Numérico</li>
							<li>Economía I-A</li>
							<li>1ª Asignatura Complementaria</li>
							<li>3ª Asignatura de la Mención</li>
							<li>4ª Asignatura de la Mención</li>
						</ul></td>
						<td><strong>10º Semestre</strong></td>
						<td><ul>
							<li>Información y Control Financiero</li>
							<li>2ª Asignatura Complementaria</li>
							<li>2ª Asignatura Libre Elección</li>
							<li>3ª Asignatura Libre Elección</li>
							<li>5ª Asignatura de la Mención</li>
							<li>6ª Asignatura de la Mención</li>
						</ul></td>
					</tr>
					<tr>
						<td><strong>11º Semestre</strong></td>
						<td><ul>
							<li>Ingeniería Económica</li>
							<li>Proyecto de Titulación</li>
							<li>3ª Asignatura Complementaria</li>
							<li>4ª Asignatura Complementaria</li>
							<li>7ª Asignatura de la Mención</li>
						</ul></td>
						<td><strong>12º Semestre</strong></td>
						<td><ul>
							<li>Administración de la Producción</li>
							<li>Memoria de Titulación</li>
							<li>Proyectos Electrónicos</li>
							<li>5ª Asignatura Complementaria</li>
						</ul></td>
					</tr>
				</tbody></table>
                
                </div>
            </div>

            <p>
                El nivel de inglés al término de la carrera debe ser, al menos, B1 (ALTE), aprobando para ello dos asignaturas obligatorias y otras de libre elección.
            </p>
            <p> 
                Las prácticas industrial y profesional se realizan durante el verano siguiente al correspondiente semestre cursado y cada una tiene una duración de ocho semanas.
            </p>
            <p> 
               Además, el Departamento ofrece:
            </p>
            <p>  
                1. Programa de Magíster en Ciencias de la Ingeniería Electrónica, con área de:

                a. Computadores
                b. Control Automático
                c. Electrónica de Potencia y Conversión de Energía
                d. Telecomunicaciones y Procesamiento de Señales
                e. Telemática
                2. Programa de Doctorado en Ingeniería Electrónica:

                Este Programa desarrolla investigación e innovación tecnológica en las líneas de investigación enmarcadas en una o más áreas de especialización del Departamento de Electrónica.
            </p>

            </Container>
        </div>
    )
}

export default Ingenieria_Civil_Electronica_info
import React from 'react'
import { Container } from 'react-bootstrap';
// Accordion, Badge,
import "./estilos_carreras_info.css";

function Construccion_Civil_info() {
    return (
        <div className="general">
           <Container> 
            <p className="LetraTituloCarrera">Construcción Civil</p>
            <div>
                              
                <table class="infoC">
                    <thead>
                    <tr>
                        <td class="infoCarrera parrafo">
                            <th >
                            <p className="LetraSubTituloCarrera">Formación</p>
                            <p>
                                El desarrollo del país demanda la construcción de infraestructura que contribuya a la calidad de
                                vida de las personas y para ello se requiere del trabajo de profesionales de excelencia, innovadores 
                                y con espíritu emprendedor. Por eso, la carrera de Construcción Civil en la Universidad Técnica Federico
                                Santa María entrega una sólida formación en ciencia y tecnología para desenvolverse en el ámbito de la 
                                administración y la gestión de proyectos de edificación, montaje industrial y obras civiles. Su perfil 
                                de enseñanza integral le entrega todas las herramientas para participar de forma eficiente en los procesos
                                de construcción y para desarrollarse como empresario.
                            </p>
                            </th>
                        </td>
                        <td class="infoCarrera lista">
                            <th>
                            <div class="list-group">
                                <li class="list-group-item"><strong>Título Profesional: </strong> Constructor Civil</li>
                                <li class="list-group-item"><strong>Grado Académico: </strong> Licenciado en Construcción Civil</li>
                                <li class="list-group-item"><strong>Duración de los estudios: </strong> 5 años (10 semestres académicos)</li>
                                <li class="list-group-item"><strong>Régimen: </strong> Diurno</li>
                                <li class="list-group-item"><strong>Lugar: </strong> Campus Casa Central Valparaíso</li>
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
						<li>Humanístico I</li>
						<li>Matemática I</li>
						<li>Educación Física I</li>
						</ul></td>
						<td><strong>2º Semestre</strong></td>
						<td><ul>
						<li>Física Básica I</li>
						<li>Humanístico II</li>
						<li>Matemática II</li>
						<li>Educación Física II</li>
						<li>Química y Sociedad </li>
						</ul></td>
					</tr>
					<tr>
						<td><strong>3º Semestre</strong></td>
						<td><ul>
						<li>Física Básica II</li>
						<li>Geometría Descriptiva</li>
						<li>Matemática III</li>
						<li>Humanístico III</li>
						<li>Estructuras I</li>
						<li>Deportes</li>
						</ul></td>
						<td><strong>4º Semestre</strong></td>
						<td><ul>
						<li>Física Básica III</li>
						<li>Estructuras II</li>
						<li>Matemática IV</li>
						<li>Materiales Construcción I</li>
						<li>Dibujo de Construcción</li>
						<li>Inglés Científico Tecnológico I</li>
						</ul></td>
					</tr>
					<tr>
						<td><strong>5º Semestre</strong></td>
						<td><ul>
						<li>Estadística</li>
						<li>Tecnología de la Madera y Laboratorio</li>
						<li>Equipos de Construcción</li>
						<li>Topografía y Taller</li>
						<li>Tecnología del Hormigón y Laboratorio</li>
						</ul></td>
						<td><strong>6º Semestre</strong></td>
						<td><ul>
						<li>Economía I</li>
						<li>Hormigón Armado</li>
						<li>Estructuras Madera y Acero</li>
						<li>Materiales de Construcción II</li>
						<li>Hidráulica</li>
						<li>Inglés Científico Tecnológico II</li>
						</ul></td>
					</tr>
					<tr>
						<td><strong>7º Semestre</strong></td>
						<td><ul>
						<li>Construcción I</li>
						<li>Mecánica de Suelos I y Laboratorio</li>
						<li>Construcciones Sismorresistentes</li>
						<li>Ingeniería Hidráulica</li>
						<li>Economía II</li>
						</ul></td>
						<td><strong>8º Semestre</strong></td>
						<td><ul>
						<li>Construcción II</li>
						<li>Obras Sanitarias</li>
						<li>Construcciones Industriales</li>
						<li>Seminario de Seguridad Industrial</li>
						<li>Mecánica de Suelos II y Laboratorio</li>
						<li>Vialidad I y Laboratorio</li>
						</ul></td>
					</tr>
					<tr>
						<td><strong>9º Semestre</strong></td>
						<td><ul>
						<li>Administración en Construcción</li>
						<li>Instalaciones en Edificaciones</li>
						<li>Construcción Obras Civiles</li>
						<li>Propuestas y Licitaciones</li>
						<li>Historia de la Construcción</li>
						<li>Vialidad II y Laboratorio</li>
						</ul></td>
						<td><strong>10º Semestre</strong></td>
						<td><ul>
						<li>Administración de Obras</li>
						<li>Legislación de la Construcción</li>
						<li>Construcción y Medio Ambiente</li>
						<li>Proyectos Inmobiliarios</li>
						<li>Gestión Financiera de Obras</li>
						<li>Seminario de Tasaciones</li>
						</ul></td>
					</tr>
				</tbody></table>
                </div>
            </div>



            </Container>
        </div>
    )
}

export default Construccion_Civil_info
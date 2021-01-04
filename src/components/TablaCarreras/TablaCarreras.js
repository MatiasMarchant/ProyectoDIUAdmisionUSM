import React from 'react'
import { Container } from 'react-bootstrap';
import "./TablaCarreras.css";
import "../../App.css";

function TablaCarreras() {
    return (
        <div>
            <Container className="ContainerCarreras">
                <p className="LetraHeader">Carreras y Aranceles</p>
                <table width="100%" cellspacing="0" cellpadding="0" class="table table-bordered">
                    <thead class="thead-light">
                        <tr>
                            <th width="60%"><strong>Carrera</strong></th>
                            <th width="10%"><strong>Código</strong></th>
                            <th width="20%"><strong>Campus o Sede en que se imparte</strong></th>
                            <th width="20%"><strong>Aranceles 2021</strong></th>
                        </tr>
                    </thead>
                    <tbody>	
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/arquitectura/">Arquitectura</a></td>
                            <td>15180</td>
                            <td>Casa Central Valparaíso</td>
                            <td rowspan="2">$4.350.000</td>
                        </tr>
                        <tr>
                            <td>15380</td>
                            <td>San Joaquín</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/construccion-civil/">Construcción Civil</a></td>
                            <td>15110</td>
                            <td>Casa Central Valparaíso</td>
                            <td>$4.005.000</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/ingenieria-civil/">Ingeniería Civil</a></td>
                            <td>15111</td>
                            <td>Casa Central Valparaíso</td>
                            <td rowspan="2">$4.740.000</td>
                        </tr>
                        <tr>
                            <td>15311</td>
                            <td>San Joaquín</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/ingenieria-civil-ambiental/">Ingeniería Civil Ambiental</a></td>
                            <td>15151</td>
                            <td>Casa Central Valparaíso</td>
                            <td>$4.740.000</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/ingenieria-civil-de-minas/">Ingeniería Civil de Minas</a></td>
                            <td>15312</td>
                            <td>San Joaquín</td>
                            <td>$4.740.000</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/ingenieria-civil-electrica/">Ingeniería Civil Eléctrica</a></td>
                            <td>15130</td>
                            <td>Casa Central Valparaíso</td>
                            <td rowspan="2">$4.740.000</td>
                        </tr>
                        <tr>
                            <td>15330</td>
                            <td>San Joaquín</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/ingenieria-civil-electronica/">Ingeniería Civil Electrónica</a></td>
                            <td>15131</td>
                            <td>Casa Central Valparaíso</td>
                            <td>$4.740.000</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/ingenieria-civil-industrial/">Ingeniería Civil Industrial</a></td>
                            <td>15170</td>
                            <td>Casa Central Valparaíso</td>
                            <td rowspan="2">$4.740.000</td>
                        </tr>
                        <tr>
                            <td>15270</td>
                            <td>Vitacura</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/ingenieria-civil-informatica/">Ingeniería Civil Informática</a></td>
                            <td>15160</td>
                            <td>Casa Central Valparaíso</td>
                            <td rowspan="2">$4.740.000</td>
                        </tr>
                        <tr>
                            <td>15360</td>
                            <td>San Joaquín</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/ingenieria-civil-matematica/">Ingeniería Civil Matemática</a></td>
                            <td>15101</td>
                            <td>Casa Central Valparaíso</td>
                            <td rowspan="2">$4.740.000</td>
                        </tr>
                        <tr>
                            <td>15301</td>
                            <td>San Joaquín</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/ingenieria-civil-mecanica/">Ingeniería Civil Mecánica</a></td>
                            <td>15140</td>
                            <td>Casa Central Valparaíso</td>
                            <td rowspan="2">$4.740.000</td>
                        </tr>
                        <tr>
                            <td>15340</td>
                            <td>San Joaquín</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/ingenieria-civil-metalurgica/">Ingeniería Civil Metalúrgica</a></td>
                            <td>15141</td>
                            <td>Casa Central Valparaíso</td>
                            <td>$4.740.000</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/ingenieria-civil-plan-comun/">Ingeniería Civil Plan Común</a></td>
                            <td>15100</td>
                            <td>Casa Central Valparaíso</td>
                            <td rowspan="2">$4.740.000</td>
                        </tr>
                        <tr>
                            <td>15300</td>
                            <td>San Joaquín</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/ingenieria-civil-quimica/">Ingeniería Civil Química</a></td>
                            <td>15150</td>
                            <td>Casa Central Valparaíso</td>
                            <td rowspan="2">$4.740.000</td>
                        </tr>
                        <tr>
                            <td>15350</td>
                            <td>San Joaquín</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/ingenieria-civil-telematica/">Ingeniería Civil Telemática</a></td>
                            <td>15161</td>
                            <td>Casa Central Valparaíso</td>
                            <td rowspan="2">$4.740.000</td>
                        </tr>
                        <tr>
                            <td>15361</td>
                            <td>San Joaquín</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/ingenieria-comercial/">Ingeniería Comercial</a></td>
                            <td>15171</td>
                            <td>Casa Central Valparaíso</td>
                            <td rowspan="2">$4.740.000</td>
                        </tr>
                        <tr>
                            <td>15271</td>
                            <td>Vitacura</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/ingenieria-en-aviacion-comercial/">Ingeniería en Aviación Comercial</a></td>
                            <td>15220</td>
                            <td>Vitacura</td>
                            <td>$4.740.000</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/ingenieria-en-diseno-de-productos/">Ingeniería en Diseño de Productos</a></td>
                            <td>15181</td>
                            <td>Casa Central Valparaíso</td>
                            <td rowspan="2">$4.005.000</td>
                        </tr>
                        <tr>
                            <td>15381</td>
                            <td>San Joaquín</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/ingenieria-en-fabricacion-y-diseno-industrial/">Ingeniería en Fabricación y Diseño Industrial</a></td>
                            <td>15441</td>
                            <td>Viña del Mar</td>
                            <td>$3.450.000</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/ingenieria-en-mantenimiento-industrial/">Ingeniería en Mantenimiento Industrial</a></td>
                            <td>15440</td>
                            <td>Viña del Mar</td>
                            <td rowspan="2">$3.450.000</td>
                        </tr>
                        <tr>
                            <td>15540</td>
                            <td>Concepción</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/ingenieria-en-prevencion-de-riesgos-laborales-y-ambientales/">Ingeniería en Prevención de Riesgos Laborales y Ambientales</a></td>
                            <td>15474</td>
                            <td>Viña del Mar</td>
                            <td rowspan="2">$3.450.000</td>
                        </tr>
                        <tr>
                            <td>15574</td>
                            <td>Concepción</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/ingenieria-informatica/">Ingeniería en Informática</a></td>
                            <td>15562</td>
                            <td>Concepción</td>
                            <td>$3.450.000</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/licenciatura-en-astrofisica/">Licenciatura en Astrofísica</a></td>
                            <td>15103</td>
                            <td>Casa Central Valparaíso</td>
                            <td rowspan="2">$3.360.000</td>
                        </tr>
                        <tr>
                            <td>15303</td>
                            <td>San Joaquín</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/licenciatura-en-ciencias-mencion-quimica/">Licenciatura en Ciencias, mención Química</a></td>
                            <td></td>
                            <td>Casa Central Valparaíso</td>
                            <td>$3.360.000</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/licenciatura-en-fisica/">Licenciatura en Física</a></td>
                            <td>15102</td>
                            <td>Casa Central Valparaíso</td>
                            <td rowspan="2">$3.360.000</td>
                        </tr>
                        <tr>
                            <td>15302</td>
                            <td>San Joaquín</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/quimico/">Químico</a></td>
                            <td></td>
                            <td>Casa Central Valparaíso</td>
                            <td>$4.005.000</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/tecnico-universitario-dibujante-proyectista/">Técnico Universitario Dibujante Proyectista</a></td>
                            <td>15545</td>
                            <td>Concepción</td>
                            <td>$2.175.000</td>
                        </tr>
                        <tr>
                            <td rowspan="3"><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-administracion-de-empresas/">Técnico Universitario en Administración de Empresas</a></td>
                            <td>15482</td>
                            <td>Viña del Mar</td>
                            <td rowspan="3">$2.175.000</td>
                        </tr>
                        <tr>
                            <td>15282</td>
                            <td>Vitacura</td>
                        </tr>
                        <tr>
                            <td>15582</td>
                            <td>Concepción</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-automatizacion-y-control/">Técnico Universitario en Automatización y Control</a></td>
                            <td>15537</td>
                            <td>Concepción</td>
                            <td>$2.175.000</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-construccion/">Técnico Universitario en Construcción</a></td>
                            <td>15412</td>
                            <td>Viña del Mar</td>
                            <td rowspan="2">$2.175.000</td>
                        </tr>
                        <tr>
                            <td>15512</td>
                            <td>Concepción</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-control-del-medio-ambiente/">Técnico Universitario en Control del Medio Ambiente</a></td>
                            <td>15452</td>
                            <td>Viña del Mar</td>
                            <td rowspan="2">$2.175.000</td>
                        </tr>
                        <tr>
                            <td>15552</td>
                            <td>Concepción</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-diseno-y-produccion-industrial-en-moldes-y-matrices/">Técnico Universitario en Diseño y Producción Industrial en Moldes y Matrices</a></td>
                            <td>15447</td>
                            <td>Concepción</td>
                            <td>$2.175.000</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-electricidad/">Técnico Universitario en Electricidad</a></td>
                            <td>15433</td>
                            <td>Viña del Mar</td>
                            <td rowspan="2">$2.175.000</td>
                        </tr>
                        <tr>
                            <td>15533</td>
                            <td>Concepción</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-electronica/">Técnico   Universitario en Electrónica</a></td>
                            <td>15435</td>
                            <td>Viña del Mar</td>
                            <td rowspan="2">$2.175.000</td>
                        </tr>
                        <tr>
                            <td>15535</td>
                            <td>Concepción</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-energias-renovables/">Técnico Universitario en Energías Renovables</a></td>
                            <td>15449</td>
                            <td>Viña del Mar</td>
                            <td>$2.175.000</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-gestion-de-calidad-en-alimentos/">Técnico Universitario en Gestión de Calidad en Alimentos</a></td>
                            <td>15453</td>
                            <td>Viña del Mar</td>
                            <td>$2.175.000</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-informatica/">Técnico Universitario en Informática</a></td>
                            <td>15463</td>
                            <td>Viña del Mar</td>
                            <td rowspan="2">$2.175.000</td>
                        </tr>
                        <tr>
                            <td>15563</td>
                            <td>Concepción</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-mantenimiento-aeronautico/">Técnico Universitario en Mantenimiento Aeronáutico</a></td>
                            <td>15222</td>
                            <td>Vitacura</td>
                            <td>$2.820.000</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-mantenimiento-industrial/">Técnico Universitario en Mantenimiento Industrial</a></td>
                            <td>15448</td>
                            <td>Viña del Mar</td>
                            <td>$2.175.000</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-mecanica-automotriz/">Técnico Universitario en Mecánica Automotriz</a></td>
                            <td>15443</td>
                            <td>Viña del Mar</td>
                            <td rowspan="2">$2.175.000</td>
                        </tr>
                        <tr>
                            <td>15543</td>
                            <td>Concepción</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-mecanica-industrial/">Técnico Universitario en Mecánica Industrial</a></td>
                            <td>15444</td>
                            <td>Viña del Mar</td>
                            <td rowspan="2">$2.175.000</td>
                        </tr>
                        <tr>
                            <td>15544</td>
                            <td>Concepción</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-mineria-y-metalurgia/">Técnico Universitario en Minería y Metalurgia</a></td>
                            <td>15413</td>
                            <td>Viña del Mar</td>
                            <td>$2.175.000</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-prevencion-de-riesgos/">Técnico Universitario en Prevención de Riesgos</a></td>
                            <td>15475</td>
                            <td>Viña del Mar</td>
                            <td rowspan="2">$2.175.000</td>
                        </tr>
                        <tr>
                            <td>15575</td>
                            <td>Concepción</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-proyecto-y-diseno-mecanico/">Técnico Universitario en Proyecto y Diseño Mecánico</a></td>
                            <td>15445</td>
                            <td>Viña del Mar</td>
                            <td>$2.175.000</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-proyectos-de-ingenieria/">Técnico Universitario en Proyectos de Ingeniería</a></td>
                            <td>15446</td>
                            <td>Viña del Mar</td>
                            <td>$2.175.000</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-quimica-mencion-quimica-analitica/">Técnico Universitario en Química, mención Química Analítica</a></td>
                            <td>15405</td>
                            <td>Viña del Mar</td>
                            <td>$2.175.000</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-quimica-mencion-quimica-industrial/">Técnico Universitario en Química, mención Química Industrial</a></td>
                            <td>15505</td>
                            <td>Concepción</td>
                            <td>$2.175.000</td>
                        </tr>
                        <tr>
                            <td><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-robotica-y-mecatronica/">Técnico Universitario en Robótica y Mecatrónica</a></td>
                            <td>15538</td>
                            <td>Concepción</td>
                            <td>$2.175.000</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a class="font-weight-bold" href="/carreras/tecnico-universitario-en-telecomunicaciones-y-redes/">Técnico Universitario en Telecomunicaciones y Redes</a></td>
                            <td>15436</td>
                            <td>Viña del Mar</td>
                            <td rowspan="2">$2.175.000</td>
                        </tr>
                        <tr>
                            <td>15536</td>
                            <td>Concepción</td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </div>
    )
}

export default TablaCarreras
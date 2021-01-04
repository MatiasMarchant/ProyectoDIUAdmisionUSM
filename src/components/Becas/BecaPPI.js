import React from 'react'
import { Table } from 'react-bootstrap';
import "./Becas.css";

function BecaPPI() {
    return (
        <div>
            <p className="HeaderAccordion">Beneficios:</p>
            <p>Se ha considerado un sistema de Becas PPI que considera descuentos de arancel en un 75%, 50% o 25%, de acuerdo con la situación socioeconómica del postulante, beneficiando a 5 estudiantes por generación, independiente del porcentaje de descuento asignado y priorizando a los postulantes con menor decil.</p>
            <p>La asignación se definirá a partir de la evaluación socioeconómica del postulante de la siguiente manera:</p>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Decil</th>
                        <th>Exención de arancel</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Decil 1</td>
                        <td rowSpan="2">75%</td>
                    </tr>
                    <tr>
                        <td>Decil 2</td>
                    </tr>
                    <tr>
                        <td>Decil 3</td>
                        <td rowSpan="2">50%</td>
                    </tr>
                    <tr>
                        <td>Decil 4</td>
                    </tr>
                    <tr>
                        <td>Decil 5</td>
                        <td>25%</td>
                    </tr>
                </tbody>
            </Table>

            <p className="HeaderAccordion">Requisitos:</p>
            <p>Este sistema de becas es sólo para alumnos de una condición socioeconómica deficitaria, situación que deben acreditar, entregando la documentación exigida por la Universidad.</p>

            
        </div>
    )
}

export default BecaPPI

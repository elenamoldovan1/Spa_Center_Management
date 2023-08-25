import React from "react";
import Table from "react-bootstrap/Table";
import "./app.css";

function Tarife() {
  return (
    <Table className="tabel">
      <thead>
        <tr>
          <th>#</th>
          <th>Serviciu disponibil</th>
          <th>Pret</th>
          <th>Durata</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Masaj de relaxare</td>
          <td>130 RON</td>
          <td>50 min</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Masaj terapeutic</td>
          <td>135 RON</td>
          <td>50 min</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Masaj anticelulitic cu miere de albine</td>
          <td>170 RON</td>
          <td>60 min</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Masaj cu pietre vulcanice</td>
          <td>170 RON</td>
          <td>60 min</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Tratament cu ventuze</td>
          <td>80 RON</td>
          <td>20 min</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Preso drenaj</td>
          <td>125 RON</td>
          <td>50 min</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Reflexoterapie</td>
          <td>90 RON</td>
          <td>30 min</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tarife;

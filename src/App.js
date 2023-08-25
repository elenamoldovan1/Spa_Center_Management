import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Program from "./program";
import Formular from "./formular";
import Lipsa from "./lipsa";
import Tarife from "./tarife";
import Despre from "./despre";
import "./app.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function App() {
  const [lista, setLista] = useState([]);

  const stergeCabinet = (id) => {
    const listaNoua = lista.filter((item) => {
      if (item.id !== parseInt(id, 10)) {
        return true;
      }
      return false;
    });
    setLista(listaNoua);
  };

  const adaugaProgramare = (act) => {
    act.id = lista.length + 1;
    setLista([...lista, act]);
  };

  const stil = {
    container: { maxWidth: "800px" }
  };

  return (
    <Container style={stil.container}>
      <Helmet>
        <style>{"body { background-color: #005644; }"}</style>
      </Helmet>
      <Navbar bg="green" variant="dark" expand="sm" className="p-2">
        <Navbar.Brand className="textT" href="/">
          SpaCenter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Program
            </NavLink>
            <NavLink
              to="/formular"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Formular
            </NavLink>
            <NavLink
              to="/tarife"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Tarife
            </NavLink>
            <NavLink
              to="/despre"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Detalii servicii
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={<Program cabinet={lista} sterge={stergeCabinet} />}
        />
        <Route
          path="/formular"
          element={<Formular transmit={adaugaProgramare} />}
        />
        <Route path="/tarife" element={<Tarife />} />
        <Route path="/despre" element={<Despre />} />
        <Route path="*" element={<Lipsa />} />
      </Routes>
    </Container>
  );
}

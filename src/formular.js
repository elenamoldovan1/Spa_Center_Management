import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./app.css";

const Formular = (props) => {
  const [ora, setOra] = useState("");
  const [serviciu, setServiciu] = useState("");
  const [client, setClient] = useState("");
  const [notite, setNotite] = useState("");

  const stil = {
    h2: { textAlign: "center" }
  };

  const tratezSubmit = (evt) => {
    evt.preventDefault();
    const cabinet = { ora, serviciu, client, notite };
    props.transmit(cabinet);
    setOra("");
    setServiciu("");
    setClient("");
    setNotite("");
  };

  return (
    <>
      <h2 className="title" style={stil.h2}>
        Programare nouă
      </h2>
      <hr />
      <Form onSubmit={tratezSubmit}>
        <Form.Group>
          <Form.Label className="titles">Ora:</Form.Label>
          <Form.Control
            type="text"
            value={ora}
            onChange={(e) => setOra(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="titles">Servicul ales:</Form.Label>
          <Form.Control
            type="text"
            value={serviciu}
            onChange={(e) => setServiciu(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="titles">Nume client:</Form.Label>
          <Form.Control
            type="text"
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="titles">Note aditionale:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={notite}
            onChange={(e) => setNotite(e.target.value)}
          />
        </Form.Group>

        <Button variant="light" type="submit" className="button">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Formular;

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Cabinet = (props) => {
  const { ora, serviciu, client, notite, id, sterge } = props;
  const stil = {
    borderBottom: "1px solid #777"
  };
  return (
    <Container>
      <Row style={stil}>
        <Col sm={9}>
          <h4>
            {ora} - {serviciu}
          </h4>
          <h6>Client: {client}</h6>
          <p>Notite: {notite}</p>
        </Col>
        <Col sm={3} className="d-flex align-items-center">
          <Button
            variant="light"
            className="button1"
            onClick={() => sterge(id)}
          >
            Sterge
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Cabinet;

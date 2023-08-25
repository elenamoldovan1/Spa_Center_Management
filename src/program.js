import React from "react";
import Cabinet from "./cabinet";
import "./app.css";

const Program = (props) => {
  const { cabinet, sterge } = props;
  const lista = cabinet.map((item) => (
    <Cabinet
      ora={item.ora}
      client={item.client}
      serviciu={item.serviciu}
      notite={item.notite}
      id={item.id}
      key={item.id}
      sterge={sterge}
    />
  ));

  const stil = {
    h2: { textAlign: "center" }
  };

  return (
    <>
      <h2 className="title" style={stil.h2}>
        Receptie
      </h2>
      <hr className="hr" />
      <div className="listuta">{lista}</div>
    </>
  );
};

export default Program;

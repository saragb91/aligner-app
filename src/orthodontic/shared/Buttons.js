import { Button } from "antd";
import React from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
const Buttons = ({ handleAddPatient, handleShowModal }) => {
  return (
    <Button.Group>
      {handleAddPatient && (
        <Button
          className="modal-btn modal-btn-accept"
          onClick={handleAddPatient}
        >
          <CheckCircleOutlined /> Aceptar
        </Button>
      )}
      <Button className="modal-btn modal-btn-cancel" onClick={handleShowModal}>
        <CloseCircleOutlined /> Cancelar
      </Button>
    </Button.Group>
  );
};

export default Buttons;

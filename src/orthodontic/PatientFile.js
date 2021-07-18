import React, { useRef } from "react";
import { Button, Card, Col, Divider, Row } from "antd";
import maxilar from "../img/maxilar.jpg";
import user from "../img/user.jpg";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

const PatientFile = ({ selectedPatient }) => {
  const pdfExportComponent = useRef(null);
  const contentArea = useRef(null);

  const handleExportWithMethod = () => {
    savePDF(contentArea.current, { paperSize: "A4" });
  };

  return (
    <PDFExport ref={pdfExportComponent} paperSize="A4">
      <div ref={contentArea}>
        <Card>
          <Card bordered className="card-file">
            <Row>
              <Col span={11} className="file-info">
                <img
                  className="file-image"
                  style={{ width: "100%" }}
                  src={user}
                  alt="user"
                />
              </Col>
              <Col span={1}>
                <Divider type="vertical" className="divider-patient-file" />
              </Col>
              <Col span={12} className="file-info">
                <h3 className="personal-question">
                  {selectedPatient.ficha_dental.clinica}
                </h3>
                <h3 className="personal-data">
                  {selectedPatient.datos_paciente.nombre}
                </h3>
                <h3 className="personal-data">
                  {selectedPatient.datos_paciente.apellidos}
                </h3>
                <Row>
                  <Col span={12} className="file-info">
                    {" "}
                    <h3 className="personal-data-gender">
                      {selectedPatient.datos_paciente.sexo}
                    </h3>
                  </Col>
                  <Col span={12}>
                    {" "}
                    <h3>{selectedPatient.datos_paciente.fecha_nacimiento}</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
          <Card title="Dientes no mover" bordered className="card-file">
            <Row>
              <Col span={11} className="file-info">
                <img
                  className="file-image"
                  style={{ width: "100%" }}
                  src={maxilar}
                  alt="maxilar"
                />
              </Col>
              <Col span={1}>
                <Divider type="vertical" className="divider-patient-file" />
              </Col>
              <Col span={12} className="file-info">
                <h3 className="personal-data">
                  {selectedPatient.ficha_dental.estado}
                </h3>
                <h3 className="personal-data">
                  {selectedPatient.ficha_dental.objetivo_tratamiento}
                </h3>
                <h3 className="title-question">Recorte de alineadores:</h3>
                <h3 className="personal-question">
                  {selectedPatient.ficha_dental.otros_datos.recorte_alineadores}
                </h3>
                <h3 className="title-question">¿Desea alineadores pasivos?:</h3>
                <h3 className="personal-question">
                  {!selectedPatient.ficha_dental.otros_datos.alineadores_pasivos
                    ? "No"
                    : "Si"}
                </h3>
                <h3 className="title-question">
                  ¿Desea SecretRetainer al finalizar?
                </h3>
                <h3 className="personal-question">
                  {!selectedPatient.ficha_dental.otros_datos.secretretainer
                    ? "No"
                    : "Si"}
                </h3>
                <h3 className="title-question">Piezas no mover:</h3>
                {selectedPatient.ficha_dental.dientes_no_mover?.map((tooth) => (
                  <h3 className="personal-question">{tooth}</h3>
                ))}
              </Col>
            </Row>
          </Card>
        </Card>

        <Button
          className="modal-btn modal-btn-accept"
          onClick={handleExportWithMethod}
        >
          Donwnload
        </Button>
      </div>
    </PDFExport>
  );
};
export default PatientFile;

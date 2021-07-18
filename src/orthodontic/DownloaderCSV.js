import React from "react";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { CSVLink } from "react-csv";

const DownloaderCSV = ({customers}) => {
  const headers = [
    { label: "Nombre", key: "datos_paciente.nombre" },
    { label: "Apellidos", key: "datos_paciente.apellidos" },
    { label: "Sexo", key: "datos_paciente.sexo" },
    { label: "Fecha de nacimiento", key: "datos_paciente.fecha_nacimiento" },
    { label: "Clínica", key: "ficha_dental.clinica" },
    { label: "Objetivo", key: "ficha_dental.objetivo_tratamiento" },
    { label: "Estado", key: "ficha_dental.estado" },
    {
      label: "Recorte Alineadores",
      key: "ficha_dental.otros_datos.recorte_alineadores",
    },
  ];

  const csvReport = {
    filename: "Pacientes.csv",
    headers: headers,
    data: Object.values(customers),
  };
  return (
    <CSVLink {...csvReport}>
      <Button className="header-btn">
        <DownloadOutlined />
        Descargar CSV
      </Button>
    </CSVLink>
  );
};

export default DownloaderCSV;

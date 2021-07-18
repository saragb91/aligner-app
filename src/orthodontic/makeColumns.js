import { Button, Dropdown, Menu } from "antd";
import {
  DownOutlined,
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const getButtons = ({ handleFinish, handleEdit, id, handleRemovePatient }) => {
  return (
    <Menu>
      <Menu.Item key="1" onClick={() => handleEdit(id)}>
        <EditOutlined /> Editar
      </Menu.Item>
      <Menu.Item key="2" onClick={() => handleFinish(id)}>
        <CheckOutlined /> Finalizar
      </Menu.Item>
      <Menu.Item key="3" onClick={() => handleRemovePatient(id)} danger>
        <DeleteOutlined /> Borrar
      </Menu.Item>
    </Menu>
  );
};

export const allStatus = [
  "aceptado",
  "planificado",
  "facturado",
  "enviado",
  "solicitado",
  "fabricando",
  "finalizado",
];

export const getColorTag = (status) => {
  switch (status) {
    case "aceptado": {
      return "#00ff0090";
    }
    case "planificando": {
      return "#e4c20d";
    }
    case "facturado": {
      return "#ff00ff90";
    }
    case "enviado": {
      return "#00ffff90";
    }
    case "solicitado": {
      return "#ffa50090";
    }
    case "fabricando": {
      return "#005aff90";
    }
    case "finalizado": {
      return "#24547dd9";
    }
    default:
      return "default";
  }
};
export const makeColumns = ({
  handleFinish,
  handleEdit,
  handleRemovePatient,
  handleShowPatientFile,
}) => [
  {
    title: "Nombre y apellidos",
    key: "name",
    dataIndex: "datos_paciente",
    render(patient, record) {
      return (
        <div
          className="patient-row"
          onClick={() => handleShowPatientFile(record)}
        >
          <p>
            {patient?.nombre} {patient?.apellidos}
          </p>
          <div>
            <CalendarOutlined />
            <span> {patient?.fecha_nacimiento}</span>
          </div>
        </div>
      );
    },
  },
  {
    title: "Clínica",
    key: "medicalClinic",
    dataIndex: ["ficha_dental", "clinica"],
    render(clinic) {
      return (
        <div>
          <p>{clinic}</p>
        </div>
      );
    },
  },
  {
    title: "Objetivo",
    key: "objective",
    dataIndex: ["ficha_dental", "objetivo_tratamiento"],
    render(objective) {
      return (
        <div>
          <p>{objective}</p>
        </div>
      );
    },
  },
  {
    title: "Estado",
    key: "status",
    dataIndex: ["ficha_dental", "estado"],
    render(status) {
      return (
        <div
          className="status-tag"
          style={{ backgroundColor: getColorTag(status) }}
        >
          {status}
        </div>
      );
    },
  },
  {
    title: "Acciones",
    key: "actions",
    render(_, record, index) {
      return (
        <Dropdown
          overlay={getButtons({
            handleFinish,
            handleEdit,
            id: record.id,
            handleRemovePatient,
          })}
        >
          <Button>
            Acciones <DownOutlined />
          </Button>
        </Dropdown>
      );
    },
  },
];

import React from "react";
import "./orthodontic.css";
import { Button, Card, List, Tag } from "antd";
import {
  EditOutlined,
  CheckOutlined,
  DeleteOutlined,
  CalendarOutlined,
  HomeOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { getColorTag } from "./makeColumns";

const CardView = ({
  filterPatient,
  patientsView,
  handleEdit,
  handleFinish,
  onRemovePatient,
}) => {
  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      pagination={{
        showSizeChanger: true,
        showQuickJumper: true,
        pageSize: patientsView.number,
        position: "bottomCenter",
      }}
      dataSource={filterPatient()}
      renderItem={(patient) => {
        return (
          <List.Item
            actions={[
              <Button.Group>
                <Button size="small" onClick={() => handleEdit(patient.id)}>
                  <EditOutlined />
                </Button>
                <Button size="small" onClick={() => handleFinish(patient.id)}>
                  <CheckOutlined />
                </Button>
                <Button
                  size="small"
                  onClick={() => onRemovePatient(patient.id)}
                  danger
                >
                  <DeleteOutlined />
                </Button>
              </Button.Group>,
            ]}
          >
            <Card
              title={
                <p>
                  {patient.datos_paciente?.nombre}{" "}
                  {patient.datos_paciente?.apellidos}{" "}
                  {
                    <span className="status-tag">
                      {" "}
                      <Tag color={getColorTag(patient.ficha_dental.estado)}>
                        {patient.ficha_dental.estado}
                      </Tag>
                    </span>
                  }
                </p>
              }
              bordered={false}
            >
              <List.Item.Meta
                description={
                  <span>
                    <CalendarOutlined />{" "}
                    {patient.datos_paciente.fecha_nacimiento}
                  </span>
                }
              />
              <List.Item.Meta
                title={
                  <span>
                    <TrophyOutlined />{" "}
                    {patient.ficha_dental.objetivo_tratamiento}
                  </span>
                }
              />
              <span>
                <HomeOutlined /> {patient.ficha_dental.clinica}
              </span>
            </Card>
          </List.Item>
        );
      }}
    />
  );
};

export default CardView;

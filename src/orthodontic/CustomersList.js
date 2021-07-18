import React from "react";
import "./orthodontic.css";
import { Button, Card, Table } from "antd";
import useOrthodontic from "../hooks/useOrthodontic";
import {
  PlusOutlined,
} from "@ant-design/icons";
import { makeColumns } from "./makeColumns";
import CardView from "./CardView";
import Modal from "antd/lib/modal/Modal";
import NewPatientForm from "./NewPatientForm";
import PatientFile from "./PatientFile";
import Buttons from "./shared/Buttons";
import PageHeaderPatients from "./PageHeaderPatients";
import OptionsView from "./OptionsView";
import DownloaderCSV from "./DownloaderCSV";

const CustomersList = () => {
  const {
    customers,
    patientsView,
    showModal,
    handleChangeView,
    handleShowModal,
    handleFinish,
    formData,
    handleChange,
    handleAddPatient,
    handleChangeSelect,
    handleEdit,
    handleShowPatientFile,
    showPatientFileModal,
    selectedPatient,
    handleRemovePatient,
    search,
    handleChangeSearch,
    filterPatient
  } = useOrthodontic();

  return (
    <Card>
      <PageHeaderPatients onChangeSearch={handleChangeSearch} search={search} />
    
      <div className="header-buttons">
        <Button className="header-btn" onClick={handleShowModal}>
          <PlusOutlined />
          Nuevo Paciente
        </Button>
      <DownloaderCSV customers={customers}/>
      </div>

      <Modal
        title="Nuevo paciente"
        destroyOnClose
        onCancel={handleShowModal}
        visible={showModal}
        footer={
          <Buttons
            handleShowModal={handleShowModal}
            handleAddPatient={handleAddPatient}
          />
        }
      >
        <NewPatientForm
          formData={formData}
          onChange={handleChange}
          onChangeSelect={handleChangeSelect}
        />
      </Modal>

     <OptionsView onChangeView={handleChangeView} />

      <Modal
        width="70%"
        style={{ width: "70%" }}
        visible={showPatientFileModal}
        title={`Ficha del paciente ${selectedPatient.datos_paciente?.nombre} ${selectedPatient.datos_paciente?.apellidos}`}
        onCancel={handleShowPatientFile}
        footer={<Buttons handleShowModal={handleShowPatientFile} />}
      >
        <PatientFile selectedPatient={selectedPatient} />
      </Modal>

      {patientsView.structure === "list" ? (
        <Table
          pagination={{
            pageSize: patientsView.number,
            position: ["bottomCenter"],
          }}
          rowKey="id"
          dataSource={filterPatient()}
          columns={makeColumns({
            handleFinish,
            handleEdit,
            handleRemovePatient,
            handleShowPatientFile,
          })}
        />
      ) : (
        <CardView
          filterPatient={filterPatient}
          patientsView={patientsView}
          handleEdit={handleEdit}
          handleFinish={handleFinish}
          onRemovePatient={handleRemovePatient}
        />
      )}
    </Card>
  );
};
export default CustomersList;

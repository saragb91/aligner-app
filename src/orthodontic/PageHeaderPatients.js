import React from "react";

import { Input, PageHeader } from "antd";
import { IdcardOutlined, SearchOutlined } from "@ant-design/icons";


const PageHeaderPatients = ({ search, onChangeSearch }) => {
  return (
      <>
    <PageHeader
      className="site-page-header"
      title={
        <span>
          <IdcardOutlined /> Listado de Pacientes
        </span>
      }
      extra={[
        <Input
          key="search"
          className="search-input"
          prefix={<SearchOutlined />}
          placeholder="Buscar..."
          onChange={onChangeSearch}
          value={search}
        />,
      ]}
    />
    <div className="subtitle-table"><p>Visualización de pacientes</p></div>
    </>
  );
};

export default PageHeaderPatients;
